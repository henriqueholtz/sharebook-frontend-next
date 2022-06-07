import { InputBaseComponentProps } from '@mui/material';
import React from 'react';
import MaskedInput from 'react-text-mask';

export const MaskedInputDate = React.forwardRef<HTMLInputElement, InputBaseComponentProps>((props, ref): JSX.Element => {
	const { inputRef, ...others } = props;
	// ref is without use, but without React.forwardRef() return console.error
	return (
		<div>
			<MaskedInput {...others} ref={inputRef} mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} placeholderChar={'\u2000'} />
		</div>
	);
});
