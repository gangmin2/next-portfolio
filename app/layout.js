import "./globals.css";
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata = {
	title: 'nuing\'s portfolio',
	description: 'nuing\'s portfolio with Notion API',
}

export default function RootLayout({ children }) {
	return (
		<html lang="ko">
			<body>
				<Header />

				<main style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '100px', }}>{children}</main>

				<Footer />
			</body>
		</html>
	);
}