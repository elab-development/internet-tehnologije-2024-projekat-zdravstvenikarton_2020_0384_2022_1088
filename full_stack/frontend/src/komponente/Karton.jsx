import React from 'react'

function Karton({ zk }) {

  // Ako zk nije niz ili je prazan
  if (!Array.isArray(zk) || zk.length === 0) {
    return <p>Nema kartona za datog pacijenta!</p>;
  }
  else {

    return (
      <div className='kartica'>
        <div> <label> Id: </label>  <label>{zk.id} </label> </div>
        <div> <label> Status: </label>  <label>{zk.status} </label> </div>
        <div> <label> Poslednja dijagnoza: </label>  <label>{zk.poslednja_dijagnoza} </label> </div>
        <div> <label> Poslednja terapija: </label>  <label>{zk.poslednja_terapija} </label> </div>
        <div> <label> Pacijent: </label>  <label>{zk.pacijent} </label> </div>
        <div> <label> Lekar: </label>  <label>{zk.lekar} </label> </div>
        <div> <label> Medicinsko osoblje: </label>  <label>{zk.med_osoblje} </label> </div>
      </div>
    )
  }
}

export default Karton
