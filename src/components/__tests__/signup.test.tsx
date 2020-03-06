import * as React from 'react'
import {render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SignUp } from '../SignUp';


describe('testing our signup component', () => {
    test('if component renders without crashing ',() =>{
        const { getByPlaceholderText } = render(<BrowserRouter><SignUp /></BrowserRouter>)

        const first_name = getByPlaceholderText('first-name')
        const last_name = getByPlaceholderText('last-name')
        const email = getByPlaceholderText('EmailId')
        const pass = getByPlaceholderText('password')
        const pos = getByPlaceholderText('designation')
        const dob = getByPlaceholderText('dob')
        const mobile = getByPlaceholderText('mobile')
        expect(first_name).toBeInTheDocument();
        expect(last_name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(pass).toBeInTheDocument();
        expect(pos).toBeInTheDocument();
        expect(dob).toBeInTheDocument();
        expect(mobile).toBeInTheDocument();


    })
})