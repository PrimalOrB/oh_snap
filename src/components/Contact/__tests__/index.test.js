import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach( cleanup );


describe( 'Contact Form component', () =>{
    it( 'renders', () => {
        render( <ContactForm /> )
    } )

    it( 'matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect( asFragment() ).toMatchSnapshot();
    } )
} )

describe( 'h1 text matches', () => {
    it( 'check for rendered text content', () => {
        const { getByTestId } = render(<ContactForm />);
        expect( getByTestId( 'contact-h1' ) ).toHaveTextContent( 'Contact me' );
        expect( getByTestId( 'contact-submit' ) ).toHaveTextContent( 'Submit' );
    } );
} )