import { useContext } from 'react'
import Context from '../context/Context'

function Tab({ job, index }) {
	const { value, handleTabs } = useContext(Context)

	return (
		<button
			className={`tab ${index === value && 'active'}`}
			onClick={() => handleTabs(index)}
		>
			<div className="vertical-line"></div>
			<div className="tab-text">{job.company}</div>
		</button>
	)
}
export default Tab
