export default function GroceryList({grocery, DeleteGrocery}){
    return(
        <div id = {grocery.id} className = "list">
            <span>{grocery.title}</span>
            <button 
            onClick = {(e)=>{
                DeleteGrocery(e.target.parentNode.id);
            }} 
            >Delete</button>
        </div>
    );
}