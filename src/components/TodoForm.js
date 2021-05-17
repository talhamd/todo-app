import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const[input, setInput]= useState(props.edit ?props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input 
        })
   
    setInput('')
}

    return (
       
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
              <div>
              <input
                  placeholder="update your item" 
                  value={input}       
                  onChange={handleChange}
                  className='todo-input edit' 
                  ref = {inputRef}>
              </input>
              <button onClick={handleSubmit} className="todo-button edit" >Update</button>
              </div>              
            ) : (
                <div className="input-div">
                    <input
                        placeholder="Your Todo" 
                        value={input}       
                        onChange={handleChange} 
                        className='todo-input'
                        ref = {inputRef}>
                    </input>
                    <button onClick={handleSubmit} className="todo-button" >Add Todo</button>
                </div>
            )


}
        </form>
        
    )
}

export default TodoForm
