import React from "react";
import "./chatBody.css";

import ChatContent from "../chat-content/ChatContent.js";
import ChatMain from "../chat-main/ChatMain.js";

const ChatBody = ({ data }) => {
	return (
		<div className="chat-body">
			<div className="chat-body-container">
				{data.map((userData) => (
					<ChatContent key={userData._id} {...userData} />
				))}
			</div>
			<ChatMain />
		</div>
	);
};

export default ChatBody;