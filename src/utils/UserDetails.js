import { useParams } from "react-router-dom";

const Details = () => {
    // const userParams = useParams();
    // const userId = userParams.userId;
    const { userId } = useParams();
    
    return (
        <div>Details of user {userId}</div>
    );
};

export default Details;