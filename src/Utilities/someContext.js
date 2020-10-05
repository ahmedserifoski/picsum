

// import { func } from 'prop-types'
import React, {useState, useEffect} from 'react'
const Context = React.createContext()

const ContextProvider = (props) => {

    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    async function getPhotos() {
                const res = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
                const data = await res.json()
                setPhotos(data)
                
            }

            useEffect(() => {
                getPhotos()
            }, [])

            function toggleFavorite(id) {
                const updatedArr = photos.map(photo => {
                    if(photo.id === id) {
                        // console.log(photo)
                        // console.log(!photo.isFavorite)
                        
                        return {...photo, isFavorite: !photo.isFavorite}
                    }
                    return photo
                })
                setPhotos(updatedArr)
            } 

            function addToCart(newItem) {
                setCartItems(prevItem => [...prevItem, newItem])
            }

            function removeFromCart(id) {
                setCartItems(prevItem => prevItem.filter(item => item.id !== id))
                
            }
            console.log(cartItems)
    return (
        <div>
            <Context.Provider value={{photos, toggleFavorite, cartItems, addToCart, removeFromCart}} >
                {props.children}
            </Context.Provider>
        </div>
    )
}

export {ContextProvider, Context}
