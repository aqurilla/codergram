import axios from 'axios';

import { setAlert } from './alert';
import {
  GET_POSTS,
  GET_POST,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './types';

// Get all posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get a post
export const getPost = (post_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${post_id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like to a post
export const addLike = (post_id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${post_id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { post_id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like from a post
export const removeLike = (post_id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${post_id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { post_id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete post
export const deletePost = (post_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/${post_id}`);

    dispatch({
      type: DELETE_POST,
      payload: post_id,
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    header: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`/api/posts`, formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
