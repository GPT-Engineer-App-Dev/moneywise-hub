import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";

const Index = () => {
  const articles = [
    {
      title: "Breaking News: Market Hits Record High",
      description: "The stock market reached an all-time high today with major indices showing significant gains.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Tech Giants Release New Gadgets",
      description: "Several tech giants have announced the release of their latest gadgets in a highly anticipated event.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const trendingTopics = ["Economy", "Elections", "Climate Change", "Tech Innovations"];

  return (
    <Box>
      <Navbar />
      <Container maxW="container.xl" mt={4}>
        <Flex direction={{ base: "column", md: "row" }} spacing={4}>
          <Box flex="3">
            <VStack spacing={4}>
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  imageUrl={article.imageUrl}
                />
              ))}
            </VStack>
          </Box>
          <Box flex="1" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
            <Sidebar trendingTopics={trendingTopics} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;