function submitForm() {
    let answers = {};
    let form = document.getElementById("mbti-form");
    let formData = new FormData(form);

    formData.forEach((value, key) => {
        answers[key] = value;
    });

    // Function to calculate personality type based on selected answers
    let personalityType = '';
    personalityType += calculateType(answers, ['q1', 'q8'], ['E', 'I']);
    personalityType += calculateType(answers, ['q2', 'q6', 'q11'], ['T', 'F']);
    personalityType += calculateType(answers, ['q3', 'q7', 'q9'], ['S', 'N']);
    personalityType += calculateType(answers, ['q5', 'q10', 'q12'], ['J', 'P']);

    // Display the result
    alert(`Your MBTI Personality Type is: ${personalityType}`);
}

function calculateType(answers, questionKeys, types) {
    let count = { E: 0, I: 0, T: 0, F: 0, S: 0, N: 0, J: 0, P: 0 };
    questionKeys.forEach(key => {
        if (answers[key]) {
            count[answers[key]] += 1;
        }
    });

    // Determine dominant type based on higher count
    if (count[types[0]] > count[types[1]]) {
        return types[0];
    } else {
        return types[1];
    }
}


