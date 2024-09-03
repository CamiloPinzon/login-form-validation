import IButtonProps from "../../../interfaces/button";

const Button: React.FC<IButtonProps> = ({ type, children }) => {
	return (
		<button type={type}>
			{children}
		</button>
	);
};

export default Button;
