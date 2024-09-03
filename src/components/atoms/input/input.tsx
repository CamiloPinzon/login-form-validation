import IInputProps from "../../../interfaces/input";

const Input: React.FC<IInputProps> = ({ type, value, onChange }) => {
	return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
