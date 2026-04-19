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
 * Desktop: main > div (wrapper) > div (grid) > div:nth-child(2) (center column) > div (inner wrapper)
 * Mobile: main section.feeds
 * We keep the "Start a post" box visible on desktop and hide everything else.
 */
main > div:first-child > div:first-child > div:nth-child(2) > div:first-child > *:not(:first-child),
main section.feeds {
    display: none !important;
}
`);