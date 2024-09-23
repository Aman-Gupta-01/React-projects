import { useState } from "react"


function App() {

  const [color, colorChanger] = useState("")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color }} >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick={()=> colorChanger("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={()=> colorChanger("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={()=> colorChanger("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
            <button onClick={()=> colorChanger("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "olive"}}>Olive</button>
            <button onClick={()=> colorChanger("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}}>Grey</button>
            <button onClick={()=> colorChanger("yellow")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={()=> colorChanger("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={()=> colorChanger("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
            <button onClick={()=> colorChanger("lavender")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "lavender"}}>Lavender</button>
            <button onClick={()=> colorChanger("white")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "white"}}>White</button>
            <button onClick={()=> colorChanger("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
