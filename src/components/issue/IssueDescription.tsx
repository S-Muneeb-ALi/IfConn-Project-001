import Users from "@/data/users";
import { faAddressCard, faTicket, faClipboardQuestion, faCalendar, faChartSimple, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";
import AssignedUserSelect from "../AssignedUser/AssignedUserSelect";
import AssignedUserView from "../AssignedUser/AssignedUserView";
import IconText from "../IconText";
import SectionTitle from "../SectionTitle";
import IssueResponse from "@/models/responses/IssueResponse";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons/faSignal";

export interface IssueDescriptionProps {
  item: IssueResponse;
  isAssigningUser: boolean;
  setIsAssigningUser: (value: boolean) => void;

  assignedUsers: number[];
  setAssignedUsers: (users: number[]) => void;
}

export default function IssueDescription({ item: { trackingIssue, department, priority, createdAt,name,status }, isAssigningUser, setIsAssigningUser, assignedUsers, setAssignedUsers }: IssueDescriptionProps) {
  return (
    <Card className=' text-left'>
      <h1 className=' mt-10 pb-10 font-bold text-2xl text-center border-b-4 border-slate-900'>Issue Description</h1>
      <div className=' text-xl mt-20 grid xs:grid-cols-1 md:grid-cols-2 gap-10'>

      <section>
          <SectionTitle title="Name" />
          <IconText
            icon={<FontAwesomeIcon icon={faCircleUser} style={{color:'#f56a00'}}/>}
            text={name ?? "NA"}
          />
        </section>

        <section>
          <SectionTitle title="Department" />
          <IconText
            icon={<FontAwesomeIcon icon={faAddressCard} style={{color:'#f56a00'}}/>}
            text={department ?? "NA"}
          />
        </section>

        <section>
          <SectionTitle title="Tracking Code" />
          <IconText
            icon={<FontAwesomeIcon icon={faTicket} style={{color:'#f56a00'}}/>}
            text={trackingIssue ?? "NA"}
          />
        </section>

        <section>
          <SectionTitle title="Priority" />
          <IconText
            icon={<FontAwesomeIcon icon={faSignal} style={{color:'#f56a00'}}/>}
            text={priority ?? "NA"}
          />
        </section>
        <section>
          <SectionTitle title="Status" />
          <IconText
            icon={<FontAwesomeIcon icon={faClipboardList} style={{color:'#f56a00'}}/>}
            text={status[0] ?? "NA"}
          />
        </section>

        <section>
          <SectionTitle title="Created At" />
          <IconText
            icon={<FontAwesomeIcon icon={faCalendar} style={{color:'#f56a00'}}/>}
            text={createdAt ?? "NA"}
          />
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
              values={assignedUsers}
              onChange={users => {
                setAssignedUsers(users.map(x => x.id));
                setIsAssigningUser(false);
              }}
            />
          ) : 
          <AssignedUserView users={assignedUsers.map(id => Users.find(u => u.id === id)!.name)} />
          }
        </section>
        </div>



    </Card>
  )
}