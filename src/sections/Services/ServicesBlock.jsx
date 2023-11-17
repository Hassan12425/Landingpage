import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row} from "react-bootstrap";
import {IoIosPeople} from "react-icons/io";
import {IoNewspaperOutline} from "react-icons/io5";
import {CiBasketball} from "react-icons/ci";
import {TbPaperclip, TbWorld} from "react-icons/tb";
import {BiBuilding} from "react-icons/bi";
import { CardItemStyled, StyledRow } from "./Services.style";

const ServicesBlock = () => {
  return (
    <div className="services-block">
    <StyledRow>
        <Col sm={12} md={6} lg={4}>
          <CardItemStyled >
            <div className="card-icon-square">
              <IoNewspaperOutline />
            </div>
            <h4>Lorem Ipsum</h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </CardItemStyled>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <CardItemStyled >
            <div className="card-icon-square">
              <IoIosPeople />
            </div>
            <h4>Sed ut perspiciatis</h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </CardItemStyled>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <CardItemStyled >
            <div className="card-icon-square">
              <CiBasketball />
            </div>
            <h4>Magni Dolores</h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </CardItemStyled>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <CardItemStyled >
            <div className="card-icon-square">
              <TbPaperclip />
            </div>
            <h4>Nemo Enim</h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </CardItemStyled>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <CardItemStyled >
            <div className="card-icon-square">
              <TbWorld />
            </div>
            <h4>Dele cardo</h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </CardItemStyled>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <CardItemStyled >
            <div className="card-icon-square">
              <BiBuilding />
            </div>
            <h4>Divera don</h4>
            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
          </CardItemStyled>
        </Col>

        </StyledRow>
    </div>
  );
};

export default ServicesBlock;
