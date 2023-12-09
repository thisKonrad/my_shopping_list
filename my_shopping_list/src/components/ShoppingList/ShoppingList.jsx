/* :::: LIST COMPONENT :::: */
import './shoppinglist.css';
import Item from './Item.jsx';
import {useState} from 'react';

/* const initalItems = [
    {id:1, description:'bananas',quantity:12, packed:false,},
    {id:2, description:'tomatoes',quantity:8, packed:false,},
    {id:3, description:'toilet paper',quantity:1, packed:true,}
];
 */

export default function ShoppingList({
    items, 
    onDeleteItem, 
    onChecked}) {

    const[sorted,setSort]= useState('default');

    let sortedItems = sorted;

    if(sortedItems === 'default'){
        sortedItems = items;
    }
    if( sortedItems === 'name'){
        /*sort the items alphabetically:*/ 
        sortedItems = items.slice().sort(
        (a,b)=> a.input.localeCompare(b.input))
    }
    if( sortedItems === 'packed'){
        sortedItems = items.slice().sort(
        (a,b)=> Number(a.packed) - Number(b.packed))
    }
 
    return (<div className="shopping_list">
            <ul>
            {sortedItems.map((item)=> <Item 
            key ={item.id} 
            item={item}
            onDeleteItem={onDeleteItem}
            onChecked={onChecked}
            />)} 
            </ul>
            <div className="sort_wrap">
                <select value={sorted} onChange={(e)=>{setSort(e.target.value), console.log(sorted)}}>
                <option value="default">Sort by default order</option>
                <option value="name">Sort by article name</option>
                <option value="packed">Sort by packed state</option>
                </select>
            </div>
            </div>)
}