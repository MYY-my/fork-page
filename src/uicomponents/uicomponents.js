import styled, { createGlobalStyle } from "styled-components";

export const DefaultStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;
export const Bar = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(14, 1fr);
  padding: 16px 0;
  background: #0064eb;
  align-items: center;
`;
export const Logo = styled.div`
  grid-row: 1/2;
  grid-column: ${({ width }) => {
    if (width[0] < 550) {
      return "1/4";
    } else {
      return "1/3";
    }
  }};
  justify-self: center;
`;
export const Search = styled.input`
  grid-row: 1/2;
  grid-column: ${({ width }) => {
    if (width[0] < 550) {
      return "4/-1";
    } else {
      return "3/-1";
    }
  }};
  width: ${({ width }) => {
    if (width[0] > 700) {
      return "500px";
    } else if (width[0] > 600 && width[0] < 700) {
      return "400px";
    } else if (width[0] > 500 && width[0] < 600) {
      return "300px";
    } else if (width[0] > 370 && width[0] < 500) {
      return "250px";
    } else {
      return "200px";
    }
  }};
  height: 40px;
  padding: 0 40px;
  border: none;
  border-radius: 6px;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: 15px;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: calc(50% - 78px);
  top: calc(50% - 63px);
`;
export const MainBigSearch = styled.div`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 64px;
  height: 64px;
`;
export const MainDefaultText = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  color: #808080;
`;
export const User = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
`;
export const AvatarWraper = styled.div`
  grid-row: 1/-1;
  grid-column: 1/5;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
`;
export const ReposWraper = styled.div`
  grid-row: 1/-1;
  grid-column: 5/-1;
  display: grid;
`;
export const Avatar = styled.div`
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  grid-row: 1/2;
  grid-column: 1/5;
  margin: 40px 0 0 60px;
`;
export const Name = styled.div`
  grid-row: 2/3;
  grid-column: 1/-1;
  margin: 30px 0 0 60px;
`;
export const UserName = styled.a`
  grid-row: 3/4;
  grid-column: 1/-1;
  text-decoration: none;
  margin: 12px 0 0 60px;
`;
export const Followers = styled.div`
  grid-row: 4/5;
  grid-column: 1/3;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  margin: 25px 0 0 60px;
`;
export const Following = styled.div`
  grid-row: 4/5;
  grid-column: 3/-1;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  margin: 25px 0 0 0px;
`;
export const Repositories = styled.div`
  grid-row: 1/-1;
  grid-column: 5/-1;
`;
export const ReposLink = styled.a`
  grid-row: 1/-1;
  grid-column: 5/-1;
  text-decoration: none;
`;
export const ReposDescription = styled.div`
  grid-row: 1/-1;
  grid-column: 5/-1;
`;
