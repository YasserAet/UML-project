import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DiagramEditor from '../components/DiagramEditor';
import { makeStyles } from '@material-ui/core';
import CodeViewer from '../components/CodeViewer';

const useStyles = makeStyles((theme) => ({
  editorPage: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    background: '#ffffff',
  },
  navbar: {
    height: '60px',
    width: '100%',
    backgroundColor: '#f5f5f5',
    color: '#333',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    zIndex: 100,
  },
  diagramEditor: {
    flex: 1,
    backgroundColor: '#ffffff',
    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
}));

const Editor = () => {
  const classes = useStyles();
  const [showCode, setShowCode] = useState(false);

  const toggleCodeViewer = () => {
    setShowCode(!showCode);
  };

  return (
    <div className={classes.editorPage}>
      <div className={classes.navbar}>
        <Sidebar toggleCodeViewer={toggleCodeViewer} showCode={showCode} />
      </div>
      <div className={classes.diagramEditor}>
        <DiagramEditor />
      </div>
      {showCode && <CodeViewer />}
    </div>
  );
};

export default Editor;
