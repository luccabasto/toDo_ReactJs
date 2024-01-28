import React from 'react';


function To_DoBtn ({removeToDo, to_do}){
    return (
        <div className='to_DoBtn'>
            <div className="content">
                <button className="btnComplete"> Completar</button>
                <button className="btnStop" onClick={() => removeToDo(to_do.id)}> X</button>
            </div>
        </div>
    )
};
  
export default To_DoBtn;