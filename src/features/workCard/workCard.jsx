import React from "react";
import "./workCard.css";

export const WorkCard = ({ data }) => {
    return (
        <div className="work-card">
            <div className="work-card-inner">
            <div className="column1">
                <p className="organization">{data.organization}</p>
                <p className="date">{data.date}</p>
            </div>
            <div className="column2">
                <p className="titleName">{data.titleName}</p>
                <p className="description">{data.description}</p>
            </div>
                </div>
        </div>
    );
};