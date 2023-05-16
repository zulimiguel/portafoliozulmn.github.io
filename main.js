let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#41a49f"> Artista digital y desarrolladora Web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
