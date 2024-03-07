import {
  Header, BreadCrumb, 
  MainGraph,
  Data,
  Sentiment,

  About,
  Tokenomics,
  Team,
  Footer


} from './components/index.ts'

function App() {

  return (
    <>
      <Header />
      <div className='px-3 md:pl-10 mb-5 bg-lightdark'>
        <BreadCrumb />
        <MainGraph/>
        <Data />
        <Sentiment />
        <About/>
        <Tokenomics/>
        <Team/>
      </div>
      <Footer/>
    </>
  )
}

export default App
