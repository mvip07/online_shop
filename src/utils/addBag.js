import { useState } from "react"


export function AddtoBag  (product) {
    const [bag, setBag] = useState(JSON.parse(localStorage.getItem("onlineShopCart")) || []);
    setBag([...bag, product]);
            localStorage.setItem("onlineShopCart", JSON.stringify([...bag, product]));
}
export const bagElements = JSON.parse(localStorage.getItem("onlineShopCart"))?.map(({ id }) => id)