//! Routes to the best available MSM implementation.

use mina_curves::pasta::{Fp, Fq, Pallas, Vesta};

/// Fast MSM implementations using GPU-acceleration.
//#[cfg(any(target_arch = "x86_64", target_arch = "aarch64"))]
pub mod msm {
    use ark_ec::AffineCurve;
    use ark_ff::ToBytes as _;
    use ark_serialize::CanonicalDeserialize;
    use mina_curves::pasta::curves::pallas::LegacyPallas;
    use mina_curves::pasta::curves::vesta::LegacyVesta;
    use pasta_curves::arithmetic::CurveAffine;
    use pasta_curves::group::ff::PrimeField as _;
    use pasta_curves::group::prime::PrimeCurveAffine;
    use pasta_curves::group::Curve;

    use super::*;

    //
    // Traits for scalars
    //

    /// TKTK
    // TODO: bonus point if you can have default implementations hold the logic here
    pub trait ToOtherScalar: ark_ff::PrimeField {
        /// The other curve's type
        type Other: pasta_curves::group::ff::PrimeField + pasta_curves::group::ff::Field;

        /// The conversion to that type
        fn to_other(&self) -> Self::Other;

        /// The conversion back from that type
        fn from_other(other: &Self::Other) -> Self;
    }

    impl ToOtherScalar for Fp {
        type Other = pasta_curves::vesta::Scalar;

        fn to_other(&self) -> Self::Other {
            let mut bytes = [0u8; 32];
            // arkwork points to bytes
            self.write(&mut bytes[..]).unwrap();

            // TODO: use our own helper
            Self::Other::from_repr(bytes).unwrap()
        }

        fn from_other(other: &Self::Other) -> Self {
            let repr = other.to_repr();
            Self::deserialize(&repr[..]).unwrap()
        }
    }

    impl ToOtherScalar for Fq {
        type Other = pasta_curves::pallas::Scalar;

        fn to_other(&self) -> Self::Other {
            let mut bytes = [0u8; 32];
            // arkwork points to bytes
            self.write(&mut bytes[..]).unwrap();

            // TODO: use our own helper
            Self::Other::from_repr(bytes).unwrap()
        }

        fn from_other(other: &Self::Other) -> Self {
            let repr = other.to_repr();
            Self::deserialize(&repr[..]).unwrap()
        }
    }

    //
    // Traits for elliptic curve affine points
    //

    /// This is a trait to convert points from the arkwork's [AffineCurve] library to points on the [pasta_curves] library.
    /// It is designed a certain way due to the two libraries not exposing convenient functions from their traits.
    pub trait ToOtherAffine: AffineCurve {
        /// The other curve's type.
        type Other: CurveAffine<Repr = [u8; 32]>;

        /// Returns true if the y coordinate of this point is odd.
        /// This is useful for serializing the point in a format the other library understands.
        fn get_other_coords(
            &self,
        ) -> (
            <Self::Other as CurveAffine>::Base,
            <Self::Other as CurveAffine>::Base,
        );

        /// Creates a new point from two x coordinates from the other library
        fn new_xy(
            x: &<Self::Other as CurveAffine>::Base,
            y: &<Self::Other as CurveAffine>::Base,
        ) -> Self;

        /// The conversion to that type.
        fn to_other(self: &Self) -> Self::Other {
            if self.is_zero() {
                return Self::Other::identity();
            }

            let (x, y) = self.get_other_coords();
            Self::Other::from_xy(x, y).unwrap()
        }

        /// The conversion back from that type.
        fn from_other(other: &Self::Other) -> Self {
            // the point at infinity is represent by the point (0, 0) in the other library
            if other.is_identity().into() {
                return Self::zero();
            }

            let coords = other.coordinates().unwrap();
            let (x, y) = (coords.x(), coords.y());

            Self::new_xy(x, y)
        }
    }

    impl ToOtherAffine for Pallas {
        type Other = pasta_curves::pallas::Affine;

        fn new_xy(
            x: &<Self::Other as CurveAffine>::Base,
            y: &<Self::Other as CurveAffine>::Base,
        ) -> Self {
            Self::new(
                Self::BaseField::from_other(x),
                Self::BaseField::from_other(y),
                false,
            )
        }

        fn get_other_coords(
            &self,
        ) -> (
            <Self::Other as CurveAffine>::Base,
            <Self::Other as CurveAffine>::Base,
        ) {
            (self.x.to_other(), self.y.to_other())
        }
    }

    impl ToOtherAffine for Vesta {
        type Other = pasta_curves::vesta::Affine;

        fn new_xy(
            x: &<Self::Other as CurveAffine>::Base,
            y: &<Self::Other as CurveAffine>::Base,
        ) -> Self {
            Self::new(
                Self::BaseField::from_other(x),
                Self::BaseField::from_other(y),
                false,
            )
        }

        fn get_other_coords(
            &self,
        ) -> (
            <Self::Other as CurveAffine>::Base,
            <Self::Other as CurveAffine>::Base,
        ) {
            (self.x.to_other(), self.y.to_other())
        }
    }

    //
    // MSM
    //

    /// TKTK
    // TODO: bonus point if you can move the logic to a default impl
    pub trait MultiScalarMultiplication: ToOtherAffine {
        /// MSM implementation
        fn msm(bases: &[Self], scalars: &[Self::ScalarField]) -> Self;
    }

    impl MultiScalarMultiplication for Pallas {
        fn msm(bases: &[Self], scalars: &[Self::ScalarField]) -> Self {
            assert_eq!(
                bases.len(),
                scalars.len(),
                "bases and scalars must have the same length"
            );

            // convert arkworks points/scalars to pasta_curves types
            let points: Vec<_> = bases.iter().map(ToOtherAffine::to_other).collect();
            let scalars: Vec<_> = scalars.iter().map(ToOtherScalar::to_other).collect();

            let res = pasta_msm::pallas(&points, &scalars);

            Pallas::from_other(&res.to_affine())
        }
    }

    impl MultiScalarMultiplication for Vesta {
        fn msm(bases: &[Self], scalars: &[Self::ScalarField]) -> Self {
            // convert arkworks points/scalars to pasta_curves types
            let points: Vec<_> = bases.iter().map(ToOtherAffine::to_other).collect();
            let scalars: Vec<_> = scalars.iter().map(ToOtherScalar::to_other).collect();

            let res = pasta_msm::vesta(&points, &scalars);

            Vesta::from_other(&res.to_affine())
        }
    }

    //
    // Due to the trait KimchiCurve (see in kimchi) we need to implement this for the legacy curves
    //

    impl ToOtherAffine for LegacyVesta {
        type Other = pasta_curves::vesta::Affine;

        fn get_other_coords(
            &self,
        ) -> (
            <Self::Other as CurveAffine>::Base,
            <Self::Other as CurveAffine>::Base,
        ) {
            unreachable!();
        }

        fn new_xy(
            _x: &<Self::Other as CurveAffine>::Base,
            _y: &<Self::Other as CurveAffine>::Base,
        ) -> Self {
            unreachable!()
        }
    }

    impl ToOtherAffine for LegacyPallas {
        type Other = pasta_curves::pallas::Affine;

        fn get_other_coords(
            &self,
        ) -> (
            <Self::Other as CurveAffine>::Base,
            <Self::Other as CurveAffine>::Base,
        ) {
            unreachable!();
        }

        fn new_xy(
            _x: &<Self::Other as CurveAffine>::Base,
            _y: &<Self::Other as CurveAffine>::Base,
        ) -> Self {
            unreachable!()
        }
    }

    impl MultiScalarMultiplication for LegacyVesta {
        fn msm(_bases: &[Self], _scalars: &[Self::ScalarField]) -> Self {
            unreachable!()
        }
    }

    impl MultiScalarMultiplication for LegacyPallas {
        fn msm(_bases: &[Self], _scalars: &[Self::ScalarField]) -> Self {
            unreachable!()
        }
    }

    //
    // Sanity checks
    //

    // TODO: bonus point for using proptests
    #[cfg(test)]
    mod tests {
        use std::ops::Mul;

        use super::*;
        use ark_ec::msm::VariableBaseMSM;
        use ark_ec::ProjectiveCurve as _;
        use ark_ff::{FftField, PrimeField};
        use ark_std::{test_rng, UniformRand};

        //
        // Test that scalar conversion works
        //

        fn test_scalars_conv_generic<F: FftField + ToOtherScalar>() {
            {
                // check a root of unity
                let arkworks_root = F::get_root_of_unity(2).unwrap();
                println!("{arkworks_root}");
                let other_fq = arkworks_root.to_other();
                println!("{:?}", other_fq);

                // multiply by order
                let one = arkworks_root.pow(&[4u64]);
                assert!(one.is_one());
                println!("one: {one}");

                // same with other
                use pasta_curves::group::ff::Field;
                let one2 = other_fq.pow_vartime(&[0u64, 0, 0, 4]);
                println!("one: {:?}", one2);
                // TODO: not sure how to check that the other is one too
            }

            // do the same with a random value
            let x: F = UniformRand::rand(&mut test_rng());
            let y: F = UniformRand::rand(&mut test_rng());
            let res = x * y;

            let other_x = x.to_other();
            let other_y = y.to_other();
            let other_res = other_x * other_y;

            let res_back = F::from_other(&other_res);
            assert_eq!(res, res_back);
        }

        // TODO: this only tests Fq, not Fp
        #[test]
        fn test_arkworks_pasta_scalar_conversion() {
            test_scalars_conv_generic::<Fq>();
            test_scalars_conv_generic::<Fp>();
        }
        //
        // Test that point conversion works
        //

        fn test_generic_point_conversion<G: ToOtherAffine, F: ToOtherScalar>()
        where
            for<'a> G::Other: Mul<
                &'a F::Other,
                Output = <G::Other as pasta_curves::arithmetic::CurveAffine>::CurveExt,
            >,
        {
            // test with our pasta generator
            {
                let x = G::prime_subgroup_generator();
                let other_x = x.to_other();
                assert_eq!(x, G::from_other(&other_x));

                println!("x: {x}");

                // for vesta: (1, 0x1943666ea922ae6b13b64e3aae89754cacce3a7f298ba20c4e4389b9b0276a62)
                // for pallas: (1, 0x1b74b5a30a12937c53dfa9f06378ee548f655bd4333d477119cf7a23caed2abb)
                dbg!(other_x);

                // y = x * 2
                let y = x.mul(G::ScalarField::from(2u64));
                let temp = F::from(2u64).to_other();
                let other_y = other_x.mul(&temp);

                let other_y_bis = other_x.mul(&F::Other::from(2u64));
                let other_y_from_conv = y.into_affine().to_other();

                println!("debug: {}", y.into_affine());
                dbg!(other_y.to_affine());
                dbg!(other_y_from_conv);

                assert_eq!(other_y, other_y_bis);
                assert_eq!(other_y_from_conv, other_y.to_affine());

                let y_back = G::from_other(&other_y.to_affine());
                dbg!(y_back);
                assert_eq!(y.into_affine(), y_back);
            }

            // test the zero point
            {
                let zero = G::zero();
                let other_zero = zero.to_other();

                let x = G::prime_subgroup_generator();
                let other_x = x.to_other();

                // check that it is indeed zero
                let should_be_x = zero + x;
                assert_eq!(should_be_x, x);

                let should_be_x_as_well = other_zero + other_x;
                assert_eq!(should_be_x_as_well.to_affine(), other_x);

                // check the conversion back
                dbg!(other_zero);
                let zero_back = G::from_other(&other_zero);
                assert!(zero_back.is_zero());
                assert_eq!(zero, zero_back);
            }

            // test with a random value
            {
                let x = G::Projective::rand(&mut test_rng()).into_affine();
                let y = G::Projective::rand(&mut test_rng()).into_affine();
                let res = x + y;

                let other_x = x.to_other();
                let other_y = y.to_other();
                let other_res = res.to_other();
                let r = other_x + other_y;
                assert_eq!(r.to_affine(), other_res);

                let res_back = G::from_other(&other_res);
                assert_eq!(res, res_back);
            }
        }

        #[test]
        fn test_point_conversions() {
            test_generic_point_conversion::<Pallas, Fq>();
            test_generic_point_conversion::<Vesta, Fp>();
        }

        //
        // Test that MSM works
        //

        fn test_msm_generic<G: MultiScalarMultiplication>() {
            let scalars = vec![G::ScalarField::from(2u64), G::ScalarField::from(3u8)];
            let points = vec![G::prime_subgroup_generator(), G::prime_subgroup_generator()];

            let res = VariableBaseMSM::multi_scalar_mul(
                &points,
                &scalars.iter().map(|x| x.into_repr()).collect::<Vec<_>>(),
            );

            let other_res = G::msm(&points, &scalars);

            assert_eq!(res.into_affine(), other_res);
        }

        #[test]
        fn test_msm() {
            test_msm_generic::<Pallas>();
            test_msm_generic::<Vesta>();
        }
    }
}

// #[cfg(not(any(target_arch = "x86_64", target_arch = "aarch64")))]
// pub mod msm {
//     use super::*;

//     pub fn pallas_msm(bases: &[G], scalars: &[<G::ScalarField as PrimeField>::BigInt]) -> Self {

// VariableBaseMSM::multi_scalar_mul(
//     &[&g[0..n], &[self.h, u]].concat(),
//     &[&a[n..], &[rand_l, inner_prod(a_hi, b_lo)]]
//         .concat()
//         .iter()
//         .map(|x| x.into_repr())
//         .collect::<Vec<_>>(),
// )
// .into_affine();

//         VariableBaseMSM::multi_scalar_mul();
//     }
// }