import React, { useEffect, useState } from 'react';
import {ReadReuest} from '../apiRequest/Apirequest.js'
import AppNav from './AppNav.jsx';


const ApiCall = () => {
    let [data, setData]= useState([])

    /*
    const readData = async ()=>{
         const res = await ReadReuest();
         setData(res)
    } */

    useEffect(()=>{
        (async()=>{
            const res = await ReadReuest();
            setData(res)
        })()
    })

    return (
        <div>
           <div>
                <AppNav></AppNav>
           </div>
           
            {/* <button onClick={readData}>Button</button> */}
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default ApiCall;