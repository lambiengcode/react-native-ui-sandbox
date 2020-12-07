import React from 'react';
import styled from 'styled-components';
import Feather from 'react-native-vector-icons/Feather';
import {StatusBar} from 'react-native';
import Text from '../utils/Text';
import gameData from '../../data/GameData';

export default GameScreen = ({route, navigation}) => {
  const {game} = route.params;

  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Feather
          key={s}
          name="star"
          size={16}
          style={{marginRight: 5}}
          color={Math.floor(game.rating) >= s ? '#819ee5' : '#434958'}
        />,
      );
    }

    return <Stars>{stars}</Stars>;
  };

  return (
    <GameContainer>
      <StatusBar hidden translucent/>
      <GameArtContainer>
        <GameArt source={game.cover} />
        <BackButton onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={26} color="#ffffff" />
        </BackButton>
      </GameArtContainer>

      <GameInfoContainer>
        <GameThumbContainer>
          <GameThumb source={game.cover} />
        </GameThumbContainer>

        <GameInfo>
          <Text heavy medium>
            {game.title}
          </Text>
          <Text color="#9a9a9a">{game.teaser}</Text>
        </GameInfo>

        <Download>
          <Feather name="download" size={20} color="#ffffff" />
        </Download>
      </GameInfoContainer>

      <GameStatsContainer>
        {renderStars()}
        <Text heavy color="#9a9a9a">
          {game.rating}
        </Text>
        <Text bold color="#9a9a9a">
          {game.category[0]}
        </Text>
        <Text bold color="#9a9a9a">
          {game.age}
        </Text>
        <Text bold color="#9a9a9a">
          Game of the day
        </Text>
      </GameStatsContainer>

      <ScreenShotsContainer>
        <ScreenShots horizontal={true} showHorizontalScrollIndicator={false}>
          {game.screenshots.map((screenshot, index) => {
            return (
              <ScreenShotContainer key={index}>
                <ScreenShot source={screenshot} />
              </ScreenShotContainer>
            );
          })}
        </ScreenShots>
      </ScreenShotsContainer>

      <Description medium color='#9a9a9a'>{game.description}</Description>
    </GameContainer>
  );
};

const GameContainer = styled.ScrollView`
  background-color: #343434;
  flex: 1;
`;

const GameArtContainer = styled.View`
  position: relative;
`;

const GameArt = styled.Image`
  height: 280px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  resize-mode: cover;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 32px;
  left: 16px;
`;

const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0px;
  margin: 8px 16px;
`;

const GameThumbContainer = styled.View`
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  resize-mode: cover;
`;

const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;

const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

const Stars = styled.View`
  flex-direction: row;
`;

const ScreenShotsContainer = styled.View`
  margin: 8px 0;
`;

const ScreenShots = styled.ScrollView``;

const ScreenShotContainer = styled.View`
  padding: 16px;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
`;

const ScreenShot = styled.Image`
  height: 100px;
  width: 150px;
  border-radius: 12px;
  resize-mode: cover;
`;

const Description = styled(Text)`
    margin: 20px 16px;
    line-height: 22px;
`;