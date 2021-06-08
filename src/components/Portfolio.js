import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
// import { Element } from "react-scroll";

const useStyles = makeStyles({
  'spacing-xs-4': {
    width: 'inherit',
    margin: 0,
  },
});

function Portfolio(props) {
  const classes = useStyles();
    const { resumeData }= props;
    const { portfolio } = resumeData;
    return <section id="portfolio">
            <h2 style={{ color: 'black', fontSize: '2.2rem', marginTop: '-20px' }}>Projects</h2>
            <Grid container spacing={4} style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }} classes={{ 'spacing-xs-4': classes['spacing-xs-4'] } // overriding defaults as it was causing horizontal scroll
              }>
              {portfolio && portfolio.map((project, i) => (
                  <ProjectCard project={project} key={i} />
                ))}
            </Grid>
      </section>;
  }
export default Portfolio;