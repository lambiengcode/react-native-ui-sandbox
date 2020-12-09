import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';

export default PinScreen = () => {
    return (
        <Container>
            <Text>MyCash</Text>
            <Text>Enter your PIN code</Text>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: #1e1e1e;
`;