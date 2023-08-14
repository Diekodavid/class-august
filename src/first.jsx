import React from 'react';
import './App.css';

const First = () => {
    return (
        <>
            <div className='dait'>
                <div className='centerk w-full'>
                    <div className='w-1/2 centerk'>
                        <div className='dele'>
                        <h1 className='fish'>Study to become a global talent</h1>
                        <p className='deadf'>Learn new tech skills using world-class curriculum and top industry experts.</p>
                        <div></div>
                        <a href=""><button className='purpose'>Start Now</button></a>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img className='coven' src={require("./image/sqimodel.png")} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default First