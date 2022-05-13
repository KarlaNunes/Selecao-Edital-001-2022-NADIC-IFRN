import { useState, useEffect } from 'react'
import { Link, Outlet } from "react-router-dom";

import { Button } from '../../components/Button'
import { Candidate } from '../../components/Candidate'
import { Election } from '../../components/Election';
import { Header } from '../../components/Header';
import { ElectionsPage } from '../ElectionsPage';
import './style.css'

export function CreateElectionPage() {
  const [candidates, setCandidates] = useState([])

  const [elections, setElections] = useState([])
  const [electionName, setElectionName] = useState('')
  const [electionDateBegin, setElectionDateBegin] = useState('')
  const [electionDateEnd, setElectionDateEnd] = useState('')

  function handleAddNewCandidate(event) {
    if(event >= 1) {
      setCandidates(prevState => [...prevState, event])
    }
  }

  function handleCreateNewElection() {
    const newElection = {
      name: electionName,
      dateBegin: electionDateBegin,
      dateEnd: electionDateEnd,
      // participantCandidates: candidates
    }
    
    setElections(prevState => [...prevState, newElection])
  }


  return (
    <>

      <Header />
      <form>
        <div className="election-name">
          <label htmlFor="election-name">Nome da eleição:</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            onChange={event => setElectionName(event.target.value)}
          />
        </div>

        <div className="date-container">
          <div className="election-date-begin">
            <label htmlFor="date-begin">Data de início: </label>
            <input 
              type="date" 
              name="date-begin" 
              id="date-begin" 
              onChange={event => setElectionDateBegin(event.target.value)}
            />
          </div>

          <div className="election-date-end">
            <label htmlFor="">Data final: </label>
            <input 
              type="date" 
              name="date-end" 
              id="date-end" 
              onChange={event => setElectionDateEnd(event.target.value)}
            />
          </div>
        </div>

        <div className="number-of-candidates">
          <label htmlFor="candidate-name">
            Número de candidatos participantes:
          </label>
          <input
            type="number"
            placeholder="Quantidade de candidatos"
            onChange={event => handleAddNewCandidate(event.target.value)}
          />
        </div>

        {
          Object.entries(candidates).map(() => {
            return (
              <Candidate key={Math.random()} />
            )
          })
        }

        
        <Button 
          title="Criar nova eleição" 
          onClicked={handleCreateNewElection}
        />

        {
          Object.entries(elections).map(() => {
            return (
              <Election 
                key={Math.random()}
                name={electionName}
                dateBegin={electionDateBegin}
                dateEnd={electionDateEnd}
              />

            ) 
          })
        }
        
      </form>   
    </>
  )
}
