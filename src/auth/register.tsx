import { StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, FormControl,  FormControlLabel, Divider, Text, Button, ButtonText, ArrowLeftIcon, Icon, FormControlLabelText, Center, Heading, VStack, Input, FormControlErrorText, InputField,  InputSlot, InputIcon } from '@gluestack-ui/themed'
import { useUserSelector } from '../../context/userReducer';
import {User2, AtSignIcon, Mail, KeyRound, Phone, CircleUser} from 'lucide-react-native';



// username
// "devendra04"
// email_address
// "devendra.dantal0@gmail.com"
// fullname
// "Devendra"
// phone_number
// "7628003948"
// password
// "$2b$10$3BfNKdoCEDhQd51ZbtGYUOawSGKlIeiYl6n7z5H7.gQRr1ooprWgK"
// gender
// "male"

// emergency_contact
// Array (2)
enum Gender {
  "Male",
  "Female",
  "Other"
}

interface IRegisterData  {
  username: string;
  email_address: string;
  fullname: string;
  phone_number: string;
  password: string;
  gender: string;
  emergency_contact1: string;
  emergency_contact2: string;
}



const Register = () => {
  const [userData, setUserData] = useState<IRegisterData | null>({
    username: '',
    email_address: '',
    fullname: '',
    phone_number: '',
    password: '',
    gender: 'Male',
    emergency_contact1: '',
    emergency_contact2:''
  })


  const {isLoggedIn, setIsLoggedIn} = useUserSelector();

  useEffect(() => {
    if(isLoggedIn == false) {
      console.log("Not Logged In");
    }else {
      console.log("Logged In");
    }
  }, [isLoggedIn])

  // Form State
  // const userRegister 

  const handleSubmit = () => {
    setIsLoggedIn(true);
  }

  return (
    <SafeAreaView style={{flex: 1, padding: 25, backgroundColor: '#111827'}}>
    <View style={{flex: 1, marginTop: 20}}>
      <VStack space='xs' pb='$4'>
        <Heading lineHeight={30} fontSize='$3xl' color='$orange600'>
          Sign Up
        </Heading>
        <Text fontSize='$sm' color='$white'>
          Enter your details to get register with the application.
        </Text>
      </VStack>
      <VStack space='xl' py='$2'>
        <Input>
          <InputSlot pl="$3">
            <Icon as={AtSignIcon} />
          </InputSlot>

          <InputField
            value={userData?.username}
            onChangeText={(text) => setUserData((prev) => ({ ...prev, username: text }))}
            py='$2'
            color="$white"
            placeholder="Username"
          />
        </Input>

        <Input>
         <InputSlot pl="$3">
            <Icon as={Mail} />
          </InputSlot>
          <InputField
            value={userData?.email_address}
            onChangeText={(text) => setUserData((prev) => ({ ...prev, email_address: text }))}
            py='$2'
            color="$white"
            placeholder="Email Address"
          />
        </Input>

  
        <Input>
          <InputSlot pl="$3">
            <Icon as={User2} />
          </InputSlot>
          <InputField
            value={userData?.fullname}
            onChangeText={(text) => setUserData((prev) => ({ ...prev, fullname: text }))}
            py='$2'
            color="$white"
            placeholder="Fullname"
          />
        </Input>

        <Input>
        <InputSlot pl="$3">
            <Icon as={KeyRound} />
          </InputSlot>
          <InputField
            value={userData?.password}
            onChangeText={(text) => setUserData((prev) => ({ ...prev, password: text }))}
            py='$2'
            color="$white"
            placeholder="Password"
          />
        </Input>

      </VStack>

      <VStack space='xl' py='$2'>
        <Heading lineHeight={30} fontSize='$2xl' color="$trueGray200">
         Contact Details
        </Heading>
        <Input>
          <InputSlot pl="$3">
              <Icon as={Phone} />
            </InputSlot>
            <InputField
            value={userData?.phone_number}
            onChangeText={(text) => setUserData((prev) => ({ ...prev, phone_number: text }))}
            py='$2'
            color="$white"
            placeholder="Phone Number"
          />
        </Input>

        <Input>
          <InputSlot pl="$3">
              <Icon as={CircleUser} />
            </InputSlot>
            <InputField
            value={userData?.emergency_contact1}
            onChangeText={(text) => setUserData((prev) => ({ ...prev, emergency_contact1: text }))}
            py='$2'
            color="$white"
            placeholder="Emergency Contact 1"
          />
        </Input>

        <Input>
          <InputSlot pl="$3">
              <Icon as={CircleUser} />
            </InputSlot>
            <InputField
            value={userData?.emergency_contact2}
            onChangeText={(text) => setUserData((prev) => ({ ...prev, emergency_contact2: text }))}
            py='$2'
            color="$white"
            placeholder="Emergency Contact 2"
          />
        </Input>
      </VStack>

      <VStack space='lg' pt='$4'>
        <Button
          p='$2'
          borderRadius={50}
          size='md'
          onPress={handleSubmit}
          bg='$orange600'
        >
          <ButtonText>
            Sign Up
          </ButtonText>
        </Button>
      </VStack>
      </View>
    </SafeAreaView>

  )
}

export default Register
