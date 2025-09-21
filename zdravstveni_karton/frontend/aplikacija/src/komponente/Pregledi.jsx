import React from 'react'
import Korisnik from './Korisnik'

function Pregledi({k}) {
  return (
    <div>
      {
        k.map((korisnik) => {
          return <Korisnik korisnik={korisnik[k.jmbg]}/>;
        })
      }
    </div>
  )
}

export default Pregledi
