import About from '../../components/About/About'
import FAQ from '../../components/FAQ/FAQ'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Sponsors from '../../components/Sponsors/Sponsors'

const HomePage = () => (
	<div>
		<Navbar />
		{/* <Container>
			<Banner />
		</Container>
		<FAQ />
		<Footer />
		</Container> */}
		<Banner />
		<About />
		<Sponsors />
    <FAQ />
		<Footer/>
	</div>
)

export default HomePage
