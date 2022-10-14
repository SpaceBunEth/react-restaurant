import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ReactImgs from './img/banner_sep22.png'


export default function Home(){
    const reactImg = {
        name:'SpaceBun',
        imageUrl: ReactImgs,
        classImg: 'card-img'
    }

    return(
    <>
        <div className="card text-bg-dark">
            <img src={reactImg.imageUrl} className={reactImg.classImg} alt={reactImg.name} />
            <div className="card-img-overlay">
                {/* <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
            </div>
        </div>
    </>
    );
}