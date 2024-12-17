import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { generateCode } from '../utils/generateCode';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { makeStyles } from '@material-ui/core/styles';

SyntaxHighlighter.registerLanguage('java', java);

const useStyles = makeStyles({
  codeViewer: {
    position: 'fixed',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
    width: '400px',
    height: '500px',
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1em',
  },
  codeContainer: {
    flex: 1,
    overflow: 'auto',
    padding: '15px',
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  }
});

const CodeViewer = () => {
  const classes = useStyles();
  const [code, setCode] = useState('');

  const classesState = useSelector((state) => state.classes);
  const relationshipsState = useSelector((state) => state.relationships);

  useEffect(() => {
    const diagramData = { classes: classesState, relationships: relationshipsState };
    const generatedCode = generateCode(diagramData, 'Java');
    setCode(generatedCode);
  }, [classesState, relationshipsState]);

  return (
    <div className={classes.codeViewer}>
      <div className={classes.header}>
        Java Code
      </div>
      <div className={classes.codeContainer}>
        <SyntaxHighlighter
          language="java"
          style={atomOneDark}
          customStyle={{
            margin: 0,
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            backgroundColor: '#f8f8f8',
          }}
          wrapLines={true}
          lineProps={{ style: { whiteSpace: 'pre-wrap' } }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeViewer;
