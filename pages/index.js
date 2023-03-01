import Meta from "@hackclub/meta";
import Flag from "../components/flag";
import Head from "next/head";
import { Heading, Box, Text, Flex, Button } from "theme-ui";

const Main = () => (
  <>
    <Meta
      as={Head}
      name="Reboot"
      title="Reboot - First hackathon in China since pandemic"
      description="In Shanghai, this April, 30 teenage hackers will reboot hackathons in China."
      color={`#FF4794`}
    />
    <Box sx={{ mt: [5, 6], textAlign: 'center' }}>
      <img src="https://cloud-c5ssvb2yg-hack-club-bot.vercel.app/0logo.png" height="200" />
      <br />
      <br />
      <br />
      <Heading
        as="div"
        sx={{
          fontSize: ["12vw", "6vw"],
          lineHeight: "0.8",
          fontWeight: 800,
          px: [3, 4],
          mb: 2,
          color: "white",
          fontFamily: '"Fira Code"',
          textShadow: `0px 0px 21.4900016784668px rgba(0, 128, 1),
                  0px 0px 32.9800033569336px rgba(0, 128, 0.9),
                  0px 0px 105.42999267578125px rgba(0, 128, 0.8),
                  0px 0px 150.8599853515625px rgba(0, 128, 0.7)`,
        }}
       >
         REB00T
      </Heading>
      <Box sx={{ fontSize: [3, 4], mt: [3, 4], mb: [4, 5] }}>
        <Text>
          Date: April 7th to 9th, 2023
        </Text>
        <br />
        <Text>
          Location: Microsoft Shanghai (Caohejing)
        </Text>
      </Box>
      <Flex sx={{ justifyContent: 'center' }}>
        <Box sx={{ mr: 3 }}>
          <a href="https://airtable.com/shrUb9NI0tm8hv8at">
            <Button sx={{ fontSize: [2, 3], px: [4, 5], py: [2, 3], bg: 'primary', color: 'background', borderRadius: 'default', cursor: 'pointer', '&:hover': { bg: 'secondary' } }}>
              Register
            </Button>
          </a>
        </Box>
        <Box>
          <a href="https://bank.hackclub.com/donations/start/reboot-2023">
            <Button sx={{ fontSize: [2, 3], px: [4, 5], py: [2, 3], bg: 'secondary', color: 'background', borderRadius: 'default', cursor: 'pointer', '&:hover': { bg: 'primary' } }}>
              Donate
            </Button>
          </a>
        </Box>
      </Flex>
    </Box>
    <Flag />
  </>
);

export default Main;
