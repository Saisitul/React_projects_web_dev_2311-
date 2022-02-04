import { fireEvent,render, screen } from '@testing-library/react';
import App from './App'

describe('Check if both login and register button are working', ()=>{
    test('Login button is working', ()=>{
        render(<App />)
        const buttonElement= screen.getByRole('button', {name: /Go to login/})
        fireEvent.click(buttonElement)
        const headingElement= screen.getByRole('heading', {name: "Login Page"})
        expect(headingElement).toBeInTheDocument()
    })

    test('Register button is working', ()=>{
        render(<App />)
        const buttonElement= screen.getByRole('button', {name: /Go to register/})
        fireEvent.click(buttonElement)
        const headingElement= screen.getByRole('heading', {name: "Register Page"})
        expect(headingElement).toBeInTheDocument()
    })
})