export async function getClimaDetalles(lon, lat){
    const API_Detalles = `
    https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunset,sunrise&hourly=temperature_2m,visibility&current=temperature_2m,precipitation,wind_speed_10m,relative_humidity_2m&timezone=auto&forecast_days=1`
    const response = await fetch(API_Detalles);
    const responseJSON = await response.json();

    return responseJSON
    
}