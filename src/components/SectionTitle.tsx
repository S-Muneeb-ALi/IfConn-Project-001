import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

export interface SectionTitleProps {
  title: string;
  showButton?: boolean;
  onBtnClick?: () => void;
}

export default function SectionTitle({ title, showButton, onBtnClick }: SectionTitleProps) {
  return (
    <h3 className="mb-2">
      <span className="mr-2">{title}</span>
      {showButton === true && (
        <Button
          shape="circle"
          type='primary'
          size='small'
          icon={<FontAwesomeIcon icon={faPlus} />}
          onClick={x => onBtnClick && onBtnClick()}
        >

        </Button>
      )}
    </h3>
  )
}