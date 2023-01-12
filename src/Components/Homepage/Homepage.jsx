import React from 'react';
import Food from '../Food/Food';
import Intro from '../Intro/Intro';
import More from '../More/More';
import Rest from '../Restaurants/Rest';
import Shops from '../Shops/Shops';

const Homepage = () => {
    return (
        <div>
            <Intro/>
            <Shops/>
            <Rest/>
            <Food/>
            <More/>
        </div>
    );
};


export default Homepage;