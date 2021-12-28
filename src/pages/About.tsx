import { Link, useNavigate } from 'react-router-dom'
/* components */
import { ActionButton } from '../components/common/ActionButton'

export const About = () => {
  const navigation = useNavigate()

  const onMovePage = () => {
    navigation('/')
  }

  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, dont you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <ActionButton label={'Homeへ'} onClick={onMovePage} />
      </nav>
    </>
  )
}
