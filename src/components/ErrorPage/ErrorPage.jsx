import { Link, useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();

    const navigate = useNavigate();

    console.log(error);

    const handleHome = () =>{
        navigate('/')
    }


    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2>page not found</h2>
                    <p>Go back where you from</p>
                    <button onClick={handleHome}>Home</button>
                    <Link to="/posts">Post</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;