import React from 'react'
import Korisnik from './Korisnik'

function Korisnici({korisnici}) {
  return (
    <div className='kontejner'>
      {korisnici.map((k) => {
        return (
            <Korisnik korisnik={k}/>
        )
      })}
    </div>
  )
}

export default Korisnici
