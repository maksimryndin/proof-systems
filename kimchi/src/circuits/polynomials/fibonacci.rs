//! This module introduces a dummy wide gate to check that the
//! generalization over the number of columns works fine.
use crate::{
    circuits::{
        argument::{Argument, ArgumentEnv, ArgumentType},
        expr::{constraints::ExprOps, Cache},
        gate::{CircuitGate, GateType},
        lookup::{
            self,
            tables::{GateLookupTable, LookupTable},
        },
        wires::Wire,
        witness::{self, IndexCell, Variables, WitnessCell},
    },
    variable_map,
};
use ark_ff::{PrimeField, SquareRootField};
use std::{array, marker::PhantomData};

pub(crate) const FIB_COLS: usize = 3000;
pub(crate) const FIB_ROWS: usize = 0xFFFF + 1;

impl<F: PrimeField + SquareRootField> CircuitGate<F> {
    /// Creates a fibonacci gadget
    pub fn create_fib_gadget(new_row: usize) -> (usize, Vec<Self>) {
        let mut gates = vec![];
        for _ in 0..FIB_ROWS {
            gates.push(CircuitGate {
                typ: GateType::Fibonacci,
                wires: Wire::for_row(new_row),
                coeffs: vec![],
            });
        }
        (new_row + gates.len(), gates)
    }
}

//~ Fibonacci -> Wide gate of 30 columns

#[derive(Default)]
pub struct Fibonacci<F>(PhantomData<F>);

impl<F> Argument<F> for Fibonacci<F>
where
    F: PrimeField,
{
    const ARGUMENT_TYPE: ArgumentType = ArgumentType::Gate(GateType::Fibonacci);
    const CONSTRAINTS: u32 = (FIB_COLS - 2) as u32;

    fn constraint_checks<T: ExprOps<F>>(env: &ArgumentEnv<F, T>, _cache: &mut Cache) -> Vec<T> {
        (0..FIB_COLS - 2)
            .map(|i| env.witness_curr(i) + env.witness_curr(i + 1) - env.witness_curr(i + 2))
            .collect::<Vec<T>>()
    }
}
type Layout<const W: usize, F> = Vec<Box<dyn WitnessCell<W, F, Vec<F>>>>;

fn fib_row<const W: usize, F: PrimeField>() -> Layout<W, F> {
    vec![IndexCell::create("fibonacci", 0, W)]
}

fn fib_layout<const W: usize, F: PrimeField>() -> [Layout<W, F>; W] {
    array::from_fn(|_| fib_row::<W, F>())
}

pub(crate) fn init_fib<const W: usize, F: PrimeField>(witness: &mut [Vec<F>; W], curr_row: usize) {
    let fibonacci = (0..W).map(|i| witness[i][0]).collect::<Vec<_>>();

    witness::init(
        witness,
        curr_row,
        &fib_layout(),
        &variable_map!["fibonacci" => fibonacci],
    )
}

pub fn create_fib_witness<const W: usize, F: PrimeField>() -> [Vec<F>; W] {
    let mut fib_wit: [Vec<F>; W] = array::from_fn(|_| vec![F::zero(); FIB_ROWS]);

    for row in 0..FIB_ROWS {
        fib_wit[1][row] = F::one();
        for col in 0..W - 2 {
            fib_wit[col + 2][row] = fib_wit[col][row] + fib_wit[col + 1][row];
        }
    }

    init_fib(&mut fib_wit, 0);

    fib_wit
}
