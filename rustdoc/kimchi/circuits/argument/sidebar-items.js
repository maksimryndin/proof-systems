window.SIDEBAR_ITEMS = {"enum":[["ArgumentType","A constraint type represents a polynomial that will be part of the final equation f (the circuit equation)"]],"struct":[["ArgumentData","Argument environment data for constraints of field elements"],["ArgumentEnv","The argument environment is used to specify how the argument’s constraints are represented when they are built.  If the environment is created without ArgumentData and with F = Expr, then the constraints are built as Expr expressions (e.g. for use with the prover/verifier).  On the other hand, if the environment is created with ArgumentData and F = Field or F = PrimeField, then the constraints are built as expressions of real field elements and can be evaluated directly on the witness without using the prover."],["ArgumentWitness","Witness data for a argument"]],"trait":[["Argument","The interface for a minimal argument implementation."],["DynArgument",""]]};