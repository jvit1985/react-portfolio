import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'Project 1',
      description: 'project 1 description'
    },
    {
      name: 'project 2',
      description: 'project 2 description'
    },
    {
      name: 'project 3',
      description: 'project 3 description'
    },
    {
      name: 'project 4',
      description: 'project 4 description'
    },
    {
      name: 'project 5',
      description: 'project 5 description'
    },
    {
      name: 'project 6',
      description: 'project 6 description'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}


export default App;
