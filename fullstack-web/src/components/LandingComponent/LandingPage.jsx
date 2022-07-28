import React, {useEffect, useState} from "react";
import './LandingStyles.css'
import NavigationHeader from "../NavigationHeader";
import axios from "axios";
import moment from "moment-timezone";
import {config} from "../../api/config";

function LandingPage() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [locationName, setLocationName] = useState('');

    let image = document.getElementById("weather-image");
    let weatherContainer = document.getElementById("weather-main-container");

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&units=imperial&appid=` + config

    useEffect(() => {
        if (Object.keys(data).length !== 0) {
            setTemp(data.main.temp);
            setDescription(data.weather[0].description);
            setCurrentTime(getCurrentTime());
            getProperImage(data.weather[0].description)
            setLocationName(data.name)
            weatherContainer.style.visibility = 'visible'
        }

    }, [data])


    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url)
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    alert(error)
                })
        }
    }

    function getProperImage(description) {
        const currentTimeLocal = Date.parse('01/01/2022 ' + getCurrentTime())
        const sunSet = Date.parse('01/01/2022 ' + getSunset())
        const sunRise = Date.parse('01/01/2022 ' + getSunrise())
        description = description.toUpperCase();

        if (description.includes("CLEAR") && (getCurrentTime() < "12:00 AM") && (currentTimeLocal < sunSet)) {
            image.src = require("../../images/Sunny.png")
            image.hidden = false
        } else if (description.includes("CLEAR") && (getCurrentTime() > "12:00 AM") && (currentTimeLocal < sunRise)) {
            image.src = require("../../images/ClearNight.png")
            image.hidden = false
        }

        if ((description.includes("CLOUD") || description.includes("HAZE")) && (getCurrentTime() < "12:00 AM") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/PartlyCloudyDay.png")
            image.hidden = false
        } else if ((description.includes("CLOUD") || description.includes("HAZE")) && (getCurrentTime() > "12:00 AM") && (currentTimeLocal < sunSet)) {
            image.src = require("../../images/PartlyCloudyNight.png")
            image.hidden = false
        }

        if (description.includes("RAIN") && (getCurrentTime() < "12:00 AM") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/ModRainSwrsDay.png")
            image.hidden = false
        } else if (description.includes("RAIN") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/ModRainSwrsNight.png")
            image.hidden = false
        }

        if (description.includes("MIST") && (getCurrentTime() < "12:00 AM") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/IsoRainSwrsDay.png")
            image.hidden = false
        } else if (description.includes("MIST") && (getCurrentTime() < "12:00 AM") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/IsoRainSwrsNight.png")
            image.hidden = false
        }

        if (description.includes("RAIN") && description.includes("THUNDER") && (getCurrentTime() < "12:00 AM") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/PartCloudRainThunderDay.png")
            image.hidden = false
        } else if (description.includes("RAIN") && description.includes("THUNDER") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/PartCloudRainThunderNight.png")
            image.hidden = false
        }

        if (description.includes("SNOW") && (getCurrentTime() < "12:00 AM") && (currentTimeLocal > sunSet)) {
            image.src = require("../../images/ModSnowSwrsDay.png")
            image.hidden = false
        } else if (description.includes("SNOW") && (currentTime > sunSet)) {
            image.src = require("../../images/ModSnowSwrsNight.png")
            image.hidden = false
        }

    }

    const getCurrentTime = () => {
        const zip_to_timezone = require('zipcode-to-timezone');
        const tz = zip_to_timezone.lookup(location);

        return moment().tz(tz).format("h:mm A");
    }

    const getSunset = () => {
        const zip_to_timezone = require('zipcode-to-timezone');
        const tz = zip_to_timezone.lookup(location);
        const utcTime = moment.unix(data.sys.sunset).utc().format()
        const convertMoment = moment(utcTime);

        return convertMoment.tz(tz).format('h:mm A')
    }

    const getSunrise = () => {
        const zip_to_timezone = require('zipcode-to-timezone');
        const tz = zip_to_timezone.lookup(location);
        const utcTime = moment.unix(data.sys.sunrise).utc().format()
        const convertMoment = moment(utcTime);

        return convertMoment.tz(tz).format('h:mm A')
    }

    return (
        <div id="main-container">
            <NavigationHeader/>
            <div className="search-location-container">
                <input id="zip-location-input"
                       value={location}
                       type="text"
                       placeholder="Enter City"
                       onChange={(event) => {
                           setLocation(event.target.value)
                       }}
                       onKeyPress={searchLocation}
                />
            </div>
            <div id="weather-main-container">
                <div id="weather-image-container">
                    <img id="weather-image"
                         src={require('../../images/Blizzard.png')}
                         hidden={true}/>
                </div>
                {data.main ? <span id="location-name-span">{locationName}</span> : null}
                {data.main ? <span id="currentTime-span">{currentTime}</span> : null}
                {data.main ? <h1 id="temp-header">{temp.toPrecision(3)}°F</h1> : null}
                {data.weather ? <span id="description-span">{description.toUpperCase()}</span> : null}
            </div>
        </div>
    );
}

export default LandingPage