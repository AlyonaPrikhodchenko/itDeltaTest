const commentForm=document.querySelector(".modal__form"),commentList=document.querySelector(".modal__photo-comments"),commentInput=document.querySelector(".modal__form-textarea"),addCommentsPhoto=()=>{if(""!=commentInput.value){const e=document.createElement("li");e.textContent=commentInput.value,commentInput.value="",commentList.append(e)}else alert("Невозможно отправить пустое сообщение!")};commentForm.addEventListener("submit",(e=>{e.preventDefault(),addCommentsPhoto()})),document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),addCommentsPhoto())}));