import Layout from '@components/Layout'
import Image from 'next/image'
import { ExternalLink, GitHub } from 'react-feather'

const Page = () => {

  const tools = [
    {
      name: 'Figma',
      use: 'Quick sketching',
      link: 'https://figma.com/',
    }, {
      name: 'Next.js',
      use: 'Front-end',
      link: 'https://nextjs.org/',
    }, {
      name: 'Tailwind CSS',
      use: 'Styling',
      link: 'https://tailwindcss.com/',
    }, {
      name: 'Framer Motion',
      use: 'Animation',
      link: 'https://www.framer.com/motion/',
    }, {
      name: 'Ergast Developer API',
      use: 'Data',
      link: 'http://ergast.com/mrd/',
    }
  ]

  return (
    <Layout>
      <div className="w-full bg-white dark:bg-gray-900 border-b border-secondary shadow-md">
        <div className="flex flex-col w-full px-6 py-12 max-w-screen-lg mx-auto">
          <h1 className="text-3xl md:text-5xl font-black">About</h1>
        </div>
      </div>
      <div className="px-4 py-12 layout">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-2">
            <h4 className="font-bold my-4 text-xl">Race Times is a project to help fellow Formula 1 fans figure out the time for an upcoming grand prix in your local time.</h4>
            <p>Race Times is open-source and built using a few helpful tools.</p>
            <div className="card my-4 p-4 flex items-center">
              <div className="h-12 w-12 rounded-full bg-white bg-opacity-20 ring-2 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-5 relative">
                <Image src="/static/memoji-thanks.webp" layout="fill"/>
              </div>
              <div className="pl-3 flex-1 w-full">
                Made with ❤️<br/>by <a href="https://ryanparag.com" target="_blank" className="link">Ryan Parag</a>
              </div>
            </div>
          </div>
          <ul className="my-4 grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-4">
            <li>
              <a className="button flex button-block justify-between px-4 py-2 items-center" href="https://github.com/ryan-parag/race-times" target="_blank">
                <GitHub size={16}/>
                <div className="flex flex-col flex-1 pl-2">
                  <strong>Want to contribute?</strong>
                  <span className="text-xs lg:text-sm font-mono font-normal mt-1 text-mono-black-60 dark:text-mono-white-60">Contribute on GitHub</span>
                </div>
              </a>
            </li>
            {
              tools.map((item,i) => (
                <li>
                  <a className="button flex button-block justify-between px-4 py-2 items-center" href={item.link} target="_blank">
                    <ExternalLink size={16}/>
                    <div className="flex flex-col flex-1 pl-2">
                      <strong>{item.name}</strong>
                      <span className="text-xs lg:text-sm font-mono font-normal mt-1 text-mono-black-60 dark:text-mono-white-60">{item.use}</span>
                    </div>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Page
