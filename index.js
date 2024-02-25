
//code for seach item
function search() {
    const inputValue = document.getElementById('search').value.toUpperCase();
    //sob gula card k akta array ty convert krty Array.from() use krci
    let items = Array.from(document.querySelectorAll('.card'))
    items.filter(item => {
        const h1 = item.getElementsByTagName('h2')[0];
        let value = h1.innerText || h1.innerHTML || h1.textContent;

        if (value.toUpperCase().indexOf(inputValue) > -1) {
            item.style.display = "";
            return true
        }
        else {
            item.style.display = "none";
            return false
        }
    })

}

//add evet to button

const btns = document.querySelectorAll('.btn1');
    Array.from(btns).map(btn=>{
       btn.addEventListener('click',function(event){
      let price=parseInt((event.target.parentNode.parentNode.childNodes[3].childNodes[1]).innerText)
       let name=(event.target.parentNode.parentNode.childNodes[1]).innerText
       appendChildFor('child-container',name)
       appendChildFor('price-container',price)
       const totalNumaber=document.getElementById('total-price');
       const totalString=totalNumaber.innerText;
    //    console.log(totalString)
       const total=parseFloat(totalString)
       console.log(total)
       const CartTotal=total+price
        totalNumaber.innerText=CartTotal
       })
    })


    const targetSection=document.getElementById('card-section');
    document.getElementById('btn-confirm').addEventListener('click',function(){
   
   targetSection.scrollIntoView({behavior:'smooth'})

    })


    //function part for everyThings
    function appendChildFor(id ,value){
        const contaierDiv=document.getElementById(id);
        const p=document.createElement('p');
        p.innerText=value;
        p.classList.add('text-2xl')
        p.classList.add('font-bold')
        p.classList.add('text-green-700')
        contaierDiv.appendChild(p)
    }