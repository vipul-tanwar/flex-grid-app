import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from 'react';

function App() {

  const [height, setHeight] = useState(false)
  const [flex ,setFlex] = useState(false)
  const [flexDirection ,setFlexDirection] = useState("")
  const [flexWrap ,setFlexWrap] = useState("")
  useEffect(() =>{
    console.log("-->>", flexDirection)
  }, [flexDirection])

  const directionOptions = [
    { value: 'n-o-n-e', label: 'none' },
    { value: 'flex-row', label: 'flex-row' },
    { value: 'flex-row-reverse', label: 'flex-row-reverse' },
    { value: 'flex-col', label: 'flex-col' },
    { value: 'flex-col-reverse', label: 'flex-col-reverse' },
  ];

  const wrapOptions = [
    { value: 'n-o-n-e', label: 'none' },
    { value: 'flex-wrap	', label: 'flex-wrap' },
    { value: 'flex-wrap-reverse', label: 'flex-wrap-reverse' },
    { value: 'flex-nowrap', label: 'flex-nowrap' }, 
  ]


  return (
    <div className=" bg-slate-500 h-screen  ">
      <div className="grid grid-cols-2">
        <div className={` bg-sky-300  w-40   ${flex ? "flex" : ""} ${flexDirection ? flexDirection : "" } ${ flexWrap ? flexWrap : "" }  `}>
          <div className=" bg-red-600 h-20 w-20 "></div>
          <div className=" bg-blue-600 h-20 w-20 "></div>
          <div className=" bg-green-600 h-20 w-20 "></div>
        </div>
        <div className="flex flex-col w-40" >

          <div className="flex" >
          <input type="checkbox" className="h-5 w-5" onChange={(e) => setFlex(e.target.checked)} /> Height

          </div>

          <div className="flex" >
          <input type="checkbox" className="h-5 w-5" onChange={(e) => setFlex(e.target.checked)} /> Flex

          </div>
          <select value={flexDirection} onChange={(e) => setFlexDirection(e.target.value)} >
            {
              directionOptions.map((item, index) => (<option key={index} value={item.value}>{item.label}</option>))
            }
          </select>
          <select value={flexWrap} onChange={(e) => setFlexWrap(e.target.value)} >
            {
              wrapOptions.map((item, index) => (<option key={index} value={item.value}>{item.label}</option>))
            }
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
