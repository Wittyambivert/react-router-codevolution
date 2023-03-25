import { useState } from 'react';

const AccordionItem = ({ items }) => {
    const [ expand, setExpand ] = useState(false);
    const toggleExpand = () => setExpand((oldState) => !oldState);

    return (
        <div >
            <button onClick={toggleExpand}>{items.title}<span>{expand ? '-' : '+' }</span></button>
            {expand && <p>{items.content}</p>}
        </div>
    );
};


export default AccordionItem;