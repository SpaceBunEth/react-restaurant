import Reservations from "./Reservations";
import Hours from "./Hours";
import Location from "./Location";
import About from "./About";
import Contact from './Contact';

export default function Other(props) {
    console.log('Others CURRENT PAGE',props.page)
    return (
    <>
        {props.page === 'Reservations' && <Reservations />}
        {props.page === 'Hours' && <Hours infoState={props.infoState}/>}
        {props.page === 'Location' && <Location infoState={props.infoState}/>}
        {props.page === 'About' && <About infoState={props.infoState}/>}
        {props.page === 'Contact' && <Contact infoState={props.infoState}/>}
    </>
    );
}