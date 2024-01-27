import { useState } from 'react'

const ToDoForm = ({addToDo}) => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    /** responsável pelo btn-submit */

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if(!value || !category) return;

    //adicionar to-Do
        addToDo(value, category);

    //limpar os campos
       setValue("");
       setCategory("");
    };

  return (
    <div className='todo-form'>
        
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                    placeholder='Digite a tarefa'
                    value={value}
                        onChange={(e) => setValue(e.target.value)} />


            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo - Faculdade">Estudo - Faculdade</option>
                <option value="Estudo - Extensão">Estudo - Extensão</option>
            </select>
            <button type="submit">Criar tarefa</button>
        </form>
    </div>
  )
}

export default ToDoForm