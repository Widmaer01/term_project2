
function onclicks2( ){
  const myList = document.querySelector("ol");

  fetch( "tsconfig.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {

      for (const info of data.Education) {
        const listItem = document.createElement("li");

        const schoolName = document.createElement("li");
        schoolName.innerText= `My School Name is:
         ${info.Degree.school}`;

        const program = document.createElement("li");
        program.innerText =`, I studied : ${info.Degree.program_major}\n`;

        const typeDegree = document.createElement("li");
        typeDegree.innerText =`, I graduate with a  ${info.Degree.type}`;

        const year= document.createElement("li");
        year.innerText =`, graduation year: ${info.Degree.year_conferred}`;

        listItem.append(
          schoolName.innerText,
          program.innerText , typeDegree.innerText, year.innerText

        );


          myList.appendChild(listItem);


      }
    })
    .catch((error) => {
      const errorResponse = error.message;
      document.getElementById("status").textContent = JSON.stringify(errorResponse);
      console.log(error.message);


    });
}
