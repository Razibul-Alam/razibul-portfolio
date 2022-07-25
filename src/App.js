import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeMain from './Pages/Home-Page/HomeMain';
import Header from './Pages/Header/Header';
import ContactMain from './Pages/Contact/ContactMain';
import AllProject from './Pages/Projects/AllProject';
import Blogs from './Pages/Blogs/Blogs';
import ProjectDetails from './Pages/DetailsPage/ProjectDetails';
function App() {
  return (
    <div>
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<HomeMain/>}/>
          <Route path='/home' element={<HomeMain/>}/>
          <Route path='/contact' element={<ContactMain/>}/>
          <Route path='/projects' element={<AllProject/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          {/* <Route path='/about' element={<About/>}/> */}
          <Route path='/project/:number' element={<ProjectDetails/>}/>
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
