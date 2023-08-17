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
function CarCompany(props) {

  const selectDropdown = (e) => {
    const val = e.target.value;
   
    
    props.passBranddata(val);
    

  };
  return (
    <div>
         <FormControl as={GridItem} colSpan={[6, 3]}>
                <FormLabel
                    htmlFor="Car_Brand"
                    fontSize="sm"
                    fontWeight="md"
                    color="gray.700"
                    _dark={{
                        color: 'gray.50',
                    }}>
                    Car Brand
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
                    <option value="Maruti">Maruti</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Honda">Honda</option>
                    <option value="Audi">Audi</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Tata">Tata</option>
                    <option value="Land">Land</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Renault">Renault</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="BMW">BMW</option>
                    <option value="Mahindra">Mahindra</option>
                    <option value="Ford">Ford</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Datsun">Datsun</option>
                    <option value="Jaguar">Jaguar</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Skoda">Skoda</option>
                    <option value="Mini">Mini</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Jeep">Jeep</option>
                    <option value="Ambassador">Ambassador</option>
                    <option value="Isuzu">Isuzu</option>
                    <option value="ISUZU">ISUZU</option>
                    <option value="Force">Force</option>
                    <option value="Bentley">Bentley</option>
                    
                    
                    
                </Select>
            </FormControl>

    </div>
  )
}

export default CarCompany