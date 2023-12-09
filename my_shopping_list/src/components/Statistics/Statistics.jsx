/* :::: STATISTIC COMPONENT :::: */
import './statistics.css'


export default function Statistics({items}) {

    if(items.length === 0){
        return <p className="statistics">Let's go Shopping!</p>
    }

    const numberOfItems= items.length;
    const itemsPacked = items.filter((item)=> item.packed).length;
    const listPackedPercentage = Math.round(((itemsPacked/numberOfItems ) *100));

    return (<footer className="statistics">
        <p>
        {listPackedPercentage === 100 ? `You are Finished! Lets go home!` :
        `you have ${numberOfItems} items on your list, 
        and you already packed ${itemsPacked} item, 
        you packed ${listPackedPercentage}% of the List`}
        </p>
    </footer>)
}