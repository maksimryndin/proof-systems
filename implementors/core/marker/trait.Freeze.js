(function() {var implementors = {};
implementors["commitment_dlog"] = [{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":["commitment_dlog::commitment::PolyComm"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.OpeningProof.html\" title=\"struct commitment_dlog::commitment::OpeningProof\">OpeningProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["commitment_dlog::commitment::OpeningProof"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.Challenges.html\" title=\"struct commitment_dlog::commitment::Challenges\">Challenges</a>&lt;F&gt;","synthetic":true,"types":["commitment_dlog::commitment::Challenges"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"commitment_dlog/srs/struct.SRS.html\" title=\"struct commitment_dlog::srs::SRS\">SRS</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::BaseField: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["commitment_dlog::srs::SRS"]}];
implementors["export_test_vectors"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"export_test_vectors/vectors/struct.TestVectors.html\" title=\"struct export_test_vectors::vectors::TestVectors\">TestVectors</a>","synthetic":true,"types":["export_test_vectors::vectors::TestVectors"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"export_test_vectors/vectors/struct.TestVector.html\" title=\"struct export_test_vectors::vectors::TestVector\">TestVector</a>","synthetic":true,"types":["export_test_vectors::vectors::TestVector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"enum\" href=\"export_test_vectors/enum.Mode.html\" title=\"enum export_test_vectors::Mode\">Mode</a>","synthetic":true,"types":["export_test_vectors::Mode"]}];
implementors["groupmap"] = [{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"groupmap/struct.BWParameters.html\" title=\"struct groupmap::BWParameters\">BWParameters</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as ModelParameters&gt;::BaseField: Freeze,&nbsp;</span>","synthetic":true,"types":["groupmap::BWParameters"]}];
implementors["kimchi"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"kimchi/bench/struct.BenchmarkCtx.html\" title=\"struct kimchi::bench::BenchmarkCtx\">BenchmarkCtx</a>","synthetic":true,"types":["kimchi::bench::BenchmarkCtx"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"kimchi/index/struct.Index.html\" title=\"struct kimchi::index::Index\">Index</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi::index::Index"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"kimchi/index/struct.VerifierIndex.html\" title=\"struct kimchi::index::VerifierIndex\">VerifierIndex</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi::index::VerifierIndex"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"kimchi/prover/struct.LookupCommitments.html\" title=\"struct kimchi::prover::LookupCommitments\">LookupCommitments</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi::prover::LookupCommitments"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"kimchi/prover/struct.ProverCommitments.html\" title=\"struct kimchi::prover::ProverCommitments\">ProverCommitments</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi::prover::ProverCommitments"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"kimchi/prover/struct.ProverProof.html\" title=\"struct kimchi::prover::ProverProof\">ProverProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi::prover::ProverProof"]},{"text":"impl&lt;G, EFqSponge&gt; Freeze for <a class=\"struct\" href=\"kimchi/verifier/struct.OraclesResult.html\" title=\"struct kimchi::verifier::OraclesResult\">OraclesResult</a>&lt;G, EFqSponge&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EFqSponge: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi::verifier::OraclesResult"]}];
implementors["kimchi_circuits"] = [{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi_circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::domains::EvaluationDomains"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.Constants.html\" title=\"struct kimchi_circuits::expr::Constants\">Constants</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::expr::Constants"]},{"text":"impl&lt;'a, F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.LookupEnvironment.html\" title=\"struct kimchi_circuits::expr::LookupEnvironment\">LookupEnvironment</a>&lt;'a, F&gt;","synthetic":true,"types":["kimchi_circuits::expr::LookupEnvironment"]},{"text":"impl&lt;'a, F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.Environment.html\" title=\"struct kimchi_circuits::expr::Environment\">Environment</a>&lt;'a, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::expr::Environment"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kimchi_circuits/expr/enum.Column.html\" title=\"enum kimchi_circuits::expr::Column\">Column</a>","synthetic":true,"types":["kimchi_circuits::expr::Column"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.Variable.html\" title=\"struct kimchi_circuits::expr::Variable\">Variable</a>","synthetic":true,"types":["kimchi_circuits::expr::Variable"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"enum\" href=\"kimchi_circuits/expr/enum.ConstantExpr.html\" title=\"enum kimchi_circuits::expr::ConstantExpr\">ConstantExpr</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::expr::ConstantExpr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.CacheId.html\" title=\"struct kimchi_circuits::expr::CacheId\">CacheId</a>","synthetic":true,"types":["kimchi_circuits::expr::CacheId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.Cache.html\" title=\"struct kimchi_circuits::expr::Cache\">Cache</a>","synthetic":true,"types":["kimchi_circuits::expr::Cache"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kimchi_circuits/expr/enum.Op2.html\" title=\"enum kimchi_circuits::expr::Op2\">Op2</a>","synthetic":true,"types":["kimchi_circuits::expr::Op2"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"enum\" href=\"kimchi_circuits/expr/enum.Expr.html\" title=\"enum kimchi_circuits::expr::Expr\">Expr</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::expr::Expr"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"enum\" href=\"kimchi_circuits/expr/enum.PolishToken.html\" title=\"enum kimchi_circuits::expr::PolishToken\">PolishToken</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::expr::PolishToken"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.Linearization.html\" title=\"struct kimchi_circuits::expr::Linearization\">Linearization</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::expr::Linearization"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kimchi_circuits/gate/enum.CurrOrNext.html\" title=\"enum kimchi_circuits::gate::CurrOrNext\">CurrOrNext</a>","synthetic":true,"types":["kimchi_circuits::gate::CurrOrNext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.LocalPosition.html\" title=\"struct kimchi_circuits::gate::LocalPosition\">LocalPosition</a>","synthetic":true,"types":["kimchi_circuits::gate::LocalPosition"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.SingleLookup.html\" title=\"struct kimchi_circuits::gate::SingleLookup\">SingleLookup</a>&lt;F&gt;","synthetic":true,"types":["kimchi_circuits::gate::SingleLookup"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.JointLookup.html\" title=\"struct kimchi_circuits::gate::JointLookup\">JointLookup</a>&lt;F&gt;","synthetic":true,"types":["kimchi_circuits::gate::JointLookup"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kimchi_circuits/gate/enum.GateType.html\" title=\"enum kimchi_circuits::gate::GateType\">GateType</a>","synthetic":true,"types":["kimchi_circuits::gate::GateType"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.LookupInfo.html\" title=\"struct kimchi_circuits::gate::LookupInfo\">LookupInfo</a>&lt;F&gt;","synthetic":true,"types":["kimchi_circuits::gate::LookupInfo"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kimchi_circuits/gate/enum.LookupsUsed.html\" title=\"enum kimchi_circuits::gate::LookupsUsed\">LookupsUsed</a>","synthetic":true,"types":["kimchi_circuits::gate::LookupsUsed"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi_circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":true,"types":["kimchi_circuits::gate::CircuitGate"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/nolookup/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi_circuits::nolookup::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::nolookup::constraints::ConstraintSystem"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/nolookup/constraints/struct.Shifts.html\" title=\"struct kimchi_circuits::nolookup::constraints::Shifts\">Shifts</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::nolookup::constraints::Shifts"]},{"text":"impl Freeze for <a class=\"enum\" href=\"kimchi_circuits/nolookup/constraints/enum.GateError.html\" title=\"enum kimchi_circuits::nolookup::constraints::GateError\">GateError</a>","synthetic":true,"types":["kimchi_circuits::nolookup::constraints::GateError"]},{"text":"impl&lt;Field&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/nolookup/scalars/struct.LookupEvaluations.html\" title=\"struct kimchi_circuits::nolookup::scalars::LookupEvaluations\">LookupEvaluations</a>&lt;Field&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Field: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::nolookup::scalars::LookupEvaluations"]},{"text":"impl&lt;Field&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/nolookup/scalars/struct.ProofEvaluations.html\" title=\"struct kimchi_circuits::nolookup::scalars::ProofEvaluations\">ProofEvaluations</a>&lt;Field&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Field: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::nolookup::scalars::ProofEvaluations"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/nolookup/scalars/struct.RandomOracles.html\" title=\"struct kimchi_circuits::nolookup::scalars::RandomOracles\">RandomOracles</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::nolookup::scalars::RandomOracles"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomial/struct.WitnessEvals.html\" title=\"struct kimchi_circuits::polynomial::WitnessEvals\">WitnessEvals</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomial::WitnessEvals"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomial/struct.WitnessShifts.html\" title=\"struct kimchi_circuits::polynomial::WitnessShifts\">WitnessShifts</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomial::WitnessShifts"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomial/struct.WitnessOverDomains.html\" title=\"struct kimchi_circuits::polynomial::WitnessOverDomains\">WitnessOverDomains</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomial::WitnessOverDomains"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomial/struct.LookupEvals.html\" title=\"struct kimchi_circuits::polynomial::LookupEvals\">LookupEvals</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomial::LookupEvals"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomial/struct.LookupShifts.html\" title=\"struct kimchi_circuits::polynomial::LookupShifts\">LookupShifts</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomial::LookupShifts"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomial/struct.LookupPolys.html\" title=\"struct kimchi_circuits::polynomial::LookupPolys\">LookupPolys</a>&lt;F&gt;","synthetic":true,"types":["kimchi_circuits::polynomial::LookupPolys"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomials/endosclmul/struct.EndoMulResult.html\" title=\"struct kimchi_circuits::polynomials::endosclmul::EndoMulResult\">EndoMulResult</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomials::endosclmul::EndoMulResult"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomials/lookup/struct.CombinedEntry.html\" title=\"struct kimchi_circuits::polynomials::lookup::CombinedEntry\">CombinedEntry</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomials::lookup::CombinedEntry"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomials/lookup/struct.UncombinedEntry.html\" title=\"struct kimchi_circuits::polynomials::lookup::UncombinedEntry\">UncombinedEntry</a>&lt;F&gt;","synthetic":true,"types":["kimchi_circuits::polynomials::lookup::UncombinedEntry"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomials/poseidon/struct.RoundEquation.html\" title=\"struct kimchi_circuits::polynomials::poseidon::RoundEquation\">RoundEquation</a>","synthetic":true,"types":["kimchi_circuits::polynomials::poseidon::RoundEquation"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"kimchi_circuits/polynomials/varbasemul/struct.VarbaseMulResult.html\" title=\"struct kimchi_circuits::polynomials::varbasemul::VarbaseMulResult\">VarbaseMulResult</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["kimchi_circuits::polynomials::varbasemul::VarbaseMulResult"]},{"text":"impl Freeze for <a class=\"struct\" href=\"kimchi_circuits/wires/struct.Wire.html\" title=\"struct kimchi_circuits::wires::Wire\">Wire</a>","synthetic":true,"types":["kimchi_circuits::wires::Wire"]}];
implementors["mina_curves"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"mina_curves/pasta/pallas/struct.PallasParameters.html\" title=\"struct mina_curves::pasta::pallas::PallasParameters\">PallasParameters</a>","synthetic":true,"types":["mina_curves::pasta::curves::pallas::PallasParameters"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_curves/pasta/vesta/struct.VestaParameters.html\" title=\"struct mina_curves::pasta::vesta::VestaParameters\">VestaParameters</a>","synthetic":true,"types":["mina_curves::pasta::curves::vesta::VestaParameters"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_curves/pasta/fp/struct.FpParameters.html\" title=\"struct mina_curves::pasta::fp::FpParameters\">FpParameters</a>","synthetic":true,"types":["mina_curves::pasta::fields::fp::FpParameters"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_curves/pasta/fq/struct.FqParameters.html\" title=\"struct mina_curves::pasta::fq::FqParameters\">FqParameters</a>","synthetic":true,"types":["mina_curves::pasta::fields::fq::FqParameters"]}];
implementors["mina_signer"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"mina_signer/keypair/struct.Keypair.html\" title=\"struct mina_signer::keypair::Keypair\">Keypair</a>","synthetic":true,"types":["mina_signer::keypair::Keypair"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_signer/pubkey/struct.PubKey.html\" title=\"struct mina_signer::pubkey::PubKey\">PubKey</a>","synthetic":true,"types":["mina_signer::pubkey::PubKey"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_signer/pubkey/struct.CompressedPubKey.html\" title=\"struct mina_signer::pubkey::CompressedPubKey\">CompressedPubKey</a>","synthetic":true,"types":["mina_signer::pubkey::CompressedPubKey"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_signer/roinput/struct.ROInput.html\" title=\"struct mina_signer::roinput::ROInput\">ROInput</a>","synthetic":true,"types":["mina_signer::roinput::ROInput"]},{"text":"impl&lt;SC&gt; Freeze for <a class=\"struct\" href=\"mina_signer/schnorr/struct.Schnorr.html\" title=\"struct mina_signer::schnorr::Schnorr\">Schnorr</a>&lt;SC&gt;","synthetic":true,"types":["mina_signer::schnorr::Schnorr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_signer/seckey/struct.SecKey.html\" title=\"struct mina_signer::seckey::SecKey\">SecKey</a>","synthetic":true,"types":["mina_signer::seckey::SecKey"]},{"text":"impl Freeze for <a class=\"struct\" href=\"mina_signer/signature/struct.Signature.html\" title=\"struct mina_signer::signature::Signature\">Signature</a>","synthetic":true,"types":["mina_signer::signature::Signature"]},{"text":"impl Freeze for <a class=\"enum\" href=\"mina_signer/enum.NetworkId.html\" title=\"enum mina_signer::NetworkId\">NetworkId</a>","synthetic":true,"types":["mina_signer::NetworkId"]}];
implementors["o1_utils"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"o1_utils/serialization/struct.SerdeAs.html\" title=\"struct o1_utils::serialization::SerdeAs\">SerdeAs</a>","synthetic":true,"types":["o1_utils::serialization::SerdeAs"]}];
implementors["ocaml_gen"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"ocaml_gen/struct.Env.html\" title=\"struct ocaml_gen::Env\">Env</a>","synthetic":true,"types":["ocaml_gen::Env"]}];
implementors["oracle"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstantsBasic.html\" title=\"struct oracle::poseidon::PlonkSpongeConstantsBasic\">PlonkSpongeConstantsBasic</a>","synthetic":true,"types":["oracle::poseidon::PlonkSpongeConstantsBasic"]},{"text":"impl Freeze for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants5W.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants5W\">PlonkSpongeConstants5W</a>","synthetic":true,"types":["oracle::poseidon::PlonkSpongeConstants5W"]},{"text":"impl Freeze for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants3W.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants3W\">PlonkSpongeConstants3W</a>","synthetic":true,"types":["oracle::poseidon::PlonkSpongeConstants3W"]},{"text":"impl Freeze for <a class=\"struct\" href=\"oracle/poseidon/struct.PlonkSpongeConstants15W.html\" title=\"struct oracle::poseidon::PlonkSpongeConstants15W\">PlonkSpongeConstants15W</a>","synthetic":true,"types":["oracle::poseidon::PlonkSpongeConstants15W"]},{"text":"impl Freeze for <a class=\"enum\" href=\"oracle/poseidon/enum.SpongeState.html\" title=\"enum oracle::poseidon::SpongeState\">SpongeState</a>","synthetic":true,"types":["oracle::poseidon::SpongeState"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSpongeParams.html\" title=\"struct oracle::poseidon::ArithmeticSpongeParams\">ArithmeticSpongeParams</a>&lt;F&gt;","synthetic":true,"types":["oracle::poseidon::ArithmeticSpongeParams"]},{"text":"impl&lt;F, SC&gt; Freeze for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSponge.html\" title=\"struct oracle::poseidon::ArithmeticSponge\">ArithmeticSponge</a>&lt;F, SC&gt;","synthetic":true,"types":["oracle::poseidon::ArithmeticSponge"]},{"text":"impl Freeze for <a class=\"enum\" href=\"oracle/rndoracle/enum.ProofError.html\" title=\"enum oracle::rndoracle::ProofError\">ProofError</a>","synthetic":true,"types":["oracle::rndoracle::ProofError"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"oracle/sponge/struct.ScalarChallenge.html\" title=\"struct oracle::sponge::ScalarChallenge\">ScalarChallenge</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["oracle::sponge::ScalarChallenge"]},{"text":"impl&lt;P, SC&gt; Freeze for <a class=\"struct\" href=\"oracle/sponge/struct.DefaultFqSponge.html\" title=\"struct oracle::sponge::DefaultFqSponge\">DefaultFqSponge</a>&lt;P, SC&gt;","synthetic":true,"types":["oracle::sponge::DefaultFqSponge"]},{"text":"impl&lt;Fr, SC&gt; Freeze for <a class=\"struct\" href=\"oracle/sponge/struct.DefaultFrSponge.html\" title=\"struct oracle::sponge::DefaultFrSponge\">DefaultFrSponge</a>&lt;Fr, SC&gt;","synthetic":true,"types":["oracle::sponge::DefaultFrSponge"]}];
implementors["plonk_circuits"] = [{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/constraints/struct.ConstraintSystem.html\" title=\"struct plonk_circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_circuits::constraints::ConstraintSystem"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/domains/struct.EvaluationDomains.html\" title=\"struct plonk_circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_circuits::domains::EvaluationDomains"]},{"text":"impl Freeze for <a class=\"enum\" href=\"plonk_circuits/gate/enum.GateType.html\" title=\"enum plonk_circuits::gate::GateType\">GateType</a>","synthetic":true,"types":["plonk_circuits::gate::GateType"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/gate/struct.CircuitGate.html\" title=\"struct plonk_circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":true,"types":["plonk_circuits::gate::CircuitGate"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/gate/struct.Gate.html\" title=\"struct plonk_circuits::gate::Gate\">Gate</a>&lt;F&gt;","synthetic":true,"types":["plonk_circuits::gate::Gate"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/polynomial/struct.WitnessEvals.html\" title=\"struct plonk_circuits::polynomial::WitnessEvals\">WitnessEvals</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_circuits::polynomial::WitnessEvals"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/polynomial/struct.WitnessShifts.html\" title=\"struct plonk_circuits::polynomial::WitnessShifts\">WitnessShifts</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_circuits::polynomial::WitnessShifts"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/polynomial/struct.WitnessOverDomains.html\" title=\"struct plonk_circuits::polynomial::WitnessOverDomains\">WitnessOverDomains</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_circuits::polynomial::WitnessOverDomains"]},{"text":"impl&lt;Fs&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/scalars/struct.ProofEvaluations.html\" title=\"struct plonk_circuits::scalars::ProofEvaluations\">ProofEvaluations</a>&lt;Fs&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fs: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_circuits::scalars::ProofEvaluations"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"plonk_circuits/scalars/struct.RandomOracles.html\" title=\"struct plonk_circuits::scalars::RandomOracles\">RandomOracles</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_circuits::scalars::RandomOracles"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plonk_circuits/wires/struct.GateWires.html\" title=\"struct plonk_circuits::wires::GateWires\">GateWires</a>","synthetic":true,"types":["plonk_circuits::wires::GateWires"]},{"text":"impl Freeze for <a class=\"enum\" href=\"plonk_circuits/wires/enum.Col.html\" title=\"enum plonk_circuits::wires::Col\">Col</a>","synthetic":true,"types":["plonk_circuits::wires::Col"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plonk_circuits/wires/struct.Wire.html\" title=\"struct plonk_circuits::wires::Wire\">Wire</a>","synthetic":true,"types":["plonk_circuits::wires::Wire"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plonk_circuits/wires/struct.Wires.html\" title=\"struct plonk_circuits::wires::Wires\">Wires</a>","synthetic":true,"types":["plonk_circuits::wires::Wires"]}];
implementors["plonk_protocol_dlog"] = [{"text":"impl&lt;'a, G&gt; Freeze for <a class=\"enum\" href=\"plonk_protocol_dlog/index/enum.SRSValue.html\" title=\"enum plonk_protocol_dlog::index::SRSValue\">SRSValue</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::BaseField: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_protocol_dlog::index::SRSValue"]},{"text":"impl&lt;'a, G&gt; Freeze for <a class=\"enum\" href=\"plonk_protocol_dlog/index/enum.SRSSpec.html\" title=\"enum plonk_protocol_dlog::index::SRSSpec\">SRSSpec</a>&lt;'a, G&gt;","synthetic":true,"types":["plonk_protocol_dlog::index::SRSSpec"]},{"text":"impl&lt;'a, G&gt; Freeze for <a class=\"struct\" href=\"plonk_protocol_dlog/index/struct.Index.html\" title=\"struct plonk_protocol_dlog::index::Index\">Index</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::BaseField: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_protocol_dlog::index::Index"]},{"text":"impl&lt;'a, G&gt; Freeze for <a class=\"struct\" href=\"plonk_protocol_dlog/index/struct.VerifierIndex.html\" title=\"struct plonk_protocol_dlog::index::VerifierIndex\">VerifierIndex</a>&lt;'a, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::BaseField: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_protocol_dlog::index::VerifierIndex"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"plonk_protocol_dlog/prover/struct.ProverCommitments.html\" title=\"struct plonk_protocol_dlog::prover::ProverCommitments\">ProverCommitments</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_protocol_dlog::prover::ProverCommitments"]},{"text":"impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"plonk_protocol_dlog/prover/struct.ProverProof.html\" title=\"struct plonk_protocol_dlog::prover::ProverProof\">ProverProof</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;G as AffineCurve&gt;::ScalarField: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_protocol_dlog::prover::ProverProof"]},{"text":"impl&lt;Fs&gt; Freeze for <a class=\"struct\" href=\"plonk_protocol_dlog/verifier/struct.CachedValues.html\" title=\"struct plonk_protocol_dlog::verifier::CachedValues\">CachedValues</a>&lt;Fs&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fs: Freeze,&nbsp;</span>","synthetic":true,"types":["plonk_protocol_dlog::verifier::CachedValues"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()