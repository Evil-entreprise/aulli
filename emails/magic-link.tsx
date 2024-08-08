import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

type AulliMagicLinkProps = {
  url: string;
  host: string;
};

const baseUrl = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:5797`;

//@ts-ignore
export const AulliMagicLink = ({ url, host }: AulliMagicLinkProps) => (
  <Html>
    <Head />
    <Preview>Sign in to Your Account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/aulli-logo.png`}
            width='fit-content'
            height='21'
            alt='Logo'
          />
          <Hr style={hr} />
          <Text style={paragraph}>Hello 👋!</Text>
          <Text style={paragraph}>
            You recently requested to sign in to your account. Click the button
            below to sign in to{' '}
            <Link style={hostStyle} href={host}>
              {host}
            </Link>
            :
          </Text>
          <Button style={button} href={url}>
            Sign In
          </Button>
          <Text style={paragraph}>This link will expire in 10 minutes.</Text>

          <Text style={paragraph}>
            If you did not request this email, you can safely ignore it.
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            If you have any issues signing in, please visit our{' '}
            <Link href='https://support.example.com' style={anchor}>
              support page
            </Link>
            .
          </Text>
          <Text style={paragraph}>
            Best regards,
            <br />
            The Aulli Team
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default AulliMagicLink;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '15px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 40px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#32CD32', // Lime green
};

const hostStyle = {
  color: '#32CD32',
  fontWeight: 'semibold',
};

const button = {
  backgroundColor: '#32CD32', // Lime green
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px',
};
