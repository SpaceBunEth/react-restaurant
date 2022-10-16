export default function Hours(props) {
    const hoursArray = [] 
    for(let i = 0; i < props.infoState.hours.length;i++){
        hoursArray.push(
            <h3 className='text-center'>{props.infoState.hours[i]}</h3>
        )
    }
    return(
        <>
        <h1 className='text-center'>Hours</h1>
        <hr/>
        {hoursArray}
        </>
    );
}