import Meta from "@hackclub/meta";
import Flag from "../components/flag";
import Head from "next/head";
import Image from "next/image";
import schedule from "../public/rebootsched.svg";
import { Heading, Box, Text, Flex, Button, Container, Link } from "theme-ui";


const Main = () => (
  <>
    <Meta
      as={Head}
      name="Shanghai Hacks 2023"
      title="Shanghai Hacks 2023"
      description="A in-person hackathon in Shanghai, China."
      color={`#FF4794`}
    />
    <Box sx={{ mt: [5, 6], textAlign: "center" }}>
      <img
        src="https://cloud-c5ssvb2yg-hack-club-bot.vercel.app/0logo.png"
        height="200"
      />
      <br />
      <br />
      <br />
      <Heading>
        Shanghai Hacks 2023
      </Heading>
      <Box sx={{ fontSize: [3, 4], mt: [3, 4], mb: [4, 5] }}>
        <Text>Date: June, 2023</Text>
        <br />
        <Text>Location: Huili School Shanghai</Text>
      </Box>
      <Flex sx={{ justifyContent: "center" }}>
        <Box sx={{ mr: 3 }}>
          <a href="https://airtable.com/shrUb9NI0tm8hv8at">
            <Button
              sx={{
                fontSize: [2, 3],
                px: [4, 5],
                py: [2, 3],
                bg: "primary",
                color: "background",
                borderRadius: "default",
                cursor: "pointer",
                "&:hover": { bg: "secondary" },
              }}
            >
              Register
            </Button>
          </a>
        </Box>
        <Box>
          <a href="https://bank.hackclub.com/donations/start/reboot-2023">
            <Button
              sx={{
                fontSize: [2, 3],
                px: [4, 5],
                py: [2, 3],
                bg: "secondary",
                color: "background",
                borderRadius: "default",
                cursor: "pointer",
                "&:hover": { bg: "primary" },
              }}
            >
              Donate
            </Button>
          </a>
        </Box>
      </Flex>
    </Box>
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      mt={4}
    >
      <Heading variant="lead">Event Schedule</Heading>
      <Image src={schedule}/>
      <Text mb={1}>☝️ Powered by <Link href="https://github.com/JettChenT/timeblok">timeblok</Link> language</Text>
      {/* Button to download the corresponding ics file stored in public/reboot.ics */}
      <a href="reboot.ics">
        <Button
          mb={4}
          sx={{
            bg: "primary",
            color: "background",
            borderRadius: "default",
            cursor: "pointer",
            "&:hover": { bg: "secondary" },
          }}
        >
          Download Event
        </Button>
      </a>
    </Container>
    <Flag />
  </>
);

export default Main;
