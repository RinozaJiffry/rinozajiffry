import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems1';
import Tittle from '../Components/Tittle';
import cards from '../Components/allcards';

import { useState } from 'react';

const allCategories = ['All', ...new Set(cards.map(item => item.category))];

function CardsPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(cards);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(cards)
            return;
        }
        const filteredData  = cards.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="CardPage">
            <div className="title">
                <Tittle title={'Certification'} span={'Certification'} />
            </div>
            <div className="cards-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default CardsPage;
