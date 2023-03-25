import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>404 page not found</div>
            <button onClick={() => navigate(-1)}>Back to previous page</button>
            <button onClick={() => navigate('/')}>Back to home</button>
        </>
    )
}

export default NoMatch;