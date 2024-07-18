import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="flex justify-center items-center text-3xl" style={{ height: "100dvh" }}>
      <Spin size="large" />
    </div>
  )
}