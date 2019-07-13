import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 100,
    marginBottom: 100
  },
  header: {
    display: "inline-block",
    fontSize: 48,
    fontWeight: "bold",
    paddingRight: "10%",
    borderBottom: `12px solid ${grey[300]}`,

    paddingBottom: 32,
    marginBottom: 64
  },
  text: {
    fontSize: 24,
    color: grey[700],
    maxWidth: 1400,
    lineHeight: 1.8
  }
}))

export const Mission = () => {
  const c = useStyles()
  return (
    <div className={c.root}>
      <div className={c.header}>Our Mission</div>
      <div className={c.text}>
        <b>
          We believe standardizing human interfaces will enable impactful
          automation for dataset manipulation.
        </b>
        <br />
        <br />
        Every year millions of hours are being spent in poor annotation tooling
        to power the next generation of AI. AI development is slowed and made
        difficult by the quality of the tooling, which is primarily internal
        tools hastily built by companies.
        <br />
        <br />
        The Open Human Annotation Project was created to create tools and
        standards that can be used by any company to improve their internal
        interfaces or how they operate with workforce vendors to receive data
        annotation.
      </div>
    </div>
  )
}

export default Mission
