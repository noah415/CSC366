import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Flex, Spacer, HStack, Heading, Link } from "@chakra-ui/react";

export default function Navbar(props) {
  return (
    <Flex pt={5} pb={5} bg="#5480D4">
      <HStack pr={10}>
        <Box mr={2}>
          <Link as={ReactLink} _activeLink={{ fontWeight: "bold" }} to="/">
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Dashboard{" "}
            </Heading>{" "}
          </Link>
        </Box>
        <Box>
          <Link as={ReactLink} to="/surveys">
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Surveys{" "}
            </Heading>{" "}
          </Link>
        </Box>
        <Box mr={2}>
          <Link
            as={ReactLink}
            _activeLink={{ fontWeight: "bold" }}
            to="/profiles"
          >
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Profiles{" "}
            </Heading>{" "}
          </Link>
        </Box>
        <Box mr={2}>
          <Link as={ReactLink} _activeLink={{ fontWeight: "bold" }} to="/users">
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Users{" "}
            </Heading>{" "}
          </Link>
        </Box>
        <Box mr={2}>
          <Link
            as={ReactLink}
            _activeLink={{ fontWeight: "bold" }}
            to="/results"
          >
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Results{" "}
            </Heading>{" "}
          </Link>
        </Box>
      </HStack>
      <HStack pr={10}>
        <Box mr={2}>
          <Link
            as={ReactLink}
            _activeLink={{ fontWeight: "bold" }}
            to="/createProfileType"
          >
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Create Profile Type{" "}
            </Heading>{" "}
          </Link>
        </Box>
        <Box mr={2}>
          <Link
            as={ReactLink}
            _activeLink={{ fontWeight: "bold" }}
            to="/createSurvey"
          >
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Create Survey{" "}
            </Heading>{" "}
          </Link>
        </Box>
        <Box mr={2}>
          <Link
            as={ReactLink}
            _activeLink={{ fontWeight: "bold" }}
            to="/account"
          >
            {" "}
            <Heading size="lg" color="white">
              {" "}
              Account{" "}
            </Heading>{" "}
          </Link>
        </Box>
      </HStack>
    </Flex>
  );
}
