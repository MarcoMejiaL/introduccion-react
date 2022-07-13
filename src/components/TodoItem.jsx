import React from "react";
const todos =[
    {id:1, name:'uno'},
    {id:2, name:'dos'},
    {id:3, name:'tres'}
]
function TodoItem(){
    return(
        <ul >
            {todos.map(item=>
<li>
<h2>{item.name}</h2>
<span>x</span>
<input type="checkbox" />
</li>
            )}
            
        </ul>
    );
}

export {TodoItem}