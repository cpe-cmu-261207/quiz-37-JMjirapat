import React from "react";
import Comment from "./Comment";

export default function PostOwner(props) {
	return (
		<div className="vstack gap-3">
			<div className="d-flex align-items-center gap-3">
				<img
					src="profileImages/129227182_897125157785398_130849267060199300_n.jpg"
					width="48"
					height="48"
					className="rounded-circle"
					style={{ objectFit: "cover" }}
				/>
				<span className="fw-semibold fs-5">
					Jirapat Promta 620610019
				</span>
			</div>
			<span>Hello World!</span>
			<div className="d-flex align-items-center gap-1">
				<img src="/like.svg" width={20}></img>
				<span className="text-muted">1 คน</span>
			</div>
			<hr className="m-0" />
			{
				props.comments.map(
					(data, idx) => {
						return <Comment data={data} key={idx} />;
					}
					//console.log(data);
				)
				//;
			}
		</div>
	);
}
