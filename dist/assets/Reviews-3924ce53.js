import{r as c,b as l,j as e}from"./index-50c27fd0.js";import{c as m}from"./films-0430d5ef.js";import"./api-19539072.js";const h="_list_1igec_1",_="_item_1igec_6",u="_noReview_1igec_14",v="_author_1igec_18",x="_text_1igec_29",s={list:h,item:_,noReview:u,author:v,text:x},g=()=>{const[i,r]=c.useState([]),{movieId:o}=l();return c.useEffect(()=>{m(o).then(r).catch(t=>console.log(t))},[o]),i.length===0?e.jsx("p",{className:s.noReview,children:"Sorry. We don't have any reviews for this movie."}):e.jsx("ul",{className:s.list,children:i.map(({id:t,author:a,content:n})=>e.jsxs("li",{className:s.item,children:[e.jsxs("p",{className:s.author,children:["Author: ",a]}),e.jsx("p",{className:s.text,children:n})]},t))})};export{g as default};