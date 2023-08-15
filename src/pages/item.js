import React, {useEffect} from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Item(props) {

    const navigate=useNavigate();
    const navigatetoDetail= (data) =>{
        navigate({
            pathname:"/detail",
            search:"?id="+data.id
        })
    }

    function changeCart(item){
        let selectedItem = props?.cart?.filter(product => product.id === item.id).length>0?true:false;
        item.count=selectedItem===true?item.count+1:1;
        if(selectedItem===true){
            const newArray = props.cart.map((product, i) => {
                if (product.id === i.id) {
                    return { ...product, [e.target.name]: e.target.value };
                } else {
                    return product;
                }
            });
            props.setCart(newArray);
        }else {
            props.setCart(oldArray => {
                return [...oldArray, item];
            });
        }
    }

    return (
        <div>
            <div className="container">
                <div class="row">
                    {props?.dataList?.map((data) => (
                        <div className="col-md-3">
                            <div
                                style={{
                                    minHeight:"200px",
                                    // position: "absolute",
                                    // top: "0px",
                                    // left: "0px",
                                    // backgroundColor: "#fff",
                                    // width: "180px",
                                    // display: "flex",
                                    // flexDirection: "column",
                                    marginTop: "3vh",
                                    // boxSizing: "border-box",
                                    // alignItems: "flex-start",
                                    // justifyContent: "flex-start",
                                    // gap: "15px",
                                }}
                            >
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        // backgroundColor: "#c4c4c4",
                                        height: "150px",
                                    }}
                                    onClick={(e)=>(navigatetoDetail(data))}
                                >
                                    <img style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        backgroundColor: "#c4c4c4",
                                        height: "150px",
                                        padding:"2px",
                                        width: "160px"
                                    }} src={data?.image}/>
                                </div>
                                <div style={{position: "relative", fontWeight: "500",color:"#2a59fe"}}>
                                    {data?.price} ₺
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontWeight: "500",
                                        height:"50px",
                                        color: "#000",
                                    }}
                                >
                                    {data?.name + " " + data?.model}
                                </div>
                                <Button
                                    style={{
                                        textTransform: "capitalize",
                                        borderRadius: "4px",
                                        backgroundColor: "#2a59fe",
                                        width: "160px",
                                        height: "30px",
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: "8px 16px",
                                        boxSizing: "border-box",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        fontSize: "12px",
                                        color: "#fff",
                                        fontFamiliy: "Montserrat"
                                    }}
                                    onClick={(e)=>{
                                        changeCart(data)
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Item;