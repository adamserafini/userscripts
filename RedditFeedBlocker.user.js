// ==UserScript==
// @name        RedditFeedBlocker
// @description Block Reddit Feed and Masthead Carousel
// @match       https://www.reddit.com/
// @grant       GM.addStyle
// ==/UserScript==

GM.addStyle(`
shreddit-feed, shreddit-gallery-carousel {
    display: none !important;
}
`);