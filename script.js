const button=document.getElementById('btn');
const list_container=document.getElementById('list-container');
const input=document.getElementById('input-box');

button.addEventListener('click',()=>{
    if(input.value==='')
        {
          alert("First add your text...");
        }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        list_container.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);

        localStorage.setItem("data",list_container.innerHTML);
    }
    input.value=""
});

list_container.addEventListener('click',(e)=>{

    if(e.target.tagName==='LI')
        {
            e.target.classList.toggle('checked');
            localStorage.setItem("data",list_container.innerHTML);
        }
    if(e.target.tagName==='SPAN')
        {
            e.target.parentElement.remove();
            localStorage.setItem("data",list_container.innerHTML);
        }

        
});

list_container.innerHTML=localStorage.getItem('data');
