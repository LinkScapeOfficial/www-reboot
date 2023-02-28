import Meta from "@hackclub/meta";
import Head from "next/head";

import { Heading, Box, Text, Flex, Grid, ThemeProvider } from "theme-ui";
import { Nav } from "../components/nav";
import theme from "../lib/theme";
/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ 
        maxWidth: '960px', 
        margin: '0 auto', 
        fontFamily: 'body', 
        lineHeight: 'body',
        }}>
        <header sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderColor: 'gray.3',
          py: 3,
          }}>
          <div sx={{ 
            fontWeight: 'bold',
            fontSize: 4,
          }}>
            Reboot Hackathon
          </div>
          <nav sx={{ 
            display: 'flex',
            alignItems: 'center',
          }}>
            <a href="#about" sx={{ 
              variant: 'navLink',
            }}>
              About
            </a>
            <a href="#location" sx={{ 
              variant: 'navLink',
            }}>
              Location
            </a>
            <a href="#register" sx={{ 
              variant: 'navLink',
            }}>
              Register
            </a>
            <a href="#donate" sx={{ 
              variant: 'navLink',
            }}>
              Donate
            </a>
          </nav>
        </header>
        <main sx={{ 
          padding: 3,
          }}>
          <section id="about" sx={{ 
            borderBottom: '1px solid',
            borderColor: 'gray.3',
            pb: 4,
            }}>
            <h1 sx={{ 
              variant: 'heading',
            }}>
              Reboot Hackathon
            </h1>
            <p sx={{ 
              mt: 3,
            }}>
              It is the first in-person hackathon in China since COVID-19.
            </p>
            <p sx={{ 
              mt: 3,
            }}>
              Join us for a weekend of hacking, learning, and fun!
            </p>
            <p sx={{ 
              mt: 3,
            }}>
              Event Date: April 7th to 9th
            </p>
          </section>
          <section id="location" sx={{ 
            borderBottom: '1px solid',
            borderColor: 'gray.3',
            pb: 4,
            }}>
            <h2 sx={{ 
              variant: 'subheading',
            }}>
              Location
            </h2>
            <p sx={{ 
              mt: 3,
            }}>
              Microsoft's office at Shanghai Caohejing
            </p>
          </section>
          <section id="register" sx={{ 
            borderBottom: '1px solid',
            borderColor: 'gray.3',
            pb: 4,
            }}>
            <h2 sx={{ 
              variant: 'subheading',
            }}>
              Register
            </h2>
            <p sx={{ 
              mt: 3,
            }}>
              Register now to secure your spot in the hackathon!
            </p>
            <button sx={{ 
              variant: 'button',
              mt: 3,
            }}>
              Register Now
            </button>
          </section>
          <section id="donate" sx={{ 
            pb: 4,
            }}>
            <h2 sx={{ 
              variant: 'subheading',
            }}>
              Donate
            </h2>
            <p sx={{ 
              mt: 3,
            }}>
              Help support the hackathon
         </p>
        <p sx={{ 
          mt: 3,
        }}>
          Your donation will go towards funding prizes, food, and supplies for the event.
        </p>
        <button sx={{ 
          variant: 'button',
          mt: 3,
        }}>
          Donate Now
        </button>
      </section>
    </main>
    <footer sx={{ 
      borderTop: '1px solid',
      borderColor: 'gray.3',
      py: 3,
      mt: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      }}>
      <div>
        Reboot Hackathon &copy; 2023
      </div>
      <div>
        Made with &hearts; by your name
      </div>
    </footer>
  </div>
</ThemeProvider>
              
  );
}
