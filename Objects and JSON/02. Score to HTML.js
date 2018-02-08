function scoreToHTML(input) {
    let objArr = JSON.parse(input)

    console.log('<table>')

    console.log('<tr><th>name</th><th>score</th></tr>')

    for (let obj of objArr) {
        console.log(`<tr><td>${escapeHtml(obj['name'])}</td><td>${obj['score']}</td></tr>`)
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

scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')