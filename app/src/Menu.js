import React from "react"
import Pagin from "./Pagin"

export default function(props){
    //console.log(props)
   // console.log(props.menuItems[0].category)

    const arr = props.menuItems.filter((i) => {
        //console.log(i)
         return i.category.title === props.page
    })
   // console.log(arr)
    //console.log(arr[0].title)

    const htmlArray = []
    // const dinnerArray = props.menuItems.category.filter((items) => {
    //     if(items.category.title = props.page){
    //         return items
    //     }
    //     })

    const mainArray = []
    let subArray = []
    //console.log('length of arr',arr.length)
    for(let i = 0; i <= arr.length -1;){
        

        for(let j = 0; j <= 4 && i <= arr.length -1; j++){
        
            subArray.push(
                <>
                    
                    <div className="card m-1">
                        <h3 className="card-header">
                            {arr[i].title}
                        </h3>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                            <p className="lh-sm">{arr[i].description}</p>
                            <footer className="blockquote-footer">{arr[i].cuisine ? arr[i].cuisine.label : null} {'-'} {arr[i].category ? arr[i].category.title : null}{':'}<cite title="Source Title"> {'$'}{arr[i].price}</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    
                </>
            )
            i++;
        }
        //console.log(subArray)
        mainArray.push(subArray)
        subArray = []
    }
    const totalPages = mainArray.length
    return(
    <>
    {/* <div>{htmlArray}</div> */}
    <div>{mainArray[props.paginNum]}</div>
    <Pagin pageNum={props.paginNum} setpageNum={props.setpaginNum} totalPages={totalPages}/>
    </>
    )
}