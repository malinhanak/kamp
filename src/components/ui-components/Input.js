import { useState } from 'react';
import styled from 'styled-components';

function Input({ id, label, name, action, data }) {
	const [active, setActive] = useState(data ? true : false);
	const [error] = useState('');

	return (
		<InputWrapper className={`${active ? 'active' : ''}`}>
			<InputStyle
				id={id}
				type="text"
				name={name}
				value={data}
				placeholder={label}
				onChange={(e) => action(e)}
				onFocus={() => setActive(true)}
				onBlur={() => setActive(true)}
			/>
			<label htmlFor={id} className={error && 'error'}>
				{error || label}
			</label>
		</InputWrapper>
	);
}

const InputWrapper = styled.div`
	width: 100%;
	height: 56px;
	border-radius: 4px;
	position: relative;
	border-width: 1px;
	border-style: solid;
	border-color: ${(props) => props.theme.colors.darkBase};
	transition: 0.3s border-color ease-in-out, 0.3s border-width ease-in-out,
		0.3s box-shadow ease-in-out;
	margin-bottom: 1rem;

	&:hover,
	&.active {
		border-color: ${(props) => props.theme.colors.primary};
		border-width: 2px;
		box-shadow: rgba(${(props) => props.theme.colors.primaryRGB}, 0.15) 1.95px 1.95px 2.6px;
	}

	&.active input {
		padding: 24px 16px 8px 16px;
	}

	&.active input + label {
		top: 4px;
		opacity: 1;
		font-family: ${(props) => props.theme.font.alt.family};
		text-transform: uppercase;
		color: ${(props) => props.theme.colors.primary};
	}
`;
const InputStyle = styled.input`
	width: 100%;
	height: 56px;
	position: relative;
	padding: 0px 16px;
	border: none;
	border-radius: 4px;
	font-family: ${(props) => props.theme.font.family};
	font-size: 0.75rem;
	font-weight: 400;
	line-height: normal;
	background-color: transparent;
	color: ${(props) => props.theme.colors.font};
	outline: none;
	box-shadow: 0px 4px 20px 0px transparent;
	transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
		0.1s padding ease-in-out;
	-webkit-appearance: none;

	&::-webkit-input-placeholder {
		color: rgba(255, 255, 255, 0.8);
	}
	&::-moz-placeholder {
		color: rgba(255, 255, 255, 0.8);
	}
	&:-ms-input-placeholder {
		color: rgba(255, 255, 255, 0.8);
	}
	&:-moz-placeholder {
		color: rgba(255, 255, 255, 0.8);
	}

	& + label {
		position: absolute;
		top: 24px;
		left: 16px;
		font-family: 'Gotham SSm A', 'Gotham SSm B', sans-serif;
		font-size: 12px;
		font-weight: 600;
		line-height: 24px;
		color: #ffffff;
		opacity: 0;
		pointer-events: none;
		transition: 0.1s all ease-in-out;
	}

	& + label.error {
		color: #ec392f;
	}
`;

export default Input;
