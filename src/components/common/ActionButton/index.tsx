/**
 * ActionButton
 * @package components
 */
import React from 'react'
/* styled */
import { _StyleButton } from './style'

/**
 * Props
 */
export interface Props {
  label: string
  onClick: () => void
}

/**
 * ActionButton
 * @param {Props} props
 * @returns
 */
export const ActionButton: React.VFC<Props> = (props: Props) => {
  /* props */
  const { label, onClick } = props
  return (
    <_StyleButton role="test-action-button" onClick={onClick}>
      {label}
    </_StyleButton>
  )
}
