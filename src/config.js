// config.js
module.exports = {
    github: {
        username: 'Warhammer4000', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'tanimulhaquekhan',
        twitter: '',
        facebook: 'https://www.facebook.com/',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://warhammer4000.github.io',
        email: 'tanimul.haque@brainstation-23.com'
    },
    skills: [
        'C#',
        'Unity3D',
        '.NET',
    ],
    experiences: [
        { 
            company: 'Brain Station 23',
            position: 'Business Unit Head',
            from: 'January 2021',
            to: 'Present'
        },
        { 
            company: 'iQuantile',
            position: 'Project Manager',
            from: 'July 2017',
            to: 'September 2018'
        }
    ],
    education: [
        { 
            institution: 'American International University-Bangladesh',
            degree: 'Bachelor of Software Engineering',
            from: '2015',
            to: '2018'
        }
       
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'medium', // medium | dev.to
        username: '2takardeveloper',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
