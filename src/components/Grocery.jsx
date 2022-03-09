import GroceryInput from "./GroceryInput";
import {useState} from "react";
import GroceryList from "./GroceryList";
import { nanoid } from "nanoid";

export default function Grocery(){

    const [groceries, setGroceries] = useState([]);

    function AddGrocery(input){
        let grocery = {
            title : input, 
            id : nanoid()
        }
        setGroceries([...groceries, grocery]);
    }

    function DeleteGrocery(grocery_id){
        setGroceries(groceries.filter((grocery) => {
            return(grocery.id != grocery_id)
        }));
    }

    return(
        <div>
            <GroceryInput AddGrocery = {AddGrocery} />
            {groceries.map((grocery)=>{
                return <GroceryList grocery = {grocery} DeleteGrocery = {DeleteGrocery} key = {grocery.id} />
            })}
        </div>
    );
}