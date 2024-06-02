import { useState } from "react";
import { Container, SimpleGrid, Image, Box, Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = ["https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDF8ZW58MHx8fHwxNzE3MzM5NzUyfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDJ8ZW58MHx8fHwxNzE3MzM5NzUyfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDN8ZW58MHx8fHwxNzE3MzM5NzUzfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1592156668899-2cc871c9ac2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDR8ZW58MHx8fHwxNzE3MzM5NzUzfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDV8ZW58MHx8fHwxNzE3MzM5NzU0fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDZ8ZW58MHx8fHwxNzE3MzM5NzU0fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDd8ZW58MHx8fHwxNzE3MzM5NzU1fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDh8ZW58MHx8fHwxNzE3MzM5NzU1fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDl8ZW58MHx8fHwxNzE3MzM5NzU2fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwYmFja2dyb3VuZCUyMDEwfGVufDB8fHx8MTcxNzMzOTc1Nnww&ixlib=rb-4.0.3&q=80&w=1080"];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * imagesPerPage;
  const selectedImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl" mb={4}>
          Desktop Background Gallery
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {selectedImages.map((src, index) => (
            <Box key={index} boxShadow="md" borderRadius="md" overflow="hidden">
              <Image src={src} alt={`Desktop background ${index + 1}`} />
            </Box>
          ))}
        </SimpleGrid>
        <Box display="flex" justifyContent="space-between" width="100%">
          <IconButton aria-label="Previous Page" icon={<FaArrowLeft />} onClick={handlePrevPage} />
          <IconButton aria-label="Next Page" icon={<FaArrowRight />} onClick={handleNextPage} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
