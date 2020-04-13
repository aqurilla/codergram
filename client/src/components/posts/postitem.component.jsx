import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div class="post bg-white my-1 p-1">
      <div>
        <a href="profile.html">
          <img src={avatar} alt="" class="round-image my-1" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{' '}
        </p>
        <button class="btn">
          <i class="fas fa-thumbs-up"></i>{' '}
          {likes.length > 0 && <span>{likes.length}</span>}
        </button>
        <button class="btn">
          <i class="fas fa-thumbs-down"></i>
        </button>

        <Link to={`/post/${_id}`} class="btn btn-primary">
          Comments
          {comments.length > 0 && (
            <span class="comment-count">{comments.length}</span>
          )}
        </Link>

        {!auth.loading && user === auth.user._id && (
          <button type="button" class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PostItem);
