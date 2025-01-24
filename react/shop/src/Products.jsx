import { Routes, Route, Link } from 'react-router-dom'

function Products({ title, price, img }) {
    return (

        <div className="col-md-4 ">
            <Link to="/detail"><img src={img} alt="제품 이미지" width="80%" /></Link>
            <h4>{title}</h4>
            <p>{price}</p>
        </div>


    )
}

export default Products