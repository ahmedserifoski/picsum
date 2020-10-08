import React, {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Utilities/someContext"
import useHover from "../hooks/useHover"


function Image({img, className}) {

    const [hovered, ref] = useHover()

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    

    function cartIcon() {
        const alreadyInCart = cartItems.find(item => item.id === img.id)
    
        if(alreadyInCart) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        }else if(hovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }
    
    
    return (
        <div 
            ref={ref}
            // onMouseEnter={handleEnter} 
            // onMouseLeave={handleOut}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt="" />
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
