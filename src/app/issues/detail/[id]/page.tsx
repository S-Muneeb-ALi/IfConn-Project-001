'use client'

import React, { useState } from 'react';
import { Card, Col, Row, Image, Result, Button } from 'antd';

import CommentResponse from '@/models/responses/CommentResponse';

import CommentsData from '@/data/comments';
import IssuesData from "@/data/IssuesData";

import IssueDescription from '@/components/issue/IssueDescription';
import MarkdownViewer from '@/components/MarkdownViewer';
import CommentsView from '@/components/Comment/CommentsView';
import CommentsAdd from '@/components/Comment/CommentsAdd';


interface DetailPageParams {
  id: string;
}

export interface DetailPageProps {
  params: DetailPageParams;
}

export default function DetailPage({ params }: DetailPageProps) {

  const item = IssuesData.find(x => x.id.toString() === params.id)!
    if (!item) {
      return (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" onClick={() => window.history.back()}>Back to Issue List</Button>}
        />
      );
    };
    
  const issueComments = CommentsData.filter(x => x.issueId.toString() === params.id)!;

  const [visible, setVisible] = useState(false);
  const [comments, setComments] = useState<CommentResponse[]>(issueComments);
  const [currentItem, setCurrentItem] = useState(item);

  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} md={14}>
        <Card type="inner">
          <div>

            <h1 className='pb-20 font-bold text-xl'>
              Here is more details about this issue Tracking NO: {item.trackingIssue ?? "NA"}
            </h1>

            <MarkdownViewer content={item.description} />

            <Image
              preview={{ visible: false }}
              width={200}
              src={item.images[0]}
              onClick={() => setVisible(true)}
            />

            <div style={{ display: 'none' }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: vis => setVisible(vis) }}
                items={item.images} />
            </div>

          </div>
        </Card>
      </Col>


      <Col xs={24} md={10}>
        <IssueDescription
          item={currentItem}
          onChange={item => setCurrentItem(item)}
        />
      </Col>

      <Col xs={24} md={14}>

        <Card>
          <CommentsView
            comments={comments}
          />

          <CommentsAdd
            onAdd={(comment, files) => {
              setComments([...comments, {
                id: CommentsData.length + 1,
                issueId: item.id,
                avatar: "https://joeschmoe.io/api/v1/random",
                comment: comment,
                name: "test",
                time: new Date().toDateString(),
                isOwn: true,
                files: files.map(x => x.name),
              }]);
            }
            }
          />

        </Card>

      </Col>

    </Row>




  )
}