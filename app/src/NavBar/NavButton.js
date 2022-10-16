import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function NavButton(props) {
    const titleArr = props.infoState.page
    //console.log(props)
    const array = []

    //console.log('NavButton',props)

    // const click = (str) => {
    //     console.log(str)
    //     props.setPage(str)
    //     //console.log('Click FUNC:',props.page)
    // }

    for(let i = 0; i < titleArr.length; i++){
        array.push(
            <button type="button" className="btn btn-light" key={i.toString()} onClick={() => {
                props.setpaginNum(0)
                props.setPage(titleArr[i])
            }}>{titleArr[i]}</button>
            
        );
        //console.log(titleArr[i])

        
    }

    // console.log(props.infoObj.infoSetState)
    // onClick={navBarClick('test')}
    // onClick={click}

    return(                
        <>
        <li className='nav-item'>{array}</li>
        </>
    );
}

/* <li className="nav-item">
<button type="button" className="btn btn-light">Home</button>
</li> */

//<button type="button" className="btn btn-light">Home</button>