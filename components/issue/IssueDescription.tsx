import React, { useState } from 'react';


import { faAddressCard, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons/faSignal";
import { Card, Select } from "antd";

import AssignedUserSelect from "../AssignedUser/AssignedUserSelect";
import AssignedUserView from "../AssignedUser/AssignedUserView";

import SectionTitle from "../SectionTitle";
import IconText from "../IconText";

import IssueResponse from '@/models/responses/IssueResponse';

import { Users, Statuses, Priorities, Department } from "@/data/Data";

export interface IssueDescriptionProps {
  item: IssueResponse;
  onChange?: (item: IssueResponse) => void;
}



export default function IssueDescription({ item, onChange }: IssueDescriptionProps) {
  const { trackingIssue, department, priority, assignTo, name, status } = item;

  const [showDepartmentChange, setDepartmentChange] = React.useState(false);

  const [showProritychange, setShowProrityChange] = React.useState(false);

  const [showStatusChange, setShowStatusChange] = React.useState(false);

  const [isAssigningUser, setIsAssigningUser] = useState(false);

  return (
    <Card className=' text-left'>
      <h1 className=' mt-10 pb-10 font-bold text-2xl text-center border-b-4 border-slate-900'>Issue Description</h1>
      <div className=' text-xl mt-20 grid xs:grid-cols-1 md:grid-cols-2 gap-10'>

        <section>
          <SectionTitle title="Name" />
          <IconText
            icon={<FontAwesomeIcon icon={faCircleUser} style={{ color: '#f56a00' }} />}
            text={name ?? "NA"}
          />
        </section>

        <section>
          <SectionTitle title="Department" />
          {showDepartmentChange ? (
          <Select
          style={{ width: '100%' }}
          value={department}
          className="grow"
          onChange={departmentId => {
            setDepartmentChange(false);
            if (!onChange) {
              return;
            }
            const newItem = {
              ...item,
              department: departmentId,
            }
            onChange(newItem);
          }}
          options={Department.map(x => ({ value: x.id, label: x.name }))}

          /> ) : (
            <IconText
              icon={<FontAwesomeIcon icon={faAddressCard} style={{ color: '#f56a00' }} />}
              text={Department.find(x => x.id === department)!.name}
              onClick={() => setDepartmentChange(true)}
              style={{ cursor: "pointer" }}
            />
          )
       }
        </section>

        <section>
          <SectionTitle title="Tracking Code" />
          <IconText
            icon={<FontAwesomeIcon icon={faTicket} style={{ color: '#f56a00' }} />}
            text={trackingIssue ?? "NA"}
          />
        </section>

        <section>
          <SectionTitle title="Priority" />

          {showProritychange ? (
            <Select
              style={{ width: '100%' }}
              value={priority}
              className="grow"
              onChange={priorityId => {
                setShowProrityChange(false);
                if (!onChange) {
                  return;
                }
                const newItem = {
                  ...item,
                  priority: priorityId,
                }
                onChange(newItem);
              }}
              options={Priorities.map(x => ({ value: x.id, label: x.name }))}
            />) : (
            <IconText icon={<FontAwesomeIcon icon={faSignal} style={{ color: '#f56a00' }} />}
              text={Priorities.find(x => x.id === priority)!.name}
              onClick={() => setShowProrityChange(true)}
              style={{ cursor: "pointer" }}
            />
          )}
        </section>

        <section>
          <SectionTitle title="Status" />


          {showStatusChange ? (
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={statusId => {
                setShowStatusChange(false);
                if (!onChange) {
                  return;
                }

                const newItem = {
                  ...item,
                  status: statusId,
                }
                onChange(newItem);
              }}
              className="grow"
              options={Statuses.map(x => ({ value: x.id, label: x.name }))}
            />
          ) : (
            <IconText
              icon={<FontAwesomeIcon icon={faSignal} style={{ color: '#f56a00' }} />}
              text={Statuses.find(x => x.id === status)!.name}
              onClick={() => setShowStatusChange(true)}
              style={{ cursor: "pointer" }}
            />
          )}
        </section>


      </div>
      <div className=' text-xl mt-20 grid xs:grid-cols-1 md:grid-cols-2 gap-10'>
        <section className="assigned-users col-span-2">
          <SectionTitle
            title="Assigned Users"
            showButton={!isAssigningUser}
            onBtnClick={() => setIsAssigningUser(true)}
          />

          {isAssigningUser ? (
            <AssignedUserSelect
              users={Users}
              values={assignTo}
              onChange={users => {
                setIsAssigningUser(false);
                if (!onChange) {
                  return;
                }

                const newItem = {
                  ...item,
                  assignTo: users.map(x => x.id),
                }
                onChange(newItem);
              }}
            />
          ) :
            <AssignedUserView users={Users.filter(x => assignTo.includes(x.id)).map(x => x.name)} />
          }
        </section>
      </div>



    </Card>
  )
}