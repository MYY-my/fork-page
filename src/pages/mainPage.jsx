
import {Main, MainBigSearch, MainDefaultText } from '../uicomponents/uicomponents';

const MainPage = (props) => {
	const {icon} = props
	return (
		<Main>
			<MainBigSearch icon={icon}/>
			<MainDefaultText>Start with searching<br/> a GitHub user</MainDefaultText>
		</Main>
	);
}
export default MainPage;