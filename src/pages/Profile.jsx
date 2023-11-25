import { useParams } from "react-router-dom";
import AppNav from "../component/AppNav";


const Profile = () => {
    const {user_id} = useParams();
    return (
        <div>
            <div>
                <AppNav/>
            </div>
            <h3>This is  page</h3>
            <p>This Profile is Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore modi laboriosam sed aspernatur praesentium dolores minima velit, ipsum doloremque natus porro, atque ab eaque doloribus! Nemo vero dolorum numquam corporis?</p>
            <p>{user_id}</p>
        </div>
    );
};

export default Profile;