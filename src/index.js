import React  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';
import { BrowserRouter} from "react-router-dom";
// import './tour/index.css'
// import UserData from './UserData'
// import './UserData.css'
// import './index.css'

// import data from './Data'

// const List = ({person})=>{
//     return(<>
//         {person.map((per)=>{
//             return<>
//                 <img src={per.image} alt={per.name}/>
//                 <h1>{per.name}</h1>
//             </>
//         })}
//     </>)
    
// }

// const Bday=()=>{
//     const [value,setValue]=useState(data)
//     return<>
//         <h1>{value.length} Birthday List</h1>
//         <List person={value}/>
//         <button onClick={()=>setValue([])}>clear all</button>
//     </>
// }
// // function Person(props){
// //     return(<>
// //     <h1>{props.name}</h1>
// //     <h1>{props.bday}</h1>
// //     </>);
// // }

ReactDOM.render(<><BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter></>,document.getElementById("root"));




