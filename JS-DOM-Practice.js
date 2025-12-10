//alert("hey it working i guess")

const name = document.getElementById('welcome-name')
//document.querySelector('div'/"#for-id"/".for-class")--so this will return the first element that matches the css selector 
//document.querySelectorAll()--this can be used to manupulate all the element that has the css selector name and we can't append it because it is a list of elements

name.append(" And All");
const welcome = document.getElementById('welcome')

const insideWelcome = document.createElement('p')
insideWelcome.textContent = "bye bye"
welcome.append(insideWelcome)
//creating and appending elements

