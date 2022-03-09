import {useState} from "react";


export default function GroceryInput({AddGrocery}){
    const [grocery, setGrocery] = useState("");

    return (
        <div>
            <input 
            type="text" 
            onChange={(e)=>{
                setGrocery(e.target.value);
            }}
             />
            <button 
            onClick={()=>{
                AddGrocery(grocery);
            }} 
            >Add Grocery</button>
        </div>
    );
}