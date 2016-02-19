<script>
 var link = document.querySelector(".write-us");
 var popup = document.querySelector(".modal-block");
 var close = popup.querySelector(".modal-block-close");
 var form = popup.querySelector("form");
 var user_name = popup.querySelector("[name=user-name]");
 var user_mail = popup.querySelector("[name=user-mail]");

 link.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.add("modal-block-show");
   user_name.focus();
 });

 close.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.remove("modal-block-show");
 });

   form.addEventListener("submit", function(event) {
           if (!user_name.value || !user_mail.value) {
     event.preventDefault();
   }
 });

 window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (popup.classList.contains("modal-block-show")) {
       popup.classList.remove("modal-block-show");
     }
   }
 });
</script>
