$(document).ready(function() {
  const deleteBoxes1 =  $(".box");
  const deleteBoxes =  document.getElementsByClassName('box');
  /* for (let i = 0; i < deleteBoxes.length; i++) {
   deleteBoxes[i].addEventListener("hover", function() {
     $(".box-right").toggleClass('cl-box2');
       $(".bar").toggleClass('cl-bar2');
   });
   } */
   function toggleDeleteButton(x) {
    x.getElementsByClassName('box-right')[0].classList.toggle('cl-box2');
    x.getElementsByClassName('bar')[0].classList.toggle('cl-bar2');
  }
   for (let i = 0; i < deleteBoxes.length; i++) {
    deleteBoxes[i].addEventListener("mouseover",function(){
      toggleDeleteButton(deleteBoxes[i]);
    });
    deleteBoxes[i].addEventListener("mouseout",function(){
      toggleDeleteButton(deleteBoxes[i]);
    });
   }
  });