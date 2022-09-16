import { useEffect, useState } from "react";
import Header from "./header/Header";
import image from "../mock/data-not-found.png";
import { DummyUserData } from "../mock/DummyData.js";

function Home() {
    const user = DummyUserData[0];
    user.image = image;

    return (
        <div className="home-page">
            <Header
                id={user.id}
                image={user.image}
                name={user.name}
                role={user.role}
            />
        </div>
    );
}

export default Home;
