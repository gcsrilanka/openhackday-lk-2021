import { Container } from '@mui/material'
import About from '../../components/About/About'
import Banner from '../../components/Banner/Banner'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const HomePage = () => (
	<div>
		<Navbar />
		<Container>
			<Banner />
		</Container>
		<FAQ />
		<Footer />
	</div>
)

export default HomePage
