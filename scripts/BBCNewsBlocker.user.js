// ==UserScript==
// @name         BBC News Homepage Blocker
// @description  Hides the top news section on the BBC homepage
// @match        https://www.bbc.com/
// @grant        GM.addStyle
// ==/UserScript==

GM.addStyle(`
[data-testid*="-section-outer"] {
    display: none !important;
}
`);
