import React from "react";
import { useParams } from "react-router-dom";
import ColorDetails from "./ColorDetails";

function FilterColors({ colors }) {
    const { color } = useParams();

    if (color) {
        const currentColor = colors.find(
            c => c.name.toLowerCase() === color.toLowerCase()
        );
        return <ColorDetails currentColor={currentColor} />;
    }
    return null;
}

export default FilterColors;