import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';

export default HomeScreen = () => {
    return(
        <Container>
            <Text>Home</Text>
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;