let cross1 = document.getElementById("cross1");
let cross2 = document.getElementById("cross2");
let cross3 = document.getElementById("cross3");
let cross4 = document.getElementById("cross4");
let cross5 = document.getElementById("cross5");
let cross6 = document.getElementById("cross6");

let img = document.getElementsByClassName("icon")[0];
let img2 = document.getElementsByClassName("icon")[1];
let img3 = document.getElementsByClassName("icon")[2];
let img4 = document.getElementsByClassName("icon")[3];
let img5 = document.getElementsByClassName("icon")[4];
let img6 = document.getElementsByClassName("icon")[5];
// 1

const plus1 = () => {
   // Other Program
  if(cross2.classList == "show"){
    plus2()
  }
  if(cross3.classList == "show"){
    plus3()
  }
  if(cross4.classList == "show"){
    plus4()
  }
  if(cross5.classList == "show"){
    plus5()
  }
  if(cross6.classList == "show"){
    plus6()
  }

  // Main Program
  if (cross1.classList == "hide") {
    cross1.classList.remove("hide");
    cross1.classList.add("show");
    img.style.transform = "rotate(45deg)";
  } else {
    cross1.classList.remove("show");
    cross1.classList.add("hide");
    cross1.classList.add("hide");
    img.style.transform = "";
  }
}

// 2

const plus2 = () => {
   // Other Program
   if(cross1.classList == "show"){
    plus1()
  }
  if(cross3.classList == "show"){
    plus3()
  }
  if(cross4.classList == "show"){
    plus4()
  }
  if(cross5.classList == "show"){
    plus5()
  }
  if(cross6.classList == "show"){
    plus6()
  }

  // Main Program
  if (cross2.classList == "hide") {
    cross2.classList.remove("hide");
    cross2.classList.add("show");
    img2.style.transform = "rotate(45deg)";
  } else {
    cross2.classList.remove("show");
    cross2.classList.add("hide");
    img2.style.transform = "";
  }
}

// 3

function plus3() {
     // Other Program
     if(cross2.classList == "show"){
      plus2()
    }
    if(cross1.classList == "show"){
      plus1()
    }
    if(cross4.classList == "show"){
      plus4()
    }
    if(cross5.classList == "show"){
      plus5()
    }
    if(cross6.classList == "show"){
      plus6()
    }
  
    // Main Program
  if (cross3.classList == "hide") {
    cross3.classList.remove("hide");
    cross3.classList.add("show");
    img3.style.transform = "rotate(45deg)";
  } else {
    cross3.classList.remove("show");
    cross3.classList.add("hide");
    img3.style.transform = "";
  }
}

// 4

function plus4() {
     // Other Program
     if(cross2.classList == "show"){
      plus2()
    }
    if(cross3.classList == "show"){
      plus3()
    }
    if(cross1.classList == "show"){
      plus1()
    }
    if(cross5.classList == "show"){
      plus5()
    }
    if(cross6.classList == "show"){
      plus6()
    }
  
    // Main Program
  if (cross4.classList == "hide") {
    cross4.classList.remove("hide");
    cross4.classList.add("show");
    img4.style.transform = "rotate(45deg)";
  } else {
    cross4.classList.remove("show");
    cross4.classList.add("hide");
    img4.style.transform = "";
  }
}

// 5

function plus5() {
     // Other Program
     if(cross2.classList == "show"){
      plus2()
    }
    if(cross3.classList == "show"){
      plus3()
    }
    if(cross4.classList == "show"){
      plus4()
    }
    if(cross1.classList == "show"){
      plus1()
    }
    if(cross6.classList == "show"){
      plus6()
    }
  
    // Main Program
  if (cross5.classList == "hide") {
    cross5.classList.remove("hide");
    cross5.classList.add("show");
    img5.style.transform = "rotate(45deg)";
  } else {
    cross5.classList.remove("show");
    cross5.classList.add("hide");
    img5.style.transform = "";
  }
}

// 6

function plus6() {
     // Other Program
     if(cross2.classList == "show"){
      plus2()
    }
    if(cross3.classList == "show"){
      plus3()
    }
    if(cross4.classList == "show"){
      plus4()
    }
    if(cross5.classList == "show"){
      plus5()
    }
    if(cross1.classList == "show"){
      plus1()
    }
  
    // Main Program
  if (cross6.classList == "hide") {
    cross6.classList.remove("hide");
    cross6.classList.add("show");
    img6.style.transform = "rotate(45deg)";
  } else {
    cross6.classList.remove("show");
    cross6.classList.add("hide");
    img6.style.transform = "";
  }
}
