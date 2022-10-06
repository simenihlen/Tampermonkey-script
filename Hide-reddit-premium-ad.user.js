// ==UserScript==
// @name         Hide-reddit-premium-ad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Simen HI
// @match        *://*.reddit.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    document.querySelectorAll("[href='/premium']")
        .forEach(i => (i.style.display = 'none'));
});