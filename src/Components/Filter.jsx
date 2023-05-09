import React from 'react'

const Filter = ({filterdata , category , setCategory}) => {

  function clickHandler(title){
     setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {filterdata.map((data)=>{
        return(<button key={data.id} onClick={()=>clickHandler(data.title)}
         className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? "bg-opacity-70 border-white" : "bg-opacity-40 border-transparent"}
            `} >
          {data.title}
        </button>)
      })}
    </div>
  )
}

export default Filter
 