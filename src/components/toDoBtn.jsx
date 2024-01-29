import React from 'react';


function To_DoBtn ({removeToDo, to_do, completeToDo}){
    return (
        <div className='to_DoBtn'>
            <div className="content">
                <button className="btnComplete" onClick={() => completeToDo(to_do.id)}> Completar</button>
                <button className="btnStop" onClick={() => removeToDo(to_do.id)}> X</button>
            </div>
        </div>
    )
};
  
export default To_DoBtn;