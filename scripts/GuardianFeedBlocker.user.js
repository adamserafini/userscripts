// ==UserScript==
// @name         Guardian Feed Blocker
// @description  Hides the news feeds on the Guardian homepage and the Most Viewed section on articles
// @match        https://www.theguardian.com/*
// @grant        GM.addStyle
// ==/UserScript==

// Note: Using a global match but applying to specific feed containers.
// This hides the homepage news sections but keeps articles visible.
GM.addStyle(`
#maincontent > section {
    display: none !important;
}
#trending-topics {
    display: none !important;
}
[data-component="highlights"] {
    display: none !important;
}
`);
