import React from "react";
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ newcourse, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    if(likedCourses.length===0){
      setLikedCourses([newcourse.id]);
      toast.success("Liked Successfully");
    }
    else if(likedCourses.includes(newcourse.id)){
      setLikedCourses( (prev) => 
        prev.filter((cid) => 
          (cid !== newcourse.id)))
      
        toast.warning("Like Removed!!!");
        
    }
    else{
      setLikedCourses((prev) => [...prev, newcourse.id]);
      toast.success("Liked Successfully");
    }
}

  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
      <div className="relative">
        <img src={newcourse.image.url} alt={newcourse.image.alt} />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            <div>
              {
                likedCourses.includes(newcourse.id) ? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
              }
            </div>
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {newcourse.title}
        </p>
        <p className="text-white mt-2">
          {
            newcourse.description.length > 100 ? (newcourse.description.substr(0,100)) + "...": (newcourse.description)
          }
        </p>
      </div>
    </div>
  );
};

export default Card;
