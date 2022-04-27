import React from "react";
import "./SingleStory.css";
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../../Footer/Footer";

function SingleStory() {
  return (
    <div>
      <div className="singlestoryhead container-fluid my-2">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 m-0">
            <div className="storyHeading">
              <span className="postTitle">
                <h2 className="text-center">
                  {" "}
                  <span className="chgedcolor"> Lorem</span> ipsum dolor sit
                  amet
                </h2>
              </span>
            </div>
            <div className="stroyContent text-start px-4 my-4" >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa rem ad, quia veritatis doloremque, quasi, deleniti ratione velit ipsam ab laudantium! Saepe in expedita cum quas dignissimos, ratione adipisci sed esse a, laborum, quos aspernatur quasi officiis dicta error inventore blanditiis minus accusantium. Quaerat deleniti porro minima. Possimus enim, id voluptatibus molestiae quas consequuntur autem saepe mollitia dolor. Reprehenderit adipisci consequuntur voluptatem unde harum labore impedit voluptate neque cupiditate soluta. Eos voluptatibus eaque reprehenderit. Magnam alias eaque dignissimos omnis beatae officia recusandae blanditiis vel ipsa cum praesentium veniam saepe nesciunt ad autem culpa, reprehenderit nihil ratione ea tenetur impedit incidunt iusto! Esse rerum explicabo aspernatur enim iure sed maiores, unde nesciunt voluptates soluta nam! Tempora dolores quas odio placeat totam reiciendis, a minima velit rerum doloremque optio facere enim repellat exercitationem voluptate delectus qui expedita perferendis quasi saepe animi ad, voluptates deserunt perspiciatis? Enim soluta ipsa quis tempora in!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa rem ad, quia veritatis doloremque, quasi, deleniti ratione velit ipsam ab laudantium! Saepe in expedita cum quas dignissimos, ratione adipisci sed esse a, laborum, quos aspernatur quasi officiis dicta error inventore blanditiis minus accusantium. Quaerat deleniti porro minima. Possimus enim, id voluptatibus molestiae quas consequuntur autem saepe mollitia dolor. Reprehenderit adipisci consequuntur voluptatem unde harum labore impedit voluptate neque cupiditate soluta. Eos voluptatibus eaque reprehenderit. Magnam alias eaque dignissimos omnis beatae officia recusandae blanditiis vel ipsa cum praesentium veniam saepe nesciunt ad autem culpa, reprehenderit nihil ratione ea tenetur impedit incidunt iusto! Esse rerum explicabo aspernatur enim iure sed maiores, unde nesciunt voluptates soluta nam! Tempora dolores quas odio placeat totam reiciendis, a minima velit rerum doloremque optio facere enim repellat exercitationem voluptate delectus qui expedita perferendis quasi saepe animi ad, voluptates deserunt perspiciatis? Enim soluta ipsa quis tempora in!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa rem ad, quia veritatis doloremque, quasi, deleniti ratione velit ipsam ab laudantium! Saepe in expedita cum quas dignissimos, ratione adipisci sed esse a, laborum, quos aspernatur quasi officiis dicta error inventore blanditiis minus accusantium. Quaerat deleniti porro minima. Possimus enim, id voluptatibus molestiae quas consequuntur autem saepe mollitia dolor. Reprehenderit adipisci consequuntur voluptatem unde harum labore impedit voluptate neque cupiditate soluta. Eos voluptatibus eaque reprehenderit. Magnam alias eaque dignissimos omnis beatae officia recusandae blanditiis vel ipsa cum praesentium veniam saepe nesciunt ad autem culpa, reprehenderit nihil ratione ea tenetur impedit incidunt iusto! Esse rerum explicabo aspernatur enim iure sed maiores, unde nesciunt voluptates soluta nam! Tempora dolores quas odio placeat totam reiciendis, a minima velit rerum doloremque optio facere enim repellat exercitationem voluptate delectus qui expedita perferendis quasi saepe animi ad, voluptates deserunt perspiciatis? Enim soluta ipsa quis tempora in!</p>
            </div>
          </div>
          <div className="col-4">
            <div className="sidebar">
              <Sidebar image="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" />
            </div>
          </div>
          <div className="otherStories">
              <h2 className="m-4"> <span className="chgedcolor">Some</span>  other stories</h2>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default SingleStory;
