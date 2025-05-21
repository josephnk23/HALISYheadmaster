import { useState } from "react"

// Sample data for the mail application
const initialMails= [
  {
    id: "1",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share.",
    date: "2023-10-22T09:00:00",
    read: false,
    labels: ["work", "important"],
    avatarSrc: "/placeholder.svg?height=40&width=40",
    content: `
      <p>Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.</p>
      <p>Please come prepared with any questions or insights you may have. Looking forward to our meeting!</p>
      <p>
        Best regards,<br />
        William
      </p>
    `,
  },
  {
    id: "2",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    subject: "Project Update",
    text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive.",
    date: "2023-10-21T14:30:00",
    read: true,
    labels: ["work", "important"],
    avatarSrc: "/placeholder.svg?height=40&width=40",
    content: `
      <p>Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job with the implementation.</p>
      <p>I have a few minor suggestions that might enhance the user experience even further:</p>
      <ul>
        <li>Consider adding a dark mode option</li>
        <li>The loading time on the dashboard could be optimized</li>
        <li>It might be helpful to include more detailed analytics</li>
      </ul>
      <p>Let me know what you think about these suggestions. I'm available to discuss them in more detail if needed.</p>
      <p>
        Best,<br />
        Alice
      </p>
    `,
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    subject: "Weekend Plans",
    text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains.",
    date: "2022-05-20T09:00:00",
    read: true,
    labels: ["personal"],
    avatarSrc: "/placeholder.svg?height=40&width=40",
    content: `
      <p>Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun. If you're interested, we could make it a group activity.</p>
      <p>The weather forecast looks promising, and I've found a trail that's supposed to be breathtaking. It's a moderate difficulty level, so it should be enjoyable without being too challenging.</p>
      <p>Let me know if you're up for it!</p>
      <p>
        Cheers,<br />
        Bob
      </p>
    `,
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    subject: "Question about Budget",
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.",
    date: "2022-05-18T11:30:00",
    read: false,
    labels: ["work", "budget"],
    avatarSrc: "/placeholder.svg?height=40&width=40",
    content: `
      <p>I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the numbers multiple times, and something doesn't add up.</p>
      <p>Specifically, the marketing budget seems unusually high compared to our previous projects of similar scope. Was this an intentional adjustment, or should we revisit these figures?</p>
      <p>I've attached a comparison spreadsheet for your reference. Let's discuss this at your earliest convenience to ensure we're on the same page before proceeding.</p>
      <p>
        Thank you,<br />
        Emily
      </p>
    `,
  },
]

export function useMail() {
  const [mails, setMails] = useState(initialMails)

  return {
    mails,
    setMails,
  }
}
