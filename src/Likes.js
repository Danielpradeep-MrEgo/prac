import "./Likes.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import { IconButton } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Likes() {
	const [like, setLikes] = useState(0);
	const [color, setColor] = useState("red");
	const [{ likes }, dispatch] = useStateValue();

	const TriggerLikes = () => {
		if (color == "red") {
			setLikes(like + 1);
			setColor("green");
		}
		if (color == "green") {
			setLikes(like - 1);
			setColor("red");
		}
	};

	useEffect(() => {
		dispatch({
			type: actionTypes.SET_LIKES,
			likes: like,
		});
	}, [like]);

	return (
		<div className="likes">
			<img src="https://cdn140.picsart.com/315343367190201.jpg" alt="" />
			<div className="likes__icons">
				<div className="likes__thumb">
					<IconButton
						onClick={TriggerLikes}
						style={{ backgroundColor: `{${color}}` }}
					>
						<ThumbUpAltOutlinedIcon />
					</IconButton>
					{like}
				</div>

				<IconButton>
					<ChatBubbleOutlineOutlinedIcon />
				</IconButton>
				<IconButton>
					<ShareOutlinedIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Likes;
