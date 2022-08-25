import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Home() {
    const [message, setMessage] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [specificUsersProducts, setSpecificUsersProducts] = useState([]);
    const [userID, setUserID] = useState();
    // handler to send data to server
    const registeraitionHandler = () => {
        console.log(username, email, password);
        const data = {
            username,
            email,
            password,
        };
        axios
            .post(
                "https://mern-server-demo-dci.herokuapp.com/user/create/",
                data
            ) // .post(URL, dataTOSend)
            .then((response) => {
                console.log(response);
                setMessage(response.data.message);
            }); // response from Backend
    };
    // login check
    const loginCheck = () => {
        axios
            .post("https://mern-server-demo-dci.herokuapp.com/user/login", {
                email,
                password,
            })
            .then((response) => {
                setMessage(response.data.message);
                setSpecificUsersProducts(response.data.products);
                setUserID(response.data.user._id);
            });
    };

    // add product for this logged in user using faker data
    const addProduct = () => {
        axios
            .get(
                "https://mern-server-demo-dci.herokuapp.com/products/add/" +
                    userID
            )
            .then((response) => {
                setMessage(response.data);
            });
    };
    return (
        <>
            <div>
                <h3>Registration</h3>
                <label>user name</label>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label>email</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label>password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="button" onClick={registeraitionHandler}>
                    send
                </button>
            </div>
            <h4 style={{ color: "red", fontSize: "2rem" }}>{message}</h4>

            <div>
                <h3>LOGIN FORM</h3>
                <label>email</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label>password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="button" onClick={loginCheck}>
                    LOGIN
                </button>
            </div>
            <button type="button" onClick={addProduct}>
                ADD PRODUCT
            </button>
            <ul>
                <label>user products</label>
                {specificUsersProducts.map((product, i) => {
                    return <li>{product.product_title}</li>;
                })}
            </ul>
        </>
    );
}
