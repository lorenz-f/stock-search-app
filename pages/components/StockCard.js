import React from "react";
import { Link } from "react-router-dom";
 
export default function StockCard({symbol, name, headQuarter, sector, founded}) {
    return (    
        <>    
            <Link to={`/${symbol}`}>                
                <div className = "m-[43px] flex flex-col rounded-lg h-[336px] w-[264px] bg-gray-400">
                    <div className = "w-full h-[50%] m-0 text-6xl">
                        <div className = "text-center align-middle leading-[168px]">{symbol}</div>
                    </div>        
                    <div>
                        <h1 className = "font-extrabold p-5">{name}</h1>
                        <ul className = "text-sm space-y-1 px-5">
                            <li><span className = "font-semibold">Headquarters: </span>{headQuarter}</li>
                            <li><span className = "font-semibold">Sector: </span>{sector}</li>
                            <li><span className = "font-semibold">Founded: </span>{founded}</li>
                        </ul>
                    </div>
                </div>     
            </Link>   
        </>
    ) 
}
 