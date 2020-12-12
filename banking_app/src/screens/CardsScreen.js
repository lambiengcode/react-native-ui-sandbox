import React from 'react';
import styled from 'styled-components';

import Text from '../components/Text';

export default CardsScreen = () => {
  const myCards = [
    {
      id: '1',
      color: '#5750F0',
      number: '7100',
      exp: '04/2025',
      logo: require('../assets/mastercard.jpg'),
    },
  ];

  const renderCard = ({item}) => (
    <CardContainer>
      <CardInfo>
        <CardLogoContainer bgColor={item.color}>
          <CardLogo source={item.logo} resizeMode="contain" />
        </CardLogoContainer>

        <CardDetails heavy>
          <Text>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; <Text medium heavy> {item.number}</Text></Text>
          <Text small heavy color='#727479' margin='4px 0 0 0'>{item.exp}</Text>
        </CardDetails>
      </CardInfo>

      <CardActions>
        <Remove heavy color='#727479'>
          <Text>Remove</Text>
        </Remove>
        <Update>
          <Text heavy>Update</Text>
        </Update>
      </CardActions>
    </CardContainer>
  );

  return (
    <Container>
      <Text center large heavy margin="16px 0 0 0">
        My Cards
      </Text>

      <Cards data={myCards} renderItem={renderCard} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Cards = styled.FlatList`
  padding: 0 8px;
  margin-top: 32px;
`;

const CardContainer = styled.View`
  background-color: #292929;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  padding: 16px;
`;

const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const CardLogoContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${props => props.bgColor};
  align-items: center;
  justify-content: center;
`;

const CardLogo = styled.Image`
  width: 32;
  height: 32;
`;

const CardDetails = styled.View`
  flex: 1;
  align-items: flex-end;
`;

const CardActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Remove = styled.TouchableOpacity`
  margin-right: 32px;
`;

const Update = styled.TouchableOpacity`
  background-color: #3d3d3d;
  padding: 8px 16px;
  border-radius: 6px;
`;
