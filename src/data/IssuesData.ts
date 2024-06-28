import IssueResponse from "@/models/responses/IssueResponse";

const data: IssueResponse[] = [
  {
    id: 1,
    name: 'Shuja',
    department: 2,
    trackingIssue: '10.3.4.5654',
    assignTo: [2, 1],
    priority: 3,
    status: 2,
    createdAt: '2014-Dec-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected Behaviour:
Explain the expected Behaviour

## Environment:

---
# Screenshot
1. Share your screenshot here

Share your screenshot here
`,
    images: [
      '/d1.png',
      '/d2.png',
      '/d3.png',
      '/d4.png',
    ],
  },
  {
    id: 2,
    name: "Muneeb",
    department: 1,
    trackingIssue: '10.3.4.5654',
    assignTo: [],
    priority: 2,
    status: 3,
    createdAt: '2014-Dec-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug

> Don't know what is going on here.

___
# Behaviour :

## What went wrong?

> - can't compile thing in IRL

> - don't get any results


## What did you expect to happen?

> - are u gonna respwan

> - u gonna belive me


## Give us exact location of the bug:

---
# Screenshot

**_NOTE:_**  File Must be in PNG,JPG or JPEG format.

> Share a picture or a screenshot of your problem here:
`,
    images: [
      '/d1.png',
      '/d2.png',
      '/d3.png',
      '/d4.png',
    ],
  },
  {
    id: 3,
    name: "Leonardo",
    department: 1,
    trackingIssue: '10.3.4.6654',
    assignTo: [3],
    priority: 3,
    status: 3,
    createdAt: '2014-MAR-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected Behaviour:
Explain the expected Behaviour

## Environment:

---
# Screenshot
1. Share your screenshot here
Share your screenshot here
`,
    images: [
      '/d1.png',
      '/d2.png',
      '/d3.png',
      '/d4.png',
    ],
  },
  {
    id: 4,
    name: 'Arshad Bhai',
    department: 5,
    trackingIssue: '10.3.4.5654',
    assignTo: [3],
    priority: 1,
    status: 1,
    createdAt: '2014-SEP-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected Behaviour:
Explain the expected Behaviour

## Environment:

---
# Screenshot
1. Share your screenshot here
Share your screenshot here
`,
    images: [
      '/d1.png',
      '/d2.png',
      '/d3.png',
      '/d4.png',
    ],
  },
  {
    id: 5,
    name: 'Mustafa Bhai',
    department: 3 ,
    trackingIssue: '10.3.4.5654',
    assignTo: [3],
    priority: 2,
    status: 2,
    createdAt: '2014-Mar-24 18:12:68',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected Behaviour:
Explain the expected Behaviour

## Environment:

---
# Screenshot
1. Share your screenshot here
Share your screenshot here
`,
    images: [
      '/d1.png',
      '/d2.png',
      '/d3.png',
      '/d4.png',
    ],
  },
];





export default data;