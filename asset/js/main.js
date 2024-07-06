const form = document.getElementById("form-survey");

const myButton = document.getElementById("button");
myButton.addEventListener("click", processData);

const tableBody = document.getElementById("insert-data");

function processData(event) {
  event.preventDefault();

  const tableRow = document.createElement("tr");
  const tableName = document.createElement("td");
  const tableAge = document.createElement("td");
  const tableGender = document.createElement("td");
  const tableSmoke = document.createElement("td");
  const tableVariant = document.createElement("td");

  // name
  const dataName = document.getElementById("name");
  const valueName = dataName.value;
  tableName.textContent = valueName;

  if (valueName === "") {
    window.alert("nama ente siapa woi?");
    return;
  }

  // age
  const dataAge = document.getElementById("age");
  const valueAge = dataAge.value;
  tableAge.textContent = valueAge;

  if (valueAge === "") {
    window.alert("dah bagus nulis nama, masa umur sendiri lupa?");
    return;
  }

  // gender
  const dataMale = document.getElementById("male").checked;
  const dataFemale = document.getElementById("female").checked;

  if (dataMale === true) {
    const male = document.getElementById("male");
    const valueMale = male.value;
    tableGender.textContent = valueMale;
  }
  if (dataFemale === true) {
    const female = document.getElementById("female");
    const valueFemale = female.value;
    tableGender.textContent = valueFemale;
  }

  // ask-smoke
  const dataYes = document.getElementById("yes").checked;
  const dataNo = document.getElementById("no").checked;

  if (dataYes === true) {
    const yes = document.getElementById("yes");
    const valueYes = yes.value;
    tableSmoke.textContent = valueYes;
  }
  if (dataNo === true) {
    const no = document.getElementById("no");
    const valueNo = no.value;
    tableSmoke.textContent = valueNo;
  }

  // smoke-variant
  const dataGudang = document.getElementById("gudang").checked;
  const dataLucky = document.getElementById("lucky").checked;
  const dataMarl = document.getElementById("marl").checked;
  const dataEsse = document.getElementById("esse").checked;

  if (dataGudang === true) {
    const gudang = document.getElementById("gudang");
    const valueGudang = gudang.value;
    tableVariant.textContent = valueGudang;
  }
  if (dataLucky === true) {
    const lucky = document.getElementById("lucky");
    const valueLucky = lucky.value;
    tableVariant.textContent = valueLucky;
  }
  if (dataMarl === true) {
    const marl = document.getElementById("marl");
    const valueMarl = marl.value;
    tableVariant.textContent = valueMarl;
  }
  if (dataEsse === true) {
    const esse = document.getElementById("esse");
    const valueEsse = esse.value;
    tableVariant.textContent = valueEsse;
  }

  tableRow.appendChild(tableName);
  tableRow.appendChild(tableAge);
  tableRow.appendChild(tableGender);
  tableRow.appendChild(tableSmoke);
  tableRow.appendChild(tableVariant);
  tableBody.appendChild(tableRow);
}
