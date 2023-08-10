import{m as e}from"./api-19539072.js";const r=async s=>(await e.get(`/search/tv?query=${s}`)).data.results,n=async s=>(await e.get(`/tv/${s}`)).data;export{n as g,r as s};
