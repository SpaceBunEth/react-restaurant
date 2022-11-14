export default function NavMore(props) {
    console.log('NavMore',props)


    const returnArray = [] 
    for(let i = 0; i < props.infoState.more.length;i++){
        console.log(props.infoState.more[i])
        if(props.infoState.more[i] == 'break'){
            returnArray.push(<hr/>)
        }else{
            returnArray.push(<li><a className="dropdown-item" onClick={() => {props.setPage(props.infoState.more[i])}}>{props.infoState.more[i]}</a></li>)
        }
    }

    return(
        <ul>
            {returnArray}
        </ul>
    );
}