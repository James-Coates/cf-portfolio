import React from "react";
// import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import projectStyles from '../../components/project.module.scss';

// Assets
import banner from '../../images/projects/flix/banner.jpg';
import mongodbIcon from '../../images/react-icon.svg';
import reactIcon from '../../images/mongodb.svg';
import nodejsIcon from '../../images/nodejs.svg';

const flix = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="Portfolio" />
    
    <div className="container flex-fill text-center p-b-l">
      <div className="head">
        <h1 className="page-title">The FLIXdb</h1>
        <p className="page-lead">
          A movie database web app providing users with information on a range of titles, genres and directors. The
          app retrieves a select collection of movie information from a self built API. Users can also sign up to the
          platform and store a collection of their favourite movies.
          <span class="next-line"></span>
          This app in one of the larger projects I developed in my journey through the Career Foundry Full Stack
          Development Course. It served as my introduction to building APIs and building user interfaces using the
          React framework.
        </p>
        <a href="https://theflixdb.herokuapp.com/" target="blank" class="btn">Visit Site</a>
        <a href="https://github.com/James-Coates/the-flix-db" target="blank" class="btn">See on GitHub</a>
      </div>
    </div>
    <div className="wrap">
      <div className="container flex-fill text-center p-b-l">
        <div className={projectStyles.banner__container}>
          <img className={projectStyles.banner__img} src={banner} />
        </div>

        <div>
          <h3 className="sub-heading">The Tech Stack</h3>
          <p>
            The Flix db is a full stack development project. The server side was built using Node interacting
            with a MongoDB database.
          </p>
          <p>
            The client side was built as a single page web application on the React framework.
          </p>
          <div class={projectStyles.webStack}>
            <img src={reactIcon} alt="" />
            <img src={mongodbIcon} alt="" />
            <img src={nodejsIcon} alt="" />
          </div>
        </div>

      </div>
    </div>

  </Layout>
)

export default flix