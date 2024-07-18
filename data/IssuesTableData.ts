import IssueTableResponse from "@/models/responses/IssueTableResponse";

const data: IssueTableResponse[] = [
  {
    id: 1,
    name: 'Shuja',
    department: 3,
    trackingIssue: '10.3.4.5654',
    assignTo: ['Noman Bhai', "Uzair Ali"],
    priority: 3,
    status: 1,
    createdAt: '2014-Dec-24 23:12:00',
  },
  {
    id: 2,
    name: 'Muneeb',
    department: 1,
    trackingIssue: '10.3.4.5654',
    assignTo: [],
    priority: 2,
    status: 2,
    createdAt: '2014-Dec-24 23:12:00',
  },
  {
    id: 3,
    name: 'Noman Bhai',
    department: 1,
    trackingIssue: '10.3.4.6654',
    assignTo: ['Muneeb'],
    priority: 3,
    status: 2,
    createdAt: '2014-Dec-24 23:12:00',
  },
  {
    id: 4,
    name: 'Arshad Bhai',
    department: 5,
    trackingIssue: '10.3.4.5654',
    assignTo: ['Muneeb'],
    priority: 1,
    status: 4,
    createdAt: '2014-Dec-24 23:12:00',
  },
  {
    id: 5,
    name: 'Mustafa Bhai',
    department: 3,
    trackingIssue: '10.3.4.5654',
    assignTo: ['Muneeb'],
    priority: 2,
    status: 1,
    createdAt: '2014-Dec-24 23:12:00',
  },
];

export default data;