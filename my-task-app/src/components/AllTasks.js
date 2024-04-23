import './AllTasks.css'
import data from '../data'
import {useState} from 'react'

const AllTasks = () => {

   const [myTasks, setMyTasks] = useState(data)

   const tasksHandler = (mojeId) =>  {
      const filterTasks = myTasks.filter( (oneTask) => {
         return oneTask.id !== mojeId
      })

      setMyTasks(filterTasks)
   }

   const allDeleteHandler = () => {
      setMyTasks([])
   }
   //tady si zavolám setMyTasks - vyfiltrovaná data a nastaví hodnotu těch dat jako [] prázdný a tím že setMyTasks je v useState tak už se to i refreshne

   return <div>
      {
         myTasks.map((oneTask) => {
            const {id, name} = oneTask
            //nejsou hranaté závorky [] protože vytahuji z dat objekt//


            //tady už nemusím psát oneTask.name, protože nahoře jsem si udělal destructuring a v oneTask už jsou ty id a name zahrnuty
            return <div className='one-task' key={id}>
               <h4>{name}</h4>
               <button onClick={() => tasksHandler(id)}>Vymazat</button>
            </div>
         })
      }
      <button className='main-btn' onClick={allDeleteHandler}>Vymazat vše</button>
   </div>
}

export default AllTasks