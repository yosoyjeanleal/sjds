// Verifica si el examen ya fue realizado
window.onload = function() {
    if (localStorage.getItem('examTaken') === 'true') {
        document.getElementById('exam-status').textContent = "Ya has realizado el examen.";
        document.getElementById('exam-form').style.display = 'none';
    }
};

document.getElementById('submit-btn').addEventListener('click', function() {
    // Recolección de respuestas del examen
    const answers = {
        q1: 'delfín',
        q2: 'mariposa monarca',
        q3: 'cocodrilo'
    };

    let score = 0;
    const totalQuestions = 3;

    // Validar respuestas
    const userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value
    };

    if (userAnswers.q1 === answers.q1) score++;
    if (userAnswers.q2 === answers.q2) score++;
    if (userAnswers.q3 === answers.q3) score++;

    // Calcular la calificación
    const grade = (score / totalQuestions) * 100;

    // Mostrar la calificación
    alert(`Tu calificación es: ${grade}%`);

    // Almacenar que el examen fue tomado
    localStorage.setItem('examTaken', 'true');
    document.getElementById('exam-form').style.display = 'none';
    document.getElementById('exam-status').textContent = "Ya has realizado el examen.";
});
