import * as React from 'react'
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LogIn } from '../LogIn';


describe('testing our login component', () => {
    test('if component renders without crashing ', () => {
        const { getByPlaceholderText } = render(<BrowserRouter><LogIn /></BrowserRouter>)

        const email = getByPlaceholderText('EmailId')
        const pass = getByPlaceholderText('password')
        expect(email).toBeInTheDocument();
        expect(pass).toBeInTheDocument();
    })
})
