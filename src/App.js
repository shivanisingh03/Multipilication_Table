import './App.css';
import {useState} from 'react';


function App(){
  const [table,settable]=useState(0)
  const [list,setlist]=useState([])


  const listLoop=()=>{
    let newList=[]
    for(let i = 1; i <= 10; i++) {
      newList.push(`${table} x ${i} = ${table*i}`)
      console.log(newList)
    }
    setlist(newList)
    console.log(list)


  }

  return(
    <div id="main">
      <input style={{marginLeft:'2vh'}} type="number" placeholder="enter your name" onChange={(e)=>{
        settable(e.target.value)
        // console.log(setNumber)
      }} />

      <button onClick={listLoop}>Click</button>
      {
          list.map((item,index)=>{
            return(
              <div key={index}>
                <h1 style={{margin:"auto",marginLeft:'4vh',color:'white'}}>{item}</h1>
              </div>
            )
          })
        }

      
    
    </div>
  )

}

export default App



