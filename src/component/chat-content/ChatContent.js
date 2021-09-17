import React from "react";
import "./chatContent.css";

// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

const ChatContent = ({ message, createdAt, sender }) => {
	// dayjs.extends(relativeTime);

	return (
		<div className="chat-content">
			<div className={`${sender} content-user`}>
				<div className="chat-message">
					<p className={`message-${sender}`}>{message}</p>
				</div>
			</div>
		</div>
	);
};

export default ChatContent;