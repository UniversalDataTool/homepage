import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import ArrowRight from "@material-ui/icons/KeyboardArrowRight"

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    marginTop: 80,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  button: {
    margin: 10,
    border: `1px solid ${grey[300]}`,
    fontSize: 24,
    maxWidth: 500,
    flexBasis: 0,
    flexGrow: 1,
    color: grey[800],
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    }
  },
  buttonContent: {
    padding: 20,
    display: "flex",
    height: 120,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      height: 210
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  titleContainer: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    width: 48,
    height: 48,
    opacity: 0.6,
    // color: grey[500],
    [theme.breakpoints.down("xs")]: {
      width: 32,
      height: 32
    }
  },
  title: {
    textAlign: "left",
    lineHeight: 1.2,
    marginTop: 8,
    marginBottom: 8
  },
  description: {
    paddingLeft: 48,
    flexGrow: 1,
    display: "flex",
    fontSize: 14,
    color: grey[600],
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      marginTop: 10
    }
  }
}))

const BigButton = ({ href, title, description }) => {
  const c = useStyles()
  return (
    <Button href={href} className={c.button}>
      <div className={c.buttonContent}>
        <div className={c.titleContainer}>
          <ArrowRight className={c.icon} />
          <div className={c.title}>{title}</div>
        </div>
        <div className={c.description}>{description}</div>
      </div>
    </Button>
  )
}

export const Navigation = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <BigButton
        href="https://github.com/openhumanannotation"
        title="Open Source Tools"
        description={`We release open-source libraries and tooling to edit any type of dataset, from videos to image to text to audio.`}
      />
      <BigButton
        href="https://github.com/openhumanannotation/open-human-annotation-task-format"
        title="Specification"
        description={`We standarize formats for representing data for easy processing by humans.`}
      />
      <BigButton
        href="#mission"
        title="Our Mission"
        description="We believe standardizing human interfaces will enable impactful automations."
      />
    </div>
  )
}

export default Navigation
