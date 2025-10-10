import React from 'react'

function Karton({zk}) {
  return (
    <div className='kartica'>
        <div> <label> Id: </label>  <label>{zk.id} </label> </div>
        <div> <label> Status: </label>  <label>{zk.status} </label> </div>
        <div> <label> Poslednja dijagnoza: </label>  <label>{zk.poslednjaDijagnoza} </label> </div>
        <div> <label> Poslednja terapija: </label>  <label>{zk.poslednjaTerapija} </label> </div>
        <div> <label> Pacijent: </label>  <label>{zk.pacijent} </label> </div>
        <div> <label> Lekar: </label>  <label>{zk.lekar} </label> </div>
        <div> <label> Medicinsko osoblje: </label>  <label>{zk.medicinskoOsoblje} </label> </div>
    </div>
  )
}

export default Karton
