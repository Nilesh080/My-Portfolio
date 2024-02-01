import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

class Social extends React.Component {
    render() {
        return(
            <div className="header__socials">
                <a href="https://www.linkedin.com/in/nilesh-mishra-167b74234/" target="_blank">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/Nilesh080?tab=repositories" target="_blank">
                    <BsGithub />
                </a>
                <a href="https://leetcode.com/Nilesh666/" target="_blank">
                    <SiLeetcode />
                </a>
            </div>
        );
    }
}

export default Social