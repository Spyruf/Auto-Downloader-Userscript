// ==UserScript==
// @name         Download Link Skipper (suprafiles, zippyshare, filemack)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Skips the extra clicking needed when downloading stuff
// @author       spyruf
// @include      *suprafiles.*/*
// @include      *cloudyfiles.*/*
// @include      *filemack.com/*
// @include      *zippyshare.com/*
// @include      *dbr.ee/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==



// TEST 1 TEST 2 TEST 3

if (window.top != window.self) //-- Don't run on frames or iframes
  return;


(function() {
  'use strict';

  console.log("window.location.href is: " + window.location.href);
  console.log(" Link Skipper is running!");

  if (window.location.href.indexOf("zs_") != -1) {


    var s = $(':submit').each(function() {
      (this).click();
    });

    //console.log("you're on submit");

  } else if (window.location.href.indexOf("filemack") != -1) {

    //selects the element that has the link -- jquery obj version
    var f = $('a.truncate[href*="zs_"]').each(function() {

    });


    //f.css( "text-decoration", "bold" );

    var fValue = f.attr("href");

    //console.log("Link Address filemack : " + fValue);

    window.open(fValue, "_self");

    //console.log("Still running filemack : " + fValue);


  } else if (window.location.href.indexOf("zippyshare") != -1) {

    //console.log("boutta cop");

    $('#dlbutton')[0].click();


    localStorage.setItem('download', 'false');


  } else if (window.location.href.indexOf("suprafiles") != -1) {

    var supraSubmit = $(':submit').each(function() {
      (this).click();
    });

    $('a:contains("fs")')[0].click();

  } else if (window.location.href.indexOf("cloudyfiles") != -1) {

    var supraSubmit = $(':submit').each(function() {
      (this).click();
    });

    $('.btn-xs')[0].click();

    $('a:contains("s1")')[0].click();


  } else if (window.location.href.indexOf("dbr") != -1) {

    $('#download_btn')[0].click();

  }

})();
