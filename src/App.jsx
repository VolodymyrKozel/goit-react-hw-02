import {useState} from 'react'
import Description from './components/description/Description'
import Options from './components/options/Options'
import Feedback from './components/feedback/Feedback'
import './App.css'

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }
  )

  return (
    <>
    <Description/>
    <Options 
    setFeedback={setFeedback}
    />
    <Feedback 
    feedback={feedback}
    />
    </>
  )
}

export default App
