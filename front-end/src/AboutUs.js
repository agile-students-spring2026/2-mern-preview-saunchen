import { useEffect, useState } from 'react'
import axios from 'axios'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <div>
      <h1>{data.heading}</h1>
      <img src={data.imageUrl} alt={data.imageAlt} width="300" />
      {data.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutUs
