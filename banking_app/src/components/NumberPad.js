import React from 'react';
import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Text from '../components/Text';

export default NumberPad = ({onPress}) => {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        <MaterialIcons name='keyboard-backspace' size={24}/>
    ];



    return (
        <KeyPad>
            {buttons.map((item, index) => {
                return (
                    <Number key={index} onPress={() => onPress(item, index)} delayPressIn={0}>
                        <Text bold large>{item}</Text>
                    </Number>
                )
            })}
        </KeyPad>
    )
}

const KeyPad = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin: 0 30px;
`;

const Number = styled.TouchableOpacity`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    align-items: center;
    justify-content: center;
    margin: 5px 18px;
    border-width: 1px;
    border-color: #ffffff20;
`;