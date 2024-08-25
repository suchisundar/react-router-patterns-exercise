import React from "react";
import { Link, Navigate } from "react-router-dom";

function ColorDetails({ currentColor }) {
    if (!currentColor) return <Navigate to="/colors" />
    return (
        <>
            <div>
                <h1>This is {currentColor.name}. Isn't it pretty?</h1>
                <div style={{ backgroundColor: currentColor.hex, width: 500, height: 50 }}></div>
            </div>
            <Link to="/colors">Go Home</Link>
        </>
    )
}

export default ColorDetails;