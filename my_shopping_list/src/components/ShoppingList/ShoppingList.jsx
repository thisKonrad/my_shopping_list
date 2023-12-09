/* :::: LIST COMPONENT :::: */
import './shoppinglist.css';
import Item from './Item.jsx';

const initalItems = [
    {id:1,description:'bananas',quantity:12,packed:false,},
    {id:2,description:'tomatoes',quantity:8,packed:false,},
    {id:3,description:'toilet paper',quantity:1,packed:true,}
];


export default function ShoppingList() {

    return (<div className="shopping_list">
            <ul>
            {initalItems.map((item)=> <Item item={item}/>)} 
            </ul>
            </div>)
}