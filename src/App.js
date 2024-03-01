import './App.css';
import TopNav from './components/TopNav'
import PromotionBanner from './components/PromotionBanner';
import BlogDetail from './components/BlogDetail';
import BlogLists from './components/BlogLists';
import { Route, Switch, NavLink, Link, Router, Routes, useNavigate, BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage';
import About from './components/About';
import Search from './components/Search';
import Whoami from './components/Whoami';
import WhatIdo from './components/WhatIdo';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';
import AllNews from './components/AllNews';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="site-wrapper">
          <div className='navbar-wrapper'>
            <div className='row'>
              <TopNav />
            </div>
          </div>

          {/* Promotional  Banner */}

          <div className='site-promotional-wrapper'>
            <div className="row">
              <PromotionBanner />
            </div>
          </div>
          <div className='site-content-wrapper'>
            <div className="row">
              <Routes>
                <Route index element={<HomePage />} />
                <Route Component={HomePage} path='/home' />
                <Route element={<About />} path='/about' />
                <Route element={<Search />} path='/search' />
                <Route element={<Whoami />} path='/whoami' />
                <Route element={<WhatIdo />} path='/whatido' />
                <Route element={<Portfolio />} path='/portfolio' />
                <Route element={<AllNews />} path='/all-news' />
                <Route element={<BlogDetail />} path='/news-detail' />


                <Route element={<NotFound />} path='*' />
              </Routes>
              {/* <Routes>
                <Route element={<HomePage />} path='/home' />
                <Route element={<About />} path='/about' />
                <Route element={<Search />} path='/search' />
                <Route element={<Whoami />} path='/whoami' />
                <Route element={<WhatIdo />} path='/whatido' />
                <Route element={<Portfolio />} path='/portfolio' />
                <Route element={<AllNews />} path='/all-news' />
                <Route element={<BlogDetail /> } path='/news-detail' />


                <Route element={<NotFound />} path='*' />
              </Routes> */}

            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
