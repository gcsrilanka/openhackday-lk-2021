import { Container } from '@mui/material'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Team from '../../components/Team/Team'

const HomePage = () => (
	<div>
		<Navbar />
		<Container>
			<Banner />
			<Team />
		</Container>
		<Footer />
	</div>
)

export default HomePage
