import React from 'react'
import FrontImage from '../assests/hero.jpg';
import { AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";

const Hero = () => {
    const config  = {
        subtitle: 'Im a Data Analyst | Full Stack Developer',
        social: {
            github: 'https://github.com/SangithaShri',
            linkedin: 'https://www.linkedin.com/in/sangitha-shri-1426a1256',
            leetcode: 'https://leetcode.com/SangithaShri/',
        }
    }

  return <section className='flex flex-col md:flex-row px-6 py-28 bg-primary justify-center'>
    <div className='md:w-1/2 flex flex-col'>
    <h1 className=' text-white text-6xl font-hero-font'>Hi , <br /> I'm <span className='text-black'>Sangitha Shri G</span>
    <p className='text-2xl'>{config.subtitle}</p>
    </h1>
    <div className='flex py-10'>
        <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
        <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
        <a href={config.social.leetcode} className='pr-5 hover:text-white'><TbBrandLeetcode size={40}/></a>
    </div>
    </div>
    <img className='md:w-1/3' src="https://mlckguqn3ubl.i.optimole.com/cb:kl_A~21c25/w:1024/h:781/q:90/https://www.voicesage.com/wp-content/uploads/2019/11/customer-journey-touchpoint-marketing.png" />
  </section>
}

export default Hero