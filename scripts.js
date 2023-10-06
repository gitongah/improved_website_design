//javascript for navigation bar effect on scroll

window.addEventListener('scroll', function(){
  const header=this.document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY>0)
})

//javascript for scroll to top button

const scrollBtn=document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', function(){
  scrollBtn.classList.toggle('active', this.window.scrollY>500);
});
//javascript for scroll back to top on click scroll-to-top btn
scrollBtn.addEventListener('click', ()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
})

window.addEventListener('scroll',reveal);

function reveal(){
  var reveal= document.querySelectorAll('.reveal');
  for(var i=0; i< reveal.length; i++){
    var windowHeight=window.innerHeight;
    var revealTop=reveal[i].getBoundingClientRect().top;
    var revealPoint=50;

    if(revealTop<windowHeight- revealPoint){
      reveal[i].classList.add('active');
    }
  }
}