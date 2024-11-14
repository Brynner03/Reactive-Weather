import React from 'react';
import WeatherCard from './WeatherCard';

const Location = ({ data, location }) => {
    const cityData = data.find(item => item.city === location);

    return (
        <div className="location-card">
            {cityData ? (
                <WeatherCard data={cityData} title="Your Location's Weather" />
            ) : (
                <p>City data not available</p>
            )}
        </div>
    );
};

export default Location;
