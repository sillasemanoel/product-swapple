import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@prisma/client'
import { nextCookies } from 'better-auth/next-js'
import { admin, organization } from 'better-auth/plugins'

import { APP } from '@/config'
import { sendAction } from '@/app/actions/mail/send'
import { VerificationMail } from '@/components/mail/verification-email'
import { ResetPasswordMail } from '@/components/mail/reset-password'
import { PasswordResetMail } from '@/components/mail/password-reset'

const prisma = new PrismaClient()

export const auth = betterAuth({
  appName: APP.name,

  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,

    sendResetPassword: async ({ user, url }) => {
      const name = user.name

      await sendAction({
        to: user.email,
        subject: 'Redefinição de senha',
        react: ResetPasswordMail({ name, url }),
      })
    },

    onPasswordReset: async ({ user }) => {
      const name = user.name

      await sendAction({
        to: user.email,
        subject: 'A senha foi redefinida',
        react: PasswordResetMail({ name }),
      })
    },
  },

  emailVerification: {
    sendOnSignIn: true,
    autoSignInAfterVerification: true,

    sendVerificationEmail: async ({ user, url }) => {
      const name = user.name

      await sendAction({
        to: user.email,
        subject: 'Verificação de conta',
        react: VerificationMail({ name, url }),
      })
    },
  },

  plugins: [nextCookies(), admin(), organization()],
})
