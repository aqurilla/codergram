import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../../img/spinner.gif';
import { getPost, getPosts } from '../../actions/post';
import PostItem from '../posts/postitem.component';
import { Link } from 'react-router-dom';

const Post = ({ post: { post, loading }, getPost, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return loading || post === null ? (
    <img src={Spinner} alt="" style={{ width: 300 }} />
  ) : (
    <Fragment>
      <Link className="btn" to="/posts">
        Back to Posts
      </Link>
      <PostItem post={post} showActions={false} />
    </Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
