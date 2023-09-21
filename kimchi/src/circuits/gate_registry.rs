use std::collections::BTreeMap;

use ark_ff::PrimeField;

use super::polynomials;
use crate::circuits::{expr::E, gate::Gate};

pub type GateList<F> = Vec<Box<dyn Gate<F, E<F>>>>;

/// Helper to specify a bunch of gates
#[macro_export]
macro_rules! gates {
    ($($first:ident $(:: $second:ident)*),*) => { {
        let mut gates = GateList::new();
        $( gates.push($first:: $( $second:: )* create()); )*
        gates
    }};
}

// Registry of available gates
#[derive(Clone, Debug)]
pub struct GateRegistry<F: PrimeField> {
    pub gates: BTreeMap<String, Box<dyn Gate<F, E<F>>>>,
}

impl<F: PrimeField> Default for GateRegistry<F> {
    fn default() -> Self {
        let mut registry = Self::new();

        // Register default set of gates
        registry.register(gates![polynomials::zero::Zero]);
        registry
    }
}

impl<F: PrimeField> GateRegistry<F> {
    /// Create a new empty GateRegistry
    pub fn new() -> Self {
        Self {
            gates: BTreeMap::new(),
        }
    }

    /// Register a bunch of gates
    pub fn register(&mut self, gates: GateList<F>) {
        for gate in gates {
            self.register_one(gate)
        }
    }

    /// Register a single gate
    pub fn register_one(&mut self, gate: Box<dyn Gate<F, E<F>>>) {
        match self.gates.get_key_value(gate.name()) {
            Some(_) => (),
            None => {
                self.gates.insert(gate.name().to_string(), gate);
            }
        }
    }

    /// Obtain a gate from the registry
    pub fn get(&self, name: String) -> Option<&Box<dyn Gate<F, E<F>>>> {
        self.gates.get(&name)
    }

    /// Iterate over the registered gates
    pub fn iter(&mut self) -> std::collections::btree_map::Iter<'_, String, Box<dyn Gate<F, E<F>>>> {
        self.gates.iter()
    }
}
