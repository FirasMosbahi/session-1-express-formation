"use strict";
//This operation is illegal because typescript can be strictly typed
//const x : number = "g"
//This op is legal now
var x = 12;
// declaring an array in ts
var array = ["test", 25, true];
//decaring a typed array
var atyped_array = ["test", "25", "true"];
// the any type
var any_var = 5;
any_var = true;
any_var = 'hello i am any';
//multi-types variables
var multi = true;
multi = 5;
var c = 5;
c = true;
c = "true";
//enums in ts
var States;
(function (States) {
    States[States["WAITING"] = 0] = "WAITING";
    States[States["ACTIVE"] = 1] = "ACTIVE";
    States[States["SUSPENDED"] = 2] = "SUSPENDED";
    States[States["DONE"] = 3] = "DONE";
})(States || (States = {}));
var e = States.WAITING;
e = States.ACTIVE;
e = States.SUSPENDED;
e = States.DONE;
