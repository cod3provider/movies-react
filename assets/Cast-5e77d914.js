import{r as n,b as x,j as s}from"./index-935b80f8.js";import{N as d}from"./placeholder-no-image-589f81b3.js";import{b as h}from"./films-0430d5ef.js";import"./api-19539072.js";const f="_list_ss58w_1",g="_item_ss58w_17",p="_noInfo_ss58w_33",j="_image_ss58w_41",v="_overlay_ss58w_57",w="_title_ss58w_67",N="_text_ss58w_67",t={list:f,item:g,noInfo:p,image:j,overlay:v,title:w,text:N},C=()=>{const[a,c]=n.useState([]),{movieId:o}=x(),m="https://image.tmdb.org/t/p/w200";if(n.useEffect(()=>{h(o).then(c).catch(e=>console.log(e))},[o]),a.length===0)return s.jsx("p",{className:t.noInfo,children:"We don't have any cast information on this movie."});const l=a.map(({id:e,profile_path:i,name:r,character:_})=>s.jsxs("li",{className:t.item,children:[s.jsx("img",{src:i?`${m}${i}`:d,alt:"",width:"200",className:t.image}),s.jsxs("div",{className:t.overlay,children:[s.jsx("p",{className:t.title,children:r}),s.jsxs("p",{className:t.text,children:["Character: ",_]})]})]},e));return s.jsx("div",{children:s.jsx("ul",{className:t.list,children:l})})};export{C as default};