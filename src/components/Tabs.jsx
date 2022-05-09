import './Tabs.css'
import Tab from './Tab'
import { useContext } from 'react'
import Context from '../context/Context'

function Tabs() {
	const { jobs } = useContext(Context)

	return (
		<div className="tabs">
			{jobs.length > 0 ? (
				jobs.map((job, index) => <Tab key={job.id} index={index} job={job} />)
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}
export default Tabs
