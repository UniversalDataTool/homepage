import React from "react"
import Grid from "@material-ui/core/Grid"
import { grey } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: { marginTop: 120 },
  bigText: {
    display: "inline-block",
    fontSize: 240,
    fontWeight: "bold",
    textShadow: `4px 4px 0px ${grey[300]}`,
    borderBottom: `24px solid ${grey[300]}`,
    marginLeft: "10%",
    paddingRight: "10%",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: 180,
      borderBottom: `20px solid ${grey[300]}`
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 140,
      borderBottom: `18px solid ${grey[300]}`
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 100,
      borderBottom: `16px solid ${grey[300]}`
    }
  },
  smallerText: {
    paddingTop: 40,
    fontSize: 64,
    paddingRight: 20,
    color: grey[600],
    fontWeight: "bold",
    marginLeft: "10%",
    [theme.breakpoints.down("md")]: {
      fontSize: 54
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 48
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 32
    }
  }
}))

export const Hero = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <Grid container>
        <Grid xs={12}>
          <div className={c.bigText}>OHA</div>
          <div className={c.smallerText}>The Open Human Annotation Project</div>
        </Grid>
        <Grid xs={12}>{/* <Button>Use OHA Tooling</Button> */}</Grid>
      </Grid>
    </div>
  )
}

export default Hero
