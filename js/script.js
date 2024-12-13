$(document).ready(function () {
    const words = [
        { word: "apple", translation: "яблуко" },
        { word: "table", translation: "стіл" },
        { word: "book", translation: "книга" },
        { word: "sun", translation: "сонце" },
        { word: "computer", translation: "комп'ютер" },
        { word: "phone", translation: "телефон" },
        { word: "window", translation: "вікно" },
        { word: "tree", translation: "дерево" },
        { word: "house", translation: "дім" },
        { word: "river", translation: "річка" }
    ];

    let currentStep = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    const totalSteps = words.length;
    $("#totalSteps").text(totalSteps);

    // Випадкове перемішування слів
    const shuffledWords = words.sort(() => Math.random() - 0.5);

    function updateCard() {
        if (currentStep < totalSteps) {
            const currentWord = shuffledWords[currentStep];
            $("#word").text(currentWord.word);
            $("#translationInput").val("").focus();
            $("#currentStep").text(currentStep + 1);
        } else {
            showResults();
        }
    }

    function showResults() {
        const percentage = (correctCount / totalSteps) * 100;
        let level = "";

        if (percentage === 100) {
            level = "Відмінно! Ви справжній поліглот!";
        } else if (percentage >= 70) {
            level = "Добре! Ви добре володієте мовою.";
        } else if (percentage >= 40) {
            level = "Задовільно. Вам варто ще попрацювати.";
        } else {
            level = "Слабкий рівень. Потрібно більше практики.";
        }

        alert(`Результати тесту:\n\nПравильно: ${correctCount}\nНеправильно: ${incorrectCount}\n\nВаш рівень: ${level}`);
    }

    $("#checkButton").click(function () {
        const userTranslation = $("#translationInput").val().trim();

        if (userTranslation === "") {
            alert("Будь ласка, введіть переклад перед перевіркою!");
            return;
        }

        const correctTranslation = shuffledWords[currentStep].translation.toLowerCase();

        if (userTranslation.toLowerCase() === correctTranslation) {
            correctCount++;
        } else {
            incorrectCount++;
        }

        $("#correctCount").text(correctCount);
        $("#incorrectCount").text(incorrectCount);

        currentStep++;
        updateCard();
    });

    updateCard();
});
