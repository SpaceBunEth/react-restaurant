
export default function(props){

    const htmlArray = []
    const dinnerArray = props.menuItem.filter((items) => {
        if(items.category.title = 'Dinner'){
            return items
        }
        })


    // console.log('Menu')
    // console.log(dinnerArray)
    // console.log(props.menuItem[0].title)

    // console.log(props.menuItem.filter((items) => {
    //     if(items.category.title = 'Dinner'){
    //         console.log(items)
    //     }
    // }))


    for(let i = 0; i < dinnerArray.length; i++){
        
        //console.log(dinnerArray[i].title)
        htmlArray.push(
        <>
            <div className="card">
                <h2 className="card-header">
                    {dinnerArray[i].title}
                </h2>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>{dinnerArray[i].description}</p>
                    <footer className="blockquote-footer">{dinnerArray[i].cuisine ? dinnerArray[i].cuisine.label : null} {'-'} {dinnerArray[i].category ? dinnerArray[i].category.title : null}{':'}<cite title="Source Title"> {'$'}{dinnerArray[i].price}</cite></footer>
                    </blockquote>
                </div>
            </div>
            <br/>
        </>
        )


        //                    <footer className="blockquote-footer">{dinnerArray[i].cuisine.title}{dinnerArray[i].category.label}<cite title="Source Title">{dinnerArray[i].price}</cite></footer>
      
    }
    //console.log(dinnerArray)

    // props.menuItem.filter((items) => {
    //     if(items.category.title = 'Dinner'){
    //     htmlArray.push(
            
    //     )
    //     }
    // })

    return(
    <>
    <div>{htmlArray}</div>
    </>
    )
}