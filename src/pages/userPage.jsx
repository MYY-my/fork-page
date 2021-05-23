import React from 'react';
import { User, AvatarWraper, ReposWraper, Avatar, Name, UserName, Followers, Following, Repositories, ReposLink, ReposDescription } from '../uicomponents/uicomponents';

import following from '../picture/following.jpg';
import followers from '../picture/followers.jpg';

const UserPage = (props) => {

  const { data: { data: { avatar_url, followers, following, name, login, html_url, public_repos } } } = props

  return (
    <User>
      <AvatarWraper>
        <Avatar icon={avatar_url} />
        <Name>{name}</Name>
        <UserName href={login}>{login}</UserName>
        <Followers icon={followers}>{followers}followers</Followers>
        <Following icon={following}>{following}following</Following>
      </AvatarWraper>
      <ReposWraper>
        <Repositories>Repositories({public_repos})</Repositories>
        <ReposLink href={html_url}>{html_url}</ReposLink>
      </ReposWraper>
    </User>
  );
}
export default UserPage;