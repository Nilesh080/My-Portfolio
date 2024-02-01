import React from 'react';

import './css/portfolio.css';
import product_destination from './images/product-destination.jpeg';
import nss from './images/nss.png';
import fake_product_identifier from './images/fake-product-identifier.jpg';
import drumkit from './images/drumkit.png';
import natours from './images/natours.png';
import nexter from './images/nexter.png';
import tindog from './images/tindog.png';
import sociaza from './images/sociaza.png'
import netflix from './images/netflix-pic1.jpg'
import foodota from './images/foodota.png'
import tictactoe from './images/tictactoe.png'
import weather from './images/weather.png'

const projects = [
    {
        id: 1,
        image: netflix,
        title: 'Netflix - GPT',
        github: 'https://github.com/Nilesh080/Netflix-GPT',
        live: 'https://netflix-gpt-nilesh080.vercel.app/',
    },
    {
        id: 2,
        image: foodota,
        title: 'FOODOTA - A food ordering Webapp',
        github: 'https://github.com/Nilesh080/Food-Ordering-Webapp',
        live: 'https://jade-platypus-c396f8.netlify.app/'
    },
    {
        id: 3,
        image: natours,
        title: 'BlogVista',
        github: 'https://github.com/Nilesh080/BLOGVISTA-Website',
        live: null,
    },
    {
        id: 4,
        image: weather,
        title: 'Weather App',
        github: 'https://github.com/Nilesh080/Weather-App',
        live: 'https://weather-app-nine-alpha-42.vercel.app/',
    },
    {
        id: 5,
        image: tindog,
        title: 'TinDog',
        github: 'https://github.com/Nilesh080/Tin-Dog',
        live: 'https://nilesh080.github.io/Tin-Dog/',
    },
    {
        id: 6,
        image: nss,
        title: 'NSS-XIE Website',
        github: 'https://github.com/Nilesh080/NSS-Website',
        live: null,
    },
    {
        id: 7,
        image: drumkit,
        title: 'Drum_Kit',
        github: 'https://github.com/Nilesh080/Drum_Kit',
        live: null,
    },
    {
        id: 8,
        image: tictactoe,
        title: 'Tic-Tac-Toe',
        github: 'https://github.com/Nilesh080/Tic-Tac-Toe',
        live: 'https://nilesh080.github.io/Tic-Tac-Toe/',
    },
]

class Portfolio extends React.Component {
    render() {
        return(
            <section id="portfolio">
                <h2>Projects I Have Worked On</h2>
                <h1>Featured Projects</h1>

                <div className="container portfolio__container">
                    {
                        projects.map(({id, image, title, github, live}) => {
                            return(
                                <article key={id} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt="Logo" />
                                    </div>
                                    <h2>{title}</h2>
                                    <div className="portfolio__item-cta">
                                        <a className="btn" href={github} target="_blank" rel="noreferrer noopener">Github</a>
                                        {live && <a className="btn btn-primary" href={live} target="_blank" rel="noreferrer noopener">Live Demo</a>}
                                    </div>
                                </article>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

export default Portfolio;
