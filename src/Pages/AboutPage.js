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
                <SkillsSection skill={'Html'}  progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Css'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'JavaScript'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Python'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'Javav/JavaFX'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'ReactJS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'AngularJS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'NodeJS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'R Language'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'MySQL'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'MongoDB'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'AWS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'IoT'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Artificial Intelligence / Neural Networks'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'BigData'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Algorithms'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'React Native'} progress={'60%'} width={'60%'} />
                
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
