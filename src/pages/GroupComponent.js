import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";

function GroupComponent(props) {
    const [search,setSearch]=useState("");
    return (
        <div
            style={{
                marginTop:"2vh",
                position: "relative",
                width: "100%",
                height: "205px",
                textAlign: "left",
                fontSize: "14px",
                color: "#000",
                fontFamily: "Montserrat",
            }}
        >
            <div
                style={{
                    marginLeft:"3vh",
                    overflowY:"hidden",
                    position: "absolute",
                    top: "24.05px",
                    left: "0px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    width: "220px",
                    height: "180.95px",
                    display: "flex",
                    flexDirection: "column",
                    padding: "15px",
                    boxSizing: "border-box",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "15px",
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        background:
                            "linear-gradient(rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.98)), linear-gradient(rgba(42, 89, 254, 0.3), rgba(42, 89, 254, 0.3)), #000",
                        height: "40px",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "column",
                        padding: "8px 8px 8px 12px",
                        boxSizing: "border-box",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "8px",
                        }}
                    >
                        <img
                            style={{
                                position: "relative",
                                width: "24px",
                                height: "24px",
                                overflow: "hidden",
                                flexShrink: "0",
                            }}
                            alt=""
                            src="/search2.svg"
                        />
                        <TextField
                            placeholder="Search"
                            variant="standard"
                            InputProps={{ disableUnderline: true }}
                            value={search}
                            onChange={(e)=>{
                                setSearch(e.target.value)
                            }}
                            style={{
                                position: "relative",
                                fontWeight: "500",
                                background:
                                    "linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), linear-gradient(rgba(42, 89, 254, 0.3), rgba(42, 89, 254, 0.3)), #000",
                                webkitBackgroundClip: "text",
                                webkitTextFillColor: "black",
                            }}
                        >
                            Search
                        </TextField>
                    </div>
                </div>
                <div
                    style={{
                        overflowY:"auto",
                        width: "190px",
                        height: "83px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "15px",
                    }}
                >
                    <div style={{ position: "relative", width: "65px", height: "17px" }}>
                        {props.brandList.filter(brand => brand.toLowerCase().includes(search.toLowerCase())).map((brand)=>
                            <FormGroup>
                                <FormControlLabel  control={<Checkbox style={{color:"#2a59fe"}} defaultChecked={false} onClick={(e)=> {
                                    if (e.target.checked===true){
                                        props.setSelectedBrandList(oldArray => [...oldArray, e.target.value]);
                                        // props.selectedBrandList.push(e.target.value)
                                    }else if (e.target.checked===false){
                                        props.setSelectedBrandList((current) =>
                                            current.filter((brnd) => brnd !== e.target.value)
                                        );
                                        props.selectedBrandList.pop(e.target.value)
                                    }
                                }} />} value={brand} label={brand} />
                            </FormGroup>
                        )}

                    </div>
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "0px",
                    marginLeft: "3vh",
                    fontSize: "12px",
                    color: "rgba(51, 51, 51, 0.7)",
                    display: "flex",
                    alignItems: "center",
                    width: "43px",
                    height: "17.18px",
                }}
            >
                Brands
            </div>
        </div>
    );
}

export default GroupComponent;