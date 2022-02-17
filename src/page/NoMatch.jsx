import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <h1>页面404啦</h1>
      <div>
        <Button onClick={() => navigate(-1)}>返回上一页</Button>
      </div>
    </div>
  );
};

export default NoMatch;
