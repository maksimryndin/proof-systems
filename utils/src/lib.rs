#![deny(missing_docs)]

//! A collection of utility functions and constants that can be reused from multiple projects

pub mod adjacent_pairs;
pub mod big_bit_ops;
pub mod chunked_evaluations;
pub mod chunked_polynomial;
pub mod dense_polynomial;
pub mod evaluations;
pub mod field_helpers;
pub mod foreign_field;
pub mod hasher;
pub mod math;
pub mod serialization;

pub use big_bit_ops::{big_bits, BitXor};
pub use chunked_evaluations::ChunkedEvaluations;
pub use dense_polynomial::ExtendedDensePolynomial;
pub use evaluations::ExtendedEvaluations;
pub use field_helpers::{BigUintFieldHelpers, FieldHelpers};
pub use foreign_field::{ForeignElement, LIMB_COUNT};
