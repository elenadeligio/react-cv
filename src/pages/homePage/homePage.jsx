import React from "react";
import {Information} from "../../widgets/information/information";
import {Header} from "../../widgets/header/header";
import {WorkHistory} from "../../widgets/workHistory/workHistory";
import {Contacts} from "../../widgets/contacts/contacts";
import {Footer} from "../../widgets/footer/footer";
import {RightPanel} from "../../widgets/rightPanel/rightPanel";
import {WORK, EDUCATION, CONTACTS} from "../../constants/workHistory";

import "./homePage.css";

export const HomePage = () => {
  return (
    <div className="container">
      <Information />
      <div className="inner">
          <Header />
          <WorkHistory name="education" data={EDUCATION} />
          <WorkHistory name="work" data={WORK} />
          <Contacts data={CONTACTS} />
          <Footer />
      </div>
        <RightPanel />
    </div>
  );
};
