import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import Theme from './Theme'
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Sidebar = () => {
  return (
      <div>
        <h4>Uttkarsh</h4>
        <div className="avatar">
          <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p>Hi, my name is Uttkarsh Saini and I'm a software engineer. Welcome to my personal website!</p>
        
        <SocialMediaIcons />

      <ul className="menu bg-base-200 rounded-box w-56">
          <li><a><PersonIcon/> About Me</a></li>
          <li><a><LaptopMacIcon/> Portfolio</a></li>
          <li><a><ArticleIcon/> Resume</a></li>
          <li><a><ContactMailIcon/> Contact</a></li>
        </ul>


        <Theme/>
    </div>
  )
}

export default Sidebar