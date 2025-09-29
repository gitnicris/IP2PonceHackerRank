function acmTeam(topic) {
    let maxTopics = 0;
    let teamCount = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            // Calculate the number of topics known by the team
            let combinedTopics = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    combinedTopics++;
                }
            }

            // Update maxTopics and teamCount
            if (combinedTopics > maxTopics) {
                maxTopics = combinedTopics;
                teamCount = 1;
            } else if (combinedTopics === maxTopics) {
                teamCount++;
            }
        }
    }

    return [maxTopics, teamCount];
}


