import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    //const params = useParams();
    const {postId} = useParams(); // destrcturing korbbo direct

    const navigate = useNavigate();
 
    //console.log(params)
    console.log(postId)

    const handleGoBack = () =>{
        navigate(-1);
    }



    return (
        <div>
            <h2>Post Id: {id}</h2>
            <h4>Post Title: {title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;