import { FormControl, Button,Box, VStack, Text, FormErrorMessage, Spinner,Divider, Flex , InputGroup, InputRightElement, IconButton, useToast } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import {Input} from "@chakra-ui/input"
import { z } from "zod"
import {SubmitHandler, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router-dom"

import Facebook from "../../components/miscellaneous/Facebook"
import Google from "../../components/miscellaneous/Google"
import { useState } from "react"
import axios from "axios"


const signupSchema = z.object(
  {
    username: z.string().min(1,{message: "This field is required"}),
    email: z.string().min(1,{message: "This field is required"}).email(),
    password: z.string().min(8),
    confirmPassword: z.string().optional(),
  }
).refine((data)=>data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})



type SignupField = z.infer<typeof signupSchema>



const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisibile] = useState(false);
    const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);

    const toast = useToast();

    const {
        register,
        handleSubmit,
        setError,  
        reset,
        // watch,
        formState: {errors, isSubmitting},
    } = useForm<SignupField>(
      {resolver: zodResolver(signupSchema)}
    );

    const onSubmit : SubmitHandler<SignupField> = async(data)=> {
      try {
        console.log(data);
        const response = await axios.post("http://localhost:4000/api/user/register",data);
        console.log(response)
        reset();

        toast(
          {
            title: "Registered Successfully",
            status: "success",
            duration: 5000,
            isClosable: false,
            position: "bottom",
          }
        )

      } catch (error : any) {
        console.log(error)
       if(error.response.data.field === "uname"){
        setError("username",{
          type: "manual",
          message: error.response.data.message
        })
       }else if (error.response.data.field === "email")
       {
        setError("email",{
          type: "manual",
          message: error.response.data.message,
        })
       }else
       {
        toast(
          {
            title: "Form not submitted",
            status: "error",
            duration: 5000,
            isClosable: false,
            position: "bottom",
          }
        )
       }
      }
    }

  return (
    <VStack spacing={12} alignItems={"center"}>
        <Box textAlign={"center"}>
            <Text  fontSize={"5xl"} fontWeight={"600"}>Sign Up</Text>
            <Text fontSize={"xl"}>Already have an account? <Link to={"/login"} className=" hover:cursor-pointer text-facebook ">Login</Link></Text>
        </Box>

      <Flex height={250} width="100vw" maxWidth={750} position={"relative"}  gap={20} >  
          <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align={"start"}>  

          <FormControl isInvalid={!!errors.root || !!errors.username}>
            <Input autoComplete="off" type="text" variant={"flushed"} className=" placeholder:text-black" placeholder="Create Username" width={300} {...register("username",{
              required: "Username is required"
            })}/>
            {errors.username && <FormErrorMessage>{errors.username?.message}</FormErrorMessage>}
            {errors.root && <FormErrorMessage>{errors.root?.message}</FormErrorMessage>}

            {/* {errors.root && <FormError errorMsg={errors.root.message} />} */}
           
          </FormControl> 

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
           <Input type={isPasswordVisible?"text": "password"} variant={"flushed"} className=" placeholder:text-black"  placeholder="Enter Password" {...register("password", {
              required: "Password is required"
            })}/>
            <InputRightElement>
                <IconButton
                aria-label={isPasswordVisible ?"Hide Password" : "Show Password"}
                onClick={()=>setIsPasswordVisibile(!isPasswordVisible)}
                icon={isPasswordVisible ? <ViewOffIcon/>: <ViewIcon/>}
                variant={"ghost"}
                colorScheme="grey"
                >
                </IconButton>
            </InputRightElement>
           </InputGroup>
               <FormErrorMessage>
        {errors.password && errors.password.message}
              </FormErrorMessage>
          </FormControl>

           <FormControl isInvalid={!!errors.confirmPassword}>
           <InputGroup>
           <Input type={isCPasswordVisible? "text": "password"} variant={"flushed"} className=" placeholder:text-black"  placeholder="Confirm Password" {...register("confirmPassword", {
              required: true, })}/>
             <InputRightElement>
             <IconButton aria-label={isCPasswordVisible ? "Hide password": "Show password"} 
                variant={"ghost"}
                colorScheme="grey"
                icon={isCPasswordVisible? <ViewOffIcon/>: <ViewIcon/>}
                onClick={()=> setIsCPasswordVisible(!isCPasswordVisible)}
             />
             </InputRightElement> 
              </InputGroup>
               <FormErrorMessage>
        {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
          </FormControl>
          
           
          <Button mt={6} isDisabled={isSubmitting} color={"white"} type="submit" width={100} bg={"#7E6363"} _hover={{bg: "#3E3232"}}> 
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
          </VStack>     
              
      </Flex>

    </VStack>
  )
}

export default SignUp