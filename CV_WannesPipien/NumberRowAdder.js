const numberContainer = document.querySelector('.numbers');
const numberOfRows = 91;

for(let i = 1; i <= numberOfRows; i++)
{
    const p = document.createElement('p');
    numberContainer.appendChild(p);
}