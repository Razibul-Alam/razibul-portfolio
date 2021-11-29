import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeMain from './Pages/Home-Page/HomeMain';
import Header from './Pages/Header/Header';
import { EmailSender } from './Pages/Contact/EmailSender';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomeMain/>}/>
          <Route path='/contact' element={<EmailSender/>}/>
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
