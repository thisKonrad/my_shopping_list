/* :::: ITEM COMPONENT :::: */
import './shoppinglist.css';

export default function Item({item, onDeleteItem}) {

    return (<li className="list_item">
        <span style={item.packed ? {textDecoration:'line-through'} : {}}>
        {item.quantity}
        <span>  </span>
        {item.input}
        </span>
        <button 
        className="delete_button"
        onClick={()=>onDeleteItem(item.id)}>
            X
        </button>
    </li>)
}