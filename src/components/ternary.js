import React, { useState } from "react";

export default function Tern() {
    const [isGoingout, setStat] = useState(true);
    function changestate(){
        setStat(
            isGoin=> !isGoin
        )
    }

    return (
        <div>
            <div>we are </div>
            <div className="stat--value" onClick={changestate} >
             <div> {isGoingout ? "yes" : "non"}  </div>
            </div>
        </div>
    );
}
