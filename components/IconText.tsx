import { Flex } from "antd";
import { CSSProperties } from "react";

export interface IconTextProps {
  text?: string;
  icon: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}
export default function IconText({ text, icon, onClick, style }: IconTextProps) {
  return (
    <Flex align='center' onClick={x => onClick && onClick()} style={style}>
      <div className='mr-2'>{icon}</div>
      <p className="text-lg">{text}</p>
    </Flex>
  );
}
