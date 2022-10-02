import { render, screen } from '@testing-library/react'
import { test } from 'vitest'
import Counter from './Counter'

 /**
* @vitest-environment jsdom
*/

test('deverá renderizar o valor inicial ', () => {
    render(<Counter />)

    expect(screen.getByText('0')).toBeInTheDocument()
})