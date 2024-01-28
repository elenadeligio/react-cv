import React from "react";
import "./information.css";

import AvatarImage from "../../images/avatar.jpg";
import Icon75 from "../../images/75.svg";
import Icon80 from "../../images/80.svg";
import Icon85 from "../../images/85.svg";
import Icon95 from "../../images/95.svg";
import IconFacebook from "../../images/facebook.svg";
import IconInstagram from "../../images/instagram.svg";
import IconLinkedin from "../../images/linkedin.svg";
import IconTwitter from "../../images/twitter.svg";
import IconYoutube from "../../images/youtube.svg";
import IconSkill from "../../images/skill.svg";

export const Information = () => {
    return (
        <div className="information">

                <img src={AvatarImage} className="avatar" alt="Avatar" />

            <div className="information-inner">
                <p className="name">Elena Deligio</p>
                <p className="title">Front-End Developer</p>
                <a href="https://de-de.facebook.com" target="_blank"><img src={IconFacebook} className="social" alt="Facebook" /></a>
                <a href="https://www.instagram.com" target="_blank"><img src={IconInstagram} className="social" alt="Instagram" /></a>
                <a href="https://www.linkedin.com" target="_blank"><img src={IconLinkedin} className="social" alt="LinkedIn" /></a>
                <a href="https://twitter.com" target="_blank"><img src={IconTwitter} className="social" alt="Twitter" /></a>
                <a href="https://www.youtube.com" target="_blank"><img src={IconYoutube} className="social" alt="Youtube" /></a>
            </div>
            <div className="border"></div>

            <div className="information-inner-column">
                <div className="column">
                    <p className="text_highlight">Gender: </p>
                    <p className="text_highlight">Location: </p>
                    <p className="text_highlight">Freelance: </p>
                </div>
                <div className="column">
                    <p className="text_right">Female</p>
                    <p className="text_right">Berlin</p>
                    <p className="text_green">Available</p>
                </div>
            </div>
            <div className="border"></div>

            <div className="header-left"><p>Languages:</p></div>

            <div className="information-inner-column">
                <div className="column">
                    <p className="text_left">English </p>
                </div>
                <div className="column">
                    <p className="text_right">95%</p>
                </div>
            </div>
            <img src={Icon95} className="line" />
            <div className="information-inner-column">
                <div className="column">
                    <p className="text_left">German </p>
                </div>
                <div className="column">
                    <p className="text_right">95%</p>
                </div>
            </div>
            <img src={Icon95} className="line" />
            <div className="border"></div>
            <div className="header-left"><p>Skills:</p></div>

            <div className="information-inner-column">
                <div className="column">
                    <p className="text_left">Html</p>
                </div>
                <div className="column">
                    <p className="text_right">95%</p>
                </div>
            </div>
            <img src={Icon95} className="line" />
            <div className="information-inner-column">
                <div className="column">
                    <p className="text_left">CSS</p>
                </div>
                <div className="column">
                    <p className="text_right">85%</p>
                </div>
            </div>
            <img src={Icon85} className="line" />
            <div className="information-inner-column">
                <div className="column">
                    <p className="text_left">JavaScript</p>
                </div>
                <div className="column">
                    <p className="text_right">75%</p>
                </div>
            </div>
            <img src={Icon75} className="line" />
            <div className="information-inner-column">
                <div className="column">
                    <p className="text_left">Figma</p>
                </div>
                <div className="column">
                    <p className="text_right">80%</p>
                </div>
            </div>
            <img src={Icon80} className="line" />
            <div className="border"></div>

            <div className="header-left"><p>Extra Skills:</p></div>
            <div className="information-inner">
                <p className="text_left"><img src={IconSkill} className="skill" /> Bootstrap, Materialize</p>
                <p className="text_left"><img src={IconSkill} className="skill" /> Adobe Creative Cloud</p>
                <p className="text_left"><img src={IconSkill} className="skill" /> Jira, Scrum</p>
                <p className="text_left"><img src={IconSkill} className="skill" /> Version Control/GIT</p>
            </div>
            <div className="border"></div>
        </div>
    );
};