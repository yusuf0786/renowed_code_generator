// targetting the elements
let form = document.getElementById("form")
let book_name = document.querySelector("#book_title")
let image_name = document.querySelector("#image_name")
let address = document.querySelector("#location")
let file_name = document.querySelectorAll(".para_parent input")
let waqiyat_section_code = document.querySelector(".waqiyat_section_code")

// running the function while inputing in the input
book_name.addEventListener('input', myfunction)
image_name.addEventListener('input', myfunction)
address.addEventListener('input', myfunction)
file_name[0].addEventListener('input', myfunction)

/* in the function below, targetting the values of the targetted elements and putting the code text in the value of textarea */
function myfunction() {

    file_name = document.querySelectorAll(".para_parent input")
    for(let i = 0; i <= file_name.length-1; i++){
        file_name[i].addEventListener('input', myfunction)
    }

    // generated code inside elements
    let personality_image = document.querySelector(".personality_img img")
    let personality_location = document.querySelector(".personality_pg address")
    let waqiya_heading = document.querySelector(".personality")
    let waqiya_heading2 = document.querySelector(".personality_pg h1")
    personality_image.src = `img/renowed/${image_name.value}`
    personality_location.innerHTML = address.value
    waqiya_heading.innerHTML = book_name.value
    waqiya_heading2.innerHTML = book_name.value
    // for paragraph
    let waqiya_paragraph = document.querySelectorAll(".personality_pg p")
    for(let i = 0; i <= waqiya_paragraph.length-1; i++){
        waqiya_paragraph[i].innerHTML = file_name[i].value
    }

    let mycode = document.querySelector("#mycode")
    let generate_code = waqiyat_section_code.innerHTML

    mycode.value = generate_code
}
myfunction()

// adding neccesory elements
let waqiya_pg = document.querySelector(".personality_pg")
let para_parent = document.querySelector(".para_parent")

let para_add_btn = document.querySelector(".add_para")
let para_remove_btn = document.querySelector(".remove")

para_add_btn.addEventListener('click', function(e){
    e.preventDefault()
    add_input_and_p()
    myfunction()
})
para_remove_btn.addEventListener('click', function(e){
    e.preventDefault()
    remove_input_and_p()
    myfunction()
})

function add_input_and_p() {
    let input = document.createElement("input")
    let p = document.createElement("p")
    
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'file_name')

    para_parent.appendChild(input)
    waqiya_pg.appendChild(p)
}
function remove_input_and_p() {
    let input = document.querySelector(".para_parent input:last-child")
    let p = document.querySelector(".personality_pg p:last-child")
    input.remove()
    p.remove()
}


/* copieng the value inside the textarea using the copy_btn */
  form.addEventListener('submit', function(e){
    e.preventDefault()
    copy_the_code()
  })
  
  /* below is the function which can, when run copy the value of targetted element */
  function copy_the_code() {
    /* Get the text field */
    var copyText = document.getElementById("mycode");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  }
