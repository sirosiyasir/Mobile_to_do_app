/* To do app */
/* VANILLA JAVASCRIPT */
const form = document.querySelector("form")
const input = document.querySelector("input")
const sendButton = document.querySelector("#sendButton")
const clearButton = document.querySelector("#clearButton")

/* Get from Local Storage */
function getTasks() {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function (task) {
    /* Create ul */
    const ul = document.createElement("ul")

    /* Create li */
    const li = document.createElement("li")

    /* Create anchor */
    const link = document.createElement("a")

    /* append ul to form */
    form.appendChild(ul)

    /* append li to ul */
    ul.appendChild(li)

    /* add fontawesome to anchor */
    link.innerHTML = '<i class="fa fa-remove delete-symbol"></i>'

    /* li content is equal input value */
    li.appendChild(document.createTextNode(task.toLowerCase()))
    /* add link to li */
    li.appendChild(link)

    /* to do limits */
    if (14 < document.getElementsByTagName("i").length) {
      sendButton.disabled = true
    } else {
      sendButton.disabled = false
    }

    /* Completed to do */
    li.addEventListener("click", () => {
      li.classList.toggle("li-background")
    })
  })
}
getTasks()
/* ----------END OF LOCAL STORAGE------------- */

sendButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("Add a to do")
    /* if i don't remove link when input.value is "" , it will add link(x) when input.value is empty "" */
    li.removeChild(link)
  }

  /* Create ul */
  const ul = document.createElement("ul")

  /* Create li */
  const li = document.createElement("li")

  /* Create anchor */
  const link = document.createElement("a")

  /* append ul to form */
  form.appendChild(ul)

  /* append li to ul */
  ul.appendChild(li)

  /* add fontawesome to anchor */
  link.innerHTML = '<i class="fa fa-remove delete-symbol"></i>'

  /* li content is equal input value */
  /* li.textContent = input.value */
  li.appendChild(document.createTextNode(input.value.toLowerCase()))
  /* add link to li */
  li.appendChild(link)

  /* to do limits */
  if (14 < document.getElementsByTagName("i").length) {
    sendButton.disabled = true
  } else {
    sendButton.disabled = false
  }

  // Store in Local Storage
  storeTaskInLocalStorage(input.value)

  /* Clear Input */
  input.value = ""

  /* Completed to do */
  li.addEventListener("click", () => {
    li.classList.toggle("li-background")
  })

  /* Remove to do */
  link.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-symbol")) {
      if (confirm("Are you sure ?")) {
        e.target.parentElement.parentElement.remove()
        /* Clear from local Storage */
        removeFromLocalStorage(e.target.parentElement.parentElement)
      }
    }
  })
})

/* Enter keydown */
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendButton.click()
  }
})

/* Remove all to do */
clearButton.addEventListener("click", () => {
  form.innerHTML = ""
  localStorage.clear()
  sendButton.disabled = false
})

/* Remove to do from Local Storage*/
function removeFromLocalStorage(taskItem) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

/* Save to do in the Local Storage */
function storeTaskInLocalStorage(task) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.push(task)

  /* .setItem'la oluşturduğumuz tasks'ları JSON.stringify'a dönüştürüyoruz*/
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
/* -------- END OF TO DO ------- */

function swipeUp() {
  $(".todo").slideToggle()

  var x = document.getElementById("swipe-completed")
  if (x.style.display === "block") {
    x.style.display = "none"
  } else {
    x.style.display = "block"
  }
}

/* SWIPE UP REMINDER */
setInterval(() => {
  $("#swipe").addClass("swipe-up")
  /* $("#swipe").slideUp(); */
}, 8000)
setInterval(() => {
  $("#swipe").removeClass("swipe-up")
  /* $("#swipe").slideDown(); */
}, 8150)

setTimeout(() => {
  $("#swipe").slideUp()
}, 3000)

setTimeout(() => {
  $("#swipe").slideDown()
}, 3100)

/* SWIPE CODE TAKEN FROM GIVANSE https://stackoverflow.com/users/7852/givanse */

swipe.addEventListener("touchstart", handleTouchStart, false)
swipe.addEventListener("touchmove", handleTouchMove, false)

var xDown = null
var yDown = null

function getTouches(evt) {
  return (
    evt.touches || // browser API
    evt.originalEvent.touches
  ) // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0]
  xDown = firstTouch.clientX
  yDown = firstTouch.clientY
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return
  }

  var xUp = evt.touches[0].clientX
  var yUp = evt.touches[0].clientY

  var xDiff = xDown - xUp
  var yDiff = yDown - yUp

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* right swipe */
    } else {
      /* left swipe */
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
      $("#buttons").slideToggle()
      var x = document.getElementById("swipe-completed")
      if (x.style.display === "block") {
        x.style.display = "none"
      } else {
        x.style.display = "block"
      }
    } else {
      /* up swipe */
      $("#buttons").slideToggle()
      var x = document.getElementById("swipe-completed")
      if (x.style.display === "block") {
        x.style.display = "none"
      } else {
        x.style.display = "block"
      }
    }
  }
  /* reset values */
  xDown = null
  yDown = null
}
