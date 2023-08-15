import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const Cart = (props) => {
    function plusCart(item){
        let selectedItem = props.cart.filter(product => product.id === item.id).length>0?true:false;
        item.count=selectedItem===true?item.count+1:1;
        if(selectedItem===true){
            const newArray = props?.cart?.map((product, i) => {
                if (product.id === i.id) {
                    return { ...product, [e.target.name]: e.target.value };
                } else {
                    return product;
                }
            });
            props.setCart(newArray);
        }else {
            props.setCart(oldArray => [...oldArray, item]);
        }
    }
    function minusCart(item){
        if (item.count>1){
            item.count=item.count-1;
            const newArray = props?.cart?.map((product, i) => {
                if (product.id === i.id) {
                    return { ...product, [e.target.name]: e.target.value };
                } else {
                    return product;
                }
            });
            props.setCart(newArray);
        }else {
            const newList = props.cart.filter((prdct) => prdct.id !== item.id)
            props.setCart(newList);
        }
    }

    useEffect(() => {
        let local = localStorage.getItem("cart")
        if(local!=null&&local!="[]"){
            props.setCart(JSON.parse(localStorage.getItem("cart")))
        }
    },[])

    useEffect(() => {
        localStorage.removeItem("cart")
        localStorage.setItem("cart",JSON.stringify(props.cart))
    },[props.cart])

    return (
        <div>
            <div
                style={{
                    position: "relative",
                    marginTop:"5vh",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    width: "250px",
                    minHeight: "143px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                    boxSizing: "border-box",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "15px",
                    textAlign: "left",
                    fontSize: "12px",
                    color: "#000",
                    fontFamily: "Montserrat",
                }}
            >
                <div style={{width:"100%",textAlign: 'right',marginTop:"-5px",marginLeft:"5px"}}>
                    <IconButton color={"error"} size={"small"} onClick={(e)=>props.setCart([])}>
                    <DeleteForeverRoundedIcon fontSize={"small"}></DeleteForeverRoundedIcon></IconButton></div>
                {props?.cart?.map((product)=>
                    <>
                        <div className="row">
                            <div className="col">
                                <div
                                    style={{
                                        width: "100px",
                                        height: "28px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "15px",
                                    }}
                                >
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            position: "relative",
                                            height: "28px",
                                            overflow: "hidden",
                                            flexShrink: "0",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                height: "60.71%",
                                                width: "106%",
                                                top: "-3.57%",
                                                left: "0%",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {(product?.name + " " + product?.model).length>12?(product?.name + " " + product?.model).substring(0, 12)+"...":product?.name + " " + product?.model}
                                        </div>
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "100%",
                                                top: "46.43%",
                                                left: "0%",
                                                fontSize: "10px",
                                                fontWeight: "500",
                                                color: "#2a59fe",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            {parseFloat(product?.price)*product.count+" ₺"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        flex: "1",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "15px",
                                        textAlign: "center",
                                        fontSize: "14px",
                                        color: "#fff",
                                    }}
                                >
                                    <div style={{ position: "relative", width: "78px", height: "27px" }}>
                                        <div
                                            style={{
                                                position: "absolute",
                                                height: "92.59%",
                                                width: "120%",
                                                top: "3.7%",
                                                right: "67.95%",
                                                bottom: "3.7%",
                                                left: "0%",
                                                borderRadius: "4px",
                                                background:
                                                    "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), linear-gradient(rgba(42, 89, 254, 0.3), rgba(42, 89, 254, 0.3)), #000",
                                                overflow: "hidden",
                                                display: "flex",
                                                flexDirection: "row",
                                                padding: "8px 16px",
                                                boxSizing: "border-box",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Button onClick={(e)=>minusCart(product)}>
                                                <b
                                                    style={{
                                                        position: "relative",
                                                        background:
                                                            "linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), linear-gradient(rgba(42, 89, 254, 0.3), rgba(42, 89, 254, 0.3)), #000",
                                                        webkitBackgroundClip: "text",
                                                        webkitTextFillColor: "transparent",
                                                    }}
                                                >
                                                    -
                                                </b>
                                            </Button>
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    height: "100%",
                                                    width: "35.9%",
                                                    top: "0%",
                                                    right: "32.05%",
                                                    bottom: "0%",
                                                    left: "32.05%",
                                                    backgroundColor: "#2a59fe",
                                                    overflow: "hidden",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    padding: "8px 16px",
                                                    boxSizing: "border-box",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "18px",
                                                }}
                                            >
                                                <div style={{ position: "relative" }}>{product?.count}</div>
                                            </div>
                                            <Button onClick={(e)=>plusCart(product)}>
                                                <b

                                                    style={{
                                                        position: "relative",
                                                        background:
                                                            "linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), linear-gradient(rgba(42, 89, 254, 0.3), rgba(42, 89, 254, 0.3)), #000",
                                                        webkitBackgroundClip: "text",
                                                        webkitTextFillColor: "transparent",
                                                    }}
                                                >
                                                    +
                                                </b>
                                            </Button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
