import { Box, Button, Container, Image, Link, Stack, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { iconMusic, illustrationHero, patternBgDesktop, patternBgMobile } from "./utils/constants";

function App() {
  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Stack
      backgroundImage={isMobileScreen ? patternBgMobile : patternBgDesktop}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
    >
      <Container h="100vh" maxW="container.xl">
        <Stack h="full" justify="center" align="center">
          <Box bg="#fff" w="450px" h="620px" borderRadius="3xl" maxW="full">
            <Stack>
              <Image src={illustrationHero} alt="illutration" borderTopRadius="2xl" />
              <Stack paddingY={6} paddingX={12} justify="center" align="center" textAlign="center" gap={2}>
                <Text fontWeight={900} fontSize="2xl">
                  Order Summary
                </Text>
                <Text fontSize="md" color="neutral.desaturatedBlue">
                  You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                </Text>
                <Stack
                  direction="row"
                  justify="space-between"
                  align="center"
                  bg="neutral.veryPaleBlue"
                  px={4}
                  py={6}
                  borderRadius="2xl"
                  w="full"
                >
                  <Stack direction="row" align="center" gap={3}>
                    <Image src={iconMusic} alt="iconmusic" h={12} w={12} />
                    <Stack>
                      <Text fontWeight={900}>Annual Plan</Text>
                      <Text color="neutral.desaturatedBlue">$59.99/year</Text>
                    </Stack>
                  </Stack>
                  <Link
                    fontWeight={900}
                    color="primary.brightBlue"
                    transition="all .2s ease-in-out"
                    _hover={{ color: "primary.lowBrightBlue", textDecoration: "none" }}
                    textDecoration="underline"
                  >
                    Change
                  </Link>
                </Stack>
                <Stack w="full">
                  <Button bg="primary.brightBlue" py={6} color="#fff" _hover={{ bg: "primary.lowBrightBlue" }}>
                    Proceed to Payment
                  </Button>
                  <Button color="neutral.desaturatedBlue" py={6} _hover={{ color: "darkBlue" }}>
                    Cancel Order
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
