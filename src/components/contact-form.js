import React from "react";
import contactFormStyles from './contact-form.module.scss';

const ContactForm = () => (
  <form class="contact-form" action="https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer" method="POST">
    <input type="hidden" name="ses_address" value="james.coates@me.com" />
    <input type="hidden" name="send_to" value="James Coates <james.coates@me.com>" />
    <input type="hidden" name="subject" value="Email from Client" />
    <input type="text" name="name" placeholder="Name" required />
    <input type="email" name="reply_to" placeholder="Email" required />
    <textarea name="message" placeholder="Your message" required></textarea>
    <button className="btn" type="submit">Send Message</button>
  </form>
);

export default ContactForm;