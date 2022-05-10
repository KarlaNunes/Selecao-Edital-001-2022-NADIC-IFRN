import { Button } from '../../components/Button'
import './style.css'

export function Election() {
  return (
    <form>
        <div className="election-name">
          <label htmlFor="election-name">Nome da eleição:</label>
          <input 
            type="text" 
            placeholder="Digite seu nome..." 
            onChange={event => setStudentName(event.target.value)}
          />
        </div>

        <div className="date-container">
          <div className="election-date-begin">
            <label htmlFor="date-begin">Data de início: </label>
            <input type="date" name="date-begin" id="date-begin" />
          </div>

          <div className="election-date-end">
            <label htmlFor="">Data final: </label>
            <input type="date" name="date-end" id="date-end" />
          </div>
        </div>

        <div className="number-of-candidates">
          <label htmlFor="candidate-name">Número de candidatos participantes:</label>
          <input 
            type="number" 
            placeholder="Quantidade de candidatos" 
            onChange={event => setStudentName(event.target.value)}
          />
        </div>

        {/* <button type="button">
          Criar nova Eleição
        </button> */}

        <Button  title="Criar nova eleição"/>
      </form>
  )
}