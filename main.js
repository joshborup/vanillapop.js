let popped = true;

let mainContainerDefaultStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  minHeight: "100vh",
  minWidth: "100vw"
};

let popUpContainerDefaultStyles = {
  padding: "10px",
  minHeight: "100px",
  minWidth: "100px",
  backgroundColor: "white",
  boxShadow: "1px 4px 5px rgba(0,0,0,0.38)",
  zIndex: 101,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "90%",
  borderRadius: "3px"
};

let fadedBackgroundDefaultStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  backgroundColor: "rgba(0,0,0,0.35)",
  top: 0,
  left: 0,
  zIndex: 100,
  minHeight: "100%",
  minWidth: "100%"
};

let closeButtonDefaultStyles = {
  width: "25px",
  height: "25px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "-10px",
  right: "-10px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "rgba(200, 100, 100)",
  color: "white",
  boxShadow: "1px 4px 5px rgba(0,0,0,0.38)"
};

function popUp(settings, message) {
  if (popped) {
    let mainContainer = document.createElement("div");
    let fadedBackground = document.createElement("div");
    let popUpContainer = document.createElement("div");
    let buttonText = document.createTextNode("X");
    let closeButton = document.createElement("button");

    closeButton.addEventListener("click", function() {
      popUp(null, null);
    });

    fadedBackground.addEventListener("click", function() {
      popUp(null, null);
    });
    closeButton.appendChild(buttonText);

    for (let key in mainContainerDefaultStyles) {
      mainContainer.style[key] = mainContainerDefaultStyles[key];
    }

    for (let key in popUpContainerDefaultStyles) {
      popUpContainer.style[key] = popUpContainerDefaultStyles[key];
    }

    for (let key in fadedBackgroundDefaultStyles) {
      fadedBackground.style[key] = fadedBackgroundDefaultStyles[key];
    }

    for (let key in closeButtonDefaultStyles) {
      closeButton.style[key] = closeButtonDefaultStyles[key];
    }

    for (let key in settings) {
      popUpContainer.style[key] = settings[key];
    }

    mainContainer.appendChild(fadedBackground);
    mainContainer.appendChild(popUpContainer);
    mainContainer.classList.add("pop-up");
    popUpContainer.innerHTML = message;
    popUpContainer.appendChild(closeButton);

    document.body.append(mainContainer);
    popped = false;
  } else {
    let removeNode = document.querySelector(".pop-up");
    document.body.removeChild(removeNode);
    popped = true;
  }
}
