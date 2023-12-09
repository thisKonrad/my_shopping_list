/* :::: ITEM COMPONENT :::: */
import './shoppinglist.css';

export default function Item({item, onDeleteItem, onChecked}) {

    return (<li className="list_item">
        <input type='checkbox' 
        value={item.packed}
        onChange={()=>{onChecked(item.id)}}
        >  
        </input>
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