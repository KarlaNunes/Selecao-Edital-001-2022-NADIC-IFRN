import { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { Candidate } from '../../components/Candidate'
import { Elections } from '../Elections'
import './style.css'

export function CreateElectionPage() {
  const [candidates, setCandidates] = useState([])

  function handleAddNewCandidate(event) {
    if(event >= 1) {
      setCandidates(prevState => [...prevState, event])
    }
  }

  return (
    <>
      <form>
        <div className="election-name">
          <label htmlFor="election-name">Nome da eleição:</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            // onChange={event => setStudentName(event.target.value)}
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
          <label htmlFor="candidate-name">
            Número de candidatos participantes:
          </label>
          <input
            type="number"
            placeholder="Quantidade de candidatos"
            onChange={event => {
              handleAddNewCandidate(event.target.value)
            }}
          />
        </div>

        {/* <button type="button">
            Criar nova Eleição
          </button> */}

        {
          Object.entries(candidates).map(() => {
            return (
              <Candidate key={Math.random()} />
            )
          })
        }

        <Button 
          title="Criar nova eleição" 
          onClicked={() => console.log('button clicked! New el. created')}
        />
      </form>

      
    </>
  )
}
