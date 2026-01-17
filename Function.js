function calculateAge() {
  let birthYear = document.getElementById("YOBinp").value;
  let currentYear = document.getElementById("cyinp").value;
  if (birthYear > currentYear) {
    alert("Birth year cannot be greater than current year");
    return;
  }
  if(birthYear<0 || currentYear<0){
      alert("Please enter valid positive years");
      return;
    }
  age = currentYear - birthYear;
  document.getElementById("output").value = age;
}
