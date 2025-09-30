import React from 'react'
import Pregled from './Pregled';

function Pregledi({pregledi, prijavljen}) {
  return (
    <>
    <h3 style={{marginBottom:"50"+"px",marginTop:"50"+"px"}}> VAŠI PREGLEDI </h3>
    <div className='kontejner'>
      {
        pregledi.map((p) => {
          if(p.lekar === (prijavljen.ime + " " + prijavljen.prezime)) {
            return <Pregled pregled={p}/>;
          }
        })
      }
    </div>
    </>
  )
}

export default Pregledi
