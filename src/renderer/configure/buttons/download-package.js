import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Fab } from '../../mui';

/** @type {import('../../theme').ThemedCssProperties} */
const styles = theme => ({
  icon: {
    marginRight: theme.spacing(1)
  }
});

function DownloadPackageButton(props) {
  const { text, url } = props;

  return (
    <div>
      <Fab variant="extended" color="secondary" href={url}>
        {text}
      </Fab>
    </div>
  );
}

DownloadPackageButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(DownloadPackageButton);
