let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');


let customer = [
    { first: 'Mark', last:'Antony', email: 'mk@gmail.com' ,phone:9876542876},
    { first: 'Jacob', last:'Thorton', email: 'Jthorton@gmail.com' ,phone:1276542876},
    { first: 'Larry', last:'Francis', email: 'Laf@gmail.com' ,phone:8576542876},
    { first: 'Fins', last:'Parker', email: 'fp@gmail.com' ,phone:2876542876}
]

let headers = ['FirstName', 'Lastname', 'Email','Phone'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    customer.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table);
});