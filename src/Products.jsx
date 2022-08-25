import { useState, useEffect } from "react";
import axios from "axios";
export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = {};
        axios
            .get(
                "https://mern-server-demo-dci.herokuapp.com/all_products",
                data
            ) // .post(URL, dataTOSend)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            }); // response from Backend
        console.log("=============>>>>>>", products);
    }, []);

    return (
        <div>
            <h2>ALL PRODUCTS</h2>
            <ul>
                {products?.map((product, index) => {
                    return (
                        <li
                            style={{
                                border: "1px solid #fff",
                                padding: "1rem",
                            }}
                        >
                            {product.product_title}, price : {product.price},
                            Quantity : {product.quantity || product.Quantity}
                        </li>
                    );
                })}
            </ul>
            <h2>ALL PRODUCTS ADDED BY SPECIFIC USER</h2>
        </div>
    );
}
