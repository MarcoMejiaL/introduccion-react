import React from "react";
import {CreateTodoButton} from './CreateTodoButton'
function TodoSearch(){
    const onChangeValue = (event)=>{
        console.log(event.target.value);
    }
    return(
        <div className="headerContainer">
        <input className="searchText" type="text" onChange={onChangeValue} />
        <CreateTodoButton/>
        </div>

    );
}

export {TodoSearch}