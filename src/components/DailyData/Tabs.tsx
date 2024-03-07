
export default function Tabs() {
  return (
    <div className="flex items-center bg-white dark:dark:bg-gray-800 dark:dark:text-gray-100 mt-5 overflow-x-auto">
      <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-4 border-blue-500 text-blue-500 dark:dark:border-gray-700">Overview</a>
      <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:dark:border-gray-700">Fundamentals</a>
      <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:dark:border-gray-700 whitespace-nowrap">News Insights</a>
      <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:dark:border-gray-700">Sentiments</a>
      <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:dark:border-gray-700">Team</a>
      <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:dark:border-gray-700">Technicals</a>
      <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:dark:border-gray-700">Tokenomics</a>
    </div>
  )
}
