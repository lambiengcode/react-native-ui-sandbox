import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Text from '../components/Text';

export default TouchScreen = ({navigation}) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <Text heavy title center color="#964ff0" margin='32px 0 0 0'>
        MyCash
      </Text>

      <Touch onLongPress={() => navigation.navigate('Tabs')} delayPressIn={0}>
        <Circle bgColor="#1e1e1e">
          <Circle bgColor="#5196F405">
            <Circle bgColor="#5196f410">
              <Circle bgColor="#5196F430">
                  <TouchButton>
                      <MaterialIcons name='fingerprint' size={64} color='#ffffff'/>
                  </TouchButton>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </Touch>

      <Text center medium color='#9e9e9e'>
          Touch ID sensor for access to {'\n'} your MyCash account.
      </Text>
      <Text center bold color='#9c9c9f' margin='16px 0 0 0'>
          Please very your identify{'\n'}using Touch ID
      </Text>

      <PinAccess onPress={() => navigation.navigate('PinScreen')} delayPressIn={0}>
          <MaterialIcons name='lock' color='#964ff0' size={16}/>
          <Text bold margin='0 0 0 8px' color='#964ff0'>Enter Access PIN</Text>
      </PinAccess>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Touch = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.View`
  background-color: ${(props) => props.bgColor};
  padding: 32px;
  border-radius: 999px;
`;

const TouchButton = styled.TouchableOpacity`
    background-color: #5196f4;
    padding: 12px;
    border-radius: 100px;
`;

const PinAccess = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;