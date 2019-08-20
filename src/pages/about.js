import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import aboutStyles from '../components/about.module.scss';

import aboutImage from '../images/james.jpg';
import resume from '../documents/cv-JamesCoates.pdf';

const About = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="About Me" />
    <div className="container flex-fill text-center p-b-l">
      <div className="head">
        <h1 className="page-title p-0">James Coates</h1>
        <h2 className="page-subtitle">Full Stack Developer</h2>
      </div>
    </div>
    <div className="wrap">
      <div className="container">
        <div>
          <img className={`showcase-image ${aboutStyles.image}`} src={aboutImage} />
        </div>
          <div className={aboutStyles.description__container}>
            <p className={aboutStyles.description__text}>
              Hi! I'm James, a full stack web developer currently based in Nottingham in the UK. I love to tinker, design and build things. It's something I was born with. I have an engineering background, currently transitioning into the world of web development. It's the best decision I'v ever made. I'm always interested in new opportunities, be it big or small. Feel free to have a look around my work or if you want a quick chat I'm just a click away.
            </p>
          </div>
          <div className={aboutStyles.btn__container}>
            <a className="btn" target="blank" href="https://drive.google.com/file/d/1AXjahFkMozVx0d1oSISgAPLQt6MT33vG/view?usp=sharing">View Resume</a>
            <Link className="btn btn__secondary" to="/contact">Lets Chat</Link>
          </div>
      </div>
    </div>
    

  </Layout>
)

export default About
