import React, {useState} from "react"


function ListingForm ({updateArray}){
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")

    const newObject = {description, image, location}

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:6001/listings', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newObject)
        })
        .then(res=>res.json())
        .then(newListing => {
            updateArray(newListing)
        })
        setDescription("")
        setImage("")
        setLocation("")
    }

    return (
        <form style={{textAlign: "center"}}onSubmit={handleSubmit}>
            <label htmlFor="description">Description</label>
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="enter description..."/>
            <label htmlFor="image">Image</label>
            <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder="enter image..."/>
            <label htmlFor="location">Location</label>
            <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder="enter location..."/>
            <button type="submit">Add Listing</button>
        </form>
    )
}

export default ListingForm