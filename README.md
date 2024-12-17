# UML Class Diagram Editor

## Overview
This is a web-based UML Class Diagram editor built with React that allows users to create, edit, and manage UML class diagrams. The application provides features for creating classes, establishing relationships between them, and generating Java code from the diagram.

## Technology Stack
- **Frontend Framework**: React.js

- **State Management**: Redux (A state management library for JavaScript applications.)
    ITS Data flow : Action -> Reducer -> Store -> UI Update

- **UI Components**: Material-UI (@material-ui/core)
- **Icons**: Material Icons (@material-ui/icons)
- **Styling**: Material-UI's makeStyles (CSS-in-JS)
- **Routing**: React Router DOM
- **Code Syntax Highlighting**: react-syntax-highlighter
- **Drag and Drop**: react-draggable
- **Diagram Pan/Zoom**: react-zoom-pan-pinch

## Languages Used
- JavaScript/JSX
- CSS
- SVG (for diagrams)
- Java (generated code output)

## Development Tools
- npm/yarn (package management)
- Create React App (project setup)


## Core Concepts of Redux:
1. Store
Single source of truth for the entire application
Holds the complete state tree

2. Actions
Plain JavaScript objects that describe what happened
Must have a 'type' property

3. Reducers
Pure functions that specify how state changes
Takes current state and action, returns new state



## Project Structure

src/
├── components/
│ ├── ClassComponent.jsx # Class box representation
│ ├── RelationshipComponent.jsx # Relationship lines
│ ├── DiagramEditor.jsx # Main diagram canvas
│ ├── CodeViewer.jsx # Java code generation viewer
│ └── Sidebar.jsx # Navigation toolbar
├── Pages/
│ ├── Home.jsx # Landing page
│ └── Editor.jsx # Main editor page
├── redux/
│ ├── actions/
│ │ ├── classesActions.js
│ │ ├── relationshipsActions.js
│ │ └── uiActions.js
│ └── reducers/
│ ├── classesReducer.js
│ ├── relationshipsReducer.js
│ └── uiReducer.js
├── utils/
│ ├── generateCode.js # Code generation utilities
│ ├── exportDiagram.js # Diagram export functionality
│ └── importDiagram.js # Diagram import functionality


## Dependencies
json
{
"@material-ui/core": "^4.x",
"@material-ui/icons": "^4.x",
"react": "^17.x",
"react-dom": "^17.x",
"react-redux": "^7.x",
"react-router-dom": "^6.x",
"react-draggable": "^4.x",
"react-zoom-pan-pinch": "^2.x",
"react-syntax-highlighter": "^15.x"
}



## Codes

# Pages
src/Pages/Home.jsx
// - Landing page component
// - Displays welcome message and start button
// - Routes to Editor page

src/Pages/Editor.jsx
// - Main editor page
// - Contains the diagram editor and toolbar
// - Manages code viewer visibility state
// - Coordinates between Sidebar and DiagramEditor components

# Components
src/components/ClassComponent.jsx
// - Renders individual UML class boxes
// - Handles class editing (name, attributes, methods)
// - Manages drag and drop functionality
// - Handles selection state
// - Calculates connection points for relationships

src/components/RelationshipComponent.jsx
// - Renders relationship lines between classes
// - Calculates line paths and arrow positions
// - Handles different relationship types (Association, Inheritance, Composition)
// - Manages relationship selection

src/components/DiagramEditor.jsx
// - Main canvas component
// - Manages zoom and pan functionality
// - Coordinates class and relationship positioning
// - Handles mouse events for creating relationships
// - Manages selection state of diagram elements

src/components/CodeViewer.jsx
// - Displays generated Java code
// - Updates code in real-time as diagram changes
// - Provides syntax highlighting
// - Manages code viewer visibility

src/components/Sidebar.jsx
// - Renders top navigation toolbar
// - Contains all tool buttons (Class, relationships, utilities)
// - Handles mode switching
// - Manages import/export functionality

# Utility Functions
src/utils/generateCode.js
// - Coordinates code generation
// - Routes to specific language generators
// - Formats final code output

src/utils/codeGenerators/javaGenerator.js
// - Generates Java code from diagram data
// - Creates class definitions
// - Handles relationships in code
// - Generates attributes and methods

src/utils/exportDiagram.js
// - Handles diagram export functionality
// - Converts diagram state to JSON
// - Creates downloadable file

src/utils/importDiagram.js
// - Handles diagram import functionality
// - Parses JSON files
// - Restores diagram state



## Core Features

### 1. Class Management
- Create new classes
- Edit class names
- Add/edit/delete attributes
- Add/edit/delete methods
- Drag classes to reposition

### 2. Relationship Types
- Association
- Inheritance
- Composition

### 3. Code Generation
- Automatic Java code generation
- Real-time code updates
- Syntax highlighting

### 4. Import/Export
- Export diagram as JSON
- Import diagram from JSON

## Application Workflow

### 1. Initial Setup
- Application starts at the Home page
- User can navigate to the Editor using the "Start" button

### 2. Editor Interface
- Top navigation bar with all tools
- Main canvas for diagram editing
- Code viewer panel (toggleable)

### 3. Creating a Diagram
1. **Adding Classes**
   - Click "Class" button
   - New class appears on canvas
   - Double-click to edit name/attributes/methods

2. **Creating Relationships**
   - Select relationship type (Association/Inheritance/Composition)
   - Click first class (source)
   - Click second class (target)
   - Relationship line appears with appropriate styling

3. **Editing Elements**
   - Click to select elements
   - Use delete button to remove selected elements
   - Drag classes to reposition
   - Edit class details through the interface

### 4. Code Generation
- Click "Generate Code" to view Java code
- Code updates automatically as diagram changes
- Code viewer shows syntax-highlighted Java code

### 5. Saving/Loading
- Export diagram as JSON file
- Import previously saved diagrams

## State Management
Redux manages four main state slices:
1. **Classes State**: Stores class data and positions
2. **Relationships State**: Stores relationship data
3. **UI State**: Manages current mode, selected elements
4. **Diagram State**: Handles diagram-wide properties

## Key Components

### ClassComponent
- Handles individual class visualization
- Manages class data editing
- Implements draggable functionality

### RelationshipComponent
- Renders relationship lines
- Calculates line positions
- Handles different relationship types

### DiagramEditor
- Main canvas component
- Manages zoom and pan
- Coordinates class and relationship components

### CodeViewer
- Generates Java code
- Provides syntax highlighting
- Updates in real-time

### Sidebar (Navigation)
- Contains all tool buttons
- Manages mode selection
- Handles import/export operations