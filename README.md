# Login Form Application

This project is a simple login form built using Vite, React, and TypeScript, following the Atomic Design methodology. The form includes basic validation to ensure that the email and password fields are filled in correctly before submission.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Components](#components)
  - [Atoms](#atoms)
  - [Molecules](#molecules)
  - [Organisms](#organisms)
  - [Templates](#templates)
  - [Pages](#pages)
- [Form Validation](#form-validation)
- [Best Practices](#best-practices)

## Project Structure

The project follows the Atomic Design methodology, splitting components into atoms, molecules, organisms, templates, and pages for better reusability and maintainability.

```
src/
├── assets/
├── components/
│   ├── atoms/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   ├── molecules/
│   │   └── formField.tsx
│   ├── organisms/
│   │   └── loginForm.tsx
│   └── templates/
│       └── loginTemplate.tsx
├── interfaces/
│   ├── button.ts
│   ├── errors.ts
│   ├── formField.ts
│   ├── input.ts
│   ├── label.ts
├── App.tsx
└── main.tsx
```

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/your-username/login-form-app.git
cd login-form-app
npm install
```

## Running the Application

To run the application locally, use the following command:

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to see the application.

## Components

### Atoms

- **Button**: A simple button component that handles click events.
- **Input**: A controlled input component for text, email, and password fields.
- **Label**: A label component for form fields.

### Molecules

- **FormField**: A combination of `Label` and `Input` components, along with error handling.

### Organisms

- **LoginForm**: The main login form component that handles form submission and validation.

### Templates

- **LoginTemplate**: A template component that wraps the login form with a heading.

## Form Validation

The login form includes basic validation:

- **Email**: The email field must be filled in with a valid email format.
- **Password**: The password field must not be empty.

The validation logic is implemented in the `LoginForm` component. If any validation fails, the form displays error messages and prevents submission.

## Best Practices

This project follows several best practices:

- **Atomic Design**: Components are organized by their level of complexity and reusability.
- **TypeScript**: Strong typing is used to catch errors early and improve code maintainability.
- **Separation of Concerns**: Validation logic is kept within the form component, and state management is handled using React's `useState` hook.
- **Controlled Components**: The form fields are controlled components, meaning their state is managed by React, allowing for easier validation and manipulation.

## License

This project is licensed under the MIT License.
```

---

Feel free to customize this `README.md` file as needed.