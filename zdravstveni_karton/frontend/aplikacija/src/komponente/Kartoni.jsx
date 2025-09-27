import React from 'react'
import Karton from './Karton'

const Kartoni = ({kartoni}) => {
  return (
    <div className='kontejner'>
      {
        kartoni.map((k) => {
        return <Karton zk={k}/>
      })
      }    
    </div>
  )
}

export default Kartoni
