export default function Location(props) {
    console.log('Location PAGE')
    const obj = props.infoState.address
    const addressArr = []
    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`);
        addressArr.push(<h3 className='text-center'>{property}: {obj[property]}</h3>)
      }
    return(
        <>
            <h1 className="text-center">Location</h1>
            {addressArr}

        </>
    );
}