"use strict";

const bookdata = {
	duration: 4,
	background: {
		filename: "background.jpg",
		color: "#000000",
		opacity: 0.5
	},
	characters: [
		{
			name: "horace",
			images: [
				{
					direction: "left",
					filename: 'crocodileleft.gif',
					magnify: 150,
					rotation: 20,
					width: 463,
					height: 1261,
					xoffset: 0,
					yoffset: -80,
					animation: "backandforth",
					text: {
						width: 100,
						xoffset: 20,
						yoffset: 2
					}
				},
				{
					direction: "right",
					filename: 'crocodileright.gif',
					magnify: 150,
					rotation: 20,
					width: 463,
					height: 1261,
					xoffset: 0,
					yoffset: -80,
					animation: "backandforth",
					text: {
						width: 100,
						xoffset: 20,
						yoffset: 2
					}
				}
			],
			style: "horace"
		},
		{
			name: "mortimer",
			images: [
				{
					direction: "left",
					filename: 'humpbackwhaleleft.gif',
					magnify: 110,
					rotation: 10,
					width: 589,
					height: 1802,
					xoffset: 0,
					yoffset: -50,
					animation: "rotator",
					text: {
						width: 150,
						xoffset: -10,
						yoffset: 2
					}
				},
				{
					direction: "right",
					filename: 'humpbackwhaleright.gif',
					magnify: 110,
					rotation: -10,
					width: 589,
					height: 1802,
					xoffset: 60,
					yoffset: -50,
					animation: "rotator",
					text: {
						width: 150,
						xoffset: -20,
						yoffset: 2
					}
				}
			],
			style: "mortimer"
		},
		{
			name: "bullivant",
			images: [
				{
					direction: "left",
					filename: 'sealleft.gif',
					magnify: 66.66,
					rotation: 0,
					width: 352,
					height: 630,
					xoffset: 10,
					yoffset: 0,
					animation: "moveup",
					text: {
						width: 110,
						xoffset: 20,
						yoffset: 4
					}
				},
				{
					direction: "right",
					filename: 'sealright.gif',
					magnify: 66.66,
					rotation: 0,
					width: 352,
					height: 630,
					xoffset: 60,
					yoffset: 0,
					animation: "moveup",
					text: {
						width: 110,
						xoffset: -20,
						yoffset: 4
					}
				}
			],
			style: "bullivant"
		}
	],
	styles: [
		{
			name: "mortimer",
			fontSize: 22,
			lineHeight: 28,
			fontFamily: 'sorts_mill_goudyregular',
			textTransform: "uppercase",
			letterSpacing: 3,
			textanimation: 'backandforth'
		},
		{
			name: "bullivant",
			fontSize: 26,
			lineHeight: 32,
			fontFamily: 'Valentina',
			textanimation: 'moveuptext'
		},
		{
			name: "horace",
			fontSize: 32,
			lineHeight: 34,
			fontFamily: 'AaronScript',
			wordSpacing: 8,
			textanimation: 'backandforth'
		},
	],
	pages: [
		{
			folio: 0,
			background: {
				filename: "titlepage.jpg",
				color: "#fff",
				opacity: 0.0000000001
			}
		},
		{
			folio: 1,
			background: {
				color: "#ff00ff",
			},
			characters: [
				{
					name: "horace",
					direction: "left",
					text: {
						content: 'Is that fire smoking?',
					}
				},
				{
					name: "mortimer",
					direction: "right",
					text: {
						content: 'Yes, it appears to be,<br /> my dear boy.',
						xoffset: 10
					}
				}
			],
		},
		{
			folio: 2,
			background: {
				color: "#ff0000",
				opacity: 0.25
			},
			characters: [
				{
					name: "horace",
					direction: "left",
					text: {
						content: `I am not asking what it<br /> appears to be doing.<br /> I asked if it was smoking.`
					}
				},
				{
					name: "mortimer",
					direction: "right",
					xoffset: 60,
					yoffset: -40,
					text: {
						content: `Appearances are not held to be a clue to the truth. But we have no other.`,
						xoffset: 20
					}
				}
			]
		},
		{
			folio: 3,
			background: {
				color: "#00ff00",
			},
			characters: [
				{
					name: "horace",
					direction: "left",
					xoffset: 5,
					rotation: 12,
					text: {
						content: `Good morning. It does<br /> seem that the fire is smoking.`,
						xoffset: -5
					}
				},
				{
					name: "mortimer",
					direction: "right",
					xoffset: 65,
					text: {
						content: `It is in the stage when smoke is produced. So it is hard to see what it can do.`,
						xoffset: 10
					}
				}
			]
		},
		{
			folio: 4,
			background: {
				color: "#0000ff",
				opacity: 0.75
			},
			characters: [
				{
					name: "horace",
					direction: "left",
					text: {
						content: `Do you really not <br />understand me?`
					}
				},
				{
					name: "mortimer",
					direction: "right",
					xoffset: 55,
					yoffset: -60,
					text: {
						content: `Yes, yes, my dear boy. It is giving out some smoke. We must say that it is.`,
						xoffset: 20
					}
				}
			]
		},
		{
			folio: 5,
			background: {
				filename: "later.jpg",
				color: "#fff",
				opacity: 0.0000000001
			}
		},
		{
			folio: 6,
			background: {
				color: "#000fff",
				opacity: 0.25
			},
			characters: [
				{
					name: "horace",
					direction: "left",
					text: {
						content: `Has that fire been<br /> smoking, Bullivant?`
					}
				},
				{
					name: "bullivant",
					direction: "right",
					text: {
						content: `Well, sir, not to say smoking. Merely a response to the gusty morning. A periodical spasm in accordance with the wind.`,
					}
				}
			]
		},
		{
			folio: 7,
			background: {
				color: "#00f00f",
				opacity: 0.5
			},
			characters: [
				{
					name: "horace",
					direction: "left",
					text: {
						content: `Will it put soot <br />all over the room?`
					}
				},
				{
					name: "bullivant",
					direction: "right",
					text: {
						content: `Only the lightest deposit, sir. Nothing to speak about.`,
					}
				}
			]
		},
		{
			folio: 8,
			background: {
				filename: "later.jpg",
				color: "#fff",
				opacity: 0.0000000001
			}
		},
		{
			folio: 9,
			background: {
				color: "#f0ff0f",
				opacity: 0.5
			},
			characters: [
				{
					name: "bullivant",
					direction: "left",
					text: {
						content: `It is to make them do it, sir, not to do it yourself. <br />I should never call doing things myself the<br /> harder part.`
					}
				},
				{
					name: "mortimer",
					direction: "right",
					text: {
						content: `Then why don’t you do them yourself? I cannot understand anyone’s choosing the harder part.`,
						xoffset: 20
					}
				}
			]
		},
		{
			folio: 10,
			background: {
				color: "#f00fff",
				opacity: 0.5
			},
			characters: [
				{
					name: "bullivant",
					direction: "left",
					text: {
						content: `Well, sir, we have to think of the future, when our own day will be done.`
					}
				},
				{
					name: "mortimer",
					direction: "right",
					text: {
						content: `I do not have to. <br />I should not dream of doing such a thing.`,
						xoffset: 20
					}
				}
			]
		},
		{
			folio: 11,
			background: {
				color: "#0f0fff",
				opacity: 0.5
			},
			characters: [
				{
					name: "bullivant",
					direction: "left",
					text: {
						content: `We must not think that the world stops with us, sir, because it stops for us.`
					}
				},
				{
					name: "mortimer",
					direction: "right",
					text: {
						content: `Bullivant, you did not think I meant you to do things yourself, did you?`,
						xoffset: 20
					}
				}
			]
		},
		{
			folio: 12,
			background: {
				filename: "later.jpg",
				color: "#fff",
				opacity: 0.0000000001
			}
		},
		{
			folio: 13,
			background: {
				color: "#ffaa00",
				opacity: 0.5
			},
			characters: [
				{
					name: "horace",
					direction: "left",
					text: {
						content: `Does that chimney<br /> want sweeping?`
					}
				},
				{
					name: "bullivant",
					direction: "right",
					text: {
						content: `No, sir, not until<br /> the spring.`,
					}
				}
			]
		},
		{
			folio: 14,
			background: {
				color: "#ffcc00",
				opacity: 0.5
			},
			characters: [
				{
					name: "mortimer",
					direction: "left",
					xoffset: 35,
					yoffset: -60,
					text: {
						content: `Might it be<br /> as well to light<br /> the fire earlier?`,
						xoffset: 0
					}
				},
				{
					name: "bullivant",
					direction: "right",
					xoffset: 70,
					text: {
						content: `Well sir, for one morning like this, there may be a dozen with the grate drawing as sweet—`,
					}
				},
				{
					name: "horace",
					direction: "left",
					xoffset: -10,
					yoffset: -65
				}
			]
		},
		{
			folio: 15,
			background: {
				color: "#ffaa00",
				opacity: 0.5
			},
			characters: [
				{
					name: "mortimer",
					direction: "left",
					xoffset: 40,
				},
				{
					name: "bullivant",
					direction: "right",
					xoffset: 70,
					text: {
						content: `Well, sir, if that is the case, it is not for want of enjoinder. George, ask Mrs. Selden to retard the breakfast. There is a matter that calls for investigation.`,
					}
				},
				{
					name: "horace",
					direction: "left",
					xoffset: -5,
					text: {
						content: `There must be some <br />obstruction in the chimney.`
					}
				}
			]
		},
		{
			folio: 16,
			background: {
				filename: "theend.jpg",
				color: "#fff",
				opacity: 0.0000000001
			}
		},
	]
};

module.exports = bookdata;
