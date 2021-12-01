import React, { useEffect, useState } from "react";
import axios from "axios";
import Message from "../components/Message";
import Loader from "../components/Loader";
import "./home.css";
import { Form, Input, Button } from "antd";

const HomePage = () => {
  const [logeding, setlogeding] = useState(true);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState();

  const [values, setValues] = useState([]);
  const [date, setDate] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [latitude, setLatitude] = useState("6.93194");
  const [longitude, setLongitude] = useState("-79.84778");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const [form] = Form.useForm();
  useEffect(() => {
    setUser(localStorage.getItem("userInfo"));
    if (user) {
      setlogeding(false);
      getWeather();
    } else {
      setMessage("Please Login....");
    }
  }, [user]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };
  const getWeather = (e) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=metric&cnt=7&appid=68c026c8fc9c9aa2b09633925d5b9701`
      )
      .then((res) => {
        setValues(res.data.daily);
        setTemperature(res.data.current.temp);
        setDate(res.data.current.dt);
        setImg(
          `http://openweathermap.org/img/wn/${res.data.current.weather[0].icon}.png`
        );
        setDescription(res.data.current.weather[0].description);
        setHumidity(res.data.current.humidity);
        setWind(res.data.current.wind_speed);
      })
      .catch((err) => {
        alert("Can not get Details Now....");
        console.log(err);
      });
  };
  return (
    <div className="row">
      {user ? (
        <div class="container">
          <h2>It's Time to Check Weather</h2>
          <h1> Search by Latitude & Longitude</h1>

          <form action="" id="join-us">
            <div class="fields">
              <span>
                <input
                  placeholder="Latitude"
                  value={latitude}
                  type="text"
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </span>
              <br />
              <span>
                <input
                  placeholder="Longitude"
                  value={longitude}
                  type="text"
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </span>
            </div>
            <div class="submit">
              <input
                class="submit"
                value="Submit"
                type="button"
                onSubmit={getWeather}
              />
            </div>
          </form>
          <div className="botm">
            <h1 className="botto-hed"> Weather Details</h1>
            <div>
              <h4 className="item_head">Date</h4>
              <input value={date}></input>
            </div>
            <div>
              <h4 className="item_head">Description</h4>
              <input value={description}></input>
            </div>
            <div>
              <h4 className="item_head">Humidity</h4>
              <input value={humidity}></input>
            </div>

            <div>
              <h4 className="item_head">Wind</h4>
              <input value={wind}></input>
            </div>
            <div>
              <h4 className="item_head">Temperature</h4>
              <input value={temperature}></input>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Message variant="danger">{message}</Message>
          <Loader />
        </>
      )}
    </div>
  );
};

export default HomePage;
