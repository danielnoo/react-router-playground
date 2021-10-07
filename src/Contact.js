import {Link, Route} from 'react-router-dom'
import Michelle from './Michelle'

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <Link to="/contact/michelle">miiiichleee </Link> 
      <Route path="/contact/michelle">
        <Michelle />
      </Route>
    </div>
  )
}

export default Contact;