import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, AppBar, Toolbar, Typography } from './mui';

import { useCoreState } from './state';
import { pathToImg } from './common';

/** @type {import('./theme').ThemedCssProperties} */
const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'white',
    backgroundColor: '#212121'
  },
  grow: {
    flexGrow: 1
  }
});

function AppToolbar(props) {
  const { classes } = props;
  const [selectedKeyboard] = useCoreState('keyboard');
  const [toolbarButtons] = useCoreState('toolbarButtons');

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" noWrap className={classes.grow}>
          {selectedKeyboard ? (
            <div>
              <img
                src={pathToImg('img/hexgears_logo_only.png')}
                style={{ height: '40px', verticalAlign: 'middle', marginRight: '10px' }}
              />
              <span style={{ fontWeight: 'bold', fontSize: '1.3em' }}> {selectedKeyboard.keyboard.display}</span>
            </div>
          ) : (
            <img src={pathToImg('img/Hexgears_Configurator.png')} style={{ height: '40px', verticalAlign: 'middle' }} />
          )}
        </Typography>
        {toolbarButtons}
      </Toolbar>
    </AppBar>
  );
}

AppToolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppToolbar);
