import Meta from "@hackclub/meta";
import Flag from "../components/flag";
import Head from "next/head";

import { Heading, Box, Text, Flex, Grid, jsx } from "theme-ui";
import { Nav } from "../components/nav";
import theme from "../lib/theme";

const Main = () => (
  <Meta
    as={Head}
    name="Reboot"
    title="Reboot - First hackathon in China since pandemic"
    description="In Shanghai, this April, 30 teenage hackers will reboot hackathons in China." // page description
    color={`#FF4794`}
  />
  <div sx={{ fontFamily: 'body', color: 'text', bg: 'background' }}>
    <header sx={{ bg: 'primary', color: 'background' }}>
      <div sx={{ variant: 'containers.page' }}>
        <h1 sx={{ fontSize: 5, my: 0 }}>
          Reboot: The First In-Person Hackathon in China Since Pandemic
        </h1>
      </div>
    </header>
    <main sx={{ variant: 'containers.page', py: 4 }}>
      <h2>Event Details</h2>
      <ul>
        <li>Date: April 7th to 9th, 2023</li>
        <li>Location: Shanghai, Microsoft Office (Caohejing)</li>
      </ul>
      <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <button sx={{ variant: 'buttons.primary' }}>Register</button>
        <button sx={{ variant: 'buttons.secondary' }}>Donate</button>
      </div>
    </main>
    <footer sx={{ bg: 'primary', color: 'background' }}>
      <div sx={{ variant: 'containers.page', py: 3 }}>
        <p sx={{ fontSize: 1, m: 0 }}>
          &copy; 2023 LinkScape Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#4CAF50', // Green color
    secondary: '#f44336', // Red color
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      '&:hover': {
        bg: 'primary',
      },
    },
  },
};

export default Main;
