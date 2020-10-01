import React, { useState, useEffect } from "react"
const SomeContext = React.createContext()

function SomeContextProvider(props) {
    
    const [photos, setPhotos] = useState([])

    async function getPhotos() {
        const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        const data = await res.json()
        setPhotos(data)
        
    }

    useEffect(() => {
        getPhotos()
    }, [])

    console.log(photos)

    return (
        <SomeContext.Provider value={{photos}}>
            {props.children}
        </SomeContext.Provider>
    )
}

export {SomeContextProvider, SomeContext}