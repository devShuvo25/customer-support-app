import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-black text-white lg:py-14'>
        <div className='bg-black text-white grid lg:grid-cols-5 grid-cols-1
        py-10 px-5  lg:px-8 lg:ps-30 gap-8 lg:gap-20 text-center lg:text-left'>
            <div>
                <h1 className='text-2xl mb-2'>Ticket Bridge</h1>
                <p className='opacity-60 text-[13px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quia nesciunt voluptatem ab dolor. Laboriosam quia recusandae eligendi nostrum tenetur?</p>
            </div>
            <div>
                <h1 className='text-2xl mb-2'>Company</h1>
                <ul className='opacity-60 text-[13px] space-y-1'>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Misson</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl mb-2'>Service</h1>
                <ul className='opacity-60 text-[13px] space-y-1'>
                    <li><a href="#">Products & Service</a></li>
                    <li><a href="#">Customers stroies</a></li>
                    <li><a href="#">Download Apps</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl mb-2'>Information</h1>
                <ul className='opacity-60 text-[13px] space-y-1'>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Join us</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl mb-2'>Social links</h1>
                <ul className='opacity-60 text-[13px] space-y-2'>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>@Ticket Bridge</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>@Ticket Bridge</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>@Ticket Bridge</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>@Ticket Bridge</a></li>
                </ul>
            </div>
        </div>
        <p className='text-white text-center opacity-65 text-[13px]'>© 2025 Shuvo Mallik. All rights reserved.</p>
        </div>
    );
};

export default Footer;