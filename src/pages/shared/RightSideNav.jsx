import React from 'react';
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

import qzone1 from '../../../src/assets/qZone1.png'
import qzone2 from '../../../src/assets/qZone2.png'
import qzone3 from '../../../src/assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 p-5'>
                Login with

                <button className="btn btn-outline">
                    <FaGoogle />

                    Google
                </button>
                <button className="btn btn-outline">
                    <FaGithubAlt />

                    GitHub
                </button>
            </div>

            <div className='flex flex-col gap-2 p-5'>
                Find Us on

                <a href="" className=" flex gap-2">
                    <CiFacebook />

                    FaceBook
                </a>
                <a href="" className=" flex gap-2">
                    <CiTwitter />
                    Twitter
                </a>
                <a href="" className=" flex gap-2">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className='flex flex-col gap-2 p-5'>
                Q Zone

               <img src={qzone1} alt="" />
               <img src={qzone2} alt="" />
               <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;