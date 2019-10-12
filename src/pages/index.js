import React from 'react';
import Section from '../components/section.js';
import Hero from '../components/hero.js';
import Footer from '../components/footer.js';
import Shows from '../components/shows.js';
import Videos from '../components/videos.js';
import Music from '../components/music.js';
import Pictures from '../components/pictures.js';
import Menu from '../components/menu.js';
import ThemeProvider from '../components/theme.js';

const IndexPage = ({ data }) => (
  <ThemeProvider>
    <React.Fragment>
      <Menu />
      <Hero />
      <Section title="Shows">
        <Shows />
      </Section>
      <Section title="Videos">
        <Videos />
      </Section>
      <Section title="Music">
        <Music />
      </Section>
      <Section title="Pictures">
        <Pictures />
      </Section>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default IndexPage;
