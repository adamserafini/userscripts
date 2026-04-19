// ==UserScript==
// @name         LinkedinFeedBlocker
// @description  Hides the LinkedIn feed to prevent distraction
// @match        https://www.linkedin.com/feed/*
// @match        https://www.linkedin.com/
// @grant        GM.addStyle
// ==/UserScript==

GM.addStyle(`
/* 
 * LinkedIn heavily obfuscates its class names, so we use structural selectors.
 * main > div (wrapper) > div (grid) > div:nth-child(2) (center column) > div (inner wrapper)
 * We keep the first child (the "Start a post" box) and hide everything else.
 */
main > div:first-child > div:first-child > div:nth-child(2) > div:first-child > *:not(:first-child) {
    display: none !important;
}
`);