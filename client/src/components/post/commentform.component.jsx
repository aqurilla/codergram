import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addComment } from '../../actions/post';

const CommentForm = ({ post_id, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div class="post-form">
      <div class="post-form-header bg-primary">
        <h3>Leave a comment</h3>
      </div>

      <form
        class="form my-1"
        onSubmit={(e) => {
          e.preventDefault();
          addComment(post_id, { text });
          setText('');
        }}
      >
        <textarea
          cols="30"
          rows="5"
          placeholder="Add a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type="submit" value="Submit" class="btn btn-dark my-1" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
