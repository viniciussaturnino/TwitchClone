/* eslint-disable import/no-unresolved */
import React from 'react';

import streamThumbnail from '../../images/fallguys_thumb.jpg';
import Avatar from '../../images/avatar.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar source={Avatar} />
            <StreamUsername numberOfLines={1}>viniciussaturnino</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end Twitch Clone em React Native.
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science and Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
