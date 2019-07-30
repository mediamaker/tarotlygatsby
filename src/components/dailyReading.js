import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import { makeStyles } from "@material-ui/core/styles"
import ReactDOM from 'react-dom';
import './styles.css';



const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    body: {
      margin: 0,
    },
  }))

const DailyReading = (data) => {
  console.log(data)
    const classes = useStyles()
return(
  <div>
<Card className={classes.card}> 
    <CardMedia
       className={classes.media}
       image={data}>

</CardMedia>
<Img fluid={data}/>
 {/* <Box className="box" /> */}



<CardActionArea>

    <CardMedia
 
      title='title'
    />
    <CardContent>
      <Typography>
        My Reading
      </Typography>
      <Typography variant="body2" component="p">
        
      </Typography>
    </CardContent>
    <Button color='secondary'>Reveal Card</Button>
</CardActionArea>
</Card>
</div>
)}



export default DailyReading