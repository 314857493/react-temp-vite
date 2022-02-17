import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import _axios from "@/utils/axios";
import dayjs from "dayjs";
import { useStore } from "react-redux";

const Index = () => {
  const nowTime = dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss");
  const store = useStore();
  const navigate = useNavigate();
  const reduxState = store.getState();
  const [localCounter, setLocalCounter] = useState(1);
  const objRef = useRef(1);
  const goTest = () => {
    navigate("/main/testPage");
  };
  return (
    <>
      {/* fragment 类似于vue的template <></>这种形式不可以有key属性 <Fragment></Fragment> 可以携带key */}
      <div>首页{nowTime}</div>
      <div>本模板使用hooks搭建</div>
      <div>
        本模板使用的redux使用hooks风格api 学习链接
        <a href="https://react-redux.js.org/api/hooks">React-Redux hooks</a>
      </div>
      <div>使用了@reduxjs/toolkit createSlice简化了创建store的步骤</div>
      <div>store:{JSON.stringify(reduxState)}</div>
      <div
        onClick={() => {
          objRef.current += 1;
          // ref会同步改变 但不会引起视图的变化 只会改变其值
          // 当有state变化时，ref在视图中会跟随state的变化而被重新渲染
        }}
      >
        {objRef.current}
      </div>
      <div
        onClick={() => {
          setLocalCounter(localCounter + 1);
        }}
      >
        {localCounter}
      </div>
      <button onClick={goTest}>去测试页</button>
    </>
  );
};

export default Index;
