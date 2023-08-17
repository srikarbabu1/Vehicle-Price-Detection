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
function FuelType(props) {



  const selectDropdown = (e) => {
    const val = e.target.value;
   
    
    props.passFueldata(val);

  };


  return (
    <div>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="Fuel"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Fuel type
        </FormLabel>
        <Select
          id="location"
          name="location"

          onChange={selectDropdown}

          // autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option value="CNG">CNG</option>
          <option value="Diesel">Diesel</option>
          <option value="Petrol">Petrol</option>
          <option value="LPG">LPG</option>


        </Select>
      </FormControl>
    </div>
  )
}

export default FuelType 