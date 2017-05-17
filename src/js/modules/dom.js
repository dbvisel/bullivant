// dom.js
// @flow
//
// this module is basic dom manipulation

"use strict";

const dom = {
	create: function(htmlStr) {
		let frag = document.createDocumentFragment();
		let temp = document.createElement('div');
		temp.innerHTML = htmlStr;
		while (temp.firstChild) {
			frag.appendChild(temp.firstChild);
		}
		return frag;
	},
	removebyselector: function(selectorstring) {
		const selector = document.querySelector(selectorstring);
		if(selector !== null) {
			if(selector.parentNode && selector.parentNode !== null) {
				selector.parentNode.removeChild(selector);
			}
		}
	},
	addclass: function(selectorstring, myclass) {
		const myelementlist = document.querySelectorAll(selectorstring);
		if(myclass.indexOf(" ") > -1) {
			var classes  = myclass.split(" ");
			for(var j = 0; j < classes.length; j++) {
				dom.addclass(selectorstring, classes[j]);
			}
		} else {
			for (var i = 0; i < myelementlist.length; i++) {
				myelementlist[i].classList.add(myclass);
			}
		}
	},
	removeclass: function(selectorstring, myclass) {
		const myelementlist = document.querySelectorAll(selectorstring);
		if(myclass.indexOf(" ") > -1) {
			let classes = myclass.split(" ");
			for(let j = 0; j < classes.length; j++) {
				dom.removeclass(selectorstring, classes[j]);
			}
		} else {
			for (let i = 0; i < myelementlist.length; i++) {
				myelementlist[i].classList.remove(myclass);
			}
		}
	},
	hasclass: function(element, classname) {
		return (' ' + element.className + ' ').indexOf(' ' + classname + ' ') > -1;
	},
	getStyle: function (e, styleName) {
		var styleValue = "";
		if(document.defaultView && document.defaultView.getComputedStyle) {
			styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
		}
		else if(e.currentStyle) {
			styleName = styleName.replace(/\-(\w)/g, function (strMatch, p1) {
				return p1.toUpperCase();
			});
			styleValue = e.currentStyle[styleName];
		}
		return styleValue;
	}
};

module.exports = dom;
