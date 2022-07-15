import React from "react";
const todos =[
    {id:1, name:'uno', complete:false},
    {id:2, name:'dos',complete:false },
    {id:3, name:'tres',complete:true}
]
function TodoItem(){
    const onComplete = ()=>{
        console.log('completo');
    }

    const borradoItem= (param)=>{
        console.log(`se borrro el archivo ${param}`);
    }
    return(
        
        <ul className="ul__list">
            {
            todos.map(item=>{
              
                    return <li key={item.name} className="li__item">
                        
                            <p>
                                <input onClick={onComplete} type="checkbox" id={item.id} />
                                <label for={item.id}>{item.name}</label>
                              </p>
                    
                        
                    
                    
                    <span className="spanEraseButton" onClick={()=>borradoItem(item.id)}>x</span>
                    </li>
                
           } )}
            
        </ul>
      
        
       
    );
}

export {TodoItem}