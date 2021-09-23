import React from "react";

import {useDispatch} from 'react-redux'
import { todoAdded } from './todosSlice'

function CreateTodo() {
  const dispatch = useDispatch();
  const [text,setText] = useState("")

  function handleChange(e) {
    setText(text);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(todoAdded(text))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <p>
          <label>add todo</label>
          <input value={text} type="text" onChange={handleChange}/>
        </p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default CreateTodo;
