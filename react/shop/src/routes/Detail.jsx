import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail(props) {

    let { id } = useParams();
    console.log(id)
    let checkedId = props.product.find(item => item.id == id);
    console.log(checkedId)


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={checkedId.img} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{checkedId.title}</h4>
                    <p>{checkedId.content}</p>
                    <p>{checkedId.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;