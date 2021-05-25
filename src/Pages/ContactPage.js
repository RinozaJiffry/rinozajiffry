import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1380436567433!2d79.85775001431789!3d6.874058720896825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb9117fd045%3A0xf3dbe8b16b1005d1!2sCollingwood%20Pl%2C%20Colombo!5e0!3m2!1sen!2slk!4v1621857032402!5m2!1sen!2slk" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+94 764699064'}  title={'Phone'}/>
                    <ContactItem icon={email} text1={'jiffryrinoza03@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Collingwood place, Colombo 6'} text2={'SriLanka'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
