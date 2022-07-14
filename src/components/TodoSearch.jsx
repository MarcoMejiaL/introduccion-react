import React from "react";
import {CreateTodoButton} from './CreateTodoButton'
function TodoSearch(){
    return(
        <div className="headerContainer">
        <input className="searchText" type="text" />
        <CreateTodoButton/>
        </div>

    );
}

export {TodoSearch}