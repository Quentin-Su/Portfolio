import GTSpirit_Image from '../assets/projects/GTSpirit_contracts_ui.png';
import RDP_Image from '../assets/projects/RemoteDesktop_Web_ui.png';

export const cards = [
    {
        icon: 'info',
        content: 'About',
        color: '-bg-blue',
        hrefId: 'about_section',
        mailto: false
    },
    {
        icon: 'code',
        content: 'Projects',
        color: '-bg-light_grey',
        hrefId: 'projects_section',
        mailto: false
    },
    {
        icon: 'history',
        content: 'Experience',
        color: '-bg-yellow',
        hrefId: 'work_section',
        mailto: false
    },
    {
        icon: 'send',
        content: 'Contact',
        color: '-bg-white',
        hrefId: '',
        mailto: true
    },
]

export const skills = {
    Languages: [
        {
            name: 'HTML',
            color: 'orange'
        },
        {
            name: 'CSS',
            color: 'blue'
        },
        {
            name: 'JS',
            color: 'yellow'
        },
        {
            name: 'React JS',
            color: 'light_blue'
        },
        {
            name: 'Node JS',
            color: 'light_green'
        },
        {
            name: 'ASP.net',
            color: 'dark_blue'
        },
        {
            name: 'C#',
            color: 'purple'
        },
        {
            name: 'Ps1',
            color: 'light_blue'
        },
        {
            name: 'Python',
            color: 'yellow'
        }
    ],
    Database: [
        {
            name: 'SQL Server',
            color: 'grey'
        },
        {
            name: 'MongoDb',
            color: 'light_green'
        }
    ],
    Other: [
        {
            name: 'Autodidact',
            color: 'yellow'
        },
        {
            name: 'Network Setup',
            color: 'orange'
        },
        {
            name: 'Computer maintenance',
            color: 'blue'
        }
    ],
};

export const projects = [
    {
        title: 'Web Application',
        image: GTSpirit_Image,
        alt_Image: 'Project_Image',
        project: {
            subtitle: 'Alain Blais',
            description: 'The web application is developed for two companies and allows for full management of contracts, expertise reports, invoices, and fees.',
            tags: [
                {
                    name: 'ASP.net',
                    color: 'dark_blue'
                },
                {
                    name: 'C#',
                    color: 'purple'
                },
                {
                    name: 'SQL Server',
                    color: 'grey'
                }
            ],
            projectUrl: 'https://github.com/Quentin-Su/'
        },
        technical_Description: [
            {
                icon: 'verified_user',
                description: 'The web application uses a SQL database to store project-related data. These data are securely stored using strict RGPD standards. Sensitive data is encrypted to ensure its confidentiality, while other data is hashed to ensure its integrity.'
            },
            {
                icon: 'password',
                description: 'To access the application, users must log in to their session using a password. Each user is granted specific rights based on their usage, ensuring a secure and personalized experience.'
            }
        ]
    },
    {
        title: 'Web Application',
        image: RDP_Image,
        alt_Image: 'Project_Image',
        project: {
            subtitle: 'Tools Web App',
            description: 'The application is a remote PC administration tool via a web interface that enables managing each computer through PowerShell commands.',
            tags: [
                {
                    name: 'ASP.net',
                    color: 'dark_blue'
                },
                {
                    name: 'C#',
                    color: 'purple'
                },
                {
                    name: 'SQL Server',
                    color: 'grey'
                }
            ],
            projectUrl: 'https://github.com/Quentin-Su/'
        },
        technical_Description: [
            {
                icon: 'password',
                description: 'User sessions have a password and rights.'
            },
            {
                icon: 'confirmation_number',
                description: 'User support through a ticketing system. When a ticket is accepted, the requested action is automatically executed (temporary authorization requests, adding a computer, etc.).'
            },
            {
                icon: 'history',
                description: 'Log system that save user actions and stores information for a period of 30 days.'
            },
            {
                icon: 'info',
                description: 'RDP (Remote Desktop Protocol) system that utilizes a Windows service (developed in C#) to open a UDP port.'
            }
        ]
    }
];

export const works = [
    {
        date: 'Jan. 2023 - Today',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>,
        title: 'OpenClassRooms',
        subtitle: 'Home Office - High School',
        description: 'Web developer training (Bac +2)',
        tags: [
            {
                name: 'MongoDb',
                color: 'light_green'
            },
            {
                name: 'React JS',
                color: 'light_blue'
            }
        ]
    },
    {
        date: 'May 2022 - Jun. 2022',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>,
        title: 'Alain Blais',
        subtitle: 'Web Developer [Internship]',
        description: 'Development of a Web Application & Management of a SQL Database',
        tags: [
            {
                name: 'ASP.net',
                color: 'dark_blue'
            },
            {
                name: 'C#',
                color: 'purple'
            },
            {
                name: 'SQL Server',
                color: 'grey'
            }
        ]
    },
    {
        date: 'Nov. 2021 - Dec. 2021',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>,
        title: 'Danfoss France',
        subtitle: 'IT Service [Internship]',
        description: 'Computer maintenance & User support, Backup Management. PowerShell script to manage servers',
        tags: [
            {
                name: 'C#',
                color: 'purple'
            },
            {
                name: 'Ps1',
                color: 'light_blue'
            }
        ]
    },
    {
        date: 'Mar. 2021 - Apr. 2021',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>,
        title: 'Danfoss France',
        subtitle: 'IT Service [Internship]',
        description: 'IT Asset Management, Computer maintenance & User support',
        tags: [
            {
                name: 'C#',
                color: 'purple'
            }
        ]
    },
    {
        date: 'Nov. 2020 - Dec. 2020',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>,
        title: 'Danfoss France',
        subtitle: 'IT Service [Internship]',
        description: 'IT Maintenance & User Support',
        tags: [ ]
    },
    {
        date: 'Sept. 2019 - Jul. 2022',
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>,
        title: 'Louis Armand',
        subtitle: 'High school',
        description: 'Professional Baccalaureate in Digital Systems (RISC)',
        tags: [
            {
                name: 'HTML',
                color: 'orange'
            },
            {
                name: 'CSS',
                color: 'blue'
            },
            {
                name: 'JS',
                color: 'yellow'
            },
            {
                name: 'Python',
                color: 'yellow'
            }
        ]
    }
];