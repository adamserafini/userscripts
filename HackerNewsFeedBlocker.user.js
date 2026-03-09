// ==UserScript==
// @name         HackerNewsFeedBlocker
// @description  Hacker News Feed Blocker
// @match        https://news.ycombinator.com/
// @match        https://news.ycombinator.com/news
// @grant        GM.addStyle
// ==/UserScript==

GM.addStyle(`
#bigbox > td > table > tbody {
    display: none !important;
}
`);