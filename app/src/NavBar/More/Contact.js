export default function Contact(props) {
    return(
        <div className="text-center">
            <h1>Contact Us!</h1>
            <h3>Phone:{props.infoState.phone}</h3>
            <h3>Email:{props.infoState.email}</h3>
        </div>
    );
}