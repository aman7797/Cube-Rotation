// Generated by purs version 0.11.7
"use strict";
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Lens = require("../Data.Lens");
var Data_Lens_Fold = require("../Data.Lens.Fold");
var Data_Lens_Internal_Forget = require("../Data.Lens.Internal.Forget");
var Data_Lens_Internal_Tagged = require("../Data.Lens.Internal.Tagged");
var Data_Lens_Prism = require("../Data.Lens.Prism");
var Data_Lens_Prism_Coproduct = require("../Data.Lens.Prism.Coproduct");
var Data_Lens_Prism_Either = require("../Data.Lens.Prism.Either");
var Data_Maybe = require("../Data.Maybe");
var Data_Maybe_First = require("../Data.Maybe.First");
var Halogen_Data_Prism = require("../Halogen.Data.Prism");
var Prelude = require("../Prelude");
var ChildPath = (function () {
    function ChildPath(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    ChildPath.create = function (value0) {
        return function (value1) {
            return new ChildPath(value0, value1);
        };
    };
    return ChildPath;
})();
var prjSlot = function (v) {
    return Data_Lens_Fold.preview(v.value1(Data_Lens_Internal_Forget.choiceForget(Data_Maybe_First.monoidFirst)));
};
var prjQuery = function (v) {
    return Data_Lens_Fold.preview(v.value0(Data_Lens_Internal_Forget.choiceForget(Data_Maybe_First.monoidFirst)));
};
var injSlot = function (v) {
    return Data_Lens_Prism.review(v.value1(Data_Lens_Internal_Tagged.taggedChoice));
};
var injQuery = function (v) {
    return Data_Lens_Prism.review(v.value0(Data_Lens_Internal_Tagged.taggedChoice));
};
var cpR = new ChildPath(function (dictChoice) {
    return Data_Lens_Prism_Coproduct._Right(dictChoice);
}, function (dictChoice) {
    return Data_Lens_Prism_Either._Right(dictChoice);
});
var cpL = new ChildPath(function (dictChoice) {
    return Data_Lens_Prism_Coproduct._Left(dictChoice);
}, function (dictChoice) {
    return Data_Lens_Prism_Either._Left(dictChoice);
});
var cpI = new ChildPath(function (dictChoice) {
    return Control_Category.id(Control_Category.categoryFn);
}, function (dictChoice) {
    return Control_Category.id(Control_Category.categoryFn);
});
var cp9 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct9(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either9(dictChoice);
});
var cp8 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct8(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either8(dictChoice);
});
var cp7 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct7(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either7(dictChoice);
});
var cp6 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct6(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either6(dictChoice);
});
var cp5 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct5(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either5(dictChoice);
});
var cp4 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct4(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either4(dictChoice);
});
var cp3 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct3(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either3(dictChoice);
});
var cp2 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct2(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either2(dictChoice);
});
var cp10 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct10(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either10(dictChoice);
});
var cp1 = new ChildPath(function (dictChoice) {
    return Halogen_Data_Prism._Coproduct1(dictChoice);
}, function (dictChoice) {
    return Halogen_Data_Prism._Either1(dictChoice);
});
var compose = function (v) {
    return function (v1) {
        return new ChildPath(function (dictChoice) {
            return function ($52) {
                return v.value0(dictChoice)(v1.value0(dictChoice)($52));
            };
        }, function (dictChoice) {
            return function ($53) {
                return v.value1(dictChoice)(v1.value1(dictChoice)($53));
            };
        });
    };
};
module.exports = {
    ChildPath: ChildPath,
    compose: compose,
    cp1: cp1,
    cp10: cp10,
    cp2: cp2,
    cp3: cp3,
    cp4: cp4,
    cp5: cp5,
    cp6: cp6,
    cp7: cp7,
    cp8: cp8,
    cp9: cp9,
    cpI: cpI,
    cpL: cpL,
    cpR: cpR,
    injQuery: injQuery,
    injSlot: injSlot,
    prjQuery: prjQuery,
    prjSlot: prjSlot
};
