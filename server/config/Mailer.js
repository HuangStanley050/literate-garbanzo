const sgMail = require("@sendgrid/mail");
const helper = sgMail.mail;

class Mailer {
  constructor({ subject, recipients }, content) {
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    this.msg = {
      to: recipients.map(({ email }) => email),
      from: "no-reply@surveyApp.com",
      subject,
      html: content,
      trackingSettings: { enable_text: true, enabled: true }
    };
  }

  async send() {
    const response = await sgMail.send(this.msg);
    return response;
  }
}

module.exports = Mailer;
