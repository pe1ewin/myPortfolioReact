import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {submit('#', values)},
    validationSchema: Yup.object({ 
      firstName: Yup.string().required("Required"), 
      email: Yup.string().email("Invalid email address").required("Required"), 
      comment: Yup.string() 
        .min(25, "Must be at least 25 characters") 
        .required("Required"), 
    }), 
  });

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]);

  return (
    <FullScreenSection
      backgroundColor="#9d99bc"
      py={16}
      spacing={8}
    >
      <VStack w="100%" p={16} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" mx="auto">
          Contact me
        </Heading>
        <Box p={4} backgroundColor="#ffffff" rounded="lg" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl borderColor="black" isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input borderColor="black" id="firstName" name="firstName" {...formik.getFieldProps('firstName')}/>
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl borderColor="black" isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input id="email" name="email" type="email" {...formik.getFieldProps('email')}/>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select borderColor="black" color='#000'id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Job offer</option>
                  <option value="openSource">Question to the author</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl borderColor="black" isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea id="comment" name="comment" height={250} {...formik.getFieldProps("comment")}/>
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" border="1px" color="black" borderColor="black" width="full" disabled={isLoading}>Submit</Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;