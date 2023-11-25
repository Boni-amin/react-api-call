import { NavLink } from "react-router-dom";


const AppNav = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/product">Product</NavLink> </li>
                <li><NavLink to="/profile/100">Profile</NavLink> </li>
                <li><NavLink to="/apicall">Api</NavLink> </li>
            </ul>
        </div>
    );
};

export default AppNav;