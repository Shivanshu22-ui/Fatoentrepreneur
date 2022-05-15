import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/images/Destination1.png";
import Destination2 from "../assets/images/Destination2.png";
import Destination3 from "../assets/images/Destination3.png";
import Destination4 from "../assets/images/Destination4.png"; 
import Destination5 from "../assets/images/Destination5.png";
import Destination6 from "../assets/images/Destination6.png";
import { PopularCityCards } from "../assets/Components/Cards/Cards";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Recommend() {
  const location = useHistory()
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

  const cityClickHandler = (e) => {
    console.log("clicked",e)
    location.push(`city/${e}`)
  }

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend" className="container">
      <div className="title ">
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
      <div className="destinations d-flex flex-wrap ">
        {data.map((destination) => {
          return (
            <PopularCityCards
              image = {destination.image}
              city =  {destination.city}
              title = {destination.title}
              subTitle = {destination.subTitle}
              cost = {destination.cost}
              duration = {destination.duration}
              click={() => cityClickHandler(destination.city)}
            />
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
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    padding: 0 4rem;
    justify-content:space-between;
    
  }
  @media screen and (max-width: 776px){
    .destinations {
      justify-content:cenetr;
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
