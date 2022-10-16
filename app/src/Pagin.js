

export default function Pagin(props) {
    const paginArray = [] 
    console.log('Current page',props.pageNum)
    for(let i = 1; i <= props.totalPages; i++){
        paginArray.push(
            <>
            <li class="page-item"><a href="#topPage" className={props.pageNum == i - 1 ? "page-link disabled" : 'page-link'} onClick={() => {props.setpageNum(i - 1)}}>{i}</a></li>
            </>
        )
    }
    function preBtn(){
        if(props.pageNum <= 0){
            return 'page-link disabled'
        }else{
            return 'page-link'
        }
    }
    

    function nxtBtn(){
        if(props.pageNum >= props.totalPages - 1){
            return 'page-link disabled'
        }else{
            return 'page-link'
        }
    }
//disabled
// {disBtn()}
    return(
        <>
            <br/>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                    <li className="page-item ">
                    <a className={preBtn()} href="#topPage" onClick={() => {
                        const newPage = props.pageNum - 1 
                        props.setpageNum(newPage)
                        }}>Previous</a>
                    </li>
                        {paginArray}
                    <li className="page-item ">
                    <a href="#topPage" className={nxtBtn()} onClick={() => {
                        const newPage = props.pageNum +1
                        props.setpageNum(newPage)
                        }}>Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}