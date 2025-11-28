fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.getElementById("students");
    data.students.forEach((student) => {
      const li = document.createElement("li");
      li.textContent = `${student.name} — Classe: ${student.class} — Score: ${student.score}`;
      list.appendChild(li);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));

function addname(){
    let addname = document.getElementById("addname");
    let valeur = addname.value;
    return valeur;
}

function addscore(){
    let addscore = document.getElementById("addscore");
    let valeur = addscore.value;
    return valeur;
}

function addclasse(){
    let addclass = document.getElementById("addclass");
    let valeur = addclass.value;
    return valeur;
}

function addstudent(){
    let score = addscore();
    let name = addname();
    let classe = addclasse();

    const list = document.getElementById("students");
    const li = document.createElement("li");

    if (name === ""){
        name = "Inconnu";
    }

    if (score === ""){
        score = "Inconnu";
    }

    if (classe === ""){
        classe = "Inconnu";
    }

    li.textContent = name + " — Classe: " + classe + " — Score: " + score;
    list.appendChild(li);

    document.getElementById("addname").value = "";
    document.getElementById("addclass").value = "";
    document.getElementById("addscore").value = "";
}

function removeline(){
    const list = document.getElementById("students");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}
