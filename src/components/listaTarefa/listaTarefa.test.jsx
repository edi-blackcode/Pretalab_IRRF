import { beforeEach, test } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import ListaTarefa from './ListaTarefa'

 /**
* @vitest-environment jsdom
*/

beforeEach(()=> {
    render(<ListaTarefa />)
})

test('Deverá ser capaz de criar um novo item', () => {
    const inputElement = screen.getByTestId('input-item')
    const buttonElement = screen.getByTestId('btn-item')

    fireEvent.change(inputElement, {
        target: {
            value: "Estudar"
        }
    })

    fireEvent.click(buttonElement)

    expect(screen.queryByText("Estudar")).toBeInTheDocument()
})

test('não deverá criar um novo item sem título', () => {
    const buttonElement = screen.getByTestId('btn-item')

    fireEvent.click(buttonElement)

    expect(screen.queryByText("Estudar")).not.toBeInTheDocument()
})

test('deverá ser capaz de apagar um item', () => {
    const inputElement = screen.getByTestId('input-item')
    const buttonElement = screen.getByTestId('btn-item')   
    
    fireEvent.change(inputElement, {
        target: {
            value: "Estudar react"
        }
    })

    fireEvent.click(buttonElement)

    const primeiroItem = screen.getByText('Estudar react')
    
    fireEvent.change(inputElement, {
        target: {
            value: "Estudar testes"
        }
    })

    fireEvent.click(buttonElement)

    const segundoItem = screen.getByText("Estudar testes")
    
    const [primeiroItembotaoDeRemover] = screen.getAllByTestId('btn-remove-item')

    fireEvent.click(primeiroItembotaoDeRemover)

    expect(primeiroItem).not.toBeInTheDocument()
    expect(segundoItem).toBeInTheDocument()
})