const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(10, 10));

const throwError = (message: string): never => {
    throw new Error(message);
};

console.log(throwError("hello"));

const forecast = {
    date: new Date(),
    weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): string => {
    return forecast.weather;
};
