import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPosts } from '../../actions/post';
import Spinner from '../../img/spinner.gif';
import PostItem from './postitem.component';
import PostForm from './postform.component';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <img src={Spinner} alt="loading" style={{ width: 300 }} />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
