import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Html'}  progress={' 🤩'} width={'100%'} />
                <SkillsSection skill={'Css'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'JavaScript'} progress={' 🤩'} width={'100%'} />
                <SkillsSection skill={'Python'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'Javav/JavaFX'} progress={' 🤩'} width={'100%'} />
                <SkillsSection skill={'ReactJS'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'AngularJS'} progress={' 🤩'} width={'100%'} />
                <SkillsSection skill={'NodeJS'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'R Language'} progress={'🤩 '} width={'100'} />
                <SkillsSection skill={'MySQL'} progress={' 🤩'} width={'100%'} />
                <SkillsSection skill={'MongoDB'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'AWS'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'IoT'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'Artificial Intelligence / Neural Networks'} progress={' 🤩'} width={'100%'} />
                <SkillsSection skill={'BigData'} progress={' 🤩'} width={'100%'} />
                <SkillsSection skill={'Algorithms'} progress={'🤩 '} width={'100%'} />
                <SkillsSection skill={'React Native'} progress={' 🤩'} width={'100%'} />
                
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design and development'} 
                text={'I am intersted in web designing and developing.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'I like to work on artificial intelligence and machine learning projects.'}
                />
                <ServicesSection image={gamedev} title={'Machine Learning Research'} 
                text={'I interested to work in machine learning researches..'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
