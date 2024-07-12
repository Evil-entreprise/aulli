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


const encodedImage: string =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAfCAYAAAAC0CiiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR4SURBVHgB7ZpNctxEFMf/LYPLO3IDdwqGsExWYFggL5JxsTE5geUTZDiBNScY+wQjn8BkZ8zCYgHjbEiWkBTl5gRMNnwk5Wn6odZ4rOkvDUqcTPSrelVWf2ik/ne/fv1koKWlpaXlf3Jb2bkyabFz3eZdIsP8OFQ5DWiD7k+3et2zzvDuqJNU6yIsxpEyHtDmBlpq0X3UGSCSA4AlEWNDEm62fhHB9uAWSyjbVPZQWQ8twcSn/AYkq4wZS776+eZ6eVVXMK4s9bTpoxCN2m3DvxJbNGtra0aP9CeTz8u/6wo28NTnKHw5MUYh3hAtQRxv/CKkxOHVUnmQ3xFjLEACe5BRGjf0o402xvKToaGgY0sFG/dGH6f3Hn34NRaEwx0VkqWWvomyfSw/GRoSzEWoS3wAf6CRWup2lD3Bq4NrayNSDYffFSaWvlQ+RPPEKGbrH5g//w31M/f09aytz9yDG+ptniCkbYZmVthp5XdOUROfK7QJwnVfjuagVTSAfwLR7x4Zytcrz1fnXXxtMzQj2LnhXaa8Bzc+V1hGgib2lFHEI9AcJEIc0I5jSY8TLsE4/Aff8sxl6hsru4nm2MO7EW06cQlGA8Qd9QJ2n09L//7W6BMu2eTKkpa0Khn2Tz592kc4HOagRijbRRHUjHW7BMWzLyW2KJHi/wRuNi3l5EZzZU+UWMaBYxLJ1uijGOGYziNC2R39W+OZstTxbG89NsF8GY0MdleYKOvrTHNSbcDA+pMLeV+yaBg/5qGh+LahjFaWLQOQa1s6TIKFuEJXoHGghBirTLNpdYnvPvt1//svnikXJh+u/r0amhzmlWsSKvf0OcQSUhWMIzy5WyVBERRkqy9WjdElky+mruqfv16mLJLbWyPOUZ+Q3JrAElIVrE5ytwqtqE0KNNQelc5Xy4PjDSGmN9oUY3kx6Uv2vu3s44IHtFnKD6hVwXzJRpubmZ65VKBhPJlPLuaFPvn8t2/VI3D4MaW2YrjZRnNwQ9nvuAaqguWe9juGMg6d4NWBBjd1jFaiub5F+4mAnx8MZWUKygS55BhuBOZdK01YUyC0Y+n/2qkKtutpH2N+FdLA9dXXUlgCDY3s3f2xM3VTFCFSeyZf+n6TyDA/uBzFeS9B4f64fj56ntCvA3nlmsR6jOIdub7vAOYjTo5roCqYgD0CLKEXKGdhovtktCcpUYSrY7RyuUdSYKL2usPZfc2BLQXGUQhEg1wmShOEY7vnkb4f3dcUyWZ4Q1YYQbNTOPpwXIb+5HqmL83kyq50RnAs7p7d6unAJDneeJoinH34J1NdaG/8BvUQC/RpDJNgNOA+N0WzjmYz/aONKAvpE7fKPR04ezK5R4EJk3KRwU8RJhoJkSEMmgj0viKgbY4iu7LQJ/smsOUScxQD48rJUSCQVgtP1KrpnnWUy2QPTJ2kWoLRf67wWYbFSFGIQZPmS1x+vKRBJKFoEpEIpoj3ueWeGYp3jlEEGLdx6faFrjuEe9+iOgk3Vya4o80HM9fXNjlaWlpa3nD+BYImsXIG0eLgAAAAAElFTkSuQmCC';

//@ts-ignore
export const MagicLinkEmail = ({
  url,
  host,
}: {
  url: string;
  host: string;
}) => (
  <Html>
    <Head />
    <Preview>Sign in to Your Account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${encodedImage}`}
            width='fit-content'
            height='21'
            alt='Logo'
          />
          <Hr style={hr} />
          <Text style={paragraph}>Hello 👋!</Text>
          <Text style={paragraph}>
            You recently requested to sign in to your account. Click the button
            below to sign in to {host}:
          </Text>
          <Button style={button} href={url}>
            Sign In
          </Button>
          <Text style={paragraph}>This link will expire in 24 hours.</Text>

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

export default MagicLinkEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
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
