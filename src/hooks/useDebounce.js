import { useEffect, useState } from "react";

//Custom hook to delay search acquisition

const useDebounce = () => {
  
   const [tid, setTid]= useState("");

   const debounce= (func, delay)=>{

       clearTimeout(tid);
       
      const stid=  setTimeout(() => func(), delay);
        setTid(stid);
    }

    return debounce;
}


export default useDebounce;