export default interface IFormFieldsProps {
	label: string;
	type: "text" | "email" | "password";
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
}
