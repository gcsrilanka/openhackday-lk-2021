import { Container } from '@mui/material'
import Banner from '../../components/Banner/Banner'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const HomePage = () => (
	<div>
		<Navbar />
		<Container>
			<Banner />
			<FAQ />
		</Container>
		<Footer />
	</div>
)

export default HomePage
