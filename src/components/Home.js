import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../action/postActions';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {Array.isArray(posts) && posts.map(post => (
        <div key={post.id}>
          <h3>
            <Link to={`/item/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body.slice(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Home;



