
const div2=document.getElementById('div2')
const div1=document.getElementById('div1')


div1.addEventListener('mouseenter', ()=>{
      div1.style="animation-name:slidein;animation-duration:3s;"
      div2.style="animation-name:div2;animation-duration:3s;"

      
})

div1.addEventListener('mouseleave',()=>{

  div1.style="animation-name:none;animation-duration:0s;"
  div2.style="animation-name:none;animation-duration:0s;"
})

div2.addEventListener('mouseenter', ()=>{
  div2.style="animation-name:slidein2;animation-duration:3s;"

})

div2.addEventListener('mouseleave',()=>{
  div2.style="animation-name:none;animation-duration:0s;"
})



