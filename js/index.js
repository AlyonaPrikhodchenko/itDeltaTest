import{renderCards}from"./render-content.js";import{getData}from"./api.js";!async function(){const r=await getData();renderCards(r)}();