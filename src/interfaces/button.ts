import React from "react";

export default interface IButtonProps {
    type: "button" | "submit" | "reset";
    children: React.ReactNode;
}