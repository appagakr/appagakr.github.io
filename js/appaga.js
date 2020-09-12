"use strict";
(function (apg, $, undefined) {
    //Private Property
    const rootUrl = "https://appaga.kr/";
    let myPrivate = '변수';

    //Private Method
    function addItem(item) {
        if (item !== undefined) {
            console.log("Adding " + $.trim(item));
        }
    }

    //Public Property
    apg.ingredient = "Bacon Strips";

    //Public Method
    /*
        nav, footer 태그를 body에 추가한다.
     */
    apg.addInclude = function () {
        $('#apgIncludeDiv').load('/include.html', function (responseText, statusText, xhr) {
            //console.log('apg.addNav responseText', responseText);
            console.log('apg.addNav statusText', statusText);
            //console.log('apg.addNav xhr', xhr);
            $(this).find('nav').prependTo('body');
            $(this).find('footer').appendTo('body');
            $(this).remove(); /* 사용 완료 후 삭제 */
        })
    };

}(window.apg = window.apg || {}, jQuery));

$(function () {
        apg.addInclude();
    }
);