import s from './Task.module.scss'

type Props = {
  title: string
  isDone: boolean
}
export const Task = ({ isDone, title }: Props) => {
  return (
    <div className={s.container}>
      <input type="checkbox" checked={isDone} />
      <p>{title}</p>
      <button>del</button>
    </div>
  )
}
