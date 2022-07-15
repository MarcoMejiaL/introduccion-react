import React from "react";
 

function CreateTodoButton(){

    const onClickButton = ()=>{
        alert('taquitos de pollo')
    }
    return(
        <input type="button" value='Save' onClick={onClickButton} />
    );
}

export {CreateTodoButton}