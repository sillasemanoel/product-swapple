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

import { app, routes } from '@/config'

interface VerificationProps {
  name: string
  url: string
}

const baseUrl = process.env.VERCEL_URL

export function VerificationMail({ name, url }: VerificationProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Verifique sua conta na {app.name}</Preview>

        <Container style={container}>
          <Img src={baseUrl + app.logo} width="32" height="32" alt={app.name} />

          <Text style={title}>
            Olá, <strong>{name}</strong>!
          </Text>

          <Section style={section}>
            <Text style={text}>
              Clique no botão abaixo para verificar sua conta.
            </Text>

            <Text style={text}>
              Se você não criou esta conta, ignore este e-mail.
            </Text>

            <Button style={button} href={url}>
              Verificar Conta
            </Button>
          </Section>

          <Text style={links}>
            <Link style={link} href={baseUrl + routes.help}>
              Entre em contato com o suporte
            </Link>
          </Text>

          <Text style={footer}>
            &copy; {new Date().getFullYear()} {app.name}
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default VerificationMail

const main = {
  backgroundColor: '#fff',
  color: '#0c0a09',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
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
  borderRadius: '10px',
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
  fontFamily: 'poppins, sans-serif',
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
