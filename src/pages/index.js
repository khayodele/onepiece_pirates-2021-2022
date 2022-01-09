import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PiratesPage from "./pirates"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import {transbox} from '../components/layout.module.css'

const IndexPage = () => (
  <Layout >
    <h1 className={transbox}>The world of One Piece</h1>
    <p className={transbox}>are you ready for an adventure of pirates, go watch one piece, if you have any interests in the character abilities and background, you are in the right place, i have developed this website for the sake of the one piece fans and my school, i have interesting data of several pirates who are pretty knwon around the one piece universe, i hope you like what you see.</p>

    
  </Layout>
)









export default IndexPage
