let asideDom = document.getElementsByClassName("newsletter");

const removeAside = () => {
  asideDom[0].classList.add("newsletter--on");
  asideDom[0].classList.remove("newsletter");
  asideDom = document.getElementsByClassName("newsletter--on");
};

const addAside = () => {
  asideDom[0].classList.add("newsletter");
  asideDom[0].classList.remove("newsletter--on");
  asideDom = document.getElementsByClassName("newsletter");
};

const showAside = () => {
  const classList = asideDom[0].classList.contains("newsletter--on");
  classList ? addAside() : removeAside();
};

const forbiddenDomains = [
  "@yopmail.com",
  "@yopmail.fr",
  "@yopmail.net",
  "@cool.fr.nf",
  "@jetable.fr.nf",
  "@courriel.fr.nf",
  "@moncourrier.fr.nf",
  "@monemail.fr.nf",
  "@monmail.fr.nf",
  "@hide.biz.st",
  "@mymail.infos.st",
];

const submitMessage = (message) => {
  const newP = document.createElement("p");
  newP.appendChild(document.createTextNode(message));
  newP.classList.add("message");
  asideDom[0].appendChild(newP);
};

const submitForm = (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("subscriber-email").value;
  const split = inputValue.split("@");

  const forbiddenDomainsSplit = forbiddenDomains
    .map((domain) => {
      const splitDomain = domain.split("@");
      return split[1] === splitDomain[1] ? true : false;
    })
    .filter((domain) => domain === true);

  forbiddenDomainsSplit.length < 1
    ? submitMessage("email ok")
    : submitMessage("email pas ok");
};

const form = document.getElementById("form");

form.addEventListener("submit", submitForm);
