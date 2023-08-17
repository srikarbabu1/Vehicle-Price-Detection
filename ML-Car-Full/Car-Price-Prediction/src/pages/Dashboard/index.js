import React, { useState, useEffect } from 'react';
import { db } from "../../utils/firebase";
import { Button } from "@chakra-ui/react";
import Nav from "../../components/navbar/Nav";
import LocationInput from "../../components/Form/LocationInput.js";
import FuelType from "../../components/Form/FuelType.js";
import Transmission from "../../components/Form/Transmission.js";
import OwnerType from "../../components/Form/OwnerType.js";
import Axios from 'axios';
import CarCompany from "../../components/Form/CarCompany.js";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Progress,
  Box,
  ButtonGroup,
  // Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  SimpleGrid,
  FormHelperText,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
// import axios from 'axios';


const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState(null);
  const checkImg = async () => {


    const formData = new FormData();

    formData.append("file", selectedFile);

    // console.log("====>>>>>",selectedFile)
    // const res =await fetch("http://3.82.235.56/predict",{
    //   method:"POST",
    //   body:formData
    // })
    // const data = await res.json();
    // console.log(data);


    // .post('http://3.82.235.56/predict', formData)

    try {
      await Axios
      .post('http://3.82.235.56/predict',formData)
        .then(res => {
          console.log("=>", res);
          toast({
            title: 'Succeed',
            description: `${res.data}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        })
    }
    catch (error) {
      console.log("this is error", error,selectedFile);
      toast({
        title: 'Failed',
        description: `${error.message}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }




    // try {
    //   const response = await Axios({
    //     method: "post",
    //     url: "http://localhost:5000/predict",
    //     data: formDat,

    //   });
    // toast({
    //   title: 'Succeed',
    //   description: `${response}`,
    //   status: 'success',
    //   duration: 3000,
    //   isClosable: true,
    // });
    //   console.log(response)
    // } catch (error) {
    // toast({
    //   title: 'Failed',
    //   description: `${error}`,
    //   status: 'failed',
    //   duration: 3000,
    //   isClosable: true,
    // });
    //   console.log(error)
    // }

  }

  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Check if you car is applicable for sale
      </Heading>
      <FormControl mr="5%">
        <FormLabel htmlFor="first-name" fontWeight={'bold'}>
          Front View
        </FormLabel>
        <input className="form-control form-control-lg" id="formFileLg" onChange={(e) => setSelectedFile(e.target.files[0])} type="file" />
        <Button
          onClick={checkImg}
          isDisabled={false}
          colorScheme="teal"
          variant="solid"
          w="7rem"
          mr="5%">
          Check
        </Button>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="last-name" fontWeight={'bold'}>
          Rear View
        </FormLabel>
        <input className="form-control form-control-lg" onChange={(e) => setSelectedFile(e.target.files[0])} id="formFileLg" type="file" />
        <Button
          onClick={checkImg}
          isDisabled={false}
          colorScheme="teal"
          variant="solid"
          w="7rem"
          mr="5%">
          Check
        </Button>
      </FormControl>
      <FormControl mr="5%">
        <FormLabel htmlFor="first-name" fontWeight={'bold'}>
          Left View
        </FormLabel>
        <input className="form-control form-control-lg" id="formFileLg" onChange={(e) => setSelectedFile(e.target.files[0])} type="file" />
        <Button
          onClick={checkImg}
          isDisabled={false}
          colorScheme="teal"
          variant="solid"
          w="7rem"
          mr="5%">
          Check
        </Button>
      </FormControl>
      <FormControl >
        <FormLabel htmlFor="first-name" fontWeight={'bold'}>
          Right View
        </FormLabel>
        <input className="form-control form-control-lg" id="formFileLg" onChange={(e) => setSelectedFile(e.target.files[0])} type="file" />
        <Button
          onClick={checkImg}
          isDisabled={false}
          colorScheme="teal"
          variant="solid"
          w="7rem"
          mr="5%">
          Check
        </Button>
      </FormControl>

    </>
  );
};
var formD;

const Form2 = (props) => {
  const toast = useToast();
  const [locate, setLocate] = useState("");
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [trans, setTrans] = useState("");
  const [owner, setOwner] = useState("");
  const [date, setDate] = useState();
  const [kmdriven, setKmdriven] = useState("");
  const [mileage, setMileage] = useState("");
  const [seats, setSeats] = useState("4");
  const [engineCC, setEngineCC] = useState("");
  const [powerBHP, setPowerBHP] = useState("")

  const handleSave = () => {
    toast({
      title: 'Save Successfully',
      description: "Click on Next button",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    // console.log(props)
    let d = date.toString().slice(0, 4);

    // console.log(d);
    var obj = {
      Company: brand,
      Location: locate,
      Year: d,
      Fuel_Type: fuel,
      Transmission: trans,
      Owner_Type: owner,
      // date:date,
      Kilometers_Driven: kmdriven,
      Mileage_km_per_kg: mileage,
      Seats: seats,
      Engine_cc: engineCC,
      Power_bhp: powerBHP,
    }
    // console.log(obj)
    formD = obj;
    props.passFormdata(obj)
  }
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Car Details
      </Heading>

      <LocationInput passLocatedata={setLocate} />
      <CarCompany passBranddata={setBrand} />
      <FuelType passFueldata={setFuel} />
      <Transmission passTransdata={setTrans} />
      <OwnerType passOwnerdata={setOwner} />


      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="year"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Year of Purchase
        </FormLabel>
        <Input
          onChange={(e) => { setDate(e.target.value) }}
          type="month"
          name="year"
          id="year"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />

      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="kilometers"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Kilometers Driven
        </FormLabel>
        <Input
          type="number"
          onChange={(e) => { setKmdriven(e.target.value) }}
          name="kilometers"
          id="kilometers"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>



      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="mileage"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Mileage
        </FormLabel>
        <Input
          type="number"
          onChange={(e) => { setMileage(e.target.value) }}
          name="mileage"
          id="mileage"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="seats"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Seats
        </FormLabel>
        <NumberInput defaultValue={4} min={2} max={8}>
          <NumberInputField onChange={(e) => { setSeats(e.target.value) }} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="Engine"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Engine CC
        </FormLabel>
        <Input
          type="number"
          onChange={(e) => { setEngineCC(e.target.value) }}
          name="enginecc"
          id="enginecc"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="kilometers"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Power BHP
        </FormLabel>
        <Input
          type="number"
          onChange={(e) => { setPowerBHP(e.target.value) }}
          name="power"
          id="power"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />


        <Button
          w="7rem"
          mt="2%"
          colorScheme="blue"
          variant="solid"
          onClick={handleSave}>
          Save
        </Button>
      </FormControl>


    </>
  );
};

const Form3 = (props) => {
  const [sdata, setData] = useState({})
  const [predicton, setPredicton] = useState("0");
  useEffect(() => {
    setData(props.data);
    console.log(sdata);
    try {
      Axios.post('https://car-preds-price.herokuapp.com/', sdata)
        .then(res => {
          console.log("=>", res.data.Predcition);
          // console.log(res.data);
          setPredicton(res.data.Predcition);
          setTimeout(() => {
            setPredicton(res.data.Predcition)
          }, 1000);
          console.log("predicton is : ", predicton)
        })
    }
    catch (error) {
      console.log(error);
    }


    // console.log(sdata)
  })

  return (
    <>

      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Price Predicted : {predicton == "0" ? <h2>Loading ...</h2> : <h2>Rs {predicton} Lakhs</h2>}
      </Heading>

      {/* console.log(props.data) */}



      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>

          <FormHelperText>
            By Clicking on Submit button I hereby declares that all the infornmation provided by me is best of my Knowledge
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};



const Dashboard = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [formData, setFormData] = useState({});
  var reff;
  return (

    <div>

      <Nav />


      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 passFormdata={setFormData} /> : <Form3 data={formData} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {

                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                // disable next button until form is filled
                isDisabled={step === 3 }
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                    // console.log("===>",formData);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {

                  console.log("heeyy ", formD)

                  db.collection("users").add(formD)
                    .then((docRef) => {
                      console.log("Document written with ID: ", docRef.id);
                      reff = docRef.id;
                      toast({
                        title: 'Posted Successfully',
                        description: `Your Car has been listed successfully with ref no ${reff}`,
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                      });
                    })
                    .catch((error) => {
                      console.error("Error adding document: ", error);
                      toast({
                        title: 'Failed',
                        description: `${error}`,
                        status: 'failed',
                        duration: 3000,
                        isClosable: true,
                      });
                    });





                }}>
                POST AD
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default Dashboard
