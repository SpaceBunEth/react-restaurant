import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Hero() {
return(
<>
<div className="px-4 py-3 my-3 text-center">
    {/* <img class="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
    <h1 className="display-5 fw-bold">SpaceBun Cafe</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Enjoy all of your favorites, SpaceBun Cafe's goal is provide the best of your mother's home cooked meals. Take time and have a Le-Cig, enjoy our free 2-kb WIFI that may or may not install malware. We love to please, don't see anything you like? Was your mother a bad cook? Then leave, we don't care, REALLY. Just like how your dad walked out all those years ago. You're free to leave at anytime! SPACEBUN CAFE! </p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    </div>
    </div>
</div>
</>
);
}