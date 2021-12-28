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
interface Props {
  label: string
}

/**
 * ActionButton
 * @param {Props} props
 * @returns
 */
export const ActionButton: React.VFC<Props> = (props: Props) => {
  /* props */
  const { label } = props
  return <_StyleButton>{label}</_StyleButton>
}
