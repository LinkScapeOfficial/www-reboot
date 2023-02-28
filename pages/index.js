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
        <Box sx={{ fontWeight: "bold", fontSize: 4 }}>Reboot Hackathon</Box>
        <nav sx={{ display: "flex", alignItems: "center" }}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#location">Location</NavLink>
          <NavLink href="#register">Register</NavLink>
          <NavLink href="#donate">Donate</NavLink>
        </nav>
      </header>
      <main sx={{ padding: 3 }}>
        <Section id="about" title="Reboot Hackathon">
          <Text sx={{ mt: 3 }}>
            It is the first in-person hackathon in China since COVID-19.
          </Text>
          <Text sx={{ mt: 3 }}>
            Join us for a weekend of hacking, learning, and fun!
          </Text>
          <Text sx={{ mt: 3 }}>Event Date: April 7th to 9th</Text>
        </Section>
        <Section id="location" title="Location">
          <Text sx={{ mt: 3 }}>Microsoft's office at Shanghai Caohejing</Text>
        </Section>
        <Section id="register" title="Register">
          <Text sx={{ mt: 3 }}>
            Register now to secure your spot in the hackathon!
          </Text>
          <Button sx={{ mt: 3 }}>Register Now</Button>
        </Section>
        <Section id="donate" title="Donate">
          <Text sx={{ mt: 3 }}>Help support the hackathon</Text>
          <Text sx={{ mt: 3 }}>
            Your donation will go towards funding prizes, food, and supplies
            for the event.
          </Text>
          <Button sx={{ mt: 3 }}>Donate Now</Button>
        </Section>
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
          <Text>© 2023 Reboot Hackathon</Text>
          <Flex>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#location">Location</NavLink>
            <NavLink href="#register">Register</NavLink>
            <NavLink href="#donate">Donate</NavLink>
          </Flex>
        </Box>
      </footer>
    </Box>
  </ThemeProvider>
);

export default App;
