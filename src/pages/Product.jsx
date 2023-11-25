import { useState } from "react";
import AppNav from "../component/AppNav";
import { CreateReuest } from "../apiRequest/Apirequest";
import { useNavigate } from "react-router-dom";


const Product = () => {

    const [FormValue, SetFormValue]=useState({
        Img:"",
        ProductName:"",
        ProductCode: "",
        Qty: "",
        TotalPtice: "",
        UnitPrice: ""
    })

    const inputOnChange =(key,value)=>{
        SetFormValue(FormValue=>({
            ...FormValue,
            [key]:value
        }))
    }

    let naviGate = useNavigate()
    
    const Submit= async ()=>{
       let res = await CreateReuest(FormValue) // Here FormValue is BodyJson 
       alert(res)
       naviGate("/apicall")
    }

    return (
        <div>
            <div>
                <AppNav/>
            </div>
            <h3>This is Product page</h3>
            
            <input value={FormValue.Img} onChange={(e)=>inputOnChange('Img',e.target.value)} placeholder="Img Url" type="text" />
            <input value={FormValue.ProductName} onChange={(e)=>inputOnChange('ProductName',e.target.value)} placeholder="ProductName" type="text" />
            <input value={FormValue.ProductCode} onChange={(e)=>inputOnChange('ProductCode',e.target.value)} placeholder="ProductCode" type="text" />
            <input value={FormValue.TotalPtice} onChange={(e)=>inputOnChange('TotalPtice',e.target.value)} placeholder="TotalPtice" type="text" />
            <input value={FormValue.Qty} onChange={(e)=>inputOnChange('Qty',e.target.value)} placeholder="Qty" type="text" />
            <input value={FormValue.UnitPrice} onChange={(e)=>inputOnChange('UnitPrice',e.target.value)} placeholder="UnitPrice" type="text" />

            <button onClick={Submit}>Submit</button>
        </div>
    );
};

export default Product;