import { routes } from '@/config'

export const forgotPasswordData = {
  welcome: {
    title: 'Esqueci a senha',
    description:
      'Digite seu e-mail para enviar um link de redefinição de senha',
  },

  form: {
    email: {
      placeholder: 'E-mail',
      validation: 'Insira um endereço de e-mail válido',
    },

    button: {
      submit: 'Continuar',
      loading: 'Carregando',
    },

    messages: {
      success:
        'Enviamos um link para redefinir sua senha. Verifique seu e-mail.',
      genericError:
        'Não foi possível enviar o link de redefinição. Tente novamente mais tarde.',
    },

    callback: routes.resetPassword,

    redirectTo: routes.login,
  },

  authAlternative: {
    prefix: 'Lembrou da senha?',
    linkLabel: 'Entrar',
    linkHref: routes.login,
  },
} as const

export type ForgotPasswordData = typeof forgotPasswordData
