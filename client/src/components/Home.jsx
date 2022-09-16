import { DummyUserData } from "../mock/DummyData";
import image from "../mock/data-not-found.png";
import Header from "./header/Header";

function Home() {
    const user = {
        id: 1,
        name: "John Smith",
        dob: "1990-09-16",
        email: "johnsmith@email.com",
        role: "Worker",
        image: image,
    };

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
