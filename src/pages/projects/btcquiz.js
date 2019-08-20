import React from "react";
// import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import projectStyles from '../../components/project.module.scss';

// Assets
import banner from '../../images/projects/btcquiz/banner.png';
import angularIcon from '../../images/angularjs-icon.svg';
import bootstrapIcon from '../../images/bootstrap.svg';

const btcQuiz = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="Portfolio" />
    
    <div className="container flex-fill text-center p-b-l">
      <div className="head">
        <h1 className="page-title">Bitcoin Quiz App</h1>
        <p className="page-lead">
        A fun and simple bitcoin quiz game developed using the angular framework. Users can test their knowledge on three difficulty levels. The UI was built using using the bootstrap library.
        </p>
        <a href="https://bitcoin-quiz-app.herokuapp.com/welcome" target="blank" class="btn">Visit Site</a>
        <a href="https://github.com/James-Coates/bitcoin-quiz-app" target="blank" class="btn">See on GitHub</a>
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
            This bitcoin quiz app was my first go at developing a single page application using the Angular fornt end framework.
          </p>
          <div class={projectStyles.webStack}>
            <img src={angularIcon} alt="" />
            <img src={bootstrapIcon} alt="" />
          </div>
        </div>

      </div>
    </div>

  </Layout>
)

export default btcQuiz