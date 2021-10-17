import { Container } from '@mui/material'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Sponsors from '../../components/Sponsors/Sponsors'

const HomePage = () => (
	<div>
		<Navbar />
		<Container>
			<Banner />
			<Sponsors />
		</Container>
		<Footer />
	</div>
)

export default HomePage
