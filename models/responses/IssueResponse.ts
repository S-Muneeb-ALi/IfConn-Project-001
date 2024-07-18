export default interface IssueResponse {
  id: number;
  name: string;
  department: number;
  trackingIssue: string;
  assignTo: number[];
  priority: number;
  status: number;
  createdAt: string;
  comment: string;
  description: string;
  images: string[];
}