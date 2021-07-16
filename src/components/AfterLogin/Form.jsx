import React from 'react'
import { FormControl, FormLabel, Input, Button, Select,Box } from "@chakra-ui/react"
import {AddIcon } from "@chakra-ui/icons"

function LoginIntegration() {
    return ( 
        <Box bg="#c4d7f5">
        <Box marginLeft="40%" width="350px">
            <br />
            <br />
            <br />
        <FormControl height="80vh">
            <FormLabel><strong>Quote Of The Project :</strong></FormLabel>
            <Select placeholder="Select" borderColor="black" >
                <option>Web</option>
                <option>Mobile</option>
                <option>IOS</option>
            </Select><br />
            <FormLabel><strong>Scale Of Project :  </strong></FormLabel>
            <Select placeholder="Select" borderColor="black">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </Select><br/>
            <FormLabel><strong>Email or Phone Number : </strong></FormLabel>
            <Input placeholder="Enter Email or Phone" borderColor="black" _placeholder={{color:"black"}} /><br /><br />
            <FormLabel><strong>Vender Ship :</strong> </FormLabel>
                    <FormLabel border="1.5px solid black" borderRadius="10px" width="350px">
                    <label for="file"> 
                    <AddIcon color="white" border="1px solid white" borderRadius="70%" padding="8px" 
                    backgroundColor="red" boxSize="40px" cursor="pointer" /> Choose a File... 
                    <Input  hidden type="file" id="file"/> </label>
                    </FormLabel><br />
                    <Button colorScheme="blue" variant="solid">Submit</Button>
        </FormControl>
        <br />
        </Box>
        </Box>
    )
}
export default LoginIntegration;