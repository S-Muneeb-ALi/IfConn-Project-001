import { Avatar, Tooltip } from "antd";

export interface AssignedUserViewProps {
  users: string[];
}

export default function AssignedUserView({ users }: AssignedUserViewProps) {
  return users.length > 0 ? (
    <Avatar.Group
      max={{
        count: 8,
        style: { color: '#f56a00', backgroundColor: '#fde3cf' },
      }}
    >
      {users.map(user => (
          <Tooltip title={user} placement="top">
            <Avatar style={{ backgroundColor: '#f56a00' }}>
              {user.slice(0, 1)}
            </Avatar>
          </Tooltip>
        ))}
    </Avatar.Group>
  ) : <p className='text-sm text-slate-600'>No users assigned</p>
}
