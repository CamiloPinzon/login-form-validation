import IFormFieldsProps from "../../../interfaces/formField";

import Label from "../../atoms/label/label";
import Input from "../../atoms/input/input";

import "./formField.css";

const FormField: React.FC<IFormFieldsProps> = ({
	label,
	type,
	value,
	onChange,
	error,
}) => {
	return (
		<div>
			<Label htmlFor={label}>{label}</Label>
			<Input type={type} value={value} onChange={onChange} />
			{error && <p className="errorFieldMessage">{error}</p>}
		</div>
	);
};

export default FormField;
