import { useState } from 'react';
import { NavBar } from './Apps/NavBar.js';
import { TitlePage } from './Apps/TitlePage.js';
import { Projects } from './Apps/Projects.jsx';
import { AboutMe } from './Apps/AboutMe.js';
import { Footer } from './Apps/Footer.js';
import { Experiences } from './Apps/Experiences.jsx';
export default function MainPage() {
  return (
    <>
      <NavBar />
      <div className="mainPage">
        <TitlePage />
      </div>
      <Experiences />

      <Projects />
      <Footer />
    </>
  );
}


