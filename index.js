import{a as L,i as p,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const q="48188433-e0448b24de47b1903ec6a4bb7",m=(r,t)=>{const s={params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}};return L.get("https://pixabay.com/api/",s)},f=r=>r.map(({webformatURL:t,largeImageURL:s,tags:c,likes:e,views:o,comments:i,downloads:b})=>`<a href="${s}" class="gallery-item">
  <div class="photo-card">
  <img src="${t}" alt="${c}" loading="lazy" width="360" />
  <div class="photo-info">
    <p class="photo-info-item">Likes<span>${e}</span></p>
	<p class="photo-info-item">Views<span>${o}</span></p>
	<p class="photo-info-item">Comments<span>${i}</span></p>
	<p class="photo-info-item">Downloads<span>${b}</span></p>
  </div>
  </div>
  </a>`).join(""),y=document.querySelector(".form-search"),u=document.querySelector(".gallery"),l=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let a=1,d="",h;l.style.display="none";const w=async r=>{try{if(r.preventDefault(),u.innerHTML="",l.style.display="block",d=r.currentTarget.elements.user_query.value.trim(),d===""){p.warning({title:"Warning",position:"topRight",message:"Please enter a search query!"});return}a=1,n.classList.add("is-hidden");const{data:t}=await m(d,a);if(l.style.display="none",!t.hits.length){p.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=f(t.hits);u.insertAdjacentHTML("beforeend",s),h=new v(".gallery-item",{captions:!0,captionsData:"alt",captionDelay:250}),h.refresh(),y.reset(),t.totalHits>1&&(n.classList.remove("is-hidden"),n.addEventListener("click",g))}catch{l.style.display="none"}};y.addEventListener("submit",w);const g=async r=>{try{a++;const{data:t}=await m(d,a),s=f(t.hits);u.insertAdjacentHTML("beforeend",s),h.refresh(),a*15>=t.totalHits&&(p.info({title:"Info",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.classList.add("is-hidden"),n.removeEventListener("click",g)),P()}catch{p.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again later."})}},P=()=>{const{height:r}=u.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})};
//# sourceMappingURL=index.js.map
