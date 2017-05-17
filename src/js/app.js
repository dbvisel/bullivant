// bullivant.js

"use strict";

const dom = require("./modules/dom.js");
const bookdata = require("./bookdata.js");
const settings = require("./modules/settings.js");

let appdata = {
	page: 0
};

const app = {
	initialize: function() {

		app.preload(); 		// preload images

		app.render(appdata.page);

		window.onresize = function() {
			app.render(appdata.page);			// this could maybe be debounced, but it's okay for now
		};

		// set up controls

		document.querySelector("#controls #left").onclick = app.goleft;
		document.querySelector("#controls #right").onclick = app.goright;
		document.querySelector("#characterlayer").onclick = app.goright;
		app.setupkeys();

	},
	preload: function() {
		let imagelist = [];
		if(bookdata.background.filename) {
			imagelist.push(bookdata.background.filename);
		}
		for(let i = 0; i < bookdata.characters.length; i++) {
			for(let j = 0; j < bookdata.characters[i].images.length; j++) {
				if(bookdata.characters[i].images[j].filename) {
					if(imagelist.indexOf(bookdata.characters[i].images[j].filename) < 0) {
						imagelist.push(bookdata.characters[i].images[j].filename);

						// would be good to figure out width and height of these images and put this into bookdata?

					}
				}
			}
		}
		for(let i =0; i < bookdata.pages.length; i++) {
			if(bookdata.pages[i].background.filename) {
				if(imagelist.indexOf(bookdata.pages[i].background.filename) < 0) {
					imagelist.push(bookdata.pages[i].background.filename);
				}
			}
		}

		// from here: http://stackoverflow.com/questions/8264528/image-preloader-javascript-that-supports-events/8265310#8265310

		function preloadImages(srcs) {
			function loadImage(src) {
				return new Promise(function(resolve, reject) {
					var img = new Image();
					img.onload = function() {
						resolve(img);
					};
					img.onerror = img.onabort = function() {
						reject(src);
					};
					img.src = settings.paths.images + src;
				});
			}
			var promises = [];
			for (var i = 0; i < srcs.length; i++) {
				promises.push(loadImage(srcs[i]));
			}
			return Promise.all(promises);
		}

		preloadImages(imagelist).then(function(imgs) {
		// all images are loaded now and in the array imgs
			console.log(`${imgs.length} images have been preloaded.`);
		}, function(errImg) {
			console.log("Images failed to preload:");
			console.log(errImg);
		});
	},
	setupkeys: function() {
		document.body.onkeydown = (e) => {
			e.preventDefault();
			if((e.keyCode || e.which) === 37) {
				app.goleft();
			}
			if((e.keyCode || e.which) === 39) {
				app.goright();
			}
			if((e.keyCode || e.which) === 36) {	// home: right now this goes to the first slide
				appdata.page = 0;
				app.render(0);
			}
			if((e.keyCode || e.which) === 35) {	// end: right now this goes to the last slide
				appdata.page = bookdata.pages.length - 1;
				app.render(appdata.page);
			}
		};
	},
	goleft: function() {
		if(appdata.page > 0) {
			appdata.page--;
			app.render(appdata.page);
		}
	},
	goright: function() {
		if(appdata.page < (bookdata.pages.length - 1)) {
			appdata.page++;
			app.render(appdata.page);
		}
	},
	render: function(pagenumber) {

		// would it be better to go to a bookdata.pages[pagenumber] model?

		for(let i = 0; i < bookdata.pages.length; i++) {
			if(bookdata.pages[i].folio == pagenumber) {
				const pagedata = bookdata.pages[i];
				console.log(`Rendering page ${pagenumber}.`);

				// render controls

				if(settings.showcontrols) {
					dom.removeclass("#controls #left","off");
					dom.removeclass("#controls #right","off");
					if(i == 0) {
						dom.addclass("#controls #left","off");
					}
				} else {
					dom.addclass("#controls #left","off");
					dom.addclass("#controls #right","off");
				}


				if(i == (bookdata.pages.length - 1)) {
					if(settings.showcontrols) {
						dom.addclass("#controls #right","off");
					}
				} else {
					// there could be a next page
					if(settings.autoplay) {
						setTimeout(app.goright, (pagedata.duration || bookdata.duration) * 1000);
					}
				}

				// render background

				document.querySelector("#background").style.backgroundImage = `url("${settings.paths.images}${pagedata.background.filename || bookdata.background.filename}")`;
				document.querySelector("#scrim").style.backgroundColor = pagedata.background.color || bookdata.background.color;
				document.querySelector("#scrim").style.opacity = pagedata.background.opacity || bookdata.background.opacity;

				// render folio?

				// render loose text?

				// 1 delete current characters
				// make this smarter!

				let bubbles = document.querySelectorAll(".character,.textbubble");
				for(let bubble of bubbles) {
					dom.removebyselector("#"+bubble.id);
				}

				// 2 loop for characters

				if(pagedata.characters) {
					for(let j = 0; j < pagedata.characters.length; j++) {
						for(let k = 0; k < bookdata.characters.length; k++) {
							if(pagedata.characters[j].name == bookdata.characters[k].name) {
								let character = pagedata.characters[j];
								let characterdef = bookdata.characters[k];
								for(let l = 0; l < bookdata.characters[k].images.length; l++) {
									if(pagedata.characters[j].direction == bookdata.characters[k].images[l].direction) {

										let newchar = dom.create(`<div class="character" id="character${j}"></div>`);
										document.getElementById("characterlayer").appendChild(newchar);
										let char = document.getElementById(`character${j}`);
										char.style.backgroundImage = `url("${settings.paths.images}${characterdef.images[l].filename}")`;
										char.style.transform = `rotate(${character.rotation || characterdef.images[l].rotation}deg)`;

										let stageheight = document.getElementById("characterlayer").clientHeight;
										let stagewidth = document.getElementById("characterlayer").clientWidth;

										let resize = (character.magnify || characterdef.images[l].magnify) * stageheight / ( characterdef.images[l].height * 100 );

										let characterwidth = characterdef.images[l].width * resize;
										let characterheight = characterdef.images[l].height * resize;
										let characterxoffset = (character.xoffset || characterdef.images[l].xoffset) * stagewidth / 100;
										let characteryoffset = (character.yoffset || characterdef.images[l].yoffset) * stageheight / 100;

										char.style.width = `${characterwidth}px`;
										char.style.height = `${characterheight}px`;
										char.style.left = `${characterxoffset}px`;
										char.style.bottom = `${characteryoffset}px`;

										if((character.animation || characterdef.images[l].animation)) {
											char.classList.add(`animation_${(character.animation || characterdef.images[l].animation)}`);
										}

										// deal with text

										if(character.text) {
											if(character.text.content) {

												let newtext = dom.create(`<div class="textbubble" id="textbubble${j}">${character.text.content}</div>`);
												document.getElementById("characterlayer").appendChild(newtext);
												let textbubble = document.getElementById(`textbubble${j}`);

												let textbubblewidth = (character.text.width || characterdef.images[l].text.width) * characterwidth / 100;
												let textbubblexoffset = (characterwidth * (character.text.xoffset || characterdef.images[l].text.xoffset) /100) + characterxoffset - ((textbubblewidth - characterwidth) / 2);
												let textbubbleyoffset = (characterheight * (character.text.yoffset || characterdef.images[l].text.yoffset)/100) + characterheight + characteryoffset;

												textbubble.style.width = `${textbubblewidth}px`;
												textbubble.style.left = `${textbubblexoffset}px`;
												textbubble.style.bottom = `${textbubbleyoffset}px`;

												app.styletext(textbubble, (character.text.style || characterdef.style));

											}
										}
									}
								}
							}
						}
					}
				} else {
				//	console.log("No characters on this page.");
				}
			}
		}
	},
	styletext: function(elem, style) {
		for(let i = 0; i < bookdata.styles.length; i++) {
			if(bookdata.styles[i].name == style) {
				let mystyle = bookdata.styles[i];
				// console.log(`Style found: ${style}`);
				elem.classList.add(`character_${style}`);

				let mypx = document.getElementById("characterlayer").clientHeight/768;
				if(mystyle.fontSize) {
					elem.style.fontSize = mystyle.fontSize * mypx + "px";
				}
				if(mystyle.lineHeight) {
					elem.style.lineHeight = mystyle.lineHeight * mypx + "px";
				}
				if(mystyle.fontFamily) {
					elem.style.fontFamily = mystyle.fontFamily;
				}
				if(mystyle.textTransform) {
					elem.style.textTransform = mystyle.textTransform;
				}
				if(mystyle.textTransform) {
					elem.style.textTransform = mystyle.textTransform;
				}
				if(mystyle.wordSpacing) {
					elem.style.wordSpacing = mystyle.wordSpacing * mypx + "px";
				}
				if(mystyle.letterSpacing) {
					elem.style.letterSpacing = mystyle.letterSpacing * mypx + "px";
				}
				if(mystyle.color) {
					elem.style.color = mystyle.color * mypx + "px";
				}
				if(mystyle.textanimation) {
					elem.classList.add(`animation_${mystyle.textanimation}`);
				}

				return;
			}
		}
		console.log(`Warning: style ${style} not found!`);
	}
};

app.initialize();
