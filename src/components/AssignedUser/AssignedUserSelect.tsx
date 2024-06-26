import UserResponse from "@/models/responses/UserResponse";
import { Button, Select } from "antd";
import { useState } from "react";

export interface AssignedUserSelectProps {
  users: UserResponse[];
  values: number[];
  onChange: (users: UserResponse[]) => void;
}

export default function AssignedUserSelect({ users, values, onChange }: AssignedUserSelectProps) {
  const [selectedUsers, setSelectedUsers] = useState<number[]>(values);

  return (
    <div className="flex gap-3">
      <Select
        value={selectedUsers}
        onChange={setSelectedUsers}
        mode="multiple"
        className="grow"
        options={users.map(u => ({ value: u.id, label: u.name }))}
      />

      <Button type='primary'
        onClick={x => onChange(selectedUsers.map(id => users.find(u => u.id === id)!))}>Select</Button>
    </div>
  )
}
