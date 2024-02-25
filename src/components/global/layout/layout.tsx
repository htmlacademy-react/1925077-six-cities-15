import {Outlet} from 'react-router-dom';
import {Header} from '../header/header';


export function Layout() {
  return (
    // в div .page добавляются различные стилевые классы в зависимости от страницы
    // например на главной "page page--gray page--main"
    <div className="page">
      {/* в header бывает активное и неактивное лого, Navbar вынести опционален */}
      <Header/>


      {/* На main вешаются различные стилевые классы в зависимости от страницы, но он пока в комп-е страницы */}
      <Outlet/>


      {/* footer опционален */}
      {/* {props.isFooter && <Footer/>} */}
    </div>
  );
}
