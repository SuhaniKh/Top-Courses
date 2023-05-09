import NavBar from './Components/NavBar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
import Spinner from './Components/Spinner'

const App = () => {

  // const emptyobj = {};
  const [category,setCategory] = useState(filterData[0].title);
  const [courses,setCourses] = useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    async function fetchData(){
      setLoading(true);
      try{
           const res = await fetch(apiUrl);
           const output = await res.json();
           setCourses(output.data)
          //  console.log(output);
         }
      catch(error){
        toast.error("network issue")
      }
      setLoading(false);
    }
    fetchData();
  },[])

  console.log(courses);


  return (
    <div className='flex flex-col min-h-screen items-center overflow-x-hidden bg-bgDark2 '>
      <NavBar/>
      <Filter filterdata = {filterData} category = {category} setCategory = {setCategory}/>
      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap'>
        {
          loading ? (<Spinner/>):(<Cards courses={courses} category = {category}/>)
        }
      </div>
    </div>
  )
}

export default App


