import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import Theme from './Theme'
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import profile from '../../Images/Profile.png';

const Sidebar = () => {
  return (
      <div className="flex flex-col max-h-screen justify-between p-5 items-center">
        <h1 className="text-3xl font-bold p-3">Uttkarsh Saini</h1>
        <div className="avatar p-3">
          <div className="w-36 rounded-full">
              <img src={profile} alt="Profile"/>
          </div>
        </div>
        <p className="p-3 text-center">Hi, my name is Uttkarsh Saini and I'm a software engineer. Welcome to my personal website!</p>
        
      <div className="p-5">
        <SocialMediaIcons />
      </div>

      <ul className="menu bg-base-200 rounded-box w-56 p-5 items-center">
          <li><a><PersonIcon/> About Me</a></li>
          <li><a><LaptopMacIcon/> Portfolio</a></li>
          <li><a><ArticleIcon/> Resume</a></li>
          <li><a><ContactMailIcon/> Contact</a></li>
      </ul>
      

      <div className="mt-20">
        <Theme/>
      </div>

    </div>
  )
}

export default Sidebar