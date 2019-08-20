import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from '../components/contact-form';

const Contact = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="Contact" />
    <div className="container text-center">
      <div className="head">
        <h1 className="page-title">Contact</h1>
        <p className="page-lead">Hey there! Please use the form below to get in touch.</p>
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default Contact;
