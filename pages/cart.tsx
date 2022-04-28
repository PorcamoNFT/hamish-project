import { FormControl, 
    FormLabel, 
    Input, 
    Container, 
    Flex, 
    Heading, 
    Text, 
    VStack, 
    GridItem, 
    SimpleGrid, 
    Select,
    Button,
    Checkbox,
    HStack,
    Image, 
    AspectRatio,
    useColorMode,
    Stack
    } from '@chakra-ui/react'
    import { useCol } from 'react-bootstrap/esm/Col';


 
const Cart = () => {
    const { toggleColorMode} = useColorMode ();
    return ( 

<Container maxWidth="container.xl" padding={0}> 
<Flex h={{base: 'auto', md: '100vh'}} py={[0, 10, 20]} direction={{ base: 'column-reverse', md: 'row'}}>
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={3} alignItems="flex-start">
    <Heading size="2xl"> Your Details </Heading>
    <Text> If you already have an account, click here to log in.</Text>
    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
    <GridItem colSpan={1}>
        <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input placeholder="John" />
        </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
        <FormControl>
        <FormLabel>Second Name</FormLabel>
        <Input placeholder="Davison" />
        </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
        <FormControl>
        <FormLabel>Address</FormLabel>
        <Input placeholder="Your Address" />
        </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
        <FormControl>
        <FormLabel>City</FormLabel>
        <Input placeholder="San Fran" />
        </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
        <FormControl>
        <FormLabel>Couyntry</FormLabel>
        <Select> 
            <option value="usa">United States of America</option>
            <option value="uk">United Kingdom</option>
        </Select>
        </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to Billing Address</Checkbox>


        </GridItem>
        <GridItem colSpan={2}>
            
           <Button colorScheme="brand" size="lg" w="full"> Place order</Button>           </GridItem>


    </SimpleGrid>
    </VStack>
    </VStack>

    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="white.100">
    <Heading size="2xl">Your Cart</Heading>
    <Text>If the price is too hard on your eyes, {''}
         <Button onClick = {toggleColorMode} variant="link" colorScheme="black"> 
         try changing the theme</Button></Text>
         <HStack spacing={6} alignItems="center" w="full"> 
    <AspectRatio ratio={1} w={24}> 
    <Image src="https://isuit.it/pub/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/Z/B/ZBAV26_1.jpg" alt="cesare attolini suit" />
    </AspectRatio>
    <Stack
        spacing={0}
        w="full"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
        <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md"> Zilli Bag</Heading>
            <text color="black.900">ZCAV49</text>
            </VStack> 
            <Heading size="sm" textAlign="end">
                $5,000 </Heading> 
            </Stack>
            </HStack>
            <VStack spacing={4} alignItems="stretch" w="full"> 
            <HStack justifyContent="space-between">
                <Text color="black.900"> Subtotal with tax estimate </Text>
                <Heading size="sm"> $5500 </Heading>
            </HStack>
            <HStack justifyContent="space-between">
                <Text color="black.900"> Shipping </Text>
                <Heading size="sm"> FREE </Heading>
            </HStack>


            </VStack>
    </VStack>
  
    </Flex>



</Container>


);

    }

export default Cart;