export default function Reservations() {
    return(
        <>
            <h1 className="text-center">Book Reservation</h1>
            <hr/>
            <form className="row g-3">
        <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Full Name</label>
            <input type="email" className="form-control" id="Name" placeholder="John Middle Doe"/>
        </div>
        <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Email</label>
            <input type="password" className="form-control" id="email" placeholder="JohnDoe1234@email.com"/>
        </div>
        <div className="col-12">
            <label for="inputAddress" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="(555)555-5555)"/>
        </div>
        <div class="col-12">
            <label for="inputAddress2" className="form-label">Time</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Time"/>
        </div>
        <div class="col-md-6">
            <label for="inputCity" className="form-label">Location</label>
            <input type="text" className="form-control" id="Location" placeholder="Location"/>
        </div>

        <div className="col-12">
            <button className="btn btn-primary">Submit</button>
        </div>
        </form>
        </>
    );
}