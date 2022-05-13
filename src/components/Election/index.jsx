export function Election({name, dateBegin, dateEnd}) {
  return (
    <>
      <h1>A new election was created</h1>
      <p>{name}</p>
      <p>{dateBegin}</p>
      <p>{dateEnd}</p>
    </>
  )
}