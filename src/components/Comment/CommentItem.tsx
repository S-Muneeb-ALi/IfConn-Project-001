


import React from "react";
import { Avatar, Flex, Image, List } from "antd";

export interface CommentItemProps {
  id : number;
  comment: string;
  files?: string[];
  avatar: string;
  time: string;
  isOwn?: boolean;
}

export default function CommentItem({id, comment, avatar, time, isOwn, files }: CommentItemProps) {
  return (
    <div className={`comment ${isOwn ? "comment--own" : ""}`}>

      <div className="comment__content">

        <p>{comment}</p>

        {files && files.length > 0 && (
          <List
            className=" border border-slate-300 rounded-md "
            grid={{ column: 3 }}
            size="small"
            dataSource={files}
            key={id}

            renderItem={(file: string) => (

              <List.Item key={file} >

                <Image
                  src={file}
                  width={200}
                  height={100}
                  alt="really"
                  preview={true} />

              </List.Item>

            )}
          />
        )
        }
      </div>

      <div className="comment__footer">

        <Flex align="center" className="comment__footer-flex">

          <Avatar className="comment__avatar" src={avatar} />
          <span className="comment__time">{time}</span>
          

        </Flex>   

      </div>

    </div>
  );
}
