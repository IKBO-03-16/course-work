import React from 'react';

function Square(props){
		return (
			<button id={"button_" + props.i} className="square" onClick={() => props.onClick()}>
			{props.value}
			</button>
		)
}
export default Square;
