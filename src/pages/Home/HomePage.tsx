import About from '../../components/About/About'
import FAQ from '../../components/FAQ/FAQ'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Team from '../../components/Team/Team'
import Sponsors from '../../components/Sponsors/Sponsors'

const HomePage = () => (
	<div>
		<Navbar />
		{/* <Container>
			<Banner />
		</Container> */}
		<Banner />
		<About />
		<Sponsors />
    <FAQ />
    <Team />
		<Footer/>
	</div>
)

export default HomePage
