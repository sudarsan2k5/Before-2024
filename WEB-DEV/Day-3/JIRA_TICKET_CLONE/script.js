const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainSection = document.querySelector(".main-section");
const textArea = document.querySelector(".textarea-cont");
let addFlag = false;

addBtn.addEventListener("click", (e) => {
  //Diplay Modal
  //Generate Ticket

  //If AddFlag -> true -> Modal Display
  // If AddFlag -> false -> Modal None
  addFlag = !addFlag;
  if (addFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
    //Shift key functionality
modalCont.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "Shift") {
    creatTicket();
    modalCont.style.display = "none";
    textArea.value = "";
    // addFlag = false;
  }
});
    //Creat Ticket Box
function creatTicket() {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
    <div class="ticket-color">Hello Sudarsan</div>
    <div class="ticket-id">
        #9090388
    </div>
    <div class="task-area">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae obcaecati vero quas. Nobis, est.
    </div>
    `;
  mainSection.appendChild(ticketCont);
}
