'use server'

import { Resend } from 'resend'

import { app } from '@/config'

interface SendProps {
  to: string
  subject: string
  react: React.ReactElement
}

export async function sendEmail(props: SendProps) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data } = await resend.emails.send({
    from: `${app.name} <onboarding@resend.dev>`,
    to: props.to,
    subject: props.subject,
    react: props.react,
  })

  console.log(data)
}
