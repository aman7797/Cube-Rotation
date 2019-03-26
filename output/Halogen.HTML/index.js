// Generated by purs version 0.11.7
"use strict";
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Halogen_Component = require("../Halogen.Component");
var Halogen_Component_ChildPath = require("../Halogen.Component.ChildPath");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties");
var Prelude = require("../Prelude");
var slot$prime = function (i) {
    return function (p) {
        return function (component) {
            return function (input) {
                return function (outputQuery) {
                    var pq = Halogen_Component_ChildPath.prjQuery(i);
                    var f = function ($2) {
                        return Data_Functor.map(Data_Maybe.functorMaybe)(Halogen_Component_ChildPath.injQuery(i))(Halogen_Component.unComponent(function (v) {
                            return v.receiver;
                        })(component)($2));
                    };
                    return Halogen_HTML_Core.slot(Halogen_Component.mkComponentSlot(Halogen_Component_ChildPath.injSlot(i)(p))(component)(input)(f)(outputQuery)(pq));
                };
            };
        };
    };
};
var slot = function (p) {
    return function (component) {
        return function (input) {
            return function (outputQuery) {
                var f = Halogen_Component.unComponent(function (v) {
                    return v.receiver;
                })(component);
                return Halogen_HTML_Core.slot(Halogen_Component.mkComponentSlot(p)(component)(input)(f)(outputQuery)(Data_Maybe.Just.create));
            };
        };
    };
};
module.exports = {
    slot: slot,
    "slot'": slot$prime
};
