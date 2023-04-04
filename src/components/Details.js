import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../actions/postActions';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Created by User {post.userId}</p>
    </div>
  );
};

export default Detail;



