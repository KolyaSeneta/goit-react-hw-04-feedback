import {useState} from 'react'
import Statistics from "./Statistics/Statistics"
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';



 export const App = () => {
  const [state, setState] = useState({
     good: 0,
     neutral: 0,
     bad:0,
   })
  //  const [good, setGood] = useState(0)
  //  const [neutral, setNeutral] = useState(0)
  //  const [bad, setBad] = useState(0)


     const countTotalFeedback = () => {
    const result = state.good + state.neutral + state.bad;

    return result
   }
   
   const countPositiveFeedbackPercentage = () => {
     const result = countTotalFeedback()
     const total = state.good / result * 100;
   
     if (result) {
       return Math.round(total);
     }
     return 0
   }
  //  const [state, setState] = useState({
  //    good: 0,
  //    neutral: 0,
  //    bad:0,
  //  })
  const  onLeaveFeedback = (e) => {
     const name = e.target.name;
     setState( (prev) => ({ ...prev,[name]: prev[name]  + 1 }))
    console.log(name);


   }
 
   

     const result = countTotalFeedback();
     const options = ["good", "neutral", "bad"]
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options ={options} onLeaveFeedback ={onLeaveFeedback} />
        </Section>
        {result === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={countTotalFeedback()} positiveFeedback={countPositiveFeedbackPercentage()} />
          </Section>
        )}  
      </>
  )
}
