import React from "react"
import './App.css';
import { nanoid } from 'nanoid'

function App() {
  

const initial_state=[{duty:"Spor Yap",yapildi:false,id:1},{duty:"Alışveriş Yap",yapildi:false,id:2}]

const [liste,setListe]=React.useState(JSON.parse(localStorage.getItem("listeler"))
||initial_state)
const[giris,setGiris]=React.useState("")



React.useEffect(()=>{


  localStorage.setItem("listeler",JSON.stringify(liste))



},[liste])



function temizle(){

setListe(liste=>liste.filter(item=> !item.yapildi)
)

}

function add_item() {
  setListe(prev=> {
   return giris!=="" ? [...prev,{duty:giris,id:Date.now(),yapildi:false}]:[...prev]
  })

  setGiris("")

}

const item_sec=(a)=> {
  setListe(liste=>liste.map(item=> {
    return item.id===a ? {...item,yapildi:!item.yapildi}:{...item}

  }))
}


const liste_elemanları=liste.map(liste=>
   <h4 className={liste.yapildi? "done":""} onClick={()=>item_sec(liste.id)}>

    {liste.duty}</h4>)


console.log(giris)
  return (


<div className="container">

<h3 className="todo-header">#TODO List </h3>

<div className="input-container">
  <input type="text" onChange={(e)=>setGiris(e.target.value)} value={giris}></input>
<button onClick={add_item} className="todo-add"> Add</button></div>

<div className="todo-list">

{liste_elemanları}
  
  
</div>

<button className="todo-clean" onClick={temizle}>
  Clean Items</button>


</div>


  );
}

export default App;
