import React, { useState } from 'react'
import { IconButton } from "@chakra-ui/react"
import { DragHandleIcon,} from "@chakra-ui/icons"
import { Menu, MenuButton, MenuList, MenuItem,Box } from "@chakra-ui/react"
import { ChakraProvider, Flex, theme, Avatar, FormControl, FormLabel, Input } from '@chakra-ui/react';

function Navbar(){
    const [image,setimage] = useState(null)
    const handleChange = (e) =>{
        console.log(e)
        setimage(URL.createObjectURL(e.target.files[0]))
    }
    console.log(image)
        return (
            
                <ChakraProvider theme={theme}>
                    <Box 
                     backgroundColor="#bababa"
                     padding= "18px"
                     display="flex"
                     justifyContent="space-between"
                     paddingRight="50px"
                     fontSize="32px"
                     fontWeight="bold"
                     color="teal"
                    >
                        <h1>Slope Rate Techno Private Limited</h1>
                        
                        {/* <InputGroup marginLeft="60%">
                            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
                            <Input type="text"backgroundColor="white" placeholder="Search.." width="sm"/>
                        </InputGroup> */}
                    <Flex>
                        <FormControl id="profile">
                            <FormLabel><Avatar src={image} cursor="pointer"/></FormLabel>
                            <Input type="file" hidden onChange={handleChange} />
                        </FormControl>
                    <Menu>
                        <MenuButton as={IconButton} color="black" aria-label="Options" icon={<DragHandleIcon/>} size="lg" variant="outline" />
                            <MenuList color="black" fontSize="20px" >
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Profile Settings</MenuItem>
                                <MenuItem>Virtual Chat</MenuItem>
                                <MenuItem>SignOut</MenuItem>
                            </MenuList>
                    </Menu>
                    </Flex>
                    </Box>
                </ChakraProvider>
        )
    }
export default Navbar;