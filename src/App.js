import {BrowserRouter, Routes,Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Post from './components/Post';
import Project from './components/Project';
import SinglePost from './components/SinglePost';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Post/>} path='/posts'/>
        <Route element={<Project/>} path='/projects'/>
        <Route element={<SinglePost/>} path='/post/:slug'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
