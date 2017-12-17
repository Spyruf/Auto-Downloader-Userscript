// ==UserScript==
// @name         Download Link Skipper (suprafiles, zippyshare, filemack, dbree, cloudyfiles, 9clacks)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Skips the extra clicking needed when downloading stuff
// @author       spyruf
// @include      *9clacks*.*
// @include      *srcleaks*.*
// @include      *suprafiles.*/*
// @include      *cloudyfiles.*/*
// @include      *filemack.com/*
// @include      *zippyshare.com/*
// @include      *dbr.ee/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js

// ==/UserScript==


if (window.top != window.self) //-- Don't run on frames or iframes
  return;


(function() {
  'use strict';

  console.log("window.location.href is: " + window.location.href);
  console.log("Link Skipper is running!");
  console.log("localStorage variable download is: " + localStorage.getItem("download"));

  // 9clacks stuff, ignore for most ppl

  if (localStorage.getItem("download") === null) {

    //console.log("settinglocalstorage");

    localStorage.setItem('download', 'null');
  }

  if (window.location.href.indexOf("9clacks") != -1) {

    console.log("I am on 9clacks page");

    $('a:contains("Read More")').click(
      function() {

        console.log("Read More clicked, proceeding to download");

        localStorage.setItem('download', 'true');

      });
  }
  if (window.location.href.indexOf("9clacks2") != -1 && localStorage.getItem("download") == 'true') {

    console.log("finding Link");

    var link = $('a:contains("cloudyfiles")').attr('href');
    link = link.slice(link.indexOf("=") + 1);
    console.log("Link is: " + link);


    localStorage.setItem('download', 'false');
    window.history.back();
    window.open(link, "_blank");

  } else if (window.location.href.indexOf("srcleaks") != -1) {

    console.log("getting dl link");

    // First try dbree
    // Then suprafiles
    // Then any iTunes DL
    // Then any at all

    //iTunes
    if ($('a:contains("iTunes DL"):contains("dbree")')[0] !== null)
      $('a:contains("iTunes DL"):contains("dbree")')[0].click();
    else if ($('a:contains("iTunes DL"):contains("suprafiles")')[0] !== null)
      $('a:contains("iTunes DL"):contains("suprafiles")')[0].click();
    else if ($('a:contains("iTunes")')[0] !== null)
      $('a:contains("iTunes")')[0].click();

    //320
    else if ($('a:contains("320 DL"):contains("dbree")')[0] !== null)
      $('a:contains("320 DL"):contains("dbree")')[0].click();
    else if ($('a:contains("320 DL"):contains("suprafiles")')[0] !== null)
      $('a:contains("320 DL"):contains("suprafiles")')[0].click();
    else if ($('a:contains("320 DL")')[0] !== null)
      $('a:contains("320 DL")')[0].click();


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

    var cloudysubmit = $(':submit').each(function() {
      (this).click();
    });

    $('.btn-xs')[0].click();

    alert($('a:contains("s1")'));
    $('a:contains("s1")')[0].click();


  } else if (window.location.href.indexOf("dbr") != -1) {

    $('#download_btn')[0].click();

  }

})();
