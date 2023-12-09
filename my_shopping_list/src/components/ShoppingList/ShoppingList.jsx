/* :::: LIST COMPONENT :::: */
import './shoppinglist.css';
import Item from './Item.jsx';

const initalItems = [
    {id:1, description:'bananas',quantity:12, packed:false,},
    {id:2, description:'tomatoes',quantity:8, packed:false,},
    {id:3, description:'toilet paper',quantity:1, packed:true,}
];


export default function ShoppingList({items, onDeleteItem}) {

    return (<div className="shopping_list">
            <ul>
            {items.map((item)=> <Item 
            key ={item.id} 
            item={item}
            onDeleteItem={onDeleteItem}/>)} 
            </ul>
            </div>)
}