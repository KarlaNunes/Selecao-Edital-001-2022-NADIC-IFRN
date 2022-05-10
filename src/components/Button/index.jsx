import './style.css'

export function Button({title}) {
  return (
    <button type="button" className='button-home'>
      {title}
    </button>
  )
}