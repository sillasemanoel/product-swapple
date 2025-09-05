import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

import { APP, ROUTES } from '@/config'

interface ResetPasswordProps {
  name: string
  url: string
}

const baseUrl = process.env.VERCEL_URL

export function ResetPasswordMail(props: ResetPasswordProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Redefina sua senha na {APP.name}</Preview>

        <Container style={container}>
          <Img src={baseUrl + APP.logo} width="32" height="32" alt={APP.name} />

          <Text style={title}>
            Olá, <strong>{props.name}</strong>!
          </Text>

          <Section style={section}>
            <Text style={text}>
              Clique no botão abaixo para redefinir sua senha.
            </Text>

            <Text style={text}>
              Se você não solicitou a redefinição, pode ignorar este e-mail.
            </Text>

            <Button style={button} href={props.url}>
              Redefinir Senha
            </Button>
          </Section>

          <Text style={links}>
            <Link style={link} href={baseUrl + ROUTES.help}>
              Entre em contato com o suporte
            </Link>
          </Text>

          <Text style={footer}>
            &copy; {new Date().getFullYear()} {APP.name}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default ResetPasswordMail

const main = {
  backgroundColor: '#fff',
  color: '#0c0a09',
  fontFamily:
    '-APPle-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"APPle Color Emoji","Segoe UI Emoji"',
}

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
}

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
}

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
}

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
}

const button = {
  fontSize: '14px',
  backgroundColor: '#1c1917',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '8px 12px',
  margin: '10px 0 10px 0',
  fontWeight: 'bold',
}

const links = {
  textAlign: 'center' as const,
}

const link = {
  color: '#0366d6',
  fontSize: '12px',
}

const footer = {
  color: '#79716b',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
}
