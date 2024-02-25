import { FormControl, Button,Box, VStack, Text, FormErrorMessage, Spinner,Divider, Flex  } from "@chakra-ui/react"
import {Input} from "@chakra-ui/input"
import { z } from "zod"
import {SubmitHandler, useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import Facebook from "../miscellaneous/Facebook"
import Apple from "../miscellaneous/Apple"
import Google from "../miscellaneous/Google"

const schema = z.object(
  {
    email: z.string().email(),
    password: z.string().min(8)
  }
)

type LoginField = z.infer<typeof schema>


const Login = () => {
    const {
        register,
        handleSubmit,
        setError,  
        reset,
        formState: {errors, isSubmitting},
    } = useForm<LoginField>(
      {resolver: zodResolver(schema)}
    );

    const onSubmit : SubmitHandler<LoginField> = async(data)=> {
      try {
        await new Promise((resolve)=>setTimeout(resolve,1000))
        // throw new Error()
        console.log(data)
        reset();
      } catch (error) {
        setError("root", {
          message: "The email or password doesn't match"
        })
      }
    }


  return (
    <VStack spacing={12} alignItems={"center"}>
        <Box textAlign={"center"}>
            <Text  fontSize={"5xl"} fontWeight={"600"}>Log In</Text>
            <Text fontSize={"xl"}>Don't have an account? <a href="">Sign Up</a></Text>
        </Box>

      <Flex height={250} width="100vw" maxWidth={750} position={"relative"}  gap={20} >  
        <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align={"start"}>  
            <FormControl isInvalid={errors.email}>
              <Input type="text" variant={"flushed"} className=" placeholder:text-black" placeholder="Enter Email" width={300} {...register("email",{
                required: "Email Is Required"
              })}/>
               <FormErrorMessage>
          {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <Input type="password" variant={"flushed"} className=" placeholder:text-black"  placeholder="Enter Password" {...register("password", {
                required: "Password is required"
              })}/>
                 <FormErrorMessage>
          {errors.password && errors.password.message}
                </FormErrorMessage>
            </FormControl>
             {errors.root && <Text fontSize={"sm"} color={"red"} textAlign={"left"}>{errors.root.message}</Text>} 
             
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
                <Apple/>
          </VStack>     
              
      </Flex>

    </VStack>
  )
}

export default Login