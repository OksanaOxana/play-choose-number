gsap.from(".container", {x: 800, opacity: 0, duration: 2, delay: 1})
gsap.from("h3", {y: -500, opacity: 0, duration: 2, delay: 3})
gsap.from("#btn", {opacity: 0, duration: 2,  delay: 3, repeat: -1})
gsap.from("input", {opacity: 0, duration: 2,  delay: 3})


const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.ceil(Math.random()*20);  //я использовала math.ceil

input.addEventListener("keypress", function(e) {
    if(e.keyCode === 13) {
        play()
    }
})

button.addEventListener("click", play)
function play() {
    const userNumber = document.querySelector("#guess").value;
    if(userNumber<1||userNumber>20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Enter a number from 1 to 20',
                  })
       } 

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'You need to enter a number!',
                  })
    }

    else {
        if(userNumber<answer) {
            Swal.fire('Try a higher number',
            'The computer is winning!')
        }
        else if(userNumber>answer) {
            Swal.fire('Try lower number',
            'The computer is winning!')
        }
        else {
            Swal.fire({
                imageUrl: 'https://images.pexels.com/photos/6250940/pexels-photo-6250940.jpeg?auto=compress&cs=tinysrgb&w=600',
                imageHeight: 400,
                imageAlt: 'You won!!!'
              })
        }
    }
 
}