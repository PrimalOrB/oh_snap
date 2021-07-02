import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockOnClose = jest.fn();
const mockToggleModal = jest.fn()

const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

afterEach( cleanup )

describe( 'Modal is rendering', () => {
  it( 'renders', () => {
    render( <Modal currentPhoto={ currentPhoto } onClose={ mockOnClose }/> );
  } );

  it( 'matches snapshot', () => {
    const { asFragment } = render( <Modal currentPhoto={ currentPhoto } onClose={ mockOnClose }/> )
    expect( asFragment() ).toMatchSnapshot()
  } )

} )

describe('Click Event', () => {
    it( 'calls onClose handler', () => {
      const { getByText } = render( <Modal
        onClose={ mockToggleModal }
        currentPhoto={ currentPhoto }
      />);
      fireEvent.click( getByText( 'Close this modal' ) );
  
      expect( mockToggleModal ).toHaveBeenCalledTimes( 1 );
    } );
} )  