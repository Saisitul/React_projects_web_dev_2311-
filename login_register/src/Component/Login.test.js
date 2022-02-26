import { fireEvent,render, screen } from '@testing-library/react';
import Login from './Login'


describe('Login suite', ()=>{
    test('to check if fetch is successful', ()=>{
        render(<Login />)
        const fetchElement= screen.getByText(/Fetch successful/i)
        expect(fetchElement).toBeInTheDocument()
    })

    test('to check if fetch is not successful', ()=>{
        render(<Login />)
        const fetchElement= screen.queryByText(/Fetch failed/i)
        expect(fetchElement).toBeFalsy()
    })

    test('Login with correct credentials', ()=>{
        render(<Login />)
        const emailElement= screen.getByPlaceholderText(/Email/)
        fireEvent.change(emailElement, {target: {value: 'kaguya.otsua@gmail.com'}})
        const passElement= screen.getByPlaceholderText(/Password/)
        fireEvent.change(passElement, {target : {value: 'Love@14'}})
        const buttonElement= screen.getByRole('button', {name: /Login/})
        fireEvent.click(buttonElement)
        const paragraphElement= screen.getByRole("paragraph", {name: /Hello User/})
        // const paragraphElement= screen.getByRole("button", {name: /Logout/})
        expect(paragraphElement).toBeInTheDocument()
    })

    test('Login with incorrect credentials', ()=>{
        render(<Login />)
        const emailElement= screen.getByPlaceholderText(/Email/i)
        fireEvent.change(emailElement, {target: {value: 'Logan.hunt@gmail.com'}})
        const passElement= screen.getByPlaceholderText(/Password/i)
        fireEvent.change(passElement, {target : {value: 'Logan@2311'}})
        const buttonElement= screen.getByRole('button', {name: /Login/i})
        fireEvent.click(buttonElement)
        const paragraphElement= screen.queryByRole("paragraph", {name: /Hello User/i})
        expect(paragraphElement).not.toBeInTheDocument()
    })

    test('Login with correct password but blank email', ()=>{
        render(<Login />)
        const emailElement= screen.getByPlaceholderText(/Email/i)
        fireEvent.change(emailElement, {target: {value: ''}})
        const passElement= screen.getByPlaceholderText(/Password/i)
        fireEvent.change(passElement, {target : {value: 'Hunt@2311'}})
        const buttonElement= screen.getByRole('button', {name: /Login/i})
        fireEvent.click(buttonElement)
        const paragraphElement= screen.queryByRole("paragraph", {name: /Hello User/i})
        expect(paragraphElement).not.toBeInTheDocument()
    })

    test('Login with correct email but blank password', ()=>{
        render(<Login />)
        const emailElement= screen.getByPlaceholderText(/Email/i)
        fireEvent.change(emailElement, {target: {value: 'Ethan.hunt@gmail.com'}})
        const passElement= screen.getByPlaceholderText(/Password/i)
        fireEvent.change(passElement, {target : {value: ''}})
        const buttonElement= screen.getByRole('button', {name: /Login/i})
        fireEvent.click(buttonElement)
        const paragraphElement= screen.queryByRole("paragraph", {name: /Hello User/i})
        expect(paragraphElement).not.toBeInTheDocument()
    })


})