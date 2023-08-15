import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import GroupComponent3 from "./GroupComponent3";
import Cart from "./Cart";
import Checkout from "./Checkout";
import axios from "axios";

function Detail() {
    const [data,setData]=useState();
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search)
        let id = params.get("id")
        axios.get(
            'https://5fc9346b2af77700165ae514.mockapi.io/products/'+id,{
                headers:{
                    'Content-type':'application/json',
                }}
        )
            .then((res )=> {
                setData(res?.data)
            })
    },[])



    function changeCart(){
        let selectedItemExist = cart?.filter(product => product.id === data.id).length>0?true:false;
        let selectedItem = cart?.filter(product => product.id === data.id).length>0?cart?.filter(product => product.id === data.id)[0]:null;
        selectedItem.count=selectedItemExist===true?selectedItem.count+1:1;
        if(selectedItemExist===true){
            const newArray = cart.map((product, i) => {
                if (product.id === i.id) {
                    return { ...product, [e.target.name]: e.target.value };
                } else {
                    return product;
                }
            });
            setCart(newArray);
        }else {
            setCart(oldArray => {
                return [...oldArray, data];
            });
        }
    }

    function getCheckout(){
        let deneme = 0;
        for (let i = 0; i < cart.length; i++) {
            deneme = deneme+ (cart[i].count*(parseFloat(cart[i].price)))
            console.log(deneme)
        }
        console.log(deneme)
        return deneme;
    }


    return (
        <div style={{backgroundColor:"#f9f9f9"}} className="container">
            <div className="row">
                <div className="col-8">
                    {/*1 of 3*/}
                        <div style={{backgroundColor:"#c4c4c4",height:"50vh",width:"95vh",marginTop:"5vh"}}>
                            <img style={{
                                alignSelf: "stretch",
                                position: "relative",
                                backgroundColor: "#c4c4c4",
                                maxHeight: "50vh",
                                width: "95vh"
                            }} src={data?.image}/>
                        </div>
                                {data?.name + " " + data?.model}
                                <div style={{position: "relative", fontWeight: "500",color:"#2a59fe",display: "flex",flexDirection:"column"}}>{data?.price} ₺</div><br/>
                                <Button
                                    style={{
                                        marginBottom:"2vh",
                                        textTransform:"capitalize",
                                        borderRadius: "4px",
                                        backgroundColor: "#2a59fe",
                                        width: "180px",
                                        height:"30px",
                                        overflow: "hidden",
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: "8px 16px",
                                        boxSizing: "border-box",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        fontSize: "16px",
                                        color: "#fff",
                                    }}
                                    onClick={(e)=>changeCart()}
                                >
                                    <div style={{ flex: "1", position: "relative" }}>Add to Cart</div>
                                </Button>
                                <p>{data?.description}</p>


                </div>
                <div  className="col-4">
                    {/*2 of 3 (wider)*/}
                    <Cart
                        cart={cart}
                        setCart={setCart}
                    />
                    <Checkout checkout={getCheckout()}/>
                </div>

            </div>
        </div>
    );
}

Detail.propTypes = {};

export default Detail;