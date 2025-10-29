# React Login Form

Simple login form built with React and Vite to demonstrate state management with the `useState` hook.

## Features
- Controlled username and password fields that stay in sync with component state.
- Basic validation that blocks submission when either field is empty and shows feedback.
- Console logging of submitted credentials so you can verify data handling during development.
- Clean, card-style UI that matches the provided reference mockups.

## Getting Started
1. Install dependencies:
   ```powershell
   npm install
   ```
2. Start the dev server:
   ```powershell
   npm run dev
   ```
   The app will be available at the URL printed in the terminal.
3. Run a production build (optional):
   ```powershell
   npm run build
   ```

## Testing the Form
- Enter any username and password, then click **Login**.
- Open the browser console to see the submitted values.
- Leave one of the fields blank and click **Login** to see the validation message.
