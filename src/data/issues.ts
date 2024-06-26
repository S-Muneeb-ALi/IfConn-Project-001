import IssueResponse from "@/models/responses/IssueResponse";

const data: IssueResponse[] = [
  {
    id: 1,
    name: 'Shuja',
    department: 'HR',
    trackingIssue: '10.3.4.5654',
    assignTo: ['Noman Bhai', "Uzair Ali"],
    priority: 'High',
    status: ['In-Progress'],
    createdAt: '2014-12-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected behavior:
Explain the expected behavior

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
    name: 'Muneeb',
    department: 'Software Development',
    trackingIssue: '10.3.4.5654',
    assignTo: [],
    priority: 'Medium',
    status: ['Completed'],
    createdAt: '2014-12-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug

> Don't know what is going on here.

___
# Behavior :

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
    name: 'Noman Bhai',
    department: 'SE Development',
    trackingIssue: '10.3.4.6654',
    assignTo: ['Muneeb'],
    priority: 'High',
    status: ['Completed'],
    createdAt: '2014-12-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected behavior:
Explain the expected behavior

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
    department: 'SEO',
    trackingIssue: '10.3.4.5654',
    assignTo: ['Muneeb'],
    priority: 'Low',
    status: ['Found'],
    createdAt: '2014-12-24 23:12:00',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected behavior:
Explain the expected behavior

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
    department: 'Finance',
    trackingIssue: '10.3.4.5654',
    assignTo: ['Muneeb'],
    priority: 'Medium',
    status: ['In-Progress'],
    createdAt: '2014-2-24 18:12:68',
    comment: 'Please provide a clear and concise description of the bug.',
    description: `## Describe the bug
---
## To Reproduce
1 - Provide steps

## Expected behavior:
Explain the expected behavior

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


const template = `**_NOTE:_**  Please provide a clear and concise description of the bug.


## Describe the bug

---
# Behavior:

## What went wrong?

>

>


## What did you expect to happen?

>

>


## Give us exact location of the bug:

>
---
`;

export {
  template,
}