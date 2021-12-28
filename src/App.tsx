/** @jsxImportSource @emotion/react */
import emotionReset from 'emotion-reset'
import React from 'react'
import { Global, css } from '@emotion/react'
/* components */
import { ActionButton } from './components/common/ActionButton'

const color = 'white'

const App: React.VFC = () => (
  <>
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
    <ActionButton
      label={'This my button component.'}
      onClick={() => {
        console.log('テスト')
      }}
    />
  </>
)

export default App
