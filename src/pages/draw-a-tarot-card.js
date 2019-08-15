import React, { useState } from "react"
import CardReading from "../components/cardReading"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"

const DrawATarotCard = () => {

  const useStyles = makeStyles(theme => ({

    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    }))
    const classes = useStyles()
    
  return (
    <div>
    <SEO title={`Draw a tarot card`} description={`Quick insight on your situation  or get a 'yes' or 'no' answer with a simple one card tarot card draw.`} />
    <Layout>
    <div className={classes.drawerHeader} />
    <Typography variant='body' component='h1'>
                         One Card Daily Tarot Card Reading 
                        </Typography>
                        <Typography variant='body'>
                        Seeking quick answers to your situation? Whether you're seeking a 'yes' or 'no' to a question on your mind or simply want to gain some basic insight into your situation, a quick one card reading can uncover core truths and illuminate the path. 
                        </Typography>
      <CardReading/>
    </Layout>
</div>
    )
  }
  export default DrawATarotCard