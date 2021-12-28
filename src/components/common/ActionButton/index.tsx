/** @jsxImportSource @emotion/react */
/**
 * ActionButton
 * @package components
 */
import React from 'react'
import { css } from '@emotion/react'

/**
 * Props
 */
export interface Props {
  label: string
  disableFlg?: boolean
  onClick: () => void
}

/**
 * ActionButton
 * @param {Props} props
 * @returns
 */
export const ActionButton: React.VFC<Props> = (props: Props) => {
  /* props */
  const { label, disableFlg, onClick } = props

  return (
    <button
      role="test-action-button"
      css={disableFlg ? secondaryStyle : primaryStyle}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const baseStyle = css`
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const primaryStyle = css`
  ${baseStyle}
  background-color: hotpink;
`

const secondaryStyle = css`
  ${baseStyle}
  background-color: black;
`
