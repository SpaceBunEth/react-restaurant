
export default function(props){
    console.log(props)
    console.log(props.menuItems[0].category)

    const arr = props.menuItems.filter((i) => {
        //console.log(i)
         return i.category.title === props.page
    })
    console.log(arr)
    

    const htmlArray = []
    // const dinnerArray = props.menuItems.category.filter((items) => {
    //     if(items.category.title = props.page){
    //         return items
    //     }
    //     })


    for(let i = 0; i < arr.length; i++){
        
        htmlArray.push(
        <>
            <div className="card">
                <h2 className="card-header">
                    {arr[i].title}
                </h2>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>{arr[i].description}</p>
                    <footer className="blockquote-footer">{arr[i].cuisine ? arr[i].cuisine.label : null} {'-'} {arr[i].category ? arr[i].category.title : null}{':'}<cite title="Source Title"> {'$'}{arr[i].price}</cite></footer>
                    </blockquote>
                </div>
            </div>
            <br/>
        </>
        )

    }
    return(
    <>
    <div>{htmlArray}</div>
    </>
    )
}