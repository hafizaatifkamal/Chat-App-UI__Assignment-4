import React from "react";
import "./chatMain.css";

import userData from "../../ChatData";
import UserInputText from "../user-input-text/UserInputText";

class ChatMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		userData.push({
			message: "lola",
			createdAt: new Date(),
			sender: "user",
			_id: userData.length + 1
		});
	};

	render() {
		return (
			<div className="chat-main">
				<div className="chat-main-container">
					<form onSubmit={this.handleSubmit}>
						<UserInputText
							className="send-input"
							type="text"
							placeholder="Leave your stupid messages"
						/>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		);
	}
}

export default ChatMain;