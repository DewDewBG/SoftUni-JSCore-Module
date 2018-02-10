function galacticElections(input) {
    let all = {}

    for (let obj of input) {
        if (!all.hasOwnProperty(obj['system'])){
            obj['system'] = {[obj['system']]: {'candidate': obj['candidate'], 'votes': obj['votes']}}
            all['system'] = obj['system']
        }
        all['system']['candidate'] += obj['candidate']
        all['system']['votes'] += obj['votes']
    }
    console.log(all)
}

galacticElections([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
                    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
                    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
                    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
                    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
                    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 } ]
)