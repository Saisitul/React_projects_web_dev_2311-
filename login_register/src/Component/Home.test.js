import { fireEvent,render, screen } from '@testing-library/react';
import Home from './Home'

describe('Home suite', ()=>{
    test('Checking logout button is working properly', ()=>{
        render(<Home />)
        const buttonElement= screen.getByRole('button', {name: /Logout/i})
        fireEvent.click(buttonElement)
        const divElement= screen.getByText(/Login Page/i)
        expect(divElement).toBeInTheDocument()
    })
})