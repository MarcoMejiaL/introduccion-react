import React from "react";
const todos =[
    {id:1, name:'uno'},
    {id:2, name:'dos'},
    {id:3, name:'tres'}
]
function TodoItem(){
    return(
        
        <ul className="ul__list">
            {todos.map(item=>
<li key={item.name} className="li__item">
<p>
            <input type="checkbox" id={item.id} />
            <label for={item.id}>{item.name}</label>
          </p>


<span>x</span>
</li>
            )}
            
        </ul>
      
        
       
    );
}

export {TodoItem}