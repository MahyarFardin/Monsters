import React from "react";
import "./Search-Box.sytle.css";

export const SearchBox = ({ placeholder, change }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={change}
    />
)