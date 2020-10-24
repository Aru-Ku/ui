import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html, body {
		padding: 0;
		margin: 0;
		/* Imported fonts : Public Sans, Space Mono, PT Sans */
		font-family: "PT Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin: 0;
	}

	a, button {
		cursor: pointer;
		outline: none;
		color: inherit;
		text-decoration: none;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}

	main {
		margin-top: 50px;
	}
`;

export const break_points = {
  sm: css => `@media only screen and (max-width: 480px) {${css}}`,
  mb: css => `@media only screen and (max-width: 768px) {${css}}`,
  lg: css => `@media only screen and (min-width: 769px) and (max-width: 1024px) {${css}}`,
  xl: css => `@media only screen and (min-width: 1025px) {${css}}`,
};

export const theme = {
  colors: {
    primary: '#0b132b',
    secondary: '#3a506b',
    ternary: '#1c2541',
    base: '#5bc0be',
    shadow: '#696969',
  },
  bp: {
    sm: break_points.sm,
    mb: break_points.mb,
    lg: break_points.lg,
    xl: break_points.xl,
  },
};
