import Pregled from './Pregled';
import { useEffect } from 'react';

function Pregledi({ prikazPregleda, pregledi }) {

  useEffect(() => {
    prikazPregleda();
  }, []);

  return (
    <>
      <h3 style={{ marginBottom: "50px", marginTop: "100px" }}> VAŠI PREGLEDI </h3>
      <div className='kontejner'>
        {
          pregledi.map(p => {
            return <Pregled key={p.id} pregled={p} />
          })
        }
      </div>
    </>
  )
}

export default Pregledi
