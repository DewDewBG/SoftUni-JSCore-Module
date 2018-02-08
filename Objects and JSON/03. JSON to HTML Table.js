function convertJSONtoHTMLTable(input) {
    let objArr = JSON.parse(input)
    let firstRow = '<tr>'

    for (let key in objArr[0]) {
        firstRow += `<th>${key}</th>`
    }
    firstRow += '</tr>'

    console.log('<table>')
    console.log(firstRow)

    let row = '<tr>'

    for (let obj of objArr) {
        for (let key in obj) {
            row += `<td>${escapeHtml(obj[key].toString())}</td>`
        }
        row += '</tr>'
        console.log(row)
        row = '<tr>'
    }

    console.log('</table>')
}

function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

convertJSONtoHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"}, {"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')