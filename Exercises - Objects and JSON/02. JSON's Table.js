function JSONtoHTML(input) {

    console.log('<table>')

    for (let row of input) {
        let employee = JSON.parse(row)

        console.log('\t<tr>')
        console.log(`		<td>${employee['name']}</td>`)
        console.log(`		<td>${employee['position']}</td>`)
        console.log(`		<td>${employee['salary']}</td>`)
        console.log('\t<tr>')
    }

    console.log('</table>')
}

JSONtoHTML([
    '{"name":"Pesho","position":"Promenliva","salary":100000}\n',
    '{"name":"Teo","position":"Lecturer","salary":1000}\n',
    '{"name":"Georgi","position":"Lecturer","salary":1000}\n'
])