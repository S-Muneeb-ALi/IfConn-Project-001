export default interface IssueTableResponse {
  id: number;
  name: string;
  department: number;
  trackingIssue: string;
  assignTo: string[];
  priority: number;
  status: number;
  createdAt: string;
}