import './App.css'
import {useEffect, useState} from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/seach-box/search-box.component'

const App =()=> {
 
   const[monsters,setMonsters]=useState([])
   const[searchstring,setSearchstring]=useState('')
   const [filterdMonsters,setFiltredMonsters]=useState(monsters)
    

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((res)=>setMonsters([...res]))
},[])
       

   
   const OnSearchChange =(e)=>{
      setSearchstring(e.target.value.toLowerCase())
    } 

    useEffect(()=>{ 
      const newFiltredMonsters = monsters.filter((el)=>{return el.name.toLowerCase().includes(searchstring.toLowerCase()) })
      setFiltredMonsters(newFiltredMonsters)
    },[monsters,searchstring])
   

    return (
    <div className="App">
      <h1 className='App-header'>Monster Rolodex</h1>
     <SearchBox onChangeHandler ={OnSearchChange} placeholder ='Search monsters' className='search-box'/>
    <CardList monsters={filterdMonsters}/>
    </div>
  )

}

export default App;
