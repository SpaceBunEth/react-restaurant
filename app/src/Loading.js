import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function(){
    const placeHolderArray = []
    for(let i = 0; i <= 4 && i <= 5; i++){
        
        placeHolderArray.push(
            <>
                
                <div className="card m-1">
                    <h3 className="card-header placeholder-wave">
                        <span class="placeholder col-12"></span>
                    </h3>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0 placeholder-glow">
                        <p className="lh-sm"><span class="placeholder col-12 placeholder-sm"></span></p>
                        <footer className="placeholder-wave"><span class="placeholder col-12 placeholder-xs"></span></footer>
                        </blockquote>
                    </div>
                </div>
                
            </>
        )
    }
    return(
        <>
        <h1 className='text-center'>LOADING...
            <div class="spinner-border" role="status">
            </div>
        </h1>
        {placeHolderArray}
        </>
    )
}