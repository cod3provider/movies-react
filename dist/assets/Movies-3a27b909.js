import{r as a,u as f,j as e}from"./index-935b80f8.js";import{s as t,F as x,k as d,Q as g}from"./Movies.module-b52b22b8.js";import{M as v}from"./MoviesList-e6c1eeff.js";import{C as j}from"./Container-e9ed2840.js";import{s as S}from"./films-0430d5ef.js";import"./iconBase-12379cbb.js";import"./placeholder-no-image-589f81b3.js";import"./api-19539072.js";const L=()=>{const[n,u]=a.useState([]),[i,c]=a.useState(""),[l,m]=f(),o=l.get("query"),p=s=>{c(s.target.value.toLowerCase())},h=s=>{s.preventDefault(),m({query:i}),c("")};return a.useEffect(()=>{if(!o)return;async function s(){try{const r=await S(o);if(r.length===0){g.warn("Oooops. Something went wrong");return}u(r)}catch(r){console.log(r)}}s()},[o]),e.jsxs(j,{children:[e.jsxs("form",{className:t.form,onSubmit:h,children:[e.jsx("input",{className:t.input,type:"text",value:i,onChange:p,placeholder:"Enter the movie title"}),e.jsxs("button",{type:"submit",className:t.button,children:[e.jsx("span",{className:t.buttonLabel,children:"Search"}),e.jsx(x,{className:t.icon})]})]}),n&&e.jsx(v,{movies:n}),e.jsx(d,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})};export{L as default};