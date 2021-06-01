import React from 'react';
import { User, AvatarWraper, ReposWraper, Avatar, Name, UserName, Followers, Following, Repositories, ReposLink, ReposDescription } from '../uicomponents/uicomponents';

import following1 from '../picture/following.jpg';
import followers1 from '../picture/followers.jpg';

const UserPage = (props) => {
  const handleClick = (event) => {
    event.preventDefault()
    props.fn()
  
  }
  const user = (avatar_url, followers, following, name, login, html_url, public_repos, following1, followers1) => (
    <User>
      <AvatarWraper>
        <Avatar icon={avatar_url} />
        <Name>{name}</Name>
        <UserName onClick={handleClick} href={login}>{login}</UserName>
        <Followers icon={followers1}>{followers}followers</Followers>
        <Following icon={following1}>{following}following</Following>
      </AvatarWraper>
      <ReposWraper>
        <Repositories>Repositories({public_repos})</Repositories>
        <ReposLink href={html_url}>{html_url}</ReposLink>
      </ReposWraper>
    </User>
  );

  const userWithData = () => {
    if (props.data) {
      const { avatar_url, followers, following, name, login, html_url, public_repos } = props.data.user.read()
      return user(avatar_url, followers, following, name, login, html_url, public_repos, following1, followers1)
    }
  }

  return (
    <>
      {userWithData()}
    </>
  );
}
export default UserPage;