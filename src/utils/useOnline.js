import { useEffect, useState } from "react";

const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{
        const handleOnline=()=>{
            setIsOnline(true);
        }
        const handleOffline=()=>{
            setIsOnline(false);
        }
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline)
        }

    },[])// to execute it only once

    return isOnline;

}

export default useOnline;