import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
    return (
        <div>
            <h2>PLEASE SEE AVAILABLE COLORS BELOW.</h2>
            <div>
                {colors.map(c => (
                    <div key={c.name}>
                        <h3>
                            <Link to={`/colors/${c.name.toLowerCase()}`}>{c.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ColorList;