fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.getElementById("students");
    data.students.forEach((student) => {
      const li = document.createElement("li");
      li.textContent = `${student.name} — Score: ${student.score}`;
      list.appendChild(li);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
