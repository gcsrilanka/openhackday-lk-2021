import About from '../../components/About/About'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Schedule from '../../components/Schedule/Schedule'
import Sponsors from '../../components/Sponsors/Sponsors'

const HomePage = () => (
	<div>
		<Navbar />
		<Banner />
		<About />
		<Schedule />
		<Sponsors />
		<Footer/>
	</div>
)

export default HomePage
