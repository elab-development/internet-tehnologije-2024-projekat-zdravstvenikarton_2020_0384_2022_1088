import React from 'react'
import Pregled from './Pregled';

function Pregledi({prijavljen, prikazPregleda, pregledi}) {

  prikazPregleda();
  let preglediZaPrikaz = pregledi;

  return (
    <>
      <h3 style={{marginBottom:"50"+"px",marginTop:"50"+"px"}}> VAŠI PREGLEDI </h3>
      <div className='kontejner'>
        {
          preglediZaPrikaz.map(p => {
            return <Pregled key={p.id} pregled={p}/>
          })
        }
      </div>
    </>
  )
}

export default Pregledi
