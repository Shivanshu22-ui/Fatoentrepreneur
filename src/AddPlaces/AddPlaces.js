import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "./AddPlaces.css";
import Footer from "../assets/Components/Footer/Footer";

function AddPlaces() {
  const highlights = [
    {
      id: "wifi",
      value: "wifi",
      title: "Wifi",
    },
    {
      id: "reservations",
      value: "reservations",
      title: "Reservations",
    },
    {
      id: "creditCards",
      value: "creditCards",
      title: "Credit cards",
    },
    {
      id: "carParking",
      value: "carParking",
      title: "Car parking",
    },
    {
      id: "nonSmoking",
      value: "nonSmoking",
      title: "Non smoking",
    },
    {
      id: "swimmingPool",
      value: "swimmingPool",
      title: "Swimming pool",
    },
    {
      id: "airConditioner",
      value: "airConditioner",
      title: "Air conditioner",
    },
    {
      id: "cocktails",
      value: "cocktails",
      title: "cocktails",
    },
  ];
  return (
    <div className=" addplaces m-0 p-0">
      <div className=" container">
        <h3 className="py-4 addPlaceHeading">
          {" "}
          <span className="chgedcolor">Add</span> new place
        </h3>
        <div className="formfield">
          <h4>General </h4>
          <div className="fields my-4">
            <label htmlFor="place">
              <h6>Place Name*</h6>
              <input type="text" placeholder="What's the name of the place" />
            </label>
          </div>
          <div className="fields d-flex  my-4">
            <div className="col-4 px-2">
              <label htmlFor="place">
                <h6>Price*</h6>
                <input type="number" placeholder="Only Numbers" />
              </label>
            </div>
            <div className="col-4 px-2">
              <label htmlFor="place">
                <h6>Time</h6>
                <input type="Text" placeholder="Hours/Days/Month" />
              </label>
            </div>
          </div>
          <div className="fields my-4">
            <h6 className="editor my-4">Description</h6>
            <Editor className="editor my-4 py-4" />
          </div>
          <div className="fields my-4">
            <label htmlFor="place">
              <h6>Category*</h6>
              <select placeholder="select Category">
                <option value="">Select Category</option>
                <option value="Food and Drink">Food and Drink</option>
                <option value="Food and Drink">See & do</option>
                <option value="Food and Drink">Shopping</option>
                <option value="Food and Drink">Stay</option>
              </select>
            </label>
          </div>
          <div className="fields my-4">
            <label htmlFor="place">
              <h6>Place type*</h6>
              <select placeholder="select Category">
                <option value="">Select type</option>
                <option value="Activity">Activity</option>
                <option value="Apartment">Apartment</option>
                <option value="Bakeries">Bakeries</option>
                <option value="Bars">Bars</option>
                <option value="Coffee Shop">Coffee Shop</option>
                <option value="Culture">Culture</option>
                <option value="Hostel">Hostel</option>
                <option value="Hotel">Hotel</option>
                <option value="Luxery">Luxery</option>
                <option value="Market">Market</option>
                <option value="Museum">Museum</option>
                <option value="Park">Park</option>
                <option value="Resturants">Resturants</option>
                <option value="Temple">Temple</option>
              </select>
            </label>
          </div>
          <form action=""></form>
        </div>
        <div className="formfield">
          <h4>HIGHTLIGHTS </h4>
          <div className="fields my-4">
            <label htmlFor="place">
              <div className="inputFields d-flex justify-content-around align-items-start my-4">
                {highlights.map((data, index) => {
                  return (
                    <div className="d-flex flex-column mx-4">
                      <input
                        type="checkbox"
                        id={data.id}
                        value={data.value}
                        className="my-2 inputval"
                      />
                      <label for={data.id}>{data.title}</label>
                    </div>
                  );
                })}
              </div>
            </label>
          </div>
        </div>
        <div className="formfield">
          <h4>Menu </h4>
          <div className="fields d-flex  my-4">
            <div className="col-4 px-2">
              <label htmlFor="place">
                <h6>Name</h6>
                <input type="number" placeholder="Only Numbers" />
              </label>
            </div>
            <div className="col-4 px-2">
              <label htmlFor="place">
                <h6>Price</h6>
                <input type="Text" placeholder="Hours/Days/Month" />
              </label>
            </div>
            <label htmlFor="place">
              <h6>Type</h6>
              <select placeholder="select Category">
                <option value="">Select type</option>
                <option value="Food and Drink">Desert</option>
                <option value="Food and Drink">Main Course</option>
              </select>
            </label>
            <h6>Description</h6>
            <textarea
              rows="5"
              cols=""
              placeholder="Item description"
            ></textarea>
          </div>
          <div className="fields my-4">
            <label htmlFor="place">
              <h6>Description</h6>
              <textarea
                rows="5"
                cols=""
                placeholder="Item description"
              ></textarea>
            </label>
          </div>
          <div className="col-4 px-2">
            <label htmlFor="place">
              <h6>Image</h6>
              <input type="file" placeholder="Only Numbers" />
            </label>
          </div>
        </div>
        <div className="formfield">
          <h4>Location </h4>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <h6>City/Town*</h6>
              <select placeholder="select Category">
                <option value="">Select City/Town</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Bangkok">Bangkok</option>
                <option value="Barcelona">Barcelona</option>
                <option value="London">London</option>
                <option value="LosAngeles">Los Angeles</option>
                <option value="NewYork">New York</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
              </select>
            </label>
            <label htmlFor="place" className="mx-2">
              <h6>Time Zone</h6>
              <select placeholder="select Category">
                <option value="">UTC+0</option>
                <option value="time1">time1</option>
                <option value="time1">time2</option>
                <option value="time1">time3</option>
              </select>
            </label>
          </div>
          <div className="fields my-4">
            <label htmlFor="place">
              <h6>Place Address*</h6>
              <input type="text" placeholder="Full address" />
            </label>
          </div>
        </div>
        <div className="formfield">
          <h4>Contact Info </h4>
          <div className="fields my-4">
            <label htmlFor="place" className="my-2">
              <h6>Email</h6>
              <input type="email" placeholder="Your email address" />
            </label>
            <label htmlFor="place" className="my-2">
              <h6>Phone Number 1(Optional)</h6>
              <input type="text" placeholder="Your phone 1 number" />
            </label>
            <label htmlFor="place" className="my-2">
              <h6>Phone Number 2(Optional)</h6>
              <input type="text" placeholder="Your phone 2 number" />
            </label>
            <label htmlFor="place" className="my-2">
              <h6>Website (Optional)</h6>
              <input type="text" placeholder="Your website url" />
            </label>
          </div>
        </div>
        <div className="formfield">
          <h4>Social Networks </h4>
          <div className="fields my-4">
            <label htmlFor="place" className="my-2">
              <h6>Facebook</h6>
              <input type="text" placeholder="Facebook url" />
            </label>
            <label htmlFor="place" className="my-2">
              <h6>Instagram</h6>
              <input type="text" placeholder="Instagram url" />
            </label>
            <label htmlFor="place" className="my-2">
              <h6>Twitter</h6>
              <input type="text" placeholder="Twitter url" />
            </label>
          </div>
        </div>
        <div className="formfield">
          <h4> Opening Hours </h4>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <input type="text" placeholder="day" value="Monday" />
            </label>
            <label htmlFor="place" className="mx-2">
              <input
                type="Text"
                placeholder="9:00AM - 5:00 PM OR 9:00AM - 11:00 AM"
              />
            </label>
          </div>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <input type="text" placeholder="day" value="Tuesday" />
            </label>
            <label htmlFor="place" className="mx-2">
              <input
                type="Text"
                placeholder="9:00AM - 5:00 PM OR 9:00AM - 11:00 AM"
              />
            </label>
          </div>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <input type="text" placeholder="day" value="Wednesday" />
            </label>
            <label htmlFor="place" className="mx-2">
              <input
                type="Text"
                placeholder="9:00AM - 5:00 PM OR 9:00AM - 11:00 AM"
              />
            </label>
          </div>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <input type="text" placeholder="day" value="Thursday" />
            </label>
            <label htmlFor="place" className="mx-2">
              <input
                type="Text"
                placeholder="9:00AM - 5:00 PM OR 9:00AM - 11:00 AM"
              />
            </label>
          </div>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <input type="text" placeholder="day" value="Friday" />
            </label>
            <label htmlFor="place" className="mx-2">
              <input
                type="Text"
                placeholder="9:00AM - 5:00 PM OR 9:00AM - 11:00 AM"
              />
            </label>
          </div>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <input type="text" placeholder="day" value="Saturday" />
            </label>
            <label htmlFor="place" className="mx-2">
              <input
                type="Text"
                placeholder="9:00AM - 5:00 PM OR 9:00AM - 11:00 AM"
              />
            </label>
          </div>
          <div className="fields d-flex  my-4">
            <label htmlFor="place" className="mx-2">
              <input type="text" placeholder="day" value="Sunday" />
            </label>
            <label htmlFor="place" className="mx-2">
              <input type="Text" placeholder="Closed" />
            </label>
          </div>
        </div>
        <div className="formfield">
          <h4>FAQs </h4>
          <div className="fields my-4">
            <label htmlFor="place" className="my-2">
              <h6>Questions</h6>
              <input type="text" placeholder="Question" />
            </label>
            <label htmlFor="place" className="my-2">
              <h6>Answer</h6>
              <textarea rows="2" cols="" placeholder="Answer"></textarea>
            </label>
          </div>
        </div>
        <button className="submitbtn my-4">Submit</button>
      </div>
      <Footer />
    </div>
  );
}

export default AddPlaces;
