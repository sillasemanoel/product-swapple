import { routes } from '@/config'

export const resetPasswordData = {
  welcome: {
    title: 'Redefinir senha',
    description: 'Digite sua nova senha para redefini-la',
  },

  form: {
    newPassword: {
      placeholder: 'Nova Senha',
      validation: 'Insira 8 ou mais caracteres',
    },

    confirmPassword: {
      placeholder: 'Confirmar senha',
      validation: 'Insira 8 ou mais caracteres',
      mismatch: 'As senhas não coincidem',
    },

    button: {
      submit: 'Continuar',
      loading: 'Carregando',
    },

    messages: {
      success:
        'Senha redefinida com sucesso! Agora você pode entrar na sua conta com a nova senha.',
      genericError:
        'Não foi possível redefinir a senha. Tente novamente mais tarde.',
    },

    redirectTo: routes.login,
  },

  authAlternative: {
    prefix: 'Lembrou da senha?',
    linkLabel: 'Entrar',
    linkHref: routes.login,
  },
} as const

export type ResetPasswordData = typeof resetPasswordData
