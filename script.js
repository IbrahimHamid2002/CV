const resume = {
    firstName: 'Ibrahim',
    lastName: 'Hamid',
    jobTitle: 'Full-Stack Developer',
    city: 'Lahore',
    postalCode: '54000',
    country: 'Pakistan',
    phone: '+923214876734',
    email: 'incrediblefarooqui@gmail.com',
    education: [
        {
            school: 'NUML',
            degree: 'BSCS',
            graduationDate: 'Currently Enrolled',
            description: 'Computer Scientist'
        }
    ],
    links: [
        {
            label: 'GitHub',
            link: 'https://github.com/daibergm'
        },
        {
            label: 'LinkedIn',
            link: 'https://linkedin.com/in/daibergm'
        },
        {
            label: 'Website',
            link: 'https://meripehliwebsite.dev'
        },
    ],
    skills: [
        'JavaScript',
        'PHP',
        'ReactJS',
        'ExpressJS',
        'NodeJS',
        'MongoDB',
        'MySQL',
        'Git',
        'Html',
    ],
    languages: ['Urdu', 'English'],
    professionalSummary: `I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focussed on building responsive web apps, while learning other technologies.`,
    employmentHistory: [
        {
            jobTitle: 'FULL-STACK DEVELOPER',
            startDate: 'May 2023',
            endDate: 'Present',
            employer: 'Fabco Pakistan Inc.',
            city: 'Lahore',
            achievements: [
                'Help to define the front-end stack of the company, including best practices to write code, all of this focus on ReactJs and React Native.',
                'Help others front end teams with questions/problems they have.',
                'Create apps for the company using React-Native',
            ]
        },
        {
            jobTitle: 'MID-ADVANCE FRONT-END DEVELOPER',
            startDate: 'Apr 2022',
            endDate: 'Mar 2023',
            employer: 'NetSoll',
            city: 'Lahore',
            achievements: [
                'Build front-end apps using ReactJs and React Native, using the best practices',
                'Propose new ideas to improve the code and help my team with questions or problems they have.',
                'Work using Scrum methodology.',
            ]
        },
        {
            jobTitle: 'SR BACK-END DEVELOPER',
            startDate: 'Sep 2021',
            endDate: 'Apr 2022',
            employer: 'PureLogix',
            city: 'Remote',
            achievements: [
                'Code refactoring using best practices with React Native to improve code reusability from the app.',
                'Propose new ideas to improve the app.'
            ]
        },
        {
            jobTitle: 'FULLSTACK DEVELOPER',
            startDate: 'Apr 2018',
            endDate: 'Sep 2019',
            employer: 'W-Group',
            city: 'Remote',
            achievements: [
                `I worked in two projects realted with Blockchain and cryptocurrencies, using ReactJs, ReactNative, NodeJs, Hyperledger and Scrum methodology.`
            ]
        },
        {
            jobTitle: 'JR DEVELOPER',
            startDate: 'Sep 2017',
            endDate: 'Mar 2018',
            employer: 'DPS Lahore',
            city: 'Remote',
            achievements: [
                'Develop and implement web portals for government institute, using Java and JavaScript.',
            ]
        }
    ],
    photo: './IMG_2712.jpg',
}

const formatResume = (r) => ({
    ...r,
    address: [
        r.country,
        r.city,
        r.postalCode
    ].filter(Boolean).join(', ')
})

new Vue({
    el: "#app",
    data: formatResume(resume)
});


function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()