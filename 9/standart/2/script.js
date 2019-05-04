let age = document.getElementById('age');
 
function showUser(surname, name, age) {
    this.age = age;
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age ,'Егоров', 'Максим');