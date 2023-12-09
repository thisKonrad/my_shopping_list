/* :::: STATISTIC COMPONENT :::: */
import './statistics.css'


export default function Statistics(items) {

    const numberOfItems= items.length;
    const itemsPacked = items.filter((item)=> item.packed).length;
    const listPackedPercentage = numberOfItems / itemsPacked;

    return (<footer className="stats">
        <em>you have {numberOfItems} items on your list, 
        and you already packed {itemsPacked}, list packed in % {listPackedPercentage}</em>
    </footer>)
}