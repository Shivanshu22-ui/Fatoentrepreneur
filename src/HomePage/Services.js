import React from "react";
import styled from "styled-components";
import service1 from "./service1.png";
import service2 from "./service2.png";
import service3 from "./service3.png";
import service4 from "./service4.png";
import "./Services.css"

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Service 1",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
    },
    {
      icon: service2,
      title: "Service 2",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus, ",
    },
    {
      icon: service3,
      title: "Service 3",
      subTitle:
        " enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!.",
    },
    {
      icon: service4,
      title: "Service 4",
      subTitle:
        "enim ipsam magnam odit deserunt itaque? Minima earum velit tenetur!",
    },
  ];
  return (
    <div className="container-fluid">
    <Section id="services" className="px-4">
      {data.map((service, index) => {
        return (
          <div className="service ">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
    </div>
   
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    // &:hover {
    //   transform: translateX(0.4rem) translateY(-1rem);
    //   box-shadow: rgb(156 156 181 / 20%) 0px 7px 29px 0px;
    // }
    .icon {
      img {
        height: 2.0rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
