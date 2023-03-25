import AccordionItem from './AccordionItem';

const Accordion = () => {
    return (
        <div>
            {
                data.map((items) => (
                    <AccordionItem key={items.id} items={items} />
                ))
            }
            
        </div>
    );
};



const data = [
    {
        id: 1,
        title: "First Title",
        content: "First content"
    },
    {
        id: 2,
        title: "Second Title",
        content: "Second content"
    }
]



export default Accordion;