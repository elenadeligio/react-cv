import React from "react";
import {Element} from "react-scroll";
import {Header} from "../../shared/header/header";
import {ContactForm} from "../../features/contactForm/contactForm";

import "./contacts.css";

export const Contacts = ({data}) => {
    return (
        <Element name="contacts" className="contacts">
            <div className="headerInfo">
                <Header header={data.header} />
            </div>
            <div className="mainInfo">< ContactForm /></div>
        </Element>
    );
};