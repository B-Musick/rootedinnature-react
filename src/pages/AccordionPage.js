import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: "1",
            label: "Plant Key 1",
            content: "This is a test"
        },
        {
            id: "2",
            label: "Plant Key 2",
            content: "This is a test"
        },
        {
            id: "3",
            label: "Plant Key 3",
            content: "This is a test"
        }
    ]
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage;