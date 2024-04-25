import React, { useState } from "react";
import { Box, Button, Container, Textarea, Text, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [text, setText] = useState("");
  const [critique, setCritique] = useState("");
  const toast = useToast();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const submitTextForCritique = () => {
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to critique.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate a critique response
    const mockCritique = "This is a very insightful piece, however, consider using more reliable sources for your arguments.";
    setCritique(mockCritique);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Non-Fiction Critiquing App
        </Heading>
        <Text>Enter your non-fiction text below and receive a critique.</Text>
        <Textarea placeholder="Type your text here..." value={text} onChange={handleTextChange} size="sm" height="200px" />
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={submitTextForCritique}>
          Submit for Critique
        </Button>
        {critique && (
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold">Critique:</Text>
            <Text mt={2}>{critique}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
