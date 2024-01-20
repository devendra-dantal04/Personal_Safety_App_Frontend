import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AlertCircleIcon, FormControlError } from '@gluestack-ui/themed'
import { Box, FormControl, FormControlLabel, Text, Button, ButtonText, ArrowLeftIcon, Icon, FormControlLabelText, Center, Heading, VStack, Input, FormControlErrorText, InputField, FormControlErrorIcon, FormControlHelper, FormControlHelperText } from '@gluestack-ui/themed'

const Register = () => {
    const handleSubmit = () => {
        console.log("Hello Guys")
    }
  return (
    
    <Center>
    <Box p='$5' maxWidth='$96' borderWidth='$1' borderColor='$backgroundLight300' borderRadius='$lg' $dark-borderColor="$backgroundDark700">
      <VStack space='xs' pb='$4'>
        <Heading lineHeight={30}>
          Set new password
        </Heading>
        <Text fontSize='$sm'>
          Almost done. Enter your new password and you are all set.
        </Text>
      </VStack>
      <VStack space='xl' py='$2'>
        <Input>
          <InputField
            py='$2'
            placeholder="New password"
          />
        </Input>
        <Input>
          <InputField
            py='$2'
            placeholder="Confirm new password"
          />
        </Input>
      </VStack>
      <VStack space='lg' pt='$4'>
        <Button
          size='sm'
          onPress={handleSubmit}
        >
          <ButtonText>
            Submit
          </ButtonText>
        </Button>
        <Box flexDirection='row'>
          <Button variant='link' p='$0' size='sm'>
            {/* ArrowLeftIcon is imported from 'lucide-react-native' */}
            <Icon
              size='md'
              mr='$1'
              as={ArrowLeftIcon}
            />
            <ButtonText
            >
              Back to login
            </ButtonText>
          </Button>
        </Box>
      </VStack>
    </Box>
  </Center>

  )
}

export default Register
