import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColor({ addColor }) {
    const [name, setName] = useState("");
    const [hex, setHex] = useState("#ffffff");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addColor({ name, hex });
        navigate("/colors");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Color Name:</label>
                <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                />
            </div>
            <div>
                <label htmlFor="hex">Color Value (hex):</label>
                <input
                    id="hex"
                    name="hex"
                    value={hex}
                    onChange={(e) => setHex(e.target.value)}
                    type="color"
                    required
                />
            </div>
            <button type="submit">Add Color</button>
        </form>
    );
}

export default NewColor;
