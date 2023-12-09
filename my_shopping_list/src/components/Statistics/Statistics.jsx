/* :::: STATISTIC COMPONENT :::: */
import './statistics.css'


export default function Statistics({items}) {

    const numberOfItems= items.length;
    const itemsPacked = items.filter((item)=> item.packed).length;
    const listPackedPercentage = Math.round(((itemsPacked/numberOfItems ) *100));

    return (<footer className="stats">
        <em>you have {numberOfItems} items on your list, 
        and you already packed {itemsPacked} item, you packed {listPackedPercentage}% of the List</em>
    </footer>)
}