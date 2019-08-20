import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import WorkList from '../components/work-list';

const projects = [
  {
    id: 'flix',
    title: 'The FLIXdb',
    tags: ['Development', 'React', 'API'],
    mainImage: '../images/projects/flix/main.png'
  },
  {
    id: 'todo',
    title: 'Todo App',
    tags: ['Development', 'Vue'],
    mainImage: '/src/images/projects/todo/main.png'
  },
  {
    id: 'btcquiz',
    title: 'The Bitcoin Quiz App',
    tags: ['Development', 'Angular'],
    mainImage: '/src/images/projects/flix/main.png'
  },
];

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div className="container text-center">
      <div className="head">
        <h1 className="page-title">Latest work</h1>
        <p className="page-lead">Take a peak at some of my latest work.</p>
      </div>
      <WorkList projects={projects} />
    </div>

  </Layout>
)

export default Work
