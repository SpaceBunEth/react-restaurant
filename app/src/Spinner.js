import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function(){
    return(
        <>
        <div className='container justify-content-center'>
        <div className='row align-item-center'>
        <div className='col-1'>
        <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}