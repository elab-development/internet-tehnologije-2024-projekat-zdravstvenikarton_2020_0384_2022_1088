import React from 'react'
import Pregled from './Pregled';

function Pregledi({pregledi}) {
  return (
    <div className='kontejnerPregledi'>
      {
        pregledi.map((p) => {
          return <Pregled pregled={p}/>;
        })
      }
    </div>
  )
}

export default Pregledi
