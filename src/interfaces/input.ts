export default interface IInputProps {
	type: "text" | "email" | "password";
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
