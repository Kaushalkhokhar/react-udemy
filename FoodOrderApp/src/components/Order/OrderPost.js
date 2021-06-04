import { useState } from "react"

const OrderPost = () => {
    const [error, setError] = useState(null);

    const cartDataPost = async () => {
    try {
        const response = await fetch('https://react-http-9da4e-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Something went wrong. Please order again')
        }

    } catch(err) {
        setError(err.message)
    }
    return (
        {

        }
    )
}

export default OrderPost