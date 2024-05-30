import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Financial Times
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/world" px={2}>
            World
          </Link>
          <Link as={RouterLink} to="/business" px={2}>
            Business
          </Link>
          <Link as={RouterLink} to="/opinion" px={2}>
            Opinion
          </Link>
          <Link as={RouterLink} to="/tech" px={2}>
            Tech
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;