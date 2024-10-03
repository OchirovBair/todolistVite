import { Task } from './feature'
import { useState } from 'react'

export function App() {
  const initialState = [
    { id: 1, title: 'React', isDone: false },
    { id: 1, title: 'JS', isDone: false },
    { id: 1, title: 'Git', isDone: false },
  ]
  const [state, setState] = useState(initialState)
  return (
    <div>
      {state.map(item => {
        return <Task key={item.id} isDone={item.isDone} title={item.title} />
      })}
    </div>
  )
}
