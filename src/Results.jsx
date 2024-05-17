function Results({ loading, results }) {
  const date = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  function timeConvert(unix_timestamp) {
    var date = new Date(unix_timestamp * 1000);
    return date.toLocaleTimeString();
  }
  console.log(results);
  if (loading) {
    return <p>loading...</p>;
  }
  if (results) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-center">
          {results.name} <span>{results.sys.country}</span>
        </h2>
        <h3 className="text-sm  text-center mb-6 font-light">{date}</h3>
        <p className="text-xl text-center mb-6">{results.weather[0].main}</p>
        <div className="flex justify-around items-center">
          <p className="text-4xl font-bold my-auto">{results.main.temp} C</p>
          <ul className="text-sm mb-4">
            <li> Feels like : {results.main.feels_like} C</li>
            <li> Humidity : {results.main.humidity}%</li>
            <li> Min Temp : {results.main.temp_min} C</li>
            <li> Max Temp : {results.main.temp_max} C</li>
          </ul>
        </div>

        <p className="text-sm font-medium text-center mb-6">
          Sunrise : {timeConvert(results.sys.sunrise)} | Sunset :{" "}
          {timeConvert(results.sys.sunset)} | Wind speed : {results.wind.speed}{" "}
          | Pressure : {results.main.pressure}
        </p>
      </div>
    );
  }
}

export default Results;
