import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(95, 111, 82)", "rgb(254, 250, 224)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Rachael",
    lastName: "Yonoff",
    initials: "RY", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Systems Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🍵',
            text: 'fueled by matcha'
        },
        {
            emoji: '🌎',
            text: 'based in the UK'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at Leidos"
        },
        {
            emoji: "📧",
            text: "rachaelyonoff@gmail.com"
        }
    ],
    socials: [
   

        {
            link: "https://github.com/Rachiey",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/rachaelyonoff/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    
      
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Rachael. I'm a Systems Engineer for Leidos UK. I studied Digital Culture at King's College London, and have a huge desire to be creative. Feel free to contact me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'agile', 'canva'],
            exposedTo: ['nodejs', 'python', 'adobe photoshop', 'django', 'salesforce', 'mongoDB', 'express', 'sql', 'java','heroku', 'netlify', 'typescript']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'theater',
            emoji: '🎭',
            link: "https://letterboxd.com/movierach/"
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'baking',
            emoji: '👩‍🍳'
        },
        { 
            label: 'traveling',
            emoji: '✈️'

        },
        {
            label:'rowing',
            emoji: '🚣‍♀️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Thyme's Up - Fridge/Recipe App",
            title2: "React, Node, Express, Django, Django Rest Framework,  Python",
            live: "https://thymesup.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Tea-Thyme/Thyme-Frontend", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Kahtwoot - Quiz App",
            title2: "React, Redux, PostgreSQL, Heroku, Netlify",
            live: "https://kahtwoot.netlify.app/",
            source: "https://github.com/Rachiey/universally-challenged",
            image: mock2
        },
        {
            title: "StudentHub - Social Media App",
            title2: "React, NodeJS, Netlify, Django, Djagno Rest Framework, Python, PostgreSQL, Heroku",
            live: "https://student-hubs.netlify.app/",
            source: "https://github.com/Rachiey/Student-Spot-Lap4/tree/main",
            image: mock3
        },
        {
            title: "League of Rilakkuma - League of Legends Companion App (WIP)",
            title2: "VueJS, Typescript, TailwindCSS",
            live: "",
            source: "",
            image: mock4
        },
        {
            title: "Personalitea - Group Planning App (WIP)",
            title2: "React, Node, Express, Django, Dyango Rest Framework, Python",
            live: "",
            source: "",
            image: mock5
        }
    ]
}
