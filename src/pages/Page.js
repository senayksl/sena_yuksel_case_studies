import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent3 from "./GroupComponent3";
import Item from "./item";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Pagination from "./pagination";
import React, {useEffect, useState} from "react";
import Header from "./header";
import axios from "axios";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Page (props){
    const [dataList, setDataList] = useState([]);
    const [brandList, setBrandList] = useState([]);
    const [selectedBrandList, setSelectedBrandList] = useState([]);
    const [modelList, setModelList] = useState([]);
    const [selectedModelList, setSelectedModelList] = useState([]);
    const [sortType, setSortType] = useState("newtoold");
    const [page, setPage] = useState(1);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get(
           'https://5fc9346b2af77700165ae514.mockapi.io/products/',{
            headers:{
                'Content-type':'application/json',
            }}
    )
            .then((res )=> {
            setDataList(res?.data)
                res?.data.map(data => (brandList.push(data.brand)))
                res?.data.map(data => (modelList.push(data.model)))
        })
            .catch()
    }, []);

    function getData(){
        let filteredData=dataList.filter(data =>((data?.name + " " + data?.model).toLowerCase()).includes(props.search.toLowerCase()));
        if (selectedBrandList.length>0){
           selectedBrandList.length>0? filteredData = filteredData.filter((elem) => {
                return selectedBrandList.some((ele) => {
                    return ele === elem.brand;
                });
            }):null;
        }
        if (selectedModelList.length>0){
            selectedModelList.length>0? filteredData = filteredData.filter((elem) => {
                return selectedModelList.some((ele) => {
                    return ele === elem.model;
                });
            }):null;
        }
        if (filteredData.length>0){
            if (sortType==="newtoold"){
                const sorted = filteredData.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                filteredData=sorted

            }
            if (sortType==="oldtonew"){
                const sorted = filteredData.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                }).reverse();
                filteredData=sorted

            }if (sortType==="highttolow"){
                const sorted = filteredData.sort((a, b) => {
                    return parseFloat(b.price) - parseFloat(a.price);
                });
                filteredData=sorted

            }if (sortType==="lowtohigh"){
                const sorted = filteredData.sort((a, b) => {
                    return parseFloat(b.price) - parseFloat(a.price);
                }).reverse();
                filteredData=sorted

            }
        }
        return filteredData;
    }

    function getCheckout(){
        let deneme = 0;
        for (let i = 0; i < cart.length; i++) {
            deneme = deneme+ (cart[i].count*(parseFloat(cart[i].price)))
         }
        return deneme;
    }



  return (
      // dataList?.map((item) => (item))
      <div style={{backgroundColor:"#f9f9f9"}} >
        <div className="row">

          <div className="col-md">
           {/*1 of 3*/}
           {/*   {item?.createdAt}*/}
            <GroupComponent1 sortType={sortType} setSortType={setSortType}/>
              <GroupComponent brandList={Array.from(new Set(brandList))} selectedBrandList={selectedBrandList} setSelectedBrandList={setSelectedBrandList}/>
              <GroupComponent3 modelList={modelList} selectedModelList={selectedModelList} setSelectedModelList={setSelectedModelList}/>
          </div>
          <div  class="col-6">
            {/*2 of 3 (wider)*/}
          <Item
              page={page}
              dataList={getData().slice((page-1)*12,(page)*12)}
              setDataList={setDataList}
              search={props.search}
              setSearch={props.setSearch}
              cart={cart}
              setCart={setCart}
          />
          </div>
          <div className="col-md">
            {/*3 of 3*/}
              <div
                  style={{
                      position: "absolute",
                      marginTop:"2vh",
                      top: "0px",
                      fontSize: "14px",
                      color: "rgba(51, 51, 51, 0.7)",
                      display: "flex",
                      alignItems: "end",
                      width: "43px",
                      height: "17.18px",
                  }}
              >
                  Cart
              </div>
              <Cart
                  cart={cart}
                  setCart={setCart}
              />
              <Checkout checkout={getCheckout()} />
          </div>
        </div>
          <div >
              <Pagination page={page} setPage={setPage} pageSize={getData()?.length/12>Math.round(getData()?.length/12)?(Math.round(getData()?.length/12)+1):Math.round(getData()?.length/12)}></Pagination>
          </div>
        </div>
  );
};

