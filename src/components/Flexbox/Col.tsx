import React from "react";
import "./style.css";

interface Props {
    children: React.ReactNode;
}

export const Col: React.FC<Props> = ({
    children,
}) => {
    return(
        <div className="column">
            {children}
        </div>
    );
};

export default Col;
