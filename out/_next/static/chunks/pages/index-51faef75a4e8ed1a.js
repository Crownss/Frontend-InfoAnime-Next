(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3204:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7193)}])},8709:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(1527),s=n(7758),i=n.n(s),o=n(959);function r(e){let[t,n]=(0,o.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[e.data?e.data.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mt-10"}),(0,a.jsx)("div",{className:"container mx-auto flex flex-wrap justify-around",children:(0,a.jsxs)("div",{className:"card w-96 bg-base-100 shadow-xl image-full",children:[(0,a.jsx)("figure",{className:"",children:(0,a.jsx)(i(),{src:e.images.webp.large_image_url,alt:e.title,fill:!0,className:"rounded-2xl"})}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("button",{className:"card-title font-bold text-center tooltip","data-tip":"more information...",onClick:()=>t?n(!1):n(!0),children:e.title}),(0,a.jsx)("p",{className:"text-ellipsis overflow-hidden text-left indent-5",children:e.synopsis})]})]})})]},e.mal_id)):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("h1",{className:"font-bold text-center",children:["I don't know what is wrong but, you can go"," ",(0,a.jsxs)("button",{onClick:function(){window.history.back()},className:"font-bold",children:[" ","back"," "]})," ","or"," ",(0,a.jsxs)("button",{onClick:function(){window.location.href="/"},className:"font-bold",children:[" ","refresh"," "]})," ","this page"]})}),t?(0,a.jsx)("dialog",{className:"modal modal-bottom sm:modal-middle",children:(0,a.jsxs)("form",{method:"dialog",className:"modal-box",children:[(0,a.jsx)("h3",{className:"font-bold text-lg",children:"Hello!"}),(0,a.jsx)("p",{className:"py-4",children:"Press ESC key or click the button below to close"}),(0,a.jsx)("div",{className:"modal-action",children:(0,a.jsx)("button",{className:"btn",children:"Close"})})]})}):()=>n(!1),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},2407:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(1527),s=n(2884),i=n(9200),o=n.n(i),r=n(5027),l=n.n(r),c=n(7758),d=n.n(c),m=n(3462),u=n(2147),h=n(959),x=n(3669),b=n(8806);function j(){let e;let t=(0,h.useRef)(null),[n,i]=(0,h.useState)(""),[o,r]=(0,h.useState)(!1),[c,j]=(0,h.useState)([]),p=b.Z.Search,f=(0,h.useCallback)(async t=>{i(t.target.value),""!==t.target.value?(await (clearTimeout(e),new Promise(function(t){e=setTimeout(function(){t(null)},700)})),x.Z.get(p+t.target.value).then(e=>j(e.data.data)).catch(e=>console.log(e.message))):j([])},[p]),g=(0,h.useCallback)(e=>{t.current&&!t.current.contains(e.target)&&(r(!1),window.removeEventListener("click",g))},[]),v=(0,h.useCallback)(()=>{r(!0),window.removeEventListener("click",g)},[g]),w=(0,s.useRouter)(),[N,y]=(0,h.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"navbar bg-gray-700 items-start",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"mt-10"}),(0,a.jsx)(l(),{href:"/",className:"normal-case text-2xl font-bold text-indigo-100",children:(0,a.jsx)(d(),{alt:"logo",src:"/alice.png",width:50,height:10})})]}),(0,a.jsxs)("div",{className:"flex-none gap-2",children:[(0,a.jsxs)("div",{className:"form-control",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search ....",className:"input input-ghost w-full max-w-xs rounded-xl",onChange:f,onFocus:v,value:n}),(0,a.jsx)("div",{className:"",children:o&&c&&n?n.length>0&&(0,a.jsx)("ul",{className:"absolute z-50 border border-cyan-400 bg-base-100 rounded-xl",children:c.map(e=>{let{mal_id:t,title:n,url:s}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:s,children:(0,a.jsx)("p",{className:"font-semibold transition duration-500 ease-in-out hover:text-blue-500",children:n})})},t)})}):null})]}),(0,a.jsxs)("div",{className:"dropdown dropdown-end rounded-lg",onClick:()=>N?y(!1):y(!0),children:[(0,a.jsx)("label",{tabIndex:0,className:"btn btn-rounded btn-outline rounded-lg",children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(m.G,{icon:u.xiG})})}),N?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{tabIndex:0,className:"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-lg w-52",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/",className:"/"===w.pathname?"justify-between border-solid border-2 hover:rounded-xl border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/movie",className:"/movie"===w.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Movie"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/about",className:"/about"===w.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"About"})})]})}):()=>y(!1)]})]})]})})}function p(e){let t=(0,s.useRouter)(),n="/alice.png";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("link",{rel:"icon",type:"image/png",href:n}),(0,a.jsx)("link",{rel:"shorcut icon",href:n}),(0,a.jsx)("link",{rel:"canonical",href:t.pathname}),(0,a.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"title",content:e.name}),(0,a.jsx)("meta",{name:"description",content:"InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList"}),(0,a.jsx)("meta",{name:"keywords",content:"infoanime, animeinfo, anime, info, ianime, animes"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.jsx)("meta",{name:"language",content:"id"}),(0,a.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,a.jsx)("meta",{name:"author",content:e.name}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,a.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,a.jsx)("meta",{name:"og:locale",property:"og:locale",content:"id"}),(0,a.jsx)("meta",{name:"og:title",property:"og:title",content:e.name}),(0,a.jsx)("meta",{name:"og:description",property:"og:description",content:"InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList"}),(0,a.jsx)("meta",{name:"og:site_name",property:"og:site_name",content:e.name}),(0,a.jsx)("meta",{name:"og:type",property:"og:type",content:"website"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:e.name}),(0,a.jsx)("meta",{name:"mobile-web-app-capable",property:"mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{httpEquiv:"content-language",content:"id"}),(0,a.jsx)("title",{children:e.name+" | "+e.title})]}),(0,a.jsxs)("div",{className:"",children:[e.children,(0,a.jsx)(j,{}),(0,a.jsx)("div",{className:"mt-10"})]})]})}},8806:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let a="https://api.jikan.moe/v4";class s{}s.Home=a+"/seasons/upcoming",s.Movie=a+"/anime?type=movie&status=upcoming",s.Search=a+"/anime?q=",s.Detail=a+"/anime/:id/full"},7193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(1527),s=n(8709),i=n(2407),o=n(959),r=n(8806);function l(){let[e,t]=(0,o.useState)([]),[n,l]=(0,o.useState)(1),[c,d]=(0,o.useState)(!1);(0,o.useEffect)(()=>{m(10,1)},[]);let m=async(e,n)=>{let a=await fetch(r.Z.Home+"?limit=".concat(e,"&page=").concat(n),{method:"GET"}),s=await a.json();l(s.pagination.current_page),d(s.pagination.has_next_page),t(s)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:"Home",name:"infoanime"}),(0,a.jsxs)("div",{className:"join grid grid-cols-2 xl:float-right",children:[(0,a.jsx)("button",{className:"join-item btn btn-ghost",disabled:1===n?"disable":"",onClick:()=>{m(10,n-1)},children:"Previous"}),(0,a.jsx)("button",{className:"join-item btn btn-ghost",disabled:c?"":"disable",onClick:()=>{m(10,n+1)},children:"Next"})]}),(0,a.jsx)(s.Z,{data:e.data})]})}}},function(e){e.O(0,[286,723,774,888,179],function(){return e(e.s=3204)}),_N_E=e.O()}]);