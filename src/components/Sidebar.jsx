import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = ({ trendingTopics }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Text fontWeight="bold" fontSize="lg" mb={4}>
        Trending Topics
      </Text>
      <VStack align="start" spacing={2}>
        {trendingTopics.map((topic, index) => (
          <Text key={index}>{topic}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;