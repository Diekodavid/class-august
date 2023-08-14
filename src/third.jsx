import React from 'react';
import './App.css';

const Third = () => {
    return (
        <>
            <div className='absolute yasa'>
                <div>
                    <h2 className='hearts'>Our alumni work at world-class companies around the world including</h2>
                </div>
                <div className='w-full'>
                    <div className='w-full mt-10 justify-between flex'>
                        <div className='swax'>
                            <img className='' src={require("./image/google.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/Interswitch.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/Andela-.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/Microsoft_logo.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full mt-10 justify-between flex'>
                        <div className='swax'>
                            <img className='' src={require("./image/Paystack.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/brewery.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/Wema-Bank.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/clan-logo.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='w-full mt-10 justify-between flex'>
                        <div className='swax'>
                            <img className='' src={require("./image/edozzier.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/moneymie.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/Nigerian_Army.png")} alt="" />
                        </div>
                        <div className='swax'>
                            <img className='' src={require("./image/aella-credit.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-full h-20 bg-white'></div>
            </div>
        </>
    )
}
export default Third