const injected = () => {
  const upvote = "data:image/png;base64,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"
  let img = $(document.createElement("img"))
  const style = $(`
    <style>
      @keyframes __upvote-pop {
        0% { transform: scale(0.3); }
        20% { opacity: 1; }
        50% { opacity: 1; }
        100% { opacity: 0; transform: scale(0.8); }
      }

      .__upvote-animation {
        animation: __upvote-pop 0.3s linear 1;
      }
    </style>
  `)

  img.attr("src", upvote)
    .css("position", "fixed")
    .css("z-index", "9999")
    .css("pointer-events", "none")
  
  img.appendTo("body")
    .css("left", -9999)
    .css("top", -9999)
    .css("opacity", 0)
    .css("transform", "scale(0.3)")
  
  style.appendTo("body")

  const playAnimation = (x, y) => {
    img.removeClass("__upvote-animation")

    const newImg = $(img).clone(true)
    img[0].parentNode.replaceChild(newImg[0], img[0])
    img = newImg

    img.addClass("__upvote-animation")
    
    img.css("left", x - img.width() / 2)
      .css("top", y - img.height() / 2)
  }

  $(".post-container").on("dblclick", ({clientX, clientY}) => {
    let elem = $("button.post-action-upvote")
    if (elem.hasClass("icon-upvote-fill")) {
      playAnimation(clientX, clientY)
      return
    }

    elem = elem[0]
    let reactElem
    for (let prop in elem) {
      if(prop.startsWith("__react")) {
        reactElem = elem[prop]
        break
      }
    }

    let btnPress = reactElem._currentElement.props.onPress

    if (btnPress) {
      playAnimation(clientX, clientY)
      btnPress()
    }
  })
}

let script = document.createElement("script")
script.innerHTML = `(${injected.toString()})()`
document.head.appendChild(script)

console.log(injected.toString())