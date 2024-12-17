import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CodeIcon from '@material-ui/icons/Code';
import GetAppIcon from '@material-ui/icons/GetApp';
import PublishIcon from '@material-ui/icons/Publish';
import { addClass } from '../redux/actions/classesActions';
import { setMode, setRelationshipType } from '../redux/actions/uiActions';
import { deleteSelectedElement } from '../redux/actions/uiActions';
import { exportDiagram } from '../utils/exportDiagram';
import { importDiagram } from '../utils/importDiagram';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    padding: '0 10px',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  rightSection: {
    marginLeft: '40px',
  },
  button: {
    margin: theme.spacing(0.25),
    padding: '6px 12px',
    minWidth: 'auto',
    backgroundColor: '#ffffff',
    color: '#333',
    fontSize: '0.875rem',
    '&:hover': {
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
  },
  activeButton: {
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
  divider: {
    height: '24px',
    width: '1px',
    backgroundColor: '#e0e0e0',
    margin: '0 5px',
  },
  fileInput: {
    display: 'none',
  },
}));

const Sidebar = ({ toggleCodeViewer, showCode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.ui.mode);
  const relationshipType = useSelector((state) => state.ui.relationshipType);
  const classesState = useSelector((state) => state.classes);
  const relationshipsState = useSelector((state) => state.relationships);

  const handleAddClass = () => {
    dispatch(addClass());
  };

  const handleDelete = () => {
    dispatch(deleteSelectedElement());
  };

  const handleSetMode = (newMode, type = null) => {
    dispatch(setMode(newMode));
    dispatch(setRelationshipType(type));
  };

  const handleExport = () => {
    const jsonData = exportDiagram(classesState, relationshipsState);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'diagram.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          importDiagram(dispatch, data);
        } catch (error) {
          console.error('Error importing diagram:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.section}>
        <Tooltip title="Add Class">
          <Button
            className={classes.button}
            onClick={handleAddClass}
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
          >
            Class
          </Button>
        </Tooltip>

        <div className={classes.divider} />

        <Tooltip title="Association">
          <Button
            className={`${classes.button} ${
              mode === 'addingRelationship' && relationshipType === 'Association'
                ? classes.activeButton
                : ''
            }`}
            onClick={() => handleSetMode('addingRelationship', 'Association')}
            variant="contained"
            size="small"
          >
            Association
          </Button>
        </Tooltip>

        <Tooltip title="Inheritance">
          <Button
            className={`${classes.button} ${
              mode === 'addingRelationship' && relationshipType === 'Inheritance'
                ? classes.activeButton
                : ''
            }`}
            onClick={() => handleSetMode('addingRelationship', 'Inheritance')}
            variant="contained"
            size="small"
          >
            Inheritance
          </Button>
        </Tooltip>

        <Tooltip title="Composition">
          <Button
            className={`${classes.button} ${
              mode === 'addingRelationship' && relationshipType === 'Composition'
                ? classes.activeButton
                : ''
            }`}
            onClick={() => handleSetMode('addingRelationship', 'Composition')}
            variant="contained"
            size="small"
          >
            Composition
          </Button>
        </Tooltip>
      </div>

      <div className={`${classes.section} ${classes.rightSection}`}>
        <div className={classes.divider} />
        
        <Tooltip title="Generate Java Code">
          <Button
            className={`${classes.button} ${showCode ? classes.activeButton : ''}`}
            onClick={toggleCodeViewer}
            variant="contained"
            startIcon={<CodeIcon />}
            size="small"
          >
            Generate Code
          </Button>
        </Tooltip>

        <Tooltip title="Export as JSON">
          <Button
            className={classes.button}
            onClick={handleExport}
            variant="contained"
            startIcon={<GetAppIcon />}
            size="small"
          >
            Export
          </Button>
        </Tooltip>

        <Tooltip title="Import Diagram">
          <div>
            <input
              type="file"
              id="import-file"
              accept=".json"
              className={classes.fileInput}
              onChange={handleImport}
            />
            <label htmlFor="import-file">
              <Button
                className={classes.button}
                component="span"
                variant="contained"
                startIcon={<PublishIcon />}
                size="small"
              >
                Import
              </Button>
            </label>
          </div>
        </Tooltip>

        <div className={classes.divider} />

        <Tooltip title="Delete Selected">
          <Button
            className={classes.button}
            onClick={handleDelete}
            variant="contained"
            startIcon={<DeleteIcon />}
            size="small"
          >
            Delete
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
