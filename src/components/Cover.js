import React from "react";

const Cover = ({ data }) => {
    return (
        <section className="--Cover--wrapper">
            <div className="--Cover--description">
                <h1>{data.restaurant.name}</h1>
                <p>{data.restaurant.description}</p>
            </div>

            <div className="--Cover--picture">
                <img src={data.restaurant.picture} alt="" />
            </div>
        </section>
    );
};

export default Cover;
