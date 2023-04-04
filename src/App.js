import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { fetchPosts } from './action/postActions';
import './style.css';

import Home from './components/Home';
import Post from './components/Post';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







