import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import  StoreItem  from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id:number
    quantity: number
}

export function CartItem({id, quantity}:CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = StoreItem.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.img} style={{width:"125px", height:"75px", objectFit:"cover"}}/>
            <div className="me-auto">
                <div>
                    {item.name}{quantity > 1 && <span className="text-muted " style={{fontSize:".65rem"}}>X{quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize:".75rem"}}>{formatCurrency(item.price)}</div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <button className="bg-danger" onClick={()=>removeFromCart(item.id)}>&times;</button>
        </Stack>
    )
}