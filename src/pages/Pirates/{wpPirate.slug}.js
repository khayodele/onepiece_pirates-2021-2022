import * as React from 'react'
import Layout from "../../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {transbox} from '../../components/layout.module.css'

const pirate = ({data : {wpPirate : {pirateMeta: pirate}}}) =>{

    const image = getImage(pirate.bannerPhoto.localFile)
    
    return(
        <Layout>
            <h1>{pirate.name}</h1>
            <GatsbyImage image={image} alt={pirate.bannerPhoto.altText}  style={{borderRadius:"10px", marginBottom: "5%"}}/>
            <div className={transbox}>
            <div>Bounty: {pirate.bounty}</div>
            <div>Pirate Crew: {pirate.pirateCrew}</div>
            <div>Role: {pirate.position}</div>
            <div>Age: {pirate.age}</div><br/>
            <div>
                
                <div>DevilFruit: {pirate.devilFruitName === null? "has no devil fruit":pirate.devilFruitName}</div>
                <div>Description: {pirate.devilFruitDescription === null? "has no devil fruit": pirate.devilFruitDescription}</div>
            </div>
            </div>
        </Layout>
    )
}


export const query = graphql`
query ($id: String) {
    wpPirate(id: {eq: $id}) {
      pirateMeta {
        age
        birthplace
        bounty
        devilFruit
        devilFruitDescription
        devilFruitName
        fieldGroupName
        name
        pirateCrew
        position
        warlord
        yonko
        bannerPhoto {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
      }
      typesOfHaki {
        nodes {
          name
        }
      }
    }
  }
  
  

` 

export default pirate