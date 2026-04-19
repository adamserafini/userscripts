// ==UserScript==
// @name         FacebookFeedBlocker
// @description  Hides the Facebook feed to prevent distraction
// @match        https://www.facebook.com/*
// @grant        GM.addStyle
// ==/UserScript==

GM.addStyle(`
/* Block the main feed by standard data attributes */
[data-pagelet="NewsFeed"],
[data-pagelet="FeedUnit_0"] {
    display: none !important;
}

/* Block by standard ARIA role */
[role="feed"] {
    display: none !important;
}

/* Fallback: hide all feed posts (articles) inside the main layout,
   while preserving the "Create a post" box which is not an article. */
[role="main"] [role="article"] {
    display: none !important;
}
`);