export default function html(params: { url: string; host: string }) {
  const { url, host } = params;

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Sign in to Your Account<div></div>

  <body style="background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Ubuntu,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;background-color:#ffffff;margin:0 auto;padding:20px 0 48px;margin-bottom:64px">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:0 48px">
              <tbody>
                <tr>
                  <td><img alt="Logo" height="21" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAfCAYAAAAC0CiiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR4SURBVHgB7ZpNctxEFMf/LYPLO3IDdwqGsExWYFggL5JxsTE5geUTZDiBNScY+wQjn8BkZ8zCYgHjbEiWkBTl5gRMNnwk5Wn6odZ4rOkvDUqcTPSrelVWf2ik/ne/fv1koKWlpaXlf3Jb2bkyabFz3eZdIsP8OFQ5DWiD7k+3et2zzvDuqJNU6yIsxpEyHtDmBlpq0X3UGSCSA4AlEWNDEm62fhHB9uAWSyjbVPZQWQ8twcSn/AYkq4wZS776+eZ6eVVXMK4s9bTpoxCN2m3DvxJbNGtra0aP9CeTz8u/6wo28NTnKHw5MUYh3hAtQRxv/CKkxOHVUnmQ3xFjLEACe5BRGjf0o402xvKToaGgY0sFG/dGH6f3Hn34NRaEwx0VkqWWvomyfSw/GRoSzEWoS3wAf6CRWup2lD3Bq4NrayNSDYffFSaWvlQ+RPPEKGbrH5g//w31M/f09aytz9yDG+ptniCkbYZmVthp5XdOUROfK7QJwnVfjuagVTSAfwLR7x4Zytcrz1fnXXxtMzQj2LnhXaa8Bzc+V1hGgib2lFHEI9AcJEIc0I5jSY8TLsE4/Aff8sxl6hsru4nm2MO7EW06cQlGA8Qd9QJ2n09L//7W6BMu2eTKkpa0Khn2Tz592kc4HOagRijbRRHUjHW7BMWzLyW2KJHi/wRuNi3l5EZzZU+UWMaBYxLJ1uijGOGYziNC2R39W+OZstTxbG89NsF8GY0MdleYKOvrTHNSbcDA+pMLeV+yaBg/5qGh+LahjFaWLQOQa1s6TIKFuEJXoHGghBirTLNpdYnvPvt1//svnikXJh+u/r0amhzmlWsSKvf0OcQSUhWMIzy5WyVBERRkqy9WjdElky+mruqfv16mLJLbWyPOUZ+Q3JrAElIVrE5ytwqtqE0KNNQelc5Xy4PjDSGmN9oUY3kx6Uv2vu3s44IHtFnKD6hVwXzJRpubmZ65VKBhPJlPLuaFPvn8t2/VI3D4MaW2YrjZRnNwQ9nvuAaqguWe9juGMg6d4NWBBjd1jFaiub5F+4mAnx8MZWUKygS55BhuBOZdK01YUyC0Y+n/2qkKtutpH2N+FdLA9dXXUlgCDY3s3f2xM3VTFCFSeyZf+n6TyDA/uBzFeS9B4f64fj56ntCvA3nlmsR6jOIdub7vAOYjTo5roCqYgD0CLKEXKGdhovtktCcpUYSrY7RyuUdSYKL2usPZfc2BLQXGUQhEg1wmShOEY7vnkb4f3dcUyWZ4Q1YYQbNTOPpwXIb+5HqmL83kyq50RnAs7p7d6unAJDneeJoinH34J1NdaG/8BvUQC/RpDJNgNOA+N0WzjmYz/aONKAvpE7fKPR04ezK5R4EJk3KRwU8RJhoJkSEMmgj0viKgbY4iu7LQJ/smsOUScxQD48rJUSCQVgtP1KrpnnWUy2QPTJ2kWoLRf67wWYbFSFGIQZPmS1x+vKRBJKFoEpEIpoj3ueWeGYp3jlEEGLdx6faFrjuEe9+iOgk3Vya4o80HM9fXNjlaWlpa3nD+BYImsXIG0eLgAAAAAElFTkSuQmCC" style="display:block;outline:none;border:none;text-decoration:none" width="fit-content" />
                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Hello 👋!</p>
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">You recently requested to sign in to your account. Click the button below to sign in to ${host}:</p><a style="line-height:100%;text-decoration:none;display:block;max-width:100%;background-color:#32CD32;border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-align:center;width:100%;padding:10px 10px 10px 10px" target="_blank" href="${url}"><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%;mso-text-raise:15" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">Sign In</span><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a>
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">This link will expire in 24 hours.</p>
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">If you did not request this email, you can safely ignore it.</p>
                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">If you have any issues signing in, please visit our<!-- --> <a href="https://support.example.com" style="color:#32CD32;text-decoration:none" target="_blank">support page</a>.</p>
                    <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Best regards,<br />The Aulli Team</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>

</html>
`;
}
