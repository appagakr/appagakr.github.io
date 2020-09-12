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
    apg.addNav = function () {
        $('nav').load('/include.html nav', function (responseText, statusText, xhr) {
            console.log('apg.addNav', responseText);
            console.log('apg.addNav', statusText);
            console.log('apg.addNav', xhr);
        })
    };

}(window.apg = window.apg || {}, jQuery));

$(function () {
        apg.addNav();
    }
);