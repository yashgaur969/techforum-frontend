import * as React from 'react'
import {render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header';


describe('testing our header component', () => {
    test('if component renders without crashing ',() =>{
        const { getByPlaceholderText } = render(<BrowserRouter><Header /></BrowserRouter>)

        const search = getByPlaceholderText('search')
        expect(search).toBeInTheDocument();
    })
})


