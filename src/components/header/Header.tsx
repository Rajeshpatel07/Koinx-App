import { Button } from '../ui/button'

export default function Header() {
  return (
    <header className="py-2 px-1 dark:bg-gray-800 border dark:text-gray-100">
      <div className="container flex justify-between items-center h-16 mx-auto">
        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-1">
          <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="koinx" className="h-ful" />
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent">Crypto Taxes</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 dark:border-transparent">Free Tools</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400">Resoruce Center</a>
          </li>
          <li className="flex">
            <a href="" className="flex items-center "><Button>Get Started</Button></a>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
