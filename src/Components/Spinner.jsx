import React from "react";
import "./Spinner.css";
import {CirclesWithBar} from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center">
        <CirclesWithBar
        height="100"
        width="100"
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
        />
    </div>
  );
};

export default Spinner;
