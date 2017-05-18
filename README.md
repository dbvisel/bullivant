# bullivant.js

This makes mildly animated paged books. Demonstration is at https://danvisel.net/bullivant. Source code is in _/src_; distribution version is in _/dist_.

 * To install: _npm install_. The way I have this set up uses Node/NPM, but the project doesn't really require them.
 * To build: _npm run production_
 * To watch (useful while making changes in bookfile): _npm run watch_

This could be used with any content.

## Book data

The book data is in _js/src/bookdata.js_. Right now it's using Ivy Compton-Burnett's _Bullivant and the Lambs_ (the original American title for _Manservant and Maidservant_), though that's easy to change. The book data file is JSON. It contains five parts:

 * **duration** is how long (in seconds) each page should be shown by default if **autoplay** is set to **true**.
 * **background** is the default background for a page. This can be overridden.
 * **characters** is a list of the characters used in the book and their attributes.
 * **styles** is a list of the text styles used in the book for the characters' speech balloons.
 * **pages** is a list of all the pages in the book.

Inside of **pages** is a list of pages in order. Each page has:

 * **folio** is the page's page number, required; not currently displayed, but it's used for ordering.
 * **background**, what the page is using for a background. If this doesn't exist, we default to what the book has.
 * **characters**, any characters who may appear on the page. There don't need to be any characters.

**Characters** have several attributes. They are:

 * **name**, the way the character is referred to internally.
 * **style**, the default style that the character's texts are displayed in.
 * **images**, a list of different images that can be used for a character. Each **image** contains the image's filename, its dimensions, and the default way in which it is shown.

(The images that I'm using for characters are transparent GIFs. A smarter way to do this would be to use SVGs or PNGs, but those were the images I had lying around.)

**Styles** basically consist of:

 * **name**, the name of a style. This gets used in the character definition (and could be used on a page).
 * different font display properties (right now: *fontSize*, *lineHeight*, *fontFamily*, *textTransform*, *wordSpacing*, *letterSpacing*) for the speech bubble.
 * if used, the name of the animation that's used for a style. Animation definitions are in *_annimations.scss*

## Settings

_modules/settings.js_ contains things that can be changed:

 * **images.path** is the path to where image files can be found.
 * If **showcontrols** is set to **false**, controls will be hidden. (Keyboard controls still work, I think? Should test that.)
 * If **autoplay** is set to **true**, the pages will advance automatically based on the **duration** of a specific page (or failing that, the book's default **duration**).
 * If **controlsinside** is set to **true**, the controls will appear inside the stage (where they might appear over the characters or speech bubbles). 
