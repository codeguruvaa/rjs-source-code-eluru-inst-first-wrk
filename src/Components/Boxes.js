import React from 'react';
import './Style.css' ;

function Boxes() {
    return (
        <div>


            <div style={{clear:'both'}}></div>

            <div>
                <div className='bOne'></div>
                <div className='bTwo'></div>
                <div className='bThree'></div>
            </div>

            <div style={{clear:'both'}}></div>


        </div>
    );
}

export default Boxes;