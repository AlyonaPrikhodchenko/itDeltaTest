import{showPhotoCard}from"./create-card.js";import{getFullImage,postData}from"./api.js";import{addContentPopup}from"./create-popup.js";import{closePopup}from"./util.js";const bodyEl=document.querySelector("body"),photoList=document.querySelector(".photos__list"),renderCards=e=>{e.forEach((e=>{const o=showPhotoCard(e);photoList.append(o),o.addEventListener("click",(async o=>{o.preventDefault();const t=await getFullImage(e.id),r=addContentPopup(t);bodyEl.append(r);const a=document.querySelector(".modal__form");a.addEventListener("submit",(async e=>{e.preventDefault();const o=document.querySelector(".modal"),r=a.querySelector("#comment"),d={name:t.id,comment:r.value};204===(await postData(d,t.id)).status&&o.remove()})),closePopup(r)}))}))};export{renderCards};