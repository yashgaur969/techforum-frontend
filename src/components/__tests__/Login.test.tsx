import * as React from 'react'
import {render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LogIn } from '../LogIn';


describe('testing our login component', () => {
    test('if component renders without crashing ',() =>{
        const { getByPlaceholderText, getByText } = render(<BrowserRouter><LogIn /></BrowserRouter>)

        const email = getByPlaceholderText('EmailId')
        const pass = getByPlaceholderText('password')
        expect(email).toBeInTheDocument();
        expect(pass).toBeInTheDocument();


    })
})
// describe('testing our login component', () => {
//     test('if component renders without crashing ',() =>{
//         const { getByPlaceholderText } = render(<BrowserRouter><SignUp /></BrowserRouter>)

//         const first_name = getByPlaceholderText('first_name')
//         const last_name = getByPlaceholderText('last_name')
//         const email = getByPlaceholderText('EmailId')
//         const pass = getByPlaceholderText('password')
//         const pos = getByPlaceholderText('designation')
//         const dob = getByPlaceholderText('dob')
//         const mobile = getByPlaceholderText('mobile')
//         expect(first_name).toBeInTheDocument();
//         expect(last_name).toBeInTheDocument();
//         expect(email).toBeInTheDocument();
//         expect(pass).toBeInTheDocument();
//         expect(pos).toBeInTheDocument();
//         expect(dob).toBeInTheDocument();
//         expect(mobile).toBeInTheDocument();


//     })
// })