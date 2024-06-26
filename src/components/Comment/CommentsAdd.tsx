import React, { useRef, useState } from 'react';

import { Button, Col, Input, Row, Upload } from 'antd';

import { faPaperPlane, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UploadFile } from 'antd/lib';

export interface CommentsAddProps {
  onAdd: (comment: string, files: UploadFile<any>[]) => void;
}

const { TextArea } = Input;


export default function CommentsAdd({ onAdd }: CommentsAddProps) {

  const [comment, setComment] = useState('');
  const [files, setFiles] = useState<UploadFile<any>[]>([]);

  const handleAddComment = () => {
    onAdd(comment, files);
    setComment('');
    setFiles([]);

  };

  return (
    <Row gutter={[8, 8]} className=' border border-slate-300 p-5 rounded-xl'>

      <Col xs={24} md={4}>
        <Upload
          multiple
          name="attachment"
          onChange={x => setFiles(x.fileList)}
          beforeUpload={x => false} >
          <Button icon={<FontAwesomeIcon icon={faUpload} />}>Click to Upload</Button>
        </Upload>
      </Col>

      <Col xs={24} md={18}>
        <TextArea
          rows={1}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          autoSize={{ minRows: 1, maxRows: 12 }}

        />
      </Col>

      <Col xs={24} md={1}>
        <Button type="primary" shape="circle" onClick={handleAddComment}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </Col>
    </Row>
  );
}
