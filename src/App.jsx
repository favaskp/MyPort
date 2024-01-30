import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavMenu from './components/NavMenu';
import Menu1 from './components/MenusVIew/Menu1';
import Menu2 from './components/MenusVIew/Menu2';
import Menu3 from './components/MenusVIew/Menu3';

function App() {
  return (
    <>
      <BrowserRouter>
          <div className="app_main">
            <NavMenu></NavMenu>
            <div className='view_section_main'>
              <div className='view_section_sub'>
                <Routes>
                  <Route path='/dashboard' element ={<Menu1 />} />
                  <Route path='/userprofile' element = {<Menu2 />} />
                  <Route path='/tablelist' element = {<Menu3 />} />
                </Routes>
              </div>
            </div>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
