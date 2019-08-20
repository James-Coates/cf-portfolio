import React from "react";
// import { Link } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import projectStyles from '../../components/project.module.scss';

// Assets
import banner from '../../images/projects/todo/banner.jpg';
import vueIcon from '../../images/vuejs.svg';
import materialIcon from '../../images/material.svg';

const todo = () => (
  <Layout wrapper="wrapper wrapper-fluid">
    <SEO title="Portfolio" />
    
    <div className="container flex-fill text-center p-b-l">
      <div className="head">
        <h1 className="page-title">Todo App</h1>
        <p className="page-lead">
          A simple todo app built on the Vue framework.
        </p>
        <a href="https://to-do-vue.herokuapp.com/" target="blank" class="btn">Visit Site</a>
        <a href="https://github.com/James-Coates/to-do-vue" target="blank" class="btn">See on GitHub</a>
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
            This todo app was my first development experience using the Vue fornt end framework. The UI was built around the material design system.
          </p>
          <div class={projectStyles.webStack}>
            <img src={vueIcon} alt="" />
            <img src={materialIcon} alt="" />
          </div>
        </div>

      </div>
    </div>

  </Layout>
)

export default todo