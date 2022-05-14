import './style.css'

import { Button } from "../Button";

export function Election({name, dateBegin, dateEnd}) {
  return (
    <div className="container">
      <ul>
        <li>{name}</li>
        <li> {dateBegin} </li>
        <li> {dateEnd} </li>
        <li>
          <select name="select-candidate" id="select-candidate">
            <option value="candidate1">Candidate1</option>
          </select>
        </li>
        <li>
          <Button title="Votar" />
        </li>
      </ul>
    </div>
  )
}