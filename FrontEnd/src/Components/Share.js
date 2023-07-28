import React from "react";
import { RWebShare } from "react-web-share";

function Share() {
	return (
		<div>
			
			<RWebShare
				data={{
					text: "Web Share - GfG",
					url: "http://localhost:3000/Playlist1",
					title: "GfG",
				}}
				onClick={() => console.log("shared successfully!")}
			>
				<button></button>
			</RWebShare>
		</div>
	);
};

export default Share;