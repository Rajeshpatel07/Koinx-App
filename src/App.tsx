import {
  Header, BreadCrumb, RightBar, Tabs,
  Data,
  Sentiment,
  Widget

} from './components/index.ts'

function App() {

  return (
    <>
      <Header />
      <div className='px-3 md:px-5'>
        <BreadCrumb />
        <Widget />
        <Tabs />
        <Data />
        <Sentiment />
      </div>
    </>
  )
}

export default App
