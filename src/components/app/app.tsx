import PageMain from '../../pages/page-main/page-main';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps) {
  return <PageMain placesCount={placesCount}/>;
}

export default App;
