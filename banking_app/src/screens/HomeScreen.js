import React from 'react';
import styled from 'styled-components';

import Feather from 'react-native-vector-icons/Feather';

import Text from '../components/Text';

export default HomeScreen = () => {
  return (
    <Container>
      <Header>
        <ProfilePhoto source={require('../assets/avatar.png')} />
        <Welcome>
          <Text heavy medium>
            Welcome,
          </Text>
          <Text>lambiengcode</Text>
        </Welcome>
        <Feather name="settings" size={24} color="#565656" />
      </Header>

      <Text center title heavy color="#ffffff">
        $ 1,000,000
      </Text>

      <Text center color="#9c9c9c" bold>
        Current Balance
      </Text>

      <Purchases
        ListHeaderComponent={
          <>
            <TransactionsHeader>
              <Text>Last Purchases</Text>
              <Feather name="filter" size={24} color="#5196f4" />
            </TransactionsHeader>

            <SearchContainer>
              <Feather name="search" size={18} color="#5196f4" />
              <Search placeholder="Search Transactions" />
            </SearchContainer>
          </>
        }
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
`;

const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 0;
`;

const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  font-family: 'Avenir Next';
  color: #dbdbdb;
`;
