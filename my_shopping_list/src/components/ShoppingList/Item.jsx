/* :::: ITEM COMPONENT :::: */
import './shoppinglist.css';

export default function Item({item}) {

    return (<li className="list_item">
        <span>
        {item.quantity}
        <span>  </span>
        {item.description}
        </span>
        <button className="delete_button">
            X
        </button>
    </li>)
}