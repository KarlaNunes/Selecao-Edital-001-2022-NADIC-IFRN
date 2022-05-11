import { useEffect, useState } from "react"

export function Candidate({numberOfCandidates}){
  const [candidates, setCandidates] = useState([])

  // useEffect(() => {
  //   console.log(candidates)
  // }, [setCandidates])

  function handleCreateCandidateElement() {
    
  }

  while(numberOfCandidates > 0) {
    numberOfCandidates--
    return (
      <div className="register-candidate">
        <label htmlFor="candidate-name">Nome do candidato</label>
        <input type="text" />
      </div>
    )
  }
}