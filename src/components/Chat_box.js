import React from "react"


 


const ChatBox = ()=>{
    return(
        <nav className="chatbox">
            <iframe style={{marginTop:'-10px', marginLeft:'1200px', borderRadius:'15px'}} width="300" height="400"  allow="microphone;" 
            src="https://console.dialogflow.com/api-client/demo/embedded/d8fc5d99-8956-456d-a587-24c88419939c"></iframe>
          
        </nav>
    )
}

export default ChatBox;