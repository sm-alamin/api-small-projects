const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };
const totalPerson = document.getElementById('person-found');
totalPerson.innerText = `Found ${person.found} Persons`;
person.result.forEach(user => {
  const cardContainer = document.getElementById('card-container');
  const div = document.createElement("div");

  div.innerHTML =`
  <div class="card w-full bg-base-100 shadow-xl border">
      <div class="card-body">
        <h2 class="card-title">Person Name: ${user.name.common}</h2>
        <hr>
        <p>Age: ${user.age}</p>
        <p>Street: ${user.address.street}</p>
      </div>
  </div>
  `
  cardContainer.appendChild(div);
});