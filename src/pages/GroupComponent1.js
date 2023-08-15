import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

const GroupComponent1 = (props) => {
  return (
    <div
      style={{
          marginLeft:"3vh",
          marginTop:"2vh",
        position: "relative",
        width: "100%",
        height: "179px",
        textAlign: "left",
        fontSize: "14px",
        color: "#333",
        fontFamily: "Montserrat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "21px",
          left: "0px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          width: "220px",
          height: "158px",
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

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  overflowY:"scroll",
                  gap: "15px",
              }}
          >

          <FormControl >
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={props.sortType}
                  name="radio-buttons-group"
                  onChange={(e)=>props.setSortType(e.target.value)}
              >
                  <div style={{ position: "relative", width: "95vh", height: "4vh" }}>

                  <FormControlLabel value="newtoold" control={<Radio style={{color:"#2a59fe"}} />} label="New to Old" />
                  </div>
                  <div style={{ position: "relative", width: "95vh", height: "4vh" }}>

                  <FormControlLabel  value="oldtonew" control={<Radio style={{color:"#2a59fe"}} />} label="Old to new" />
                  </div>
                  <div style={{ position: "relative", width: "95vh", height: "4vh" }}>

                  <FormControlLabel value="highttolow" control={<Radio style={{color:"#2a59fe"}}/>} label="Price hight to low" />
                  </div>
                  <div style={{ position: "relative", width: "95vh", height: "4vh" }}>

                  <FormControlLabel value="lowtoHigh" control={<Radio style={{color:"#2a59fe"}}/>} label="Price low to High" />
                  </div>

              </RadioGroup>
          </FormControl>
          </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "1px",
          fontSize: "12px",
          color: "rgba(51, 51, 51, 0.7)",
        }}
      >
        Sort By
      </div>
    </div>
  );
};

export default GroupComponent1;
