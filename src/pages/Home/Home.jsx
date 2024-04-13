import React from 'react';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import LeftSideNav from '../shared/LeftSideNav';
import RightSideNav from '../shared/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div >
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className=" "><LeftSideNav></LeftSideNav></div>
                <div className='col-span-2 border'>
                    {
                        news.map(n => <NewsCard key={n._id} news={n}></NewsCard>)
                    }
                </div>
                <div className='border'><RightSideNav></RightSideNav></div>

            </div>
        </div>
    );
};

export default Home;