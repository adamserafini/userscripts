# Agent Instructions for My Userscripts

If you are an AI agent tasked with adding a feed blocker for a new website, follow these instructions:

## 1. Create the Script Skeleton

Create a new file in the `scripts/` directory named `[SiteName]FeedBlocker.user.js` (e.g., `TwitterFeedBlocker.user.js`).
Include the standard Userscript metadata block:

```javascript
// ==UserScript==
// @name         [SiteName]FeedBlocker
// @description  Hides the [SiteName] feed to prevent distraction
// @match        https://www.[sitename].com/*
// @grant        GM.addStyle
// ==/UserScript==

GM.addStyle(`
/* CSS to hide feed goes here */
`);
```

## 2. Identify the CSS Selector

Many modern websites (like LinkedIn, Facebook, X/Twitter) heavily obfuscate their CSS classes (e.g., `_8ed1d4f5`).

**Best approaches to find stable selectors:**

1. **AppleScript via Safari (macOS):** If the user is logged into Safari, use AppleScript to query the DOM of the active tab. Example script to inspect the `main` element:
   ```bash
   osascript -e '
   tell application "Safari"
       set targetTab to missing value
       repeat with w in windows
           repeat with t in tabs of w
               if URL of t contains "sitename.com" then
                   set targetTab to t
                   exit repeat
               end if
           end repeat
           if targetTab is not missing value then exit repeat
       end repeat
       
       set jsCode to "JSON.stringify(Array.from(document.querySelector(\"main\").children).map(c => c.tagName + \" \" + c.className), null, 2);"
       do JavaScript jsCode in targetTab
   end tell
   '
   ```
1. **Structural Selectors:** Use `nth-child` or tag hierarchy rather than obfuscated class names. For instance:
   `main > div:first-child > div:nth-child(2) > div > *:not(:first-child)`
1. **ARIA / Accessibility Attributes:** Look for standard HTML5 elements or ARIA roles that rarely change:
   `[role="feed"]`, `[aria-label*="Feed"]`, `main`, `article`.
1. **Playwright:** If the site doesn't require a complex login, or if the user is willing to manually log in within a Playwright persistent session, you can use the `playwright-cli` skill.

## 3. Implement and Test

- Add the `display: none !important;` rule to the chosen selector inside `GM.addStyle()`.
- Whenever possible, try to leave "creation" boxes (like "Start a post" or "Compose tweet") visible, so the user can still post without getting sucked into the feed.
- If using AppleScript, you can inject a `<style>` tag live into the Safari tab to test your CSS selector instantly before saving it to the file.

## 4. Export the Scripts

Remind the user they can package the scripts for easy import into Tampermonkey by running:

```bash
zip -j scripts.zip scripts/*.js
```
