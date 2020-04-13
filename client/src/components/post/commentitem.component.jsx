import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { removeComment } from '../../actions/post';

const CommentItem = ({
  post_id,
  comment: { _id, text, name, avatar, user, date },
  auth,
  removeComment,
}) => (
  <div class="post bg-white p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}>
        <img src={avatar} alt="" class="round-image" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p class="my-1">{text}</p>
      <p className="post-date">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>{' '}
      </p>
      {!auth.loading && user === auth.user._id && (
        <button
          className="btn btn-danger"
          onClick={(e) => removeComment(post_id, _id)}
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  post_id: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { removeComment })(CommentItem);
