let container = document.getElementById('render');
let input = document.getElementById('input');
let button = document.getElementById('button');
let postArr = [];

class Todo {
   constructor() {

   }
   addPost(){
      button.addEventListener('click', () => {
           let date = new Date();
           let post = {
                id: `${date.getMilliseconds()}`,
                text: `${input.value}`,
                isCheck: false
           }
           postArr.push(post);
           this.render();
      });
   }

   deletePost(button){
     button.addEventListener('click', (event) => {
         let id = event.target.getAttribute('data-id');
         postArr = postArr.filter((item)=>{
             return item.id !== id;
         })
         this.render();
     })
   }

   editPost(){

   }

   isCheck(checkbox){
      checkbox.addEventListener('click', () =>{
          let li = checkbox.parentElement;
          let p = li.querySelector('.post-text')
          p.classList.toggle('active');
      })
   }

   render(){
       container.innerHTML = '';
       input.value = '';
       postArr.forEach((item, index)=>{
         container.innerHTML += `<li><p class="post-text">${item.text}</p> <input class="post-checkbox" type="checkbox"> <button class="post-btn_delete" data-id="${item.id}">Delete Post</button></li>`
     })
       let AllDeleteBtn = document.querySelectorAll('.post-btn_delete');
     AllDeleteBtn.forEach((button) => {
           this.deletePost(button)
       })
       let AllCheckbox = document.querySelectorAll('.post-checkbox');
       AllCheckbox.forEach((checkbox) => {
          this.isCheck(checkbox);
     })
   }

   // Без учета регистра
   // validation (){
   //     let bedWords = ['bitch','asshole'];
   //     let valWord
   //     document.addEventListener('keyup',() => {
   //         if (input.value.length >= 6 ) {
   //             button.disabled = false;
   //         } else {
   //             button.disabled = true;
   //         }
   //         for (let i in bedWords){
   //             if (input.value.includes(bedWords[i])){
   //                 console.log(input.value.includes(bedWords[i]));
   //                 button.disabled = true;
   //                 break;
   //             }
   //         }
   //     })
   // }

   // Валидация на запрещенные слова
    validation (){
        let bedWords = /shit|fuck|bitch|asshole/i;
        document.addEventListener('keyup',() => {
            if (input.value.length >= 6 && !bedWords.test(input.value)) {
                button.disabled = false;
                console.log(bedWords.test(input.value));
            } else {
                button.disabled = true;
            }
        })
    }
}
let todo = new Todo();
todo.validation();
todo.addPost();





