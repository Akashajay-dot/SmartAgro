import React from 'react'
import { useState ,useEffect} from 'react'
function useFetch(url) {
    const [data ,setData] = useState(null);
    const [isloading , setIsloading] = useState(true)
    const [error , seterror] = useState(null)
   
   useEffect(() => {
          const abortcnst = new AbortController();
          fetch(url,{signal: abortcnst.signal})  
         .then(res => { 
          if(!res.ok){
            throw Error("errorrr fetching");
          }
            return res.json()})

         .then(data => { 
            setData(data)
            setIsloading(false)
            seterror(false)
          } )
          
         .catch(err=> {
            if(err.name === "AbortError"){
              console.log("aborteddd")
            }
            else{
              console.log(err.message)
              seterror(err.message)
              setIsloading(false)
            }
           
         } )
         return ()=> abortcnst.abort();
          
         },[url]);
        //  console.log(data);
          
  return (
   { data,isloading,error }
  )
}

export default useFetch