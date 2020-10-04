import React, {useContext} from 'react'

import Image from "../Components/Image"
import {getClass} from "../Utilities/"


import {Context} from "../Utilities/someContext"

const Photos = () => {

    const {photos} = useContext(Context)

    // console.log(photos)

    const imageElements = photos.map((photo, index) => (
         <Image key={photo.id} img={photo} className={getClass(index)}/>
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos
