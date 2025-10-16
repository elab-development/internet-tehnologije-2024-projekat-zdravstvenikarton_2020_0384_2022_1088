import React from 'react'

function MojiPodaci({prijavljen}) {
  return (
    <>
        <h3 style={{ marginBottom: "50" + "px", marginTop: "50" + "px" }}> VAŠI PODACI </h3>
        <div className='kontejner'>
            
            <div className='kartica'>
                <div> <label> ID: </label> <label>{prijavljen.id} </label> </div>
                <div> <label> JMBG: </label> <label>{prijavljen.jmbg} </label> </div>
                <div> <label> Ime: </label> <label>{prijavljen.ime} </label> </div>
                <div> <label> Prezime: </label> <label>{prijavljen.prezime} </label> </div>
                <div> <label> Pol: </label> <label>{prijavljen.pol} </label> </div>
                <div> <label> Mejl: </label> <label>{prijavljen.email} </label> </div>
                <div> <label> Korisnicko ime: </label> <label>{prijavljen.username} </label> </div>
            </div>
        </div>
    </>
  )
}

export default MojiPodaci
