import { Container } from '@mui/material'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const HomePage = () => (
	<div>
		<Navbar />
		<Container>
			<Banner />
		</Container>
		<Footer/>
	</div>
)

export default HomePage
