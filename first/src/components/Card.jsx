import React, { useState } from 'react';

function Card() {

    const [val, setval] = useState([ 1, 1, 2, 3, 4, 5,6, 8,7 ,10]);
    return (
        <div>

        {val.map(item =>
           
                <h1>{item}</h1>)}
                <button onClick={()=> setval(()=> val.filter((item, index) => 
                index%2 !== 0 && item%2 !== 0
                ))}>Click Me</button>
               
        </div>
    )
}
export default Card;