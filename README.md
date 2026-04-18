# My Userscripts

In honour of [B.F. Skinner](https://en.wikipedia.org/wiki/B._F._Skinner)!

The internet is full of variable rewards - and that's why you look at your phone too much.

Install these userscripts and enjoy wonderfully empty feeds on common internet properties with no loss of core functionality. Your phone will become so boring you _might_ actually read more books. Instead of reading Hacker News on your laptop you _might_ actually do some work.

*Note*: These scripts are provided without any guarantee of improved productivity.

## What is a userscript?

"userscripts" are a de-facto standard format for scripts, understood by multiple independent browser extension implementations, that modify browser behaviour at runtime.

## How do these help?

Variable rewards (aka. "feeds" on the internet) tap into the same biological mechanisms that make gambling very addictive. On the other hand, useful information exists on Reddit, Hacker News etc. and if you have any friends, they sometimes share links to those websites which you might like to read.

These scripts let you keep reading all the good stuff (content), but make the homepages of websites like Reddit and Hacker News incredibly boring, eventually training your brain that there is no excitement to be found at these addictive URLs.

## Instructions to install

The scripts are tested to be compatible with the following extensions:

1. [userscripts](https://github.com/quoid/userscripts) for Safari (MacOSX/iOS)
1. [Tampermonkey](https://www.tampermonkey.net/) for Chrome

### Safari

Follow the instructions [here](https://github.com/quoid/userscripts?tab=readme-ov-file#installation) to install `userscripts` on your devices. Clone this repository into your iCloud drive and point the extension to the `scripts` folder in this directory.

Note: on iOS you should disable the Preload Top Hit option in your Safari settings. Due to Apple bug, scripts don't always run on a preloaded URL.

### Chrome

Install the [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension from the Chrome Web Store. You can easily import all scripts into Tampermonkey using a zip file.

### Exporting to Zip

Run the following command to package the scripts as a zip file for easy import:

```bash
zip -j scripts.zip scripts/*.js
```
