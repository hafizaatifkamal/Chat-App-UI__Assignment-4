import React from "react";
import "./App.css";

import chatData from "./ChatData";

import ChatBody from "./component/chat-body/ChatBody.js";

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: chatData,
      };
   }

   render() {
      const { data } = this.state;
      console.log(data);

      return (
         <div className="Application">
            <ChatBody data={data} />
         </div>
      );
   }
}

export default App;