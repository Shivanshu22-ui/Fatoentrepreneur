import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "./Destination1.png";
import Destination2 from "./Destination2.png";
import Destination3 from "./Destination3.png";
import Destination4 from "./Destination4.png"; 
import Destination5 from "./Destination5.png";
import Destination6 from "./Destination6.png";
import info1 from "./info1.png";
import info2 from "./info2.png";
import info3 from "./info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Netherlands Antilles",
      subTitle: " the Netherlands Antilles, an autonomous  ",
      cost: "$ 38,800",
      duration: "Anytime",
      city:"Amsterdam",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "$ 54,200",
      duration: "Anytime",
      city:"Bangkok",
    },
    {
      image: Destination3,
      title: "Spain",
      subTitle: "Spain is the largest country in Southern Europe, the  ",
      cost: "$ 45,500",
      duration: "Anytime",
      city: "Barcelona",
    },
    {
      image: Destination4,
      title: "New Delhi",
      subTitle: "New Delhi is the seat of all three branches of the ,",
      cost: "$ 24,100",
      duration: "Anytime",
      city :"Delhi"
    },
    {
      image: Destination5,
      title: "India",
      subTitle: "Jaipur is a popular tourist destination in ",
      cost: "$ 95,400",
      duration: "Anytime",
      city:"Jaipur"
    },
    {
      image: Destination6,
      title: "United kingdom",
      subTitle: "London, the capital of England and the United",
      cost: "$ 38,800",
      duration: "Anytime",
      city:"London"
    },
  ];

  const packages = [
    "Weekend Break",
    "Package Holiday",
    "Group Tour",
    "Long Term Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h1>Popular Cities</h1>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.city}</h3>
              <span>{destination.title}</span>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0 7rem;
  .title {
    text-align: center;
    text-transform: uppercase;
    font-size:44px
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0 ;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor:pointer;
      }
      .active {
        border-bottom: 4px solid #1683d0;
        color:#1683d0;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8rem;
    padding: 0 4rem;
    .destination {
      padding: 25px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #68d3e81f;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
    //   &:hover {
    //     transform: translateX(0.4rem) translateY(-1rem);
    //     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    //   }
      img {
        width: 100%;
        transition: 0.3s ease-in-out;
        &:hover{
            transform:scale(1.02);
        }
      }
      h3{
          font-size:22px;
          color : #0077b6;
          margin : 0;
      }
      span{
          font-weight:600;
          color: #5c5b5b;
          position :relative ;
          top : -5px;
      }
      p{
        height:50px;
        font-weight: 600;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #48cae4d1;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
        span{
            font-weight:600;
            color : black;
            position :relative ;
            top : 0px;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
