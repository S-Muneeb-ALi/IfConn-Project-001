// import React from 'react';

import React from 'react';
import { Avatar, Flex, Input } from 'antd';
import CommentItem from './CommentItem';
import CommentResponse from '@/models/responses/CommentResponse';

export interface CommentsViewProps {
  comments: CommentResponse[];
}

export default function CommentsView({ comments }: CommentsViewProps) {
  return (
    <div>
      {comments.map(({ id, comment, time, avatar, isOwn, files }) => (
        <CommentItem 
          key={id}
          id={id}
          avatar={avatar}
          comment={comment}
          time={time}
          isOwn={isOwn}
          files={files}
        
        />
      ))}
    </div>
    
  );
}
