import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import FilterColors from "./FilterColors";
import NewColor from "./NewColor";

function RouteList({ colors, addColor }) {
    return (
        <Routes>
            <Route path="/colors" element={<ColorList colors={colors} />} />
            <Route path="/colors/:color" element={<FilterColors colors={colors} />} />
            <Route path="/colors/new" element={<NewColor addColor={addColor} />} />
            <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
    )
}

export default RouteList;