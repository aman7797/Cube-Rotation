// Generated by purs version 0.11.7
"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Applicative_Free = require("../Control.Applicative.Free");
var Control_Apply = require("../Control.Apply");
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Monad = require("../Control.Monad");
var Control_Monad_Aff_Class = require("../Control.Monad.Aff.Class");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Fork = require("../Control.Monad.Fork");
var Control_Monad_Fork_Class = require("../Control.Monad.Fork.Class");
var Control_Monad_Free = require("../Control.Monad.Free");
var Control_Monad_Reader_Class = require("../Control.Monad.Reader.Class");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var Control_Monad_Trans_Class = require("../Control.Monad.Trans.Class");
var Control_Monad_Writer_Class = require("../Control.Monad.Writer.Class");
var Control_Parallel_Class = require("../Control.Parallel.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Bifunctor = require("../Data.Bifunctor");
var Data_Coyoneda = require("../Data.Coyoneda");
var Data_Foreign = require("../Data.Foreign");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Maybe = require("../Data.Maybe");
var Data_Newtype = require("../Data.Newtype");
var Data_Tuple = require("../Data.Tuple");
var Data_Unit = require("../Data.Unit");
var Halogen_Query_EventSource = require("../Halogen.Query.EventSource");
var Halogen_Query_ForkF = require("../Halogen.Query.ForkF");
var Halogen_Query_InputF = require("../Halogen.Query.InputF");
var Prelude = require("../Prelude");
var HalogenAp = function (x) {
    return x;
};
var HalogenM = function (x) {
    return x;
};
var State = (function () {
    function State(value0) {
        this.value0 = value0;
    };
    State.create = function (value0) {
        return new State(value0);
    };
    return State;
})();
var Subscribe = (function () {
    function Subscribe(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Subscribe.create = function (value0) {
        return function (value1) {
            return new Subscribe(value0, value1);
        };
    };
    return Subscribe;
})();
var Lift = (function () {
    function Lift(value0) {
        this.value0 = value0;
    };
    Lift.create = function (value0) {
        return new Lift(value0);
    };
    return Lift;
})();
var Halt = (function () {
    function Halt(value0) {
        this.value0 = value0;
    };
    Halt.create = function (value0) {
        return new Halt(value0);
    };
    return Halt;
})();
var GetSlots = (function () {
    function GetSlots(value0) {
        this.value0 = value0;
    };
    GetSlots.create = function (value0) {
        return new GetSlots(value0);
    };
    return GetSlots;
})();
var CheckSlot = (function () {
    function CheckSlot(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    CheckSlot.create = function (value0) {
        return function (value1) {
            return new CheckSlot(value0, value1);
        };
    };
    return CheckSlot;
})();
var ChildQuery = (function () {
    function ChildQuery(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ChildQuery.create = function (value0) {
        return function (value1) {
            return new ChildQuery(value0, value1);
        };
    };
    return ChildQuery;
})();
var Raise = (function () {
    function Raise(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Raise.create = function (value0) {
        return function (value1) {
            return new Raise(value0, value1);
        };
    };
    return Raise;
})();
var Par = (function () {
    function Par(value0) {
        this.value0 = value0;
    };
    Par.create = function (value0) {
        return new Par(value0);
    };
    return Par;
})();
var Fork = (function () {
    function Fork(value0) {
        this.value0 = value0;
    };
    Fork.create = function (value0) {
        return new Fork(value0);
    };
    return Fork;
})();
var GetRef = (function () {
    function GetRef(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    GetRef.create = function (value0) {
        return function (value1) {
            return new GetRef(value0, value1);
        };
    };
    return GetRef;
})();
var subscribe = function (es) {
    return HalogenM(Control_Monad_Free.liftF(new Subscribe(es, Data_Unit.unit)));
};
var raise = function (o) {
    return HalogenM(Control_Monad_Free.liftF(new Raise(o, Data_Unit.unit)));
};
var newtypeHalogenAp = new Data_Newtype.Newtype(function (n) {
    return n;
}, HalogenAp);
var monadTransHalogenM = new Control_Monad_Trans_Class.MonadTrans(function (dictMonad) {
    return function (m) {
        return HalogenM(Control_Monad_Free.liftF(new Lift(m)));
    };
});
var mkQuery = function (dictEq) {
    return function (p) {
        return function ($176) {
            return HalogenM(Control_Monad_Free.liftF(ChildQuery.create(p)(Data_Coyoneda.coyoneda(Control_Category.id(Control_Category.categoryFn))($176))));
        };
    };
};
var mapQuery = function (dictFunctor) {
    return function (nat) {
        return function (v) {
            var go = function (v1) {
                if (v1 instanceof State) {
                    return new State(v1.value0);
                };
                if (v1 instanceof Subscribe) {
                    return new Subscribe(Halogen_Query_EventSource.interpret(dictFunctor)(nat)(v1.value0), v1.value1);
                };
                if (v1 instanceof Lift) {
                    return new Lift(v1.value0);
                };
                if (v1 instanceof Halt) {
                    return new Halt(v1.value0);
                };
                if (v1 instanceof GetSlots) {
                    return new GetSlots(v1.value0);
                };
                if (v1 instanceof CheckSlot) {
                    return new CheckSlot(v1.value0, v1.value1);
                };
                if (v1 instanceof ChildQuery) {
                    return new ChildQuery(v1.value0, v1.value1);
                };
                if (v1 instanceof Raise) {
                    return new Raise(v1.value0, v1.value1);
                };
                if (v1 instanceof Par) {
                    return new Par(Data_Newtype.over(newtypeHalogenAp)(newtypeHalogenAp)(HalogenAp)(Control_Applicative_Free.hoistFreeAp(mapQuery(dictFunctor)(nat)))(v1.value0));
                };
                if (v1 instanceof Fork) {
                    return new Fork(Halogen_Query_ForkF.hoistFork(mapQuery(dictFunctor)(nat))(v1.value0));
                };
                if (v1 instanceof GetRef) {
                    return new GetRef(v1.value0, v1.value1);
                };
                throw new Error("Failed pattern match at Halogen.Query.HalogenM line 172, column 8 - line 183, column 29: " + [ v1.constructor.name ]);
            };
            return Control_Monad_Free.hoistFree(go)(v);
        };
    };
};
var mapOutput = function (f) {
    return function (v) {
        var go = function (v1) {
            if (v1 instanceof State) {
                return new State(v1.value0);
            };
            if (v1 instanceof Subscribe) {
                return new Subscribe(v1.value0, v1.value1);
            };
            if (v1 instanceof Lift) {
                return new Lift(v1.value0);
            };
            if (v1 instanceof Halt) {
                return new Halt(v1.value0);
            };
            if (v1 instanceof GetSlots) {
                return new GetSlots(v1.value0);
            };
            if (v1 instanceof CheckSlot) {
                return new CheckSlot(v1.value0, v1.value1);
            };
            if (v1 instanceof ChildQuery) {
                return new ChildQuery(v1.value0, v1.value1);
            };
            if (v1 instanceof Raise) {
                return new Raise(f(v1.value0), v1.value1);
            };
            if (v1 instanceof Par) {
                return new Par(Data_Newtype.over(newtypeHalogenAp)(newtypeHalogenAp)(HalogenAp)(Control_Applicative_Free.hoistFreeAp(mapOutput(f)))(v1.value0));
            };
            if (v1 instanceof Fork) {
                return new Fork(Halogen_Query_ForkF.hoistFork(mapOutput(f))(v1.value0));
            };
            if (v1 instanceof GetRef) {
                return new GetRef(v1.value0, v1.value1);
            };
            throw new Error("Failed pattern match at Halogen.Query.HalogenM line 236, column 8 - line 247, column 29: " + [ v1.constructor.name ]);
        };
        return Control_Monad_Free.hoistFree(go)(v);
    };
};
var mapChildQuery = function (nat) {
    return function (v) {
        var go = function (v1) {
            if (v1 instanceof State) {
                return new State(v1.value0);
            };
            if (v1 instanceof Subscribe) {
                return new Subscribe(v1.value0, v1.value1);
            };
            if (v1 instanceof Lift) {
                return new Lift(v1.value0);
            };
            if (v1 instanceof Halt) {
                return new Halt(v1.value0);
            };
            if (v1 instanceof GetSlots) {
                return new GetSlots(v1.value0);
            };
            if (v1 instanceof CheckSlot) {
                return new CheckSlot(v1.value0, v1.value1);
            };
            if (v1 instanceof ChildQuery) {
                return new ChildQuery(v1.value0, Data_Coyoneda.hoistCoyoneda(nat)(v1.value1));
            };
            if (v1 instanceof Raise) {
                return new Raise(v1.value0, v1.value1);
            };
            if (v1 instanceof Par) {
                return new Par(Data_Newtype.over(newtypeHalogenAp)(newtypeHalogenAp)(HalogenAp)(Control_Applicative_Free.hoistFreeAp(mapChildQuery(nat)))(v1.value0));
            };
            if (v1 instanceof Fork) {
                return new Fork(Halogen_Query_ForkF.hoistFork(mapChildQuery(nat))(v1.value0));
            };
            if (v1 instanceof GetRef) {
                return new GetRef(v1.value0, v1.value1);
            };
            throw new Error("Failed pattern match at Halogen.Query.HalogenM line 193, column 8 - line 204, column 29: " + [ v1.constructor.name ]);
        };
        return Control_Monad_Free.hoistFree(go)(v);
    };
};
var imapState = function (f) {
    return function (f$prime) {
        return function (v) {
            var go = function (v1) {
                if (v1 instanceof State) {
                    return new State(function ($177) {
                        return Data_Functor.map(Data_Tuple.functorTuple)(f)(v1.value0(f$prime($177)));
                    });
                };
                if (v1 instanceof Subscribe) {
                    return new Subscribe(v1.value0, v1.value1);
                };
                if (v1 instanceof Lift) {
                    return new Lift(v1.value0);
                };
                if (v1 instanceof Halt) {
                    return new Halt(v1.value0);
                };
                if (v1 instanceof GetSlots) {
                    return new GetSlots(v1.value0);
                };
                if (v1 instanceof CheckSlot) {
                    return new CheckSlot(v1.value0, v1.value1);
                };
                if (v1 instanceof ChildQuery) {
                    return new ChildQuery(v1.value0, v1.value1);
                };
                if (v1 instanceof Raise) {
                    return new Raise(v1.value0, v1.value1);
                };
                if (v1 instanceof Par) {
                    return new Par(Data_Newtype.over(newtypeHalogenAp)(newtypeHalogenAp)(HalogenAp)(Control_Applicative_Free.hoistFreeAp(imapState(f)(f$prime)))(v1.value0));
                };
                if (v1 instanceof Fork) {
                    return new Fork(Halogen_Query_ForkF.hoistFork(imapState(f)(f$prime))(v1.value0));
                };
                if (v1 instanceof GetRef) {
                    return new GetRef(v1.value0, v1.value1);
                };
                throw new Error("Failed pattern match at Halogen.Query.HalogenM line 150, column 8 - line 161, column 29: " + [ v1.constructor.name ]);
            };
            return Control_Monad_Free.hoistFree(go)(v);
        };
    };
};
var imapSlots = function (f) {
    return function (f$prime) {
        return function (v) {
            var go = function (v1) {
                if (v1 instanceof State) {
                    return new State(v1.value0);
                };
                if (v1 instanceof Subscribe) {
                    return new Subscribe(v1.value0, v1.value1);
                };
                if (v1 instanceof Lift) {
                    return new Lift(v1.value0);
                };
                if (v1 instanceof Halt) {
                    return new Halt(v1.value0);
                };
                if (v1 instanceof GetSlots) {
                    return new GetSlots(function ($178) {
                        return v1.value0(Data_Functor.map(Data_List_Types.functorList)(f$prime)($178));
                    });
                };
                if (v1 instanceof CheckSlot) {
                    return new CheckSlot(f(v1.value0), v1.value1);
                };
                if (v1 instanceof ChildQuery) {
                    return new ChildQuery(f(v1.value0), v1.value1);
                };
                if (v1 instanceof Raise) {
                    return new Raise(v1.value0, v1.value1);
                };
                if (v1 instanceof Par) {
                    return new Par(Data_Newtype.over(newtypeHalogenAp)(newtypeHalogenAp)(HalogenAp)(Control_Applicative_Free.hoistFreeAp(imapSlots(f)(f$prime)))(v1.value0));
                };
                if (v1 instanceof Fork) {
                    return new Fork(Halogen_Query_ForkF.hoistFork(imapSlots(f)(f$prime))(v1.value0));
                };
                if (v1 instanceof GetRef) {
                    return new GetRef(v1.value0, v1.value1);
                };
                throw new Error("Failed pattern match at Halogen.Query.HalogenM line 215, column 8 - line 226, column 29: " + [ v1.constructor.name ]);
            };
            return Control_Monad_Free.hoistFree(go)(v);
        };
    };
};
var hoist = function (dictFunctor) {
    return function (nat) {
        return function (v) {
            var go = function (v1) {
                if (v1 instanceof State) {
                    return new State(v1.value0);
                };
                if (v1 instanceof Subscribe) {
                    return new Subscribe(Halogen_Query_EventSource.hoist(dictFunctor)(nat)(v1.value0), v1.value1);
                };
                if (v1 instanceof Lift) {
                    return new Lift(nat(v1.value0));
                };
                if (v1 instanceof Halt) {
                    return new Halt(v1.value0);
                };
                if (v1 instanceof GetSlots) {
                    return new GetSlots(v1.value0);
                };
                if (v1 instanceof CheckSlot) {
                    return new CheckSlot(v1.value0, v1.value1);
                };
                if (v1 instanceof ChildQuery) {
                    return new ChildQuery(v1.value0, v1.value1);
                };
                if (v1 instanceof Raise) {
                    return new Raise(v1.value0, v1.value1);
                };
                if (v1 instanceof Par) {
                    return new Par(Data_Newtype.over(newtypeHalogenAp)(newtypeHalogenAp)(HalogenAp)(Control_Applicative_Free.hoistFreeAp(hoist(dictFunctor)(nat)))(v1.value0));
                };
                if (v1 instanceof Fork) {
                    return new Fork(Halogen_Query_ForkF.hoistFork(hoist(dictFunctor)(nat))(v1.value0));
                };
                if (v1 instanceof GetRef) {
                    return new GetRef(v1.value0, v1.value1);
                };
                throw new Error("Failed pattern match at Halogen.Query.HalogenM line 258, column 8 - line 269, column 28: " + [ v1.constructor.name ]);
            };
            return Control_Monad_Free.hoistFree(go)(v);
        };
    };
};
var halt = function (msg) {
    return HalogenM(Control_Monad_Free.liftF(new Halt(msg)));
};
var getSlots = HalogenM(Control_Monad_Free.liftF(new GetSlots(Control_Category.id(Control_Category.categoryFn))));
var getRef = function (p) {
    return HalogenM(Control_Monad_Free.liftF(new GetRef(p, Control_Category.id(Control_Category.categoryFn))));
};
var functorHalogenM = new Data_Functor.Functor(function (f) {
    return function (v) {
        return Data_Functor.map(Control_Monad_Free.freeFunctor)(f)(v);
    };
});
var functorHalogenAp = Control_Applicative_Free.functorFreeAp;
var functorHalogenF = function (dictFunctor) {
    return new Data_Functor.Functor(function (f) {
        return function (v) {
            if (v instanceof State) {
                return new State(function ($179) {
                    return Data_Bifunctor.lmap(Data_Tuple.bifunctorTuple)(f)(v.value0($179));
                });
            };
            if (v instanceof Subscribe) {
                return new Subscribe(v.value0, f(v.value1));
            };
            if (v instanceof Lift) {
                return new Lift(Data_Functor.map(dictFunctor)(f)(v.value0));
            };
            if (v instanceof Halt) {
                return new Halt(v.value0);
            };
            if (v instanceof CheckSlot) {
                return new CheckSlot(v.value0, Data_Functor.map(Data_Functor.functorFn)(f)(v.value1));
            };
            if (v instanceof GetSlots) {
                return new GetSlots(Data_Functor.map(Data_Functor.functorFn)(f)(v.value0));
            };
            if (v instanceof ChildQuery) {
                return new ChildQuery(v.value0, Data_Functor.map(Data_Coyoneda.functorCoyoneda)(f)(v.value1));
            };
            if (v instanceof Raise) {
                return new Raise(v.value0, f(v.value1));
            };
            if (v instanceof Par) {
                return new Par(Data_Functor.map(functorHalogenAp)(f)(v.value0));
            };
            if (v instanceof Fork) {
                return new Fork(Data_Functor.map(Halogen_Query_ForkF.functorFork)(f)(v.value0));
            };
            if (v instanceof GetRef) {
                return new GetRef(v.value0, Data_Functor.map(Data_Functor.functorFn)(f)(v.value1));
            };
            throw new Error("Failed pattern match at Halogen.Query.HalogenM line 45, column 11 - line 56, column 37: " + [ v.constructor.name ]);
        };
    });
};
var checkSlot = function (p) {
    return HalogenM(Control_Monad_Free.liftF(new CheckSlot(p, Control_Category.id(Control_Category.categoryFn))));
};
var applyHalogenM = new Control_Apply.Apply(function () {
    return functorHalogenM;
}, function (v) {
    return function (v1) {
        return Control_Apply.apply(Control_Monad_Free.freeApply)(v)(v1);
    };
});
var bindHalogenM = new Control_Bind.Bind(function () {
    return applyHalogenM;
}, function (v) {
    return function (f) {
        return Control_Bind.bind(Control_Monad_Free.freeBind)(v)(function (x) {
            var v1 = f(x);
            return v1;
        });
    };
});
var applyHalogenAp = Control_Applicative_Free.applyFreeAp;
var applicativeHalogenM = new Control_Applicative.Applicative(function () {
    return applyHalogenM;
}, function (a) {
    return Control_Applicative.pure(Control_Monad_Free.freeApplicative)(a);
});
var monadHalogenM = new Control_Monad.Monad(function () {
    return applicativeHalogenM;
}, function () {
    return bindHalogenM;
});
var monadAskHalogenM = function (dictMonadAsk) {
    return new Control_Monad_Reader_Class.MonadAsk(function () {
        return monadHalogenM;
    }, HalogenM(Control_Monad_Free.liftF(Lift.create(Control_Monad_Reader_Class.ask(dictMonadAsk)))));
};
var monadEffHalogenM = function (dictMonadEff) {
    return new Control_Monad_Eff_Class.MonadEff(function () {
        return monadHalogenM;
    }, function (eff) {
        return HalogenM(Control_Monad_Free.liftF(Lift.create(Control_Monad_Eff_Class.liftEff(dictMonadEff)(eff))));
    });
};
var monadAffHalogenM = function (dictMonadAff) {
    return new Control_Monad_Aff_Class.MonadAff(function () {
        return monadEffHalogenM(dictMonadAff.MonadEff0());
    }, function (aff) {
        return HalogenM(Control_Monad_Free.liftF(Lift.create(Control_Monad_Aff_Class.liftAff(dictMonadAff)(aff))));
    });
};
var monadForkHalogenM = function (dictMonadAff) {
    return new Control_Monad_Fork_Class.MonadFork(function () {
        return monadHalogenM;
    }, function (a) {
        return Data_Functor.map(functorHalogenM)(Data_Functor.map(Data_Functor.functorFn)(Control_Monad_Aff_Class.liftAff(monadAffHalogenM(dictMonadAff))))(Control_Monad_Free.liftF(Fork.create(Halogen_Query_ForkF.fork(a))));
    });
};
var monadStateHalogenM = new Control_Monad_State_Class.MonadState(function () {
    return monadHalogenM;
}, function ($180) {
    return HalogenM(Control_Monad_Free.liftF(State.create($180)));
});
var monadTellHalogenM = function (dictMonadTell) {
    return new Control_Monad_Writer_Class.MonadTell(function () {
        return monadHalogenM;
    }, function ($181) {
        return HalogenM(Control_Monad_Free.liftF(Lift.create(Control_Monad_Writer_Class.tell(dictMonadTell)($181))));
    });
};
var monadRecHalogenM = new Control_Monad_Rec_Class.MonadRec(function () {
    return monadHalogenM;
}, function (k) {
    return function (a) {
        var go = function (v) {
            if (v instanceof Control_Monad_Rec_Class.Loop) {
                return Control_Monad_Rec_Class.tailRecM(monadRecHalogenM)(k)(v.value0);
            };
            if (v instanceof Control_Monad_Rec_Class.Done) {
                return Control_Applicative.pure(applicativeHalogenM)(v.value0);
            };
            throw new Error("Failed pattern match at Halogen.Query.HalogenM line 100, column 5 - line 100, column 31: " + [ v.constructor.name ]);
        };
        return Control_Bind.bind(bindHalogenM)(k(a))(go);
    };
});
var applicativeHalogenAp = Control_Applicative_Free.applicativeFreeAp;
var parallelHalogenM = new Control_Parallel_Class.Parallel(function () {
    return applicativeHalogenAp;
}, function () {
    return monadHalogenM;
}, function ($182) {
    return HalogenAp(Control_Applicative_Free.liftFreeAp($182));
}, function ($183) {
    return HalogenM(Control_Monad_Free.liftF(Par.create($183)));
});
module.exports = {
    State: State,
    Subscribe: Subscribe,
    Lift: Lift,
    Halt: Halt,
    GetSlots: GetSlots,
    CheckSlot: CheckSlot,
    ChildQuery: ChildQuery,
    Raise: Raise,
    Par: Par,
    Fork: Fork,
    GetRef: GetRef,
    HalogenAp: HalogenAp,
    HalogenM: HalogenM,
    halt: halt,
    mkQuery: mkQuery,
    getSlots: getSlots,
    checkSlot: checkSlot,
    getRef: getRef,
    subscribe: subscribe,
    raise: raise,
    imapState: imapState,
    mapQuery: mapQuery,
    mapChildQuery: mapChildQuery,
    imapSlots: imapSlots,
    mapOutput: mapOutput,
    hoist: hoist,
    functorHalogenF: functorHalogenF,
    newtypeHalogenAp: newtypeHalogenAp,
    functorHalogenAp: functorHalogenAp,
    applyHalogenAp: applyHalogenAp,
    applicativeHalogenAp: applicativeHalogenAp,
    functorHalogenM: functorHalogenM,
    applyHalogenM: applyHalogenM,
    applicativeHalogenM: applicativeHalogenM,
    bindHalogenM: bindHalogenM,
    monadHalogenM: monadHalogenM,
    monadEffHalogenM: monadEffHalogenM,
    monadAffHalogenM: monadAffHalogenM,
    parallelHalogenM: parallelHalogenM,
    monadForkHalogenM: monadForkHalogenM,
    monadTransHalogenM: monadTransHalogenM,
    monadRecHalogenM: monadRecHalogenM,
    monadStateHalogenM: monadStateHalogenM,
    monadAskHalogenM: monadAskHalogenM,
    monadTellHalogenM: monadTellHalogenM
};
