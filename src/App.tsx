/** @jsxImportSource @emotion/react */
import emotionReset from 'emotion-reset'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Global, css } from '@emotion/react'
/* pages */
import { Home } from './pages/Home'
import { About } from './pages/About'
/* components */
import { ActionButton } from './components/common/ActionButton'

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

    <ActionButton
      label={'This my button component.'}
      onClick={() => {
        console.log('テスト')
      }}
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </>
)

export default App
