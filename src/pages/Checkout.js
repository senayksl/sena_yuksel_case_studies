import {Button} from "@mui/material";

const Checkout = (props) => {
    return (
        <div
            style={{
                position: "relative",
                maxWidth:"250px",
                marginTop:"3vh",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "10px",
                boxSizing: "border-box",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "15px",
                textAlign: "center",
                fontSize: "14px",
                color: "#000",
                fontFamily: "Montserrat",
            }}
        >

            <div
                style={{
                    alignSelf: "stretch",
                    height: "17px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >
                <div style={{ position: "relative" }}>
          <span>
            <span>Total Price:</span>
            <span
                style={{
                    fontSize: "13px",
                    letterSpacing: "-0.02em",
                    fontFamily: "'Work Sans'",
                }}
            >{` `}</span>
          </span>
                    <b style={{ color: "#2a59fe" }}>{props.checkout+ " ₺"}</b>
                </div>
            </div>
            <div
                style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    fontSize: "13px",
                    color: "#fff",
                    fontFamily: "'Work Sans'",
                }}
            >
                <Button
                    style={{
                        textTransform:"capitalize",
                        alignSelf: "stretch",
                        borderRadius: "4px",
                        backgroundColor: "#2a59fe",
                        height: "30px",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        padding: "8px 16px",
                        boxSizing: "border-box",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize:"12px",
                        fontFamily:"Montserrat",
                        color:"white"
                    }}
                >
                        Checkout
                </Button>
            </div>

        </div>

    );
};

export default Checkout;
