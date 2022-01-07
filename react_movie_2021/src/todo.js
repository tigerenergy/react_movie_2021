// import {useState} from 'react'


// function App()
// {
//   const [toDo, setToDo] = useState('')
//   const [toDos, setToDos] = useState([])
//   const onChange = (event) => setToDo(event.target.value)
//   const onSubmit = (event) =>
//   {
//     event.preventDefault()
//     if(toDo ==='')
//     {
//       return
//     }
//     setToDos(currentArray => [toDo, ... currentArray])
//     setToDo('')
//   }
//   return(
//     <div>
//       <h1>할일({toDos.length})</h1>
//       <form onSubmit= {onSubmit}>
//         <input 
//         onChange= {onChange} 
//         value= {toDo} 
//         type="text" 
//         placeholder='내용을 입력해주세요' />
//         <button>추가하기</button>
//       </form>
//       <hr/>
//       {toDos.map((item, index)=> <li key={index}>{item}</li>)}
//     </div>
//   )
// }


// export default App
