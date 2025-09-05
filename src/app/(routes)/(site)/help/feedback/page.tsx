import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { ROUTES } from '@/config'

import { getSessionAction } from '../../../_actions/get-session'

export const metadata: Metadata = {
  title: 'Enviar Feedback',
}

export default async function FeedbackPage() {
  const session = await getSessionAction()

  if (session.status === 'error') {
    redirect(ROUTES.login)
  }

  return <>Enviar Feedback</>
}
