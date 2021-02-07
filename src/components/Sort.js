import React from "react"

function Sort({sorted, setSorted}){

    return (
        <div style={{textAlign: "center"}}>
            <label htmlFor="Sort by Location">Sort by Location</label>
            <input type="checkbox" checked={sorted} onChange={()=>{setSorted(sorted => !sorted)}} style={{marginLeft: "5px"}}/>
            <br/>
        </div>

    )
}

export default Sort