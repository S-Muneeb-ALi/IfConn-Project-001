import { Flex } from "antd";

export interface IconTextProps {
  text?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
export default function IconText({ text, icon, onClick }: IconTextProps) {
  return (
    <Flex align='center' onClick={x => onClick && onClick()}>
      <div className='mr-2'>{icon}</div>
      <p className="text-lg">{text}</p>
    </Flex>
  );
}
