/* :::: FORM COMPONENT :::: */
import './form.css';

export default function Form({
    handleSubmit, 
    handleChange, 
    handleQuantity,
    quantity,
    input}) {

    return (<form className="add_to_form" onSubmit={handleSubmit}>
    <h3>Lets Go Shopping:</h3>
    <select 
    name="quantity_select" 
    value={quantity}
    onChange={handleQuantity}>
    {/* create a option of 20 numbers:  */}
    {Array.from({length: 20},(_,i)=> i +1).map(
        (num)=> <option value={num} key={num}>{num}</option>)}
    </select>
    <input 
    name="article_input" 
    value={input} 
    onChange={handleChange}
    type="text" 
    placeholder="article">
    </input>
    <button name="add_button">Add</button>
   </form>)
}