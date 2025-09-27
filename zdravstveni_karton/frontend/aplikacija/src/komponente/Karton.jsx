import React from 'react'

function Karton({zk}) {
  return (
    <div className='karticaKarton'>
        <> <label> Id </label>  <label>{zk.id} </label> </>
        <> <label> Status </label>  <label>{zk.status} </label> </>
        <> <label> Poslednja dijagnoza </label>  <label>{zk.poslednjaDijagnoza} </label> </>
        <> <label> Poslednja terapija </label>  <label>{zk.poslednjaTerapija} </label> </>
    </div>
  )
}

export default Karton
