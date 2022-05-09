import { useContext } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Context from '../context/Context'
import './Card.css'
function Card() {
	const { value, jobs } = useContext(Context)
	const Duty = ({ duty }) => {
		return (
			<div className="duty">
				<FaAngleDoubleRight className="icon" />
				<p>{duty}</p>
			</div>
		)
	}
	if (jobs.length > 0) {
		const { dates, title, company, duties } = jobs[value]
		return (
			<div className="card">
				<div className="card-content">
					<div className="job-info">
						<h1 className="title">{title}</h1>
						<h4 className="company">{company}</h4>
						<p className="dates">{dates}</p>
					</div>
					<div className="duties">
						{duties && duties.map((duty, i) => <Duty key={i} duty={duty} />)}
					</div>
				</div>
			</div>
		)
	} else {
		return <p>Loading...</p>
	}
}
export default Card
