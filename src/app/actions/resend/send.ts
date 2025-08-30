'use server'

import { Resend } from 'resend'

interface SendActionProps {
  to: string
  subject: string
  react: React.ReactElement
}

export async function sendAction(props: SendActionProps) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: props.to,
    subject: props.subject,
    react: props.react,
  })

  console.log(data)
}
