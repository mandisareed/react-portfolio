import { nanoid } from 'nanoid';
// import Pdf from 'public/MReedWebDevResume.pdf';
import Pdf from '../../public/MReedWebDevResume.pdf';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mandisa Reed',
  subtitle: "I'm a Full Stack Web Developer",
  cta: 'Learn more.',
};

// ABOUT DATA
export const aboutData = {
  img: 'bwprofilepic.jpg',
  paragraphOne:
    "Hey there! I'm Mandisa (man-dee-suh), a full-stack web developer with a background as a Stage Manager for live productions and events. As a stage manager, I've worked in traditional theatre settings, opera, live events, and have taken a Broadway production on tour. All of these avenues have required tremendous levels of communication and attention to detail, and foster a profound sense of community.",
  paragraphTwo:
    "Although that world is largely on pause due to the current pandemic, the drive to excel and dig deep still remains within me. I aim to channel these attributes and more into creating websites and applications that elevate users' experiences through thoughtful design and inclusivity.",
  paragraphThree: '',
  resume: { Pdf }, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cookbooksearchresult.png',
    title: 'HERstory',
    info: 'Search for and store recipes for easier access.',
    info2: '',
    url: 'https://herstoryed.herokuapp.com/signup',
    repo: 'https://github.com/mandisareed/HERstory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cookbooksearchresult.png',
    title: 'Cookbook',
    info: 'Search for and store recipes for easier access.',
    info2: '',
    url: 'https://still-sierra-23537.herokuapp.com/',
    repo: 'https://github.com/mandisareed/cookbook',
  },
  {
    id: nanoid(),
    img: 'hpquiz.PNG',
    title: 'Sorting Hat Quiz',
    info: 'Indulge your inner wizard and see where the sorting hat places you.',
    info2: '',
    url: 'https://tlam1288.github.io/Sorting-Hat-Quiz',
    repo: 'https://github.com/tlam1288/Sorting-Hat-Quiz',
  },
  {
    id: nanoid(),
    img: 'portfolioproject.PNG',
    title: 'Bootstrap Portfolio',
    info: 'A simple, clean portfolio.',
    info2: '',
    url: 'https://mandisareed.github.io/Bootstrap-Responsive-Portfolio/',
    repo: 'https://github.com/mandisareed/Bootstrap-Responsive-Portfolio',
  },
  {
    id: nanoid(),
    img: 'cardiologger.PNG',
    title: 'Fitness Tracker',
    info: 'Track your workouts each work to reach your goals faster.',
    info2: '',
    url: 'https://fitness-tracker-demo.herokuapp.com/',
    repo: 'https://github.com/mandisareed/fitness-tracker',
  },
  {
    id: nanoid(),
    img: 'budgettracker.PNG',
    title: 'Budget Tracker',
    info: 'A PWA to track budget ins and outs on the go.',
    info2: '',
    url: 'https://agile-citadel-81951.herokuapp.com/',
    repo: 'https://github.com/mandisareed/pwa-budget-tracker',
  },
  {
    id: nanoid(),
    img: 'renderfunction.PNG',
    title: 'ReadMe Generator',
    info: 'A CLI app to generate a professional ReadMe.',
    info2: '',
    url: 'https://drive.google.com/file/d/1NSqhrHn5-2eb8fUGDdnSqmJi5qHLcykp/view',
    repo: 'https://github.com/mandisareed/cli-nodejs',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in collaborating? Fantastic!',
  btn: '',
  email: 'mandisa.reed@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mandisa-reed-112476123/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mandisareed',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
