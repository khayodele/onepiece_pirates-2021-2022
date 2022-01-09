import { Link } from "gatsby";
import React from "react"
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {collection, block, transbox, image} from '../components/layout.module.css'


const PiratesPage =({data : {allWpPirate : {edges}}}) =>{
    
    return(
        <Layout>
            <main>
            <h1 className={transbox} style={{fontSize:"250%", textAlign:"center"}}>Pirates</h1>
            <p className={transbox} style={{fontSize:"150%", textAlign:"center"}}> Here you will see lots of different pirates </p>
            <div >
                <div className={collection}>
                    {edges.map((item) =>{
                        
                        const pirate = item.node.pirateMeta
                        return ( 
                            <Link className={block}  exact to={`/Pirates/${item.node.slug}`}>
                                <div className={image}>
                                    <img style={{maxWidth:"100%", maxHeight:"100%"}} src={pirate.bannerPhoto.sourceUrl} alt={pirate.bannerPhoto.altText}></img>
                                </div>
                                
                                <div key={item.node.id}>{pirate.name} </div>
                                <div>bounty: {pirate.bounty} berries</div>
                                
                            </Link>    
                        )
                    })}
                </div>
            </div>
            </main>
        </Layout>
        
    )
}


export const query = graphql`
query {
    allWpPirate {
      edges {
        node {
          id
          slug
          pirateMeta {
            name
            pirateCrew
            bounty
            bannerPhoto {
              altText
              id
              sourceUrl
            }
          }
        }
      }
    }
  }
  
  

`



export default PiratesPage;