import { fireEvent,render, screen } from '@testing-library/react';
import Register from './Register';


describe('Register suite', ()=>{
    test('Renders Register heading', async() => {
        render(<Register />);
        const linkElement = screen.getByText(/Register Page/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Check if both password matching', async()=>{
        render(<Register />);
        const newPasswordElement = screen.getByPlaceholderText(/New Password/i);
        const confirmPasswordElement = screen.getByPlaceholderText(/Confirm Password/i);
        fireEvent.change(newPasswordElement, {target : {value: "Sai@123****"}})
        fireEvent.change(confirmPasswordElement, {target : {value: "Sai@123***"}})
        const buttonElement = screen.getByRole('button', {name: /Register/i})
        fireEvent.click(buttonElement)
        const paragraphElement= screen.queryByRole("paragraph", {name: /Passwords are not matching/i})
        expect(paragraphElement).not.toBeInTheDocument()
    })

    test('Check if both password are not matching', async()=>{
        render(<Register />);
        const newPasswordElement = screen.getByPlaceholderText(/New Password/i);
        const confirmPasswordElement = screen.getByPlaceholderText(/Confirm Password/i);
        fireEvent.change(newPasswordElement, {target : {value: "Sai@123****"}})
        fireEvent.change(confirmPasswordElement, {target : {value: "Sai123***"}})
        const buttonElement = screen.getByRole('button', {name: /Register/i})
        fireEvent.click(buttonElement)
        const paragraphElement= screen.getByText(/Passwords are not matching/i)
        expect(paragraphElement).toBeInTheDocument()
    })


    test('Check if  password is strong', async()=>{
        render(<Register />);
        const newPasswordElement = screen.getByPlaceholderText(/New Password/i);
        fireEvent.change(newPasswordElement, {target : {value: "Sai@123&**"}})
        const paragraphElement= screen.getByText(/Is Strong Password/i)
        expect(paragraphElement).toBeInTheDocument()
    })

    test('Check if password is not strong', async()=>{
        render(<Register />);
        const newPasswordElement = screen.getByPlaceholderText(/New Password/i);
        fireEvent.change(newPasswordElement, {target : {value: "Sai@123"}})
        const paragraphElement= screen.getByText(/Is Not Strong Password/i)
        expect(paragraphElement).toBeInTheDocument()
    })
})