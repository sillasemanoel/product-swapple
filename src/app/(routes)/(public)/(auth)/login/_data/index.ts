import { routes } from '@/config'

export const loginData = {
  welcome: {
    title: 'Entrar',
    description: 'Digite seu e-mail e senha para acessar sua conta',
  },

  form: {
    email: {
      placeholder: 'E-mail',
      validation: 'Insira um endereço de e-mail válido',
    },

    password: {
      placeholder: 'Senha',
      validation: 'Insira 8 ou mais caracteres',
    },

    button: {
      submit: 'Continuar',
      loading: 'Carregando',
    },

    forgotPassword: {
      label: 'Esqueci a senha',
      href: routes.forgotPassword,
    },

    messages: {
      invalidCredentials: 'E-mail ou senha incorretos. Tente novamente.',
      accountNotActivated:
        'Sua conta ainda não foi ativada. Verifique seu e-mail para ativar.',
      genericError:
        'Não foi possível entrar na conta. Tente novamente mais tarde.',
    },

    callback: routes.login,

    redirectTo: routes.app,
  },

  authAlternative: {
    prefix: 'Não tem uma conta?',
    linkLabel: 'Cadastre-se',
    linkHref: routes.register,
  },
} as const

export type LoginData = typeof loginData
