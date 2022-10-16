import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ReactImgs from './img/banner_sep22.png'


export default function Home(props){
    console.log(props.setPage)
    return (
        <>
            <main>
                <div className="container py-4">

                    <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Order Now</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <button className="btn btn-primary btn-lg disabled" type="button">Coming Soon</button>
                    </div>
                    </div>

                    <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                        <div className="h-100 p-5 text-bg-dark rounded-3">
                        <h2>Book Reservations</h2>
                        <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                        <button className="btn btn-outline-light " onClick={()=>{props.setPage('Reservations')}} type="button">Reserve</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="h-100 p-5 bg-light border rounded-3">
                        <h2>See Locations</h2>
                        <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                        <button className="btn btn-outline-secondary" onClick={()=>{props.setPage('Location')}} type="button">View</button>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </>
    );
}



// export default function Home(){
//     const reactImg = {
//         name:'SpaceBun',
//         imageUrl: ReactImgs,
//         classImg: 'card-img'
//     }

//     return(
//     <>
//         <div className="card text-bg-dark">
//             <img src={reactImg.imageUrl} className={reactImg.classImg} alt={reactImg.name} />
//             <div className="card-img-overlay">
//                 {/* <h5 className="card-title">Card title</h5>
//                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
//             </div>
//         </div>
//     </>
//     );
// }