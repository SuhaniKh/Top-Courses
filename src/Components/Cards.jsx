import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  let allCourses = [];

  // console.log(courses);

  function getCourses() {
    if (category === "All") {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
    } else {
      return courses[category];
    }

    return allCourses;
  }

  // getCourses();
  const new_array = getCourses();

  if(courses.length===0){
    return(<div>No data found</div>)
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <div>
        {new_array.map((newcourse) => {
          return (
            <Card
              newcourse={newcourse}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
              key={newcourse.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
