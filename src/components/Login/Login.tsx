import { FormControl, Button,Box, VStack, Text, FormErrorMessage, Spinner,Divider, Flex, InputGroup, InputRightElement, IconButton, useToast  } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import {Input} from "@chakra-ui/input"
import { z } from "zod"
import {SubmitHandler, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"


import Facebook from "../miscellaneous/Facebook"
import Apple from "../miscellaneous/Apple"
import Google from "../miscellaneous/Google"
import { useState } from "react"
import axios from "axios"

const loginSchema = z.object(
  {
    email: z.string().min(1,{message: "This field is required"}).email(),
    password: z.string().min(8),
  }
)

type LoginField = z.infer<typeof loginSchema>

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [isVisible, setIsVisible] = useState(false);

    const {
        register,
        handleSubmit,
        setError,  
        reset,
        formState: {errors, isSubmitting},
    } = useForm<LoginField>(
      {resolver: zodResolver(loginSchema)}
    );

    const onSubmit : SubmitHandler<LoginField> = async(data)=> {
      try {
        const response = await axios.post("http://localhost:4000/api/user/login",data);
        console.log(response)
        reset();
        toast(
          {
            title: "LoggedIn Successfully",
            status: "success",
            duration: 5000,
            isClosable: false,
            position: "bottom",
          }
        )
        navigate("/")

      } catch (error: any) {
        console.log(error);
        setError("password", {
          message: error.response.data.message,
        })
      }
    }

   

    const tooglePasswordVisibility = () =>
    {
      setIsVisible(!isVisible);
    }

  return (
    <VStack spacing={12} alignItems={"center"}>
        <Box textAlign={"center"}>
            <Text  fontSize={"5xl"} fontWeight={"600"}>Log In</Text>
            <Text fontSize={"xl"}>Don't have an account? <Link to="/signup" className=" hover:cursor-pointer text-facebook ">SignUp</Link></Text>
        </Box>

      <Flex height={250} width="100vw" maxWidth={750} position={"relative"}  gap={20} >  
            <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align={"start"}>  
              <FormControl isInvalid={!!errors.email}>
                <Input autoComplete="off" type="text" variant={"flushed"} className=" placeholder:text-black" placeholder="Enter Email" width={300} {...register("email",{
                  required: "Email Is Required"
                })}/>
                 <FormErrorMessage>
            {errors.email && errors.email.message}
                  </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                
                <InputGroup>
                <Input type={isVisible? "text" : "password" } variant={"flushed"} className=" placeholder:text-black"  placeholder="Enter Password" {...register("password", {
                  required: "Password is required"
                })}/>
                <InputRightElement>
                <IconButton
                aria-label= {isVisible ? "Hide password": "Show password"}
                variant={"ghost"}
                colorScheme="grey"
                onClick={tooglePasswordVisibility}
                icon={isVisible?<ViewOffIcon/> :<ViewIcon/>}
                >
                </IconButton>
                </InputRightElement>
                </InputGroup>


                   <FormErrorMessage>
            {errors.password && errors.password.message}
                  </FormErrorMessage>
              </FormControl>
               {errors.root && <Text fontSize={"sm"} color={"red"} textAlign={"left"}>{errors.root.message}</Text>} 
               
              <Button mt={6} isDisabled={isSubmitting} color={"white"} type="submit"  width={100} bg={"#7E6363"} _hover={{bg: "#3E3232"}}> 
                {isSubmitting? <Spinner/>: "Submit"}
              </Button>
              </VStack>
          </form>

          <VStack height="inherit" alignItems={"center"}>
            <Divider orientation="vertical" />
            <Text>or</Text>
            <Divider orientation="vertical" />
          </VStack >
             
        <VStack spacing={6}>
                <Google/>
                <Facebook />
                <Apple/>
          </VStack>     
              
      </Flex>

    </VStack>
  )
}

export default Login