

function search(){
    const inputValue=document.getElementById('search').value.toUpperCase();
    let items=Array.from(document.querySelectorAll('.card'))
    items.filter(item=>{
        const h1=item.getElementsByTagName('h2')[0];
       let value=h1.innerText||h1.innerHTML||h1.textContent;

       if(value.toUpperCase().indexOf(inputValue)>-1){
        item.style.display="";
        return true
       }
       else{
        item.style.display="none";
        return false
       }
    })

}