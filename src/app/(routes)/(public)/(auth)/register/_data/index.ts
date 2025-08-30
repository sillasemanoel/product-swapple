import { routes } from '@/config'

export const registerData = {
  welcome: {
    title: 'Cadastre-se',
    description: 'Crie uma nova conta preenchendo o formulário abaixo',
  },

  form: {
    firstName: {
      placeholder: 'Nome',
      validation: 'Insira um nome válido',
    },

    lastName: {
      placeholder: 'Sobrenome',
      validation: 'Insira um sobrenome válido',
    },

    email: {
      placeholder: 'E-mail',
      validation: 'Insira um endereço de e-mail válido',
    },

    password: {
      placeholder: 'Senha',
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

    termsAndPrivacy: {
      prefix: 'Ao continuar, você concorda com nossos',
      termsLabel: 'Termos de Serviço',
      termsHref: routes.terms,
      privacyConnector: 'e nossa',
      privacyLabel: 'Política de Privacidade',
      privacyHref: routes.privacy,
      suffix: '.',
    },

    messages: {
      success: 'Conta criada com sucesso! Verifique seu e-mail para ativar.',
      emailInUse:
        'Este e-mail já está cadastrado. Tente outro ou entre em sua conta.',
      genericError:
        'Não foi possível cadastrar a conta. Tente novamente mais tarde.',
    },

    callback: routes.login,

    redirectTo: routes.login,
  },

  authAlternative: {
    prefix: 'Já tem uma conta?',
    linkLabel: 'Entrar',
    linkHref: routes.login,
  },
} as const

export type RegisterData = typeof registerData
