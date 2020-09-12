"use strict";
(function (apg, $, undefined) {
    //Private Property
    let myPrivate = '변수';
    const myConst = "상수";

    //Private Method
    function addItem(item) {
        if (item !== undefined) {
            console.log("Adding " + $.trim(item));
        }
    }

    //Public Property
    apg.ingredient = "Bacon Strips";

    //Public Method
    apg.fry = function () {
        let oliveOil;

        addItem("\t\n Butter \n\t");
        addItem(oliveOil);
        console.log("Frying " + apg.ingredient);
    };

}(window.apg = window.apg || {}, jQuery));