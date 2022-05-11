import { useEffect, useState } from "react"

export function Candidate(){
  

  // useEffect(() => {
  //   console.log(candidates)
  // }, [setCandidates])

  // function handleCreateCandidateElement() { 
  // }
    return (
      <div className="register-candidate">
        <label htmlFor="candidate-name">Nome do candidato</label>
        <input type="text" minLength="1" />
      </div>
    )
}