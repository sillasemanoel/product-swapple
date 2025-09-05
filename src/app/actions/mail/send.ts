'use server'

import { Resend } from 'resend'

import { APP } from '@/config'

interface SendEmailProps {
  to: string
  subject: string
  react: React.ReactElement
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendAction(props: SendEmailProps) {
  try {
    const from = `${APP.name} <${process.env.RESEND_FROM_EMAIL}>`
    const to = props.to
    const subject = props.subject
    const react = props.react

    const data = await resend.emails.send({
      from,
      to,
      subject,
      react,
    })

    return {
      status: 'success' as const,
      data,
    }
  } catch (error) {
    console.error('\x1b[31m[Error] sendAction:\x1b[0m', error)

    return {
      status: 'error' as const,
    }
  }
}
