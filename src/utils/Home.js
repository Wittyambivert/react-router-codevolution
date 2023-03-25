import Accordion from '../components/Accordion/Accordion';
import Counter from '../components/Counter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return(
        <>
            <div className="App">
                <h1 className="main-title">Home Here is an Accordion</h1>
                <Accordion />
                <Counter />
            </div>
            <button onClick={() => navigate('order-summary')}>Place order</button>
        </>
    )
}

export default Home;