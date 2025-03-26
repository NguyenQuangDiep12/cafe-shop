import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function BtnColor(props) {
  return (
    <div>
        <button className='btn btn-dark rounded-0 text-center' type='button'>
            <span>{props.name}</span> 
            <span><FontAwesomeIcon icon={faAngleRight}/></span>
        </button>
    </div>
  )
}

export default BtnColor