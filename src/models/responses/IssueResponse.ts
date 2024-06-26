export default interface IssueResponse {
  id: number;
  name: string;
  department: string;
  trackingIssue: string;
  assignTo: string[];
  priority: string;
  status:string[];
  createdAt: string;
  comment: string;
  description: string;
  images: string[];
}