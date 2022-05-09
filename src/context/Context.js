import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const Context = createContext()

const jobsData = axios.create({
	baseURL: 'https://course-api.com/react-tabs-project',
})

export function ContextProvider({ children }) {
	const [jobs, setJobs] = useState([])
	const [value, setValue] = useState(0)
	//const [job, setJob] = useState({})

	const handleTabs = (index) => {
		setValue(index)
		//setJob(jobs[index])
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await jobsData.get()
				setJobs(data)
				console.log(data)
			} catch (error) {
				console.error(error)
			}
		}
		getData()
	}, [])

	return (
		<Context.Provider value={{ jobs, value, handleTabs }}>
			{children}
		</Context.Provider>
	)
}

export default Context
