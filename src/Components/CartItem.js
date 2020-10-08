import React, {useContext} from 'react'
import PropTypes from "prop-types"
import {Context} from "../Utilities/someContext"
import useHover from "../hooks/useHover"

const CartItem = ({item}) => {
    const {removeFromCart} = useContext(Context)
    // const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i  
                ref={ref}
                // onMouseOver={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
                className={iconClassName} onClick={() => removeFromCart(item.id)} >
            </i>
            <img src={item.url} width="130px" alt="" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
