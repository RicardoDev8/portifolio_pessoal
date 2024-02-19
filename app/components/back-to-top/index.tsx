"use client"

import { TbArrowNarrowUp } from "react-icons/tb";
import Button from "../button";
import { useCallback, useEffect, useState } from "react";

const BackToTop = () => {
    const [show, setShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'})
    }


    const handleScroll = useCallback(() => {
        if(!show && window.scrollY > 900){
            setShow(true)
        }else if(show && window.scrollY <= 900){
            setShow(false)
        }
    }, [show])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    return ( 
        <div className="fixed right-4 bottom-4 z-20" >
            {show ? (
            <Button onClick={scrollToTop} className="shadow-lg shadow-indigo-400/20" >
                <TbArrowNarrowUp size={20}/>
            </Button>
            ) : (
                null
            )}
        </div>
     );
}
 
export default BackToTop;