window.addEventListener("load", ()=>{

  let title = document.querySelector(".titleName");
  let rating = document.querySelector(".rating");
  let awards = document.querySelector(".awards");
  let release = document.querySelector(".release");
  let duration = document.querySelector(".length");
  let form = document.querySelector("form");

  let regExpNum = /^([0-9]|[1-9]|10)$/;
 

  form.addEventListener("submit", (e)=> {
      e.preventDefault()
      console.log("send")
      switch (true) {
          case title.value === "":
              title.classList.add("is-invalid");
              e.preventDefault()
              
          case rating.value === "":
              rating.classList.add("is-invalid");
              e.preventDefault()
          case awards.value === "":
              awards.classList.add("is-invalid")
              e.preventDefault()
          case release.value === "":
              release.classList.add("is-invalid")
              e.preventDefault()
          case duration.value === "":
              duration.classList.add("is-invalid")
              e.preventDefault()
              break;
          default:
              alert("Guardado correctamente")
              form.submit()
              break;
      }
  })
  title.addEventListener("blur", ()=>{
      switch (true) {
          case title.value === "":
          document.querySelector(".smallTitle").innerHTML = "El campo es obligatorio"
          document.querySelector(".smallTitle").style.marginBottom = "5px"
          document.querySelector(".smallTitle").style.color = "red"
            break;
          default:
              document.querySelector(".smallTitle").innerHTML = null
            break;
      }
  })
  rating.addEventListener("blur", ()=>{
      switch (true) {
          case rating.value === "":
          document.querySelector(".smallRating").innerHTML = "El campo es obligatorio"
          document.querySelector(".smallRating").style.marginBottom = "5px"
          document.querySelector(".smallRating").style.color = "red"
            break;
          case !regExpNum.test(rating.value):
          document.querySelector(".smallRating").innerHTML = "Debe ser un número entre 0 y 10"
          document.querySelector(".smallRating").style.marginBottom = "5px"
          document.querySelector(".smallRating").style.color = "red"
          break;
          default:
              document.querySelector(".smallRating").innerHTML = null
              break;
      }
  })

  awards.addEventListener("blur", ()=>{
      switch (true) {
          case awards.value === "":
              document.querySelector(".smallAwards").innerHTML = "El campo es obligatorio"
              document.querySelector(".smallAwards").style.marginBottom = "5px"
              document.querySelector(".smallAwards").style.color = "red"
              break;
          default:
              document.querySelector(".smallAwards").innerHTML = null
              break;
      }
      
  })

  release.addEventListener("blur", ()=>{
      switch (true) {
          case release.value === "":
          document.querySelector(".smallRelease").innerHTML = "La fecha es obligatoria"
          document.querySelector(".smallRelease").style.marginBottom = "5px"
          document.querySelector(".smallRelease").style.color = "red"
              break;
          default:
              document.querySelector(".smallRelease").innerHTML = null
              break;
      }
      
  })
  
  duration.addEventListener("blur", ()=>{
      switch (true) {
        case duration.value === "":
          document.querySelector(".smallDuracion").innerHTML = "El campo es obligatorio"
          document.querySelector(".smallDuracion").style.marginBottom = "5px"
          document.querySelector(".smallDuracion").style.color = "red"
            break;
        case duration.value.trim() < 60 || duration.value.trim() > 360:
            document.querySelector(".smallDuracion").innerHTML = "Debe tener entre 60 y 360 minutos"
            document.querySelector(".smallDuracion").style.marginBottom = "5px"
            document.querySelector(".smallDuracion").style.color = "red"
            break;
          default:
              document.querySelector(".smallDuracion").innerHTML = null
              break;
      }
  })
  

  title.focus();
})