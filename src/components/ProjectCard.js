import React, { useEffect, useState } from 'react';
import { Grid, Chip } from '@material-ui/core';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Info, Launch, GitHub } from '@material-ui/icons';
import InfoModal from './InfoModal';
import '../projectcard.css';

const styles = {
  largeIcon: {
    width: 35,
    height: 35,
    color: 'black'
  },
};

export default function ProjectCard({ project }) {
  // ref for the description node
  const desRef = React.createRef();
  const [des, setDes] = useState(project.intro);
  const [modalOpen, setModalOpen] = useState(false);

  const updateDes = () => {
    /* project.intro.length is the no. of characters in the original description
     * but due to card height being fixed, if the description is too long, it must
     * be trimed. By measuring no. of characters and width of the description at several widths, I found
     * description width = 1.3 * no. of characters (approx). The following math is a result of this.
     * desRef.current.offsetWidth is the width of the description element. Used 13 instead of 1.3,
     * by multipling both sides by 10. Also using 14.5 instead of 13 in division when calculating the
     * length of the substring because 13 is not exact and sometimes the substring was still bigger.
     * Hence, made it a little smaller by dividing by a 15 instead of 13.
     */
    setDes(
      project.intro.length * 13 <= desRef.current.offsetWidth * 10
        ? project.intro
        : project.intro.slice(0, (desRef.current.offsetWidth * 10) / 15).trim() +
          '...'
    );
  };

  // This runs after render
  useEffect(() => {
    updateDes(); // Update (trim) the description
    window.addEventListener('resize', updateDes); // Update the des on resizing
    return () => window.removeEventListener('resize', updateDes); // Unsubscribe
  });

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  return <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia component="img" className="project-image" alt={project.title} image={project.imgurl} title={project.title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" className="one-line">
            {project.title}
          </Typography>
          <Typography variant="body2" component="p" className="description" ref={desRef} gutterBottom style={{ fontSize: '16px' }}>
            {des}
          </Typography>
          <div className="chip-container">
            {project.techstack.map((label, i) => (
              <Chip
                className="chip"
                size="small"
                label={label}
                color="primary"
                key={i.toString()}
                style={{ fontSize: '1.30rem', margin: '1px' }}
              />
            ))}
          </div>
        </CardContent>
        <CardActions disableSpacing className="card-actions">
          <IconButton title="More Info" aria-label="More Info" onClick={handleOpen} style={styles.largeIcon}>
            <Info fontSize="large" />
          </IconButton>
          {modalOpen ? <InfoModal project={project} handleClose={handleClose} /> : null // Modal
          }
          <IconButton title="View Live" aria-label="Launch Application" target="_blank" href={project.links.launch} style={styles.largeIcon}>
            <Launch fontSize="large" />
          </IconButton>
          <IconButton title="View Source Code" aria-label="Source Code On Github" target="_blank" href={project.links.github} style={styles.largeIcon}>
            <GitHub fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>;
}
