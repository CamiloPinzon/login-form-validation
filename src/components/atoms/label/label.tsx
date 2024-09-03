import ILabelProps from "../../../interfaces/label";

const Label: React.FC<ILabelProps> = ({ htmlFor, children }) => {
	return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
