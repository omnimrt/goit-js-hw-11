import{i as a,S as u}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),l=document.querySelector(".gallery"),m=document.querySelector("input"),p=document.querySelector(".container"),f=()=>{const n=document.createElement("span");n.classList.add("loader"),p.append(n)},d=()=>{const n=document.querySelector(".loader");n&&n.remove()};c.addEventListener("submit",n=>{f(),n.preventDefault(),l.innerHTML="";const i="41249104-77dc8b1e0563744cb8297ef15",s=m.value;fetch(`https://pixabay.com/api/?key=${i}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0)a.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"});else{const e=o.hits.map(r=>`<li class="gallery-item"><a href="${r.webformatURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"></a>
          <p><b>Likes: </b>${r.likes}</p>
          <p><b>Views: </b>${r.views}</p>
          <p><b>Comments: </b>${r.comments}</p>
          <p><b>Downloads: </b>${r.downloads}</p>
          </li>`).join("");l.insertAdjacentHTML("afterbegin",e);const t=new u(".gallery a",y);t.on("show.simplelightbox"),t.refresh(),c.reset()}}).catch(o=>{console.log(o)}).finally(()=>{d()})});const y={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};
//# sourceMappingURL=commonHelpers.js.map