import Meta from "@hackclub/meta";
import Flag from "../components/flag";
import Head from "next/head";
import { Heading, Box, Text, Flex, Grid } from "theme-ui";
import { Nav } from "../components/nav";

const Main = () => (
  <>
    <Meta
      as={Head}
      name="Reboot"
      title="Reboot - First hackathon in China since pandemic"
      description="In Shanghai, this April, 30 teenage hackers will reboot hackathons in China."
      color={`#FF4794`}
    />
    <Nav />
    <Box sx={{ mt: [5, 6], textAlign: 'center' }}>
      <Heading as="h1" variant="title">
        Reboot: The First In-Person Hackathon in China Since Pandemic
      </Heading>
      <Box sx={{ fontSize: [3, 4], mt: [3, 4], mb: [4, 5] }}>
        <Text>
          Date: April 7th to 9th, 2023
        </Text>
        <Text>
          Location: Shanghai, Microsoft Office (Caohejing)
        </Text>
      </Box>
      <Flex sx={{ justifyContent: 'center' }}>
        <Box sx={{ mr: 3 }}>
          <a href="#">
            <button sx={{ fontSize: [2, 3], px: [4, 5], py: [2, 3], bg: 'primary', color: 'background', borderRadius: 'default', cursor: 'pointer', '&:hover': { bg: 'secondary' } }}>
              Register
            </button>
          </a>
        </Box>
        <Box>
          <a href="#">
            <button sx={{ fontSize: [2, 3], px: [4, 5], py: [2, 3], bg: 'secondary', color: 'background', borderRadius: 'default', cursor: 'pointer', '&:hover': { bg: 'primary' } }}>
              Donate
            </button>
          </a>
        </Box>
      </Flex>
    </Box>
    <Flag />
    <Box sx={{ mt: [5, 6], textAlign: 'center' }}>
      <Heading as="h2" variant="headline" sx={{ mb: [3, 4] }}>
        Sponsors
      </Heading>
      <Grid columns={[1, 2, 3]} gap={4} sx={{ justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center' }}>
          <img src="/sponsors/microsoft.png" alt="Microsoft" sx={{ maxWidth: [100, 150], mb: 2 }} />
          <Text variant="subtitle">Microsoft</Text>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src="/sponsors/hackclub.png" alt="Hack Club" sx={{ maxWidth: [100, 150], mb: 2 }} />
          <Text variant="subtitle">Hack Club</Text>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <img src="/sponsors/linkscape.png" alt="LinkScape Foundation" sx={{ maxWidth: [100, 150], mb: 2 }} />
          <Text variant="subtitle">LinkScape Foundation</Text>
        </Box>
      </Grid>
    </Box>
  },
};

export default Main;
