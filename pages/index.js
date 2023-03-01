import Meta from "@hackclub/meta";
import Head from "next/head";
import {
  Heading,
  Box,
  Text,
  Flex,
  Grid,
  ThemeProvider,
  Button,
} from "theme-ui";
import { Nav } from "../components/nav";
import theme from "../lib/theme";

const NavLink = ({ href, children }) => (
  <a href={href} sx={{ variant: "navLink" }}>
    {children}
  </a>
);

const Section = ({ id, title, children }) => (
  <section
    id={id}
    sx={{
      borderBottom: "1px solid",
      borderColor: "gray.3",
      pb: 4,
    }}
  >
    <Heading as="h2" sx={{ variant: "subheading" }}>
      {title}
    </Heading>
    {children}
  </section>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        maxWidth: "960px",
        margin: "0 auto",
        fontFamily: "body",
        lineHeight: "body",
      }}
    >
      <header
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          borderColor: "gray.3",
          py: 3,
        }}
      >
        <Box sx={{ fontWeight: "bold", fontSize: 4 }}>Reboot</Box>
      </header>
      <main sx={{ padding: 3 }}>
        <Section id="about" title="Reboot">
          <Text sx={{ mt: 3 }}>
            The first in-person hackathon in China since COVID-19.
          </Text>
          <Text sx={{ mt: 3 }}>
            Join us for a weekend of hacking, learning, and fun!
          </Text>
          <Text sx={{ mt: 3 }}>Event Date: April 7th to 9th</Text>
        </Section>
        <Section id="location" title="Location">
          <Text sx={{ mt: 3 }}>Microsoft Shanghai (Caohejing)</Text>
        </Section>
        <Button sx={{ mt: 3 }}>Register</Button>
        <Button sx={{ mt: 3 }}>Donate</Button>
      </main>
      <footer
        sx={{
          borderTop: "1px solid",
          borderColor: "gray.3",
          py: 3,
          mt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
<Box>
          <Text>© 2023 LinkScape Foundation & Hack Club</Text>
        </Box>
      </footer>
    </Box>
  </ThemeProvider>
);

export default App;
