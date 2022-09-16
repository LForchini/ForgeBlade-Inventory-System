import SettingsIcon from "./SettingsIcon.svg";

function Header(props) {
    return (
        <header>
        <div className="user-data">
            <img src={props.image} alt={props.name} />
            <p className="user-details user-name">{props.name}</p>
            <p className="user-details user-id">ID: {props.id}</p>
            <p className="user-details user-role">{props.role}</p>
        </div>
        <div className="settings">
            <p>Settings</p>
            <img src={SettingsIcon} />
        </div>
        </header>
    )
}

export default Header;