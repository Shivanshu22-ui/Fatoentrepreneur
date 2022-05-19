import React, { useEffect, useState } from "react";
import { NavLink, Link, useParams, useHistory } from "react-router-dom";

import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const location = useHistory();
  const [storydata, setStoryData] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fatoentrepreneur.herokuapp.com/stories`)
      .then((res) => res.json())
      .then((json) => {
        setStoryData(json.result);
        console.log(json.result);
        console.log(json.result[0].category);
        setLoading(false);
      });
  }, []);
  console.log(storydata);

  const content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
  officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
  fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
  atque, exercitationem quibusdam, reiciendis odio laboriosam?`;
  return (
    <div className="posts">
      {loading
        ? "loading"
        : storydata.map((story, index) => {
            return (
              <Post
                key={index}
                img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                place={story.city}
                category={story.category}
                topic={story.title}
                timeposted="1"
                content={story.description}
              />
            );
          })}

      {/* <Post 
      img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      place="London"
      category="Stay"
      topic="Lorem ipsum dolor sit amet"
      timeposted="1"
      content={content} />

      <Post 
      img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
       place="Paris"
      category="Food"
      topic="Lorem ipsum dolor sit amet"
      timeposted="2"
      content={content} />
      
      <Post 
      img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      place="India"
      category="Travel"
      topic="Lorem ipsum dolor sit amet"
      timeposted="1.5"
      content={content}/>

      <Post 
      img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      place="London"
      category="stay"
      topic="Lorem ipsum dolor sit amet"
      timeposted="3"
      content={content}/>

      <Post 
      img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      place="London"
      category="stay"
      topic="London  ipsum dolor sit amet "
      timeposted="2"
      content={content}/> */}
    </div>
  );
}
