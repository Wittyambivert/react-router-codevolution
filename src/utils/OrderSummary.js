import { useNavigate } from "react-router-dom"

const OrderSummary = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>Summary of your orders</div>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}

export default OrderSummary