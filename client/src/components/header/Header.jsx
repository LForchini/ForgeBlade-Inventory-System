import SettingsIcon from "./SettingsIcon.svg";

function Header({ id, image, name, role }) {
    return (
        <header className="user-header">
            <div className="user-data">
                <div className="image-container">
                    <img className="user-img" src={image} alt={name} />
                </div>
                <div>
                    <div className="settings">
                        <p>Settings</p>
                        <img src={SettingsIcon} alt="settings" />
                    </div>
                    <div className="user-details">
                        <p className="user-name">{name}</p>
                        <p className="user-id">ID: {id}</p>
                        <p className="user-role">{role}</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
