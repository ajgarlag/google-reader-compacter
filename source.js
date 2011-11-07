// ==UserScript==
// @name        Google Reader Compacter
// @namespace   http://aj.garcialagar.es/gmscripts
// @description To compact the new Google Reader Interface
// @version	1.0.1
// @include     http://www.google.*/reader/*
// @include     https://www.google.*/reader/*
// ==/UserScript==

// @author	Antonio J. García Lagar <aj@garcialagar.es>
// @copyright	Copyright (c) 2011, Antonio J. García Lagar <aj@garcialagar.es>
// @license	http://www.opensource.org/licenses/BSD-3-Clause

var styleText='';

styleText += ' #sections-header {height: 40px}';
styleText += ' #logo-section {height: 28px}';
styleText += ' #viewer-header {height: 40px}';
styleText += ' #lhn-add-subscription-section {height: 40px}';
styleText += ' #viewer-view-options, #mark-all-as-read-split-button, #viewer-top-controls .goog-button {margin-right: 0.2em}';
styleText += ' #nav {width: 245px}';
styleText += ' #chrome {margin-left: 245px}';
styleText += ' #top-bar {height: 45px}';
styleText += ' #search {padding: 8px 0}';
styleText += ' #scrollable-sections-top-shadow, #scrollable-sections-bottom-shadow {width: 245px}';
styleText += ' #entries {padding-right: 0}';
styleText += ' #entries.list .entry .collapsed {padding: 0}';
styleText += ' #entries.list .collapsed .entry-icons {top: 0}';
styleText += ' #entries.list .collapsed .entry-main .entry-source-title {top: 0}';
styleText += ' #entries.list .collapsed .entry-secondary {top: 0}';

/* Write down the style
-------------------------------------------------------------------------------------------------------- */

var head = document.getElementsByTagName('head')[0],
    style = document.createElement('style'),
    rules = document.createTextNode(styleText);

style.type = 'text/css';
if(style.styleSheet)  style.styleSheet.cssText = rules.nodeValue;
else style.appendChild(rules);
head.appendChild(style);
