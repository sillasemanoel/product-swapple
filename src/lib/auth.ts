import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from 'better-auth/next-js'

import { app } from '@/config'
import { sendEmail } from '@/lib/email'
import { VerificationMail } from '@/components/mail/verification-email'
import { ResetPasswordMail } from '@/components/mail/reset-password'
import { PasswordResetMail } from '@/components/mail/password-reset'

const prisma = new PrismaClient()
export const auth = betterAuth({
  appName: app.name,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: 'Redefinição de senha',
        react: ResetPasswordMail({ name: user.name, url }),
      })
    },
    onPasswordReset: async ({ user }) => {
      await sendEmail({
        to: user.email,
        subject: 'A senha foi redefinida',
        react: PasswordResetMail({ name: user.name }),
      })
    },
  },
  emailVerification: {
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: 'Verificação de conta',
        react: VerificationMail({ name: user.name, url }),
      })
    },
  },
  plugins: [nextCookies()],
})
