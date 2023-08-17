import React from 'react'
import {
    // Progress,
    // Box,
    // ButtonGroup,
    // Button,
    // Heading,
    // Flex,
    FormControl,
    GridItem,
    FormLabel,
    // Input,
    Select,
    // SimpleGrid,
    // InputLeftAddon,
    // InputGroup,
    // Textarea,
    // FormHelperText,
    // InputRightElement,
  } from '@chakra-ui/react';
function OwnerType(props) {

  const selectDropdown = (e) => {
    const val = e.target.value;
   
    
    props.passOwnerdata(val);
    

  };


  return (
    <div>
 <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="OwnerType"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    OwnerType
                </FormLabel>
                <Select
                    id="location"

                    onChange={selectDropdown}
                    name="location"
                    // autoComplete="country"
                    placeholder="Select option"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md">
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth & Above">Fourth & Above</option>
                

                </Select>
            </FormControl>
    </div>
  )
}

export default OwnerType