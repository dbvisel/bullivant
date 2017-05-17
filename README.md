# bullivant.js

This makes mildly animated paged books. Source code is in _/src_; distribution version is in _/dist_.

 * To install: _node install_
 * To build: _npm run production_
 * To watch (useful while making changes in bookfile): _npm run watch_

This could be used with any content. The book data is in _js/src/bookdata.js_. Right now it's using Ivy Compton-Burnett's _Bullivant and the Lambs_ (the original American title for _Manservant and Maidservant_), though that's easy to change. The book data file is JSON. It contains four parts:

 * _background_ is the default background for a page. This can be overridden.
 * _characters_ is a list of the characters used in the book and their attributes.
 * _styles_ is a list of the text styles used in the book for the characters' speech balloons.
 * _pages_ is a list of all the pages in the book.

Inside of _pages_ is a list of pages in order. Each page has:

 * _folio_ is the page's page number; not currently displayed, but it's used for ordering.
 * _background_, what the page is using for a background
 * _characters_, any characters who may appear on the page.
