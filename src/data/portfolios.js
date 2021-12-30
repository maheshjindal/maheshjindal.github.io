import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';
import application from '../img/portImages/application.svg';
import data from '../img/portImages/data.svg'

const portfolios = [
    {
        id: 1,
        category: 'Data Science',
        image: data,
        link1: 'https://github.com/maheshjindal/social_networks_misinformation_detection',
        title: 'Fake information detection in Social Networks using Graph Neural Networks & NLP',
        text: 'Technologies: Graph Neural Networks, Attention, NLP, PyTorch, Python'
    },
    {
        id: 2,
        category: 'Data Science',
        image: data,
        link1: 'https://github.com/maheshjindal/us_drug_abuse_analytics',
        title: 'Drug Abuse Analytics in United States',
        text: 'Technologies:  R, ggplot, d3.js, R Markdown, R Studio'
    },
    {
        id: 3,
        category: 'Software Development',
        image: application,
        link1: 'https://github.com/maheshjindal/automated_fare_tracking_system',
        title: 'Automated Travel Fare and Expense Management System - Software and Analytics',
        text: 'Technologies: Java, Spring Boot, Python, Google Firebase, Google Analytics, Maven, Docker, MYSQL, Bash Scripting'
    },
    {
        id: 4,
        category: 'Software Development',
        image: application,
        link1: 'https://github.com/maheshjindal/fsclient',
        title: 'A native File System using Scala',
        text: 'Technologies: Scala, JVM, SBT, IntelliJ Idea'
    },
    {
        id: 5,
        category: 'Software Development',
        image: application,
        link1: 'https://github.com/maheshjindal/maheshjindal.github.io',
        title: 'Responsive Portfolio Website',
        text: 'Technologies: ReactJs, ParticleJs, HTML, CSS, Javascript, VSCode'
    },
    {
        id: 6,
        category: 'Data Science',
        image: data,
        link1: 'https://github.com/maheshjindal/climate_analysis_modelling',
        title: 'Data Modelling for climate analysis of USA states using Big Data',
        text: 'Technologies: Python, Numpy, Pandas, PySpark, Jupyter Notebook'
    },
    {
        id: 7,
        category: 'Software Development',
        image: application,
        link1: 'https://github.com/maheshjindal/bookreader',
        title: 'Comic Book Reader App for iOS',
        text: 'Technologies: Swift, UIKit, StoreKit, XCode'
    },
    {
        id: 8,
        category: 'Data Science',
        image: data,
        link1: 'https://github.com/maheshjindal/find_charity_donors',
        title: 'Supervised ML model for finding Charity Donors',
        text: 'Technologies:  Python, Scikit-Learn, Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebook'
    },
    {
        id: 9,
        category: 'Data Science',
        image: data,
        link1: 'https://github.com/maheshjindal/customer_segments',
        title: 'Usupervised ML to analyse and create customer Segments',
        text: 'Technologies:  Python, Scikit-Learn, Numpy, Pandas, Matplotlib, Seaborn, Jupyter Notebook'
    },
    {
        id: 10,
        category: 'Software Development',
        image: application,
        link1: 'https://www.chitkara.edu.in/news/chitkara-university-team-gully-gang-bag-first-prize-at-sih-2019/',
        title: 'A Blockchain based application for securely storing documents and certificates.',
        text: 'Technologies:  ReactJS, BlockChain, HTML, CSS, Javascript, JQuery, Google Analytics'
    }
]

export default portfolios;