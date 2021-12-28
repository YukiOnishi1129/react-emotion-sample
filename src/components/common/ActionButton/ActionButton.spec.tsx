/**
 * ActionButton.spec
 * @package test
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
/* components */
import { ActionButton } from './index'

describe('action button view test', () => {
  test('test', () => {
    render(
      <ActionButton label={'test'} onClick={() => console.log('テスト')} />
    )

    const button = screen.getByRole('test-action-button')
    expect(button.textContent).toBe('test')
  })
})
