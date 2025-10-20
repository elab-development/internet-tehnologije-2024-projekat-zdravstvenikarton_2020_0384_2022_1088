import Pregled from './Pregled';
import { useEffect, useState } from 'react';

function Pregledi({ prikazPregleda, pregledi }) {

  useEffect(() => {
    prikazPregleda();
  }, []);

  const [unetaVrednost, postaviUnetuVrednost] = useState('');

  // Filtriranje pregleda po imenu i prezimenu pacijenta
  const prikazaniPregledi = pregledi.filter(p =>
    p.pacijent.toLowerCase().includes(unetaVrednost.toLowerCase())
  );

  return (
    <>
      <h3 className='naslov'> VAŠI PREGLEDI </h3>

      {/* Polje za pretragu */}
      <input
        type="text"
        placeholder="Pretraži po imenu i prezimenu pacijenta"
        onChange={e => postaviUnetuVrednost(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
      />

      <div className='kontejner'>
        {
          prikazaniPregledi.map(p => {
            return <Pregled key={p.id} pregled={p} />
          })
        }
      </div>
    </>
  )
}

export default Pregledi
