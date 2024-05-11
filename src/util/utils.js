// import formatter from 'number-format.js';
// export const normalize=(listings,size)=>{
//     console.log(listings);
//      return listings?.data?.map((value)=>{
//         return {
//             symbol:`${value.name} ${value.symbol}`,
//             percentageChange1hr:`${formatter("##.### %",value?.quote?.USD?.percent_change_1h)}`,
//             percentageChange24hr:`${formatter("##.### %",value?.quote?.USD?.percent_change_24h)}`,
//             price:`${formatter("$######.##",value?.quote?.USD?.price)}`,
//             volume24hr:`${formatter("$######.##",value?.quote?.USD?.volume_24h)}`,
//             marketCap:`${formatter("$######.##",value?.quote?.USD?.fully_diluted_market_cap)}`
//         }
//     }).slice(0,size);
// }