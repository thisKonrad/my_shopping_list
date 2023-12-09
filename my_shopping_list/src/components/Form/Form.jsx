/* :::: FORM COMPONENT :::: */
import './form.css';

export default function Form() {

    return (<form className="add_to_form">
    <h3>Lets Go Shopping:</h3>
    <select name="quantity_select">
    {/* create a option of 20 numbers:  */}
    {Array.from({length: 20},(_,i)=> i +1).map(
        (num)=> <option value={num} key={num}>{num}</option>)}
    </select>
    <input name="article_input" type="text" placeholder="article"></input>
    <button name="add_button">Add</button>
   </form>)
}