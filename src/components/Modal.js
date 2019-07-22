import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 textcenter text-capitalize p-5"
                    >
                      <h1>item added to cart</h1>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5> price : $ {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          store
                        </ButtonContainer>
                      </Link>
                      <Link to="/">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10rem;
   #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
