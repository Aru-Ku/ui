import styled, {withTheme} from 'styled-components';
import Link from 'next/link'
import Icon from '../_icon'
import { FiGithub } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';

function Navbar({theme, toggleTheme}) {
	return (
		<Header>
			<nav>
				<div className="logo">
					<Link href="/">
						<a>
							<h1>Kurted</h1>
						</a>
					</Link>
				</div>
				<div className="links">
					<a href="/contributors"><Icon Icon={BsPeople} color={theme.colors.font} /></a>
					<a href="https://github.com" target="_blank"><Icon Icon={FiGithub} color={theme.colors.font} /></a>
					<button onClick={toggleTheme}><Icon Icon={BiSun} color={theme.colors.font} /></button>		
				</div>
			</nav>
		</Header>
	);
}

export default withTheme(Navbar);

const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color:${props => props.theme.colors.bg};
  position: fixed;
  top: 0;
  /* box-shadow: 0px 0px 6px 0 ${props => props.theme.colors.shadow}; */
  nav {
    width: 72%;
    height: 100%;
    margin: 0 auto;
    background-color:${props => props.theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: width 0.35s ease;
    ${props => props.theme.bp.mb(`width: 96%`)}
		${props => props.theme.bp.lg(`width: 90%`)}

    .logo h1 {
			font-weight: 400;
			color:${props => props.theme.colors.font};
    }

    .links {
			display: flex;
			a, button {
				margin-left: 15px;
				padding: 0;
			}
			button {
				background-color:${props => props.theme.colors.bg};
				border: none;
			}
    }
  }
`;
