const ProductType = () => {
  return (
    <div
      style={{
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
              src="/search1.svg"
            />
            <div
              style={{
                position: "relative",
                fontWeight: "500",
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), linear-gradient(rgba(42, 89, 254, 0.3), rgba(42, 89, 254, 0.3)), #000",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              Search
            </div>
          </div>
        </div>
        <div
          style={{
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
            <div
              style={{
                position: "absolute",
                height: "94.12%",
                width: "24.62%",
                top: "0%",
                right: "75.38%",
                bottom: "5.88%",
                left: "0%",
                borderRadius: "4px",
                border: "2px solid #2a59fe",
                boxSizing: "border-box",
              }}
            />
            <div style={{ position: "absolute", top: "0%", left: "35.38%" }}>
              11
            </div>
          </div>
          <div style={{ position: "relative", width: "65px", height: "17px" }}>
            <div
              style={{
                position: "absolute",
                height: "94.12%",
                width: "24.62%",
                top: "0%",
                right: "75.38%",
                bottom: "5.88%",
                left: "0%",
                borderRadius: "4px",
                border: "2px solid #2a59fe",
                boxSizing: "border-box",
              }}
            />
            <div style={{ position: "absolute", top: "0%", left: "35.38%" }}>
              12 Pro
            </div>
          </div>
          <div style={{ position: "relative", width: "65px", height: "17px" }}>
            <div
              style={{
                position: "absolute",
                height: "94.12%",
                width: "24.62%",
                top: "0%",
                right: "75.38%",
                bottom: "5.88%",
                left: "0%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  top: "0%",
                  right: "0%",
                  bottom: "0%",
                  left: "0%",
                  borderRadius: "4px",
                  backgroundColor: "#2a59fe",
                  border: "2px solid #2a59fe",
                  boxSizing: "border-box",
                }}
              />
              <img
                style={{
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  left: "calc(50% - 6px)",
                  width: "12px",
                  height: "12px",
                  overflow: "hidden",
                }}
                alt=""
                src="/correct-11.svg"
              />
            </div>
            <div style={{ position: "absolute", top: "0%", left: "35.38%" }}>
              13 Pro Max
            </div>
          </div>
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          top: "92px",
          left: "200px",
          width: "5px",
          height: "30px",
        }}
        alt=""
        src="/rectangle-4.svg"
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "12px",
          color: "rgba(51, 51, 51, 0.7)",
          display: "flex",
          alignItems: "center",
          width: "220px",
          height: "15px",
        }}
      >
        Model
      </div>
    </div>
  );
};

export default ProductType;
