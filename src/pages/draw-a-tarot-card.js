import React, { useState } from "react"
import CardReading from "../components/cardReading"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import { Container, Paper } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

const DrawATarotCard = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    }))
    const classes = useStyles()
    const [spacing, setSpacing] = React.useState(2)

  return (
<React.Fragment>  <SEO title={`Draw a tarot card`} description={`Quick insight on your situation  or get a 'yes' or 'no' answer with a simple one card tarot card draw.`} />
    <Layout>
      <Container>
        <Paper>
        <div className={classes.root}>

    <div className={classes.drawerHeader} />
    <Grid container justify="center" spacing={spacing}>
              <Grid item xs={12} md={9}>
    <Typography variant='body' component='h1'>
                         One Card Daily Tarot Card Reading 
                        </Typography>
                        <Typography variant='body' paragraph='true'>
                        Seeking quick answers to your situation? Whether you're seeking a 'yes' or 'no' to a question on your mind or simply want to gain some basic insight into your situation, a quick one card reading can uncover core truths and illuminate the path. 
                        </Typography>
                        <Grid container justify="center" spacing={spacing}>
              <Grid item xs={9} lg={6}>
      <CardReading/>
      </Grid>
      </Grid>
      </Grid>
            </Grid>
            </div>
      
      </Paper>
        </Container>
      </Layout>
</React.Fragment>  
    )
  }
  export default DrawATarotCard