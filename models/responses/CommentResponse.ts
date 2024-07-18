export default interface CommentResponse
{
  id: number;
  issueId: number;
  name: string;
  comment: string;
  time: string;
  avatar: string;
  isOwn: boolean;
  files: string[]
}