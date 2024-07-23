function subscribe(){
    const subText= document.querySelector('.js-sub-btn');
    document.querySelector('.js-sub-btn').addEventListener('click',function(){
    if( subText.innerHTML==='subscribe'){
       subText.innerHTML= "subscribed";
    }
    else {
         subText.innerHTML='subscribe';
    }
   });
  }
  subscribe();//calling the subscription button
  //amazon calculater
  function calculateTotal(){
    let orderTotal =document.querySelector('.js-cost-input');
    
    document.querySelector('.btn-cal').addEventListener('click',()=>{
      console.log(  document.querySelector('.js-cost-input'));
      let cost =Number(orderTotal.value);
      if(cost < 40){
        cost = cost + 10;
        document.querySelector('.total').innerHTML = `Ksh ${cost}`;
      }
      else {
        document.querySelector('.total').innerHTML =  `Ksh ${cost}`;;
      }
    
    })
  }
  calculateTotal();
     function entershotcut(event){
            if(event.key==='Enter'){
                calculateTotal();
            }
        }








  const todoList =[{
    name:'cook',
    deudate:'2024-7-23'
  },
{
  name:'fuck',
  deudate:'2024-7-23'
}];//empty array

  renderTodoList()
  function renderTodoList(){
   let todoListHtml ='';
       for(let i= 0; i<todoList.length; i++){
         const todoObject = todoList[i];
       //  const name  =todoObject.name;
      //   const deudate = todoObject.deudate;
         const {name ,deudate} = todoObject;
         const html = `
         <div>  ${name} </div>
         <div>    ${deudate} </div>
         
             <button class="delete-btn" onclick="
              todoList.splice(${i},1);
              renderTodoList();
             ">Delete</button>
         `;
         todoListHtml += html;
       }
       console.log(todoListHtml);
 
      document.querySelector('.js-todo-list').innerHTML=todoListHtml;
 
     }
  function addTodo(){
   const inputElement = document.querySelector('.js-input');
     const name= inputElement.value;
     const dateIjnputElement = document.querySelector('.js-due-date-input');
     const deudate =dateIjnputElement.value;
     todoList.push({
    //  name:name,
    //  deudate:deudate,
      name,
      deudate
     });
     inputElement.value='';
     renderTodoList();

  }
