import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import './Home.css'
import Footer from "../Footer/Footer";


const Home = () => {

    const navigation = useNavigation();

    const location = useLocation();

    console.log(location)

    return (
        <div className="body">
            <Header></Header>
            {
                navigation.state === "loading" ? 
                <p>Loading....</p>:
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;