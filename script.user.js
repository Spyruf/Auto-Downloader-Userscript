// ==UserScript==
// @name         Download Link Skipper (suprafiles, zippyshare, filemack)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Skips the extra clicking needed when downloading stuff
// @author       spyruf
// @include      http://*suprafiles.*/*
// @include      https://*filemack.com/*
// @include      http://*zippyshare.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==

if (window.top != window.self)  //-- Don't run on frames or iframes
    return;


(function() {
    'use strict';

    console.log("window.location.href is: " + window.location.href);
    console.log(" Link Skipper is running!");

    if (window.location.href.indexOf("zs_") != -1 ){


        var s = $(':submit').each(function() {
            (this).click();
        });

        //console.log("you're on submit");

    }

    else if (window.location.href.indexOf("filemack") != -1 ){

        //selects the element that has the link -- jquery obj version
        var f = $('a.truncate[href*="zs_"]').each(function() {

        });


        //f.css( "text-decoration", "bold" );

        var fValue = f.attr("href");

        //console.log("Link Address filemack : " + fValue);

        window.open(fValue,"_self");

        //console.log("Still running filemack : " + fValue);


    }

    else if (window.location.href.indexOf("zippyshare") != -1 ){

        //console.log("boutta cop");

        $('#dlbutton')[0].click();


        localStorage.setItem('download', 'false');


    }

    else if (window.location.href.indexOf("suprafiles") != -1 ){

        var supraSubmit = $(':submit').each(function() {
            (this).click();
        });

        $('a:contains("fs")')[0].click();

    }

})();
