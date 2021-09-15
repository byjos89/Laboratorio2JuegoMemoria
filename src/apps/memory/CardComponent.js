import React from "react";

export const CardComponent = ({ item,handlerClick }) => {
    return( 
    <div 
        className={item.styles} 
        key={item.id} 
        onClick={() =>{
            handlerClick(item);
        }}
    >
        {item.state === true?(
            <div className="container">{item.frontend}</div>
        ):(
            <div className="disablediv">{item.backend}</div>
        )}      
    </div>
    );
};