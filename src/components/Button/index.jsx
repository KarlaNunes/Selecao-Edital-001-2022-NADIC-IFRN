import './style.css'

export function Button({title, onClicked}) {
  return (
    <button type="button" onClick={onClicked}>
      {title}
    </button>
  )
}