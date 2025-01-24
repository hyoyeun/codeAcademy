import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import './normalize.css';
import data from './data';
import Products from './Products';
import Detail from './routes/Detail';
import Cart from './routes/Cart';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function App() {
  let [product, setProduct] = useState(data);
  let [check, setCheck] = useState('');
  let navigate = useNavigate();
  function SortProduct() {
    let copy = [...product].sort((a, b) => a.title.localeCompare(b.title));
    console.log( copy)
    setProduct(copy);
    console.log(product)
  }
  return (
    <div className='App'>
      <Navbar className="nav">
        <Container className='navBar'>
          <Nav.Link href="/" className="navLink">Home</Nav.Link>
          <Nav.Link onClick={() => { navigate('/detail') }} className="navLink">Detail</Nav.Link>
          <Navbar.Brand href="/" className='brandName'>Dear Room</Navbar.Brand>
          <Nav.Link onClick={() => { navigate('/cart') }} className="navLink">Cart</Nav.Link>
          <Nav.Link onClick={() => { navigate('/about') }} className="navLink">About</Nav.Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<div>

          <div className='main-bg'></div>
          <div className='btnBox'>
            <button className='nameBtn' onClick={SortProduct}>이름순 정렬</button>
          </div>
          <div className="container">
            <div className="row" style={{ textAlign: 'center' }}>
              {product.map((it) => (
                <Products key={it.id} {...it} />
              ))}
            </div>
          </div>
        </div>} />
        <Route path='/detail/:id' element={<Detail product={product} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>🚫 없는 페이지 입니다 🚫</div>} />
        <Route path='/about' element={<About />} >
          <Route path='member' element={<div><h4>멤버임</h4></div>} />
          <Route path='location' element={<div><h4>위치정보임</h4></div>} />
        </Route>
        <Route path='/event' element={<Event />} >
          <Route path='one' element={<div><h4>첫 주문시 양배추즙 서비스</h4></div>} />
          <Route path='two' element={<div><h4>생일기념 쿠폰 받기</h4></div>} />
        </Route>
      </Routes>
      <br></br>



    </div>
  );
}



function About() {
  return (
    <>
      <h4>회사 정보 입니다. </h4>
      <Outlet></Outlet>
    </>
  )
}

function Event() {
  return (
    <>
      <h4>오늘의 이벤트 </h4>
      <Outlet></Outlet>
    </>
  )
}


export default App;
