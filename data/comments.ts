import CommentResponse from "@/models/responses/CommentResponse";

const comments: CommentResponse[] = [
  {
    id: 1,
    issueId: 1,
    name: "Test",
    comment: "If that is the case, then I already have an outline. To make it easy for my audience to follow the presentation,I intend to post the outline on the board at all time during my speech.",
    files:['/d1.png','/d3.png','/d2.png',],
    time: "09:56 AM",
    avatar: "https://joesch.moe/api/v1/random",
    isOwn: true,
  },
  {
    id: 2,
    issueId: 1,
    name: "Test",
    comment: "Good idea! By the way, do you have any facts to back you up? For example, change of climate, yearly disasters? ",
    files:['/d4.png',],
    time: "09:56 AM",
    avatar: "https://joesch.moe/api/v1/jessica",
    isOwn: false,
  },
  {
    id: 3,
    issueId: 2,
    name: "Testes",
    comment: "Good idea! By the way, do you have any facts to back you up? For example, change of climate, yearly disasters? ",
    time: "09:56 AM",
    avatar: "https://joesch.moe/api/v1/jessica",
    isOwn: false,
    files: [],
  }
]
export default comments;