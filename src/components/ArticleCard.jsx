import { Box, Image, Text, VStack } from "@chakra-ui/react";

const ArticleCard = ({ title, description, imageUrl }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
      <Image src={imageUrl} alt={title} />
      <Box p={4}>
        <VStack align="start">
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
          <Text>{description}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default ArticleCard;