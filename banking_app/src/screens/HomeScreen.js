import React from 'react';
import styled from 'styled-components';

import Feather from 'react-native-vector-icons/Feather';
import {LineChart} from 'react-native-chart-kit';

import Text from '../components/Text';
import purchaseData from '../data/purchases';
import { Dimensions } from 'react-native';

export default HomeScreen = () => {

  const renderPurchase = ({item}) => {
    <Purchase>
      <PurchaseInfo>
        <Text>{item.product}</Text>
        <Text>{item.store}</Text>
        <Text>{item.address}</Text>
      </PurchaseInfo>
      <Text>{item.price}</Text>
    </Purchase>
  }
  
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

      <Chart>
        <LineChart data={{
          labels: ['May', 'June', 'July', 'Aug', 'Sept', 'Oct'],
          datasets: [
            {
              data: [
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
              ]
            }
          ],
        }}

          width={Dimensions.get('window').width}
          height={250}
          yAxisLabel='$'
          yAxisSuffix='k'
          chartConfig = {{
            backgroundGradientFrom: '#1e1e1e',
            backgroundGradientTo: '#1e1e1e',
            color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
            labelColor: () => `rgba(255, 255, 255, 0.2)`,
            strokeWidth: 3,
          }}
          withVerticalLines={false}
          withHorizontalLines={false}
          bezier
        />
      </Chart>

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

        data={purchaseData} renderItem={renderPurchase} showsVerticalScrollIndicator={false}
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

const Chart = styled.View`
  margin: 32px 0;
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

const Purchase = styled.View``;

const PurchaseInfo = styled.View``;