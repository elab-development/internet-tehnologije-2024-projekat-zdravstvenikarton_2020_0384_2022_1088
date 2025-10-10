import React from 'react'
import Pregled from './Pregled';

function Pregledi({pregledi, prijavljen, uloga}) {

  let preglediZaPrikaz = [];

  if(uloga === 'lekar') {
    preglediZaPrikaz = pregledi.filter(p => p.lekar === prijavljen.ime + " " + prijavljen.prezime);
  } else if(uloga === 'pacijent') {
    preglediZaPrikaz = pregledi.filter(p => p.pacijent === prijavljen.ime + " " + prijavljen.prezime);
  } else if(uloga === 'med_osoblje') {
    preglediZaPrikaz = pregledi.filter(p => p.medicinskoOsoblje === prijavljen.ime + " " + prijavljen.prezime);
  }

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
