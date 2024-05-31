const convertUserInputToArrayOfNumbers = () => {
  let userInput = document.getElementById("grades").value;
  let grades = userInput.split(",").map((string) => Number(string));
  return grades;
};

const gradeAnalyzer = (grades) => {
  let total = getTotal(grades);
  let average = Number((total / grades.length).toFixed(1));
  let highest = getHighest(grades);
  let lowest = getLowest(grades);
  let passing = getPassing(average);
  let output = {
    Total: total,
    Average: average,
    Highest: highest,
    Lowest: lowest,
    Passing: passing,
  };
  console.log(output);
  const table = document.getElementById("output");
  table.innerHTML = "";

  for (const key in output) {
    if (output.hasOwnProperty(key)) {
      const tableRow = document.createElement("tr");
      const outputKey = document.createElement("td");
      outputKey.textContent = `${key}`;
      const outputValue = document.createElement("td");
      outputValue.textContent = `${output[key]}`;
      table.appendChild(tableRow);
      tableRow.appendChild(outputKey);
      tableRow.appendChild(outputValue);
    }
  }
  return output;
};

// Calculates total from array of grades
const getTotal = (grades) => {
  return grades.reduce((acc, current) => {
    acc += current;
    return acc;
  });
};

// Calculates highest from array of grades
const getHighest = (grades) => {
  let highest = grades.reduce((acc, current) => {
    if (current > acc) {
      acc = current;
    }
    return acc;
  });
  return highest;
};

// Calculates lowest from array of grades
const getLowest = (grades) => {
  return grades.reduce((acc, current) => {
    if (current < acc) {
      acc = current;
    }
    return acc;
  });
};

// Calculates passing from array of grades
const getPassing = (average) => {
  let passing;
  if (average < 60) {
    passing = false;
  } else if (average >= 60) {
    passing = true;
  }
  return passing;
};
