import { Link } from 'react-router-dom';

function Registracija({ registracija }) {
  return (
    <div className='telo'>
      <div className='kontejnerForme'>

        <Link to="/" > Nazad</Link>
        <h3>REGISTRACIJA</h3>
        <br></br>
        <form className='forma' onSubmit={registracija}>
          <input type='text' required name='korisnicko_ime' placeholder='Korisničko ime' />
          <input type='email' required name='mejl' placeholder='Mejl' />
          <input type='password' required name='lozinka' placeholder='Lozinka' />

          <label>Izaberite ulogu</label>
          <div className='uloga'>
            <div>
              <input type='radio' name='uloga' required value='lekar' /> lekar
            </div>
            <div>
              <input type='radio' name='uloga' required value='med_osoblje' /> medicinsko osoblje
            </div>
            <div>
              <input type='radio' name='uloga' required value='pacijent' /> pacijent
            </div>
          </div>

          <input type='text' name='jmbg' required placeholder='JMBG' />
          <input type='date' name='datum_rodjenja' required placeholder='Datum rođenja' />
          <input type='text' name='ime' required placeholder='Ime' />
          <input type='text' name='prezime' required placeholder='Prezime' />

          <label>Izaberite pol</label>
          <div className='pol'>
            <div>
              <input type='radio' name='pol' required value='muski' /> muški
            </div>
            <div>
              <input type='radio' name='pol' required value='zenski' /> ženski
            </div>
          </div>

          <br />
          <button type='submit'>Registrujte se</button>
        </form>
      </div>
    </div>
  );
}

export default Registracija;
