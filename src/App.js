import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [height, setHeight] = useState(false);
  const [width, setWidth] = useState(false);
  const [extraBox, setExtraBox] = useState(false);
  const [flex, setFlex] = useState(false);
  const [flexDirection, setFlexDirection] = useState("");
  const [flexWrap, setFlexWrap] = useState("");

  const [justifyContent, setJustifyContent] = useState("");

  useEffect(() => {
    console.log("-->>", flexDirection);
  }, [flexDirection]);

  const directionOptions = [
    { value: "n-o-n-e", label: "none" },
    { value: "flex-row", label: "flex-row" },
    { value: "flex-row-reverse", label: "flex-row-reverse" },
    { value: "flex-col", label: "flex-col" },
    { value: "flex-col-reverse", label: "flex-col-reverse" },
  ];

  const wrapOptions = [
    { value: "n-o-n-e", label: "none" },
    { value: "flex-wrap	", label: "flex-wrap" },
    { value: "flex-wrap-reverse", label: "flex-wrap-reverse" },
    { value: "flex-nowrap", label: "flex-nowrap" },
  ];
  const justifyContentOptions = [
    { value: "n-o-n-e", label: "none" },
    { value: "justify-normal", label: "justify-normal" },
    { value: "justify-start", label: "justify-start" },
    {value:"justify-end	", label:"justify-end"},
    { value: "justify-center", label: "justify-center" },
    { value: "justify-between", label: "justify-between"},
    {  value: "justify-around", label: "justify-around"},
    { value: "justify-evenly", label: "justify-evenly"},
    { value: "justify-stretch", label: "justify-stretch"} 
  ];

  return (
    <div className=" bg-slate-500 h-screen  ">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div
          className={` bg-sky-300  ${height ? "h-60" : "h-80"} ${
            width ? "w-60" : "w-80"
          }     ${flex ? "flex" : ""} ${flexDirection ? flexDirection : ""} ${
            flexWrap ? flexWrap : ""
          } 
          ${justifyContent ? justifyContent : ""}
          `}
        >
          <div className=" bg-red-600 h-20 w-20 "></div>
          <div className=" bg-blue-600 h-20 w-20 "></div>
          <div className=" bg-green-600 h-20 w-20 "></div>
          {extraBox ? <div className=" bg-yellow-600 h-20 w-20 "></div> : ""}
        </div>
        <div className="flex flex-col w-40">
          <div className="flex">
            <input
              type="checkbox"
              className="h-5 w-5"
              onChange={(e) => setHeight(e.target.checked)}
            />{" "}
            Height [Reduce Height]
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="h-5 w-5 break-words"
              onChange={(e) => setWidth(e.target.checked)}
            />
            <label>Width [ReduceWidth]</label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="h-5 w-5 break-words"
              onChange={(e) => setExtraBox(e.target.checked)}
            />
            <label>Extra Box</label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="h-5 w-5"
              onChange={(e) => setFlex(e.target.checked)}
            />{" "}
            Flex
          </div>
          <select
            value={flexDirection}
            onChange={(e) => setFlexDirection(e.target.value)}
          >
            {directionOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            value={flexWrap}
            onChange={(e) => setFlexWrap(e.target.value)}
          >
            {wrapOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <select
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value)}
          >
            {justifyContentOptions.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
