import Layout from '@components/Layout'
import Title from '@components/Title'
import ListItem from '@components/ListItem'

const Page = () => {

  return (
    <Layout>
      <Title label={'About'}/>
      <h4 className="font-bold my-4 text-lg">Race Times is a project to help fellow Formula 1 fans figure out the time for an upcoming grand prix in your local time.</h4>
      <p>Race Times is open-source and built using a few helpful tools:</p>
      <ul className="my-4 rounded-md border border-gray-100 dark:border-gray-600">
        <li><ListItem border label="Quick sketching">Figma</ListItem></li>
        <li><ListItem border label="Front-end">Next.js</ListItem></li>
        <li><ListItem border label="Styling">Tailwind CSS</ListItem></li>
        <li><ListItem border label="Animation">Framer Motion</ListItem></li>
        <li><ListItem border label="Data">Ergast Developer API</ListItem></li>
      </ul>
      <p>Want to contribute?</p>
      <a className="link" href="https://github.com/ryan-parag/race-times">Contribute on GitHub</a>
    </Layout>
  )
}

export default Page
