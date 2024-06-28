


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
            className=" "
            grid={{ column: 3, xs: 1 , sm: 1 }}
            size="small"
            dataSource={files}
            key={id}

            renderItem={(file: string) => (

              <List.Item key={file} 
              className="border border-slate-800 rounded-md bg-slate-300 w-32 h-24 ">

                <Image
                  src={file}
                  alt="really"
                  
                 style={{ maxWidth: "90%", maxHeight: "80dvh", marginTop: "20px"}} 
                  
                  />

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
