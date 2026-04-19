// ==UserScript==
// @name         FacebookFeedBlocker
// @description  Hides the Facebook feed to prevent distraction
// @match        https://www.facebook.com/*
// @match        https://m.facebook.com/*
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

/* Hard Fallback: Facebook desktop heavily obfuscates and removes ARIA roles.
   We target the central column and hide everything from the 3rd child onwards.
   This guarantees the feed is hidden, while keeping "Create a post" visible. */
[role="main"] > div:first-child > div:first-child > div:first-child > div:nth-child(2) > div:first-child > div:nth-child(n+3) {
    display: none !important;
}

/* Mobile Facebook (m.facebook.com) selectors */
#m_newsfeed_stream,
#MNewsFeed,
#m_news_feed_stream,
div[data-sigil="marea"] {
    display: none !important;
}
`);