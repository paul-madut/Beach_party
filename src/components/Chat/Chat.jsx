// import { collection, onSnapshot, orderBy, query, } from "firebase/firestore";
// import { useEffect, useState, useRef } from "react";
import { db } from "../Login/firebase";
import { doc, getDoc } from "firebase/firestore";
// import ChatMessage from "./ChatMessage";


function Chat(){
    
    const messageRef = doc(db,'/Rooms/p6PW8VH7lI5D58FIqdpy/testRoom/VxOjHdIvJlVSmrw1OHNb/Messages/2ikAI9Vs0D7CTJgz3OD5') 
    const messageSnap = getDoc(messageRef);
    
    console.log(messageSnap)
    return(
        <div>
        </div>
    )
}

export default Chat