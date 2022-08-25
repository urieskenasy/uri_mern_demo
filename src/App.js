import "./App.css";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import axios from "axios";
function App() {
    // const getMessageFromServer = () => {
    //     fetch("http://localhost:5000")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setMessage(data);
    //         })
    //         .catch((error) => console.error(error));
    // };

    return (
        <div className="app">
            <Nav />
            <div>
                <Routes>
                    <Route path="/Products" element={<Products />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
