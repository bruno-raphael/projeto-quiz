// Selecionando os elementos do DOM
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-btn');
const resultText = document.getElementById('result-text');
const resultContainer = document.getElementById('result-container');

// Adicionando um botão de reiniciar
const restartButton = document.createElement('button');
restartButton.innerText = "Reiniciar Quiz";
restartButton.classList.add('btn');
restartButton.style.display = 'none'; // Esconde o botão inicialmente
restartButton.addEventListener('click', restartQuiz); // Evento para reiniciar
document.body.appendChild(restartButton); // Adiciona o botão ao final do body

// Definindo as perguntas do quiz (coloque quantas perguntas desejar)
const questions = [
    {
        question: "Qual é o clube com mais títulos da UEFA Champions League? ",
        answers: [
            { text: "Real Madrid", correct: true },
            { text: "FC Porto", correct: false },
            { text: "Man. United", correct: false },
            { text: "Barcelona", correct: false }
        ]
    },
    {
        question: "Qual destes jogadores é europeu?",
        answers: [
            { text: "Richard Ofori", correct: false },
            { text: "Alex Berenguer", correct: true },
            { text: "Ali Gabr", correct:false  },
            { text: "Moisés Caicedo", correct: false }
        ]
    },
    {
        question: "Qual foi o primeiro campeão da história da UEFA Conference League? ",
        answers: [
            { text: "Benfica", correct: false },
            { text: "Getafe", correct: false },
            { text: "Roma", correct: true },
            { text: "Man. City", correct: false }
        ]
    },
    {
        question: " Qual destes times possui menos títulos do torneio Rio-São Paulo? ",
        answers: [
            { text: "Santos", correct: false },
            { text: "Fluminense", correct: false },
            { text: "Flamengo", correct: true },
            { text: "Portuguesa", correct: false }
        ]
    },
    {
        question: "Quais destes jogadores venceu a Copa do Mundo? ",
        answers: [
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Puskás", correct: false },
            { text: "Zico", correct: false },
            { text: "Nesta", correct: true }
        ]
    },
    {
        question: "Quantos mundiais da FIFA o Santos possuí?  ",
        answers: [
            { text: "0", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: " Quem é o maior artilheiro da história das Copas? ",
        answers: [
            { text: "Ronaldo", correct: false },
            { text: "Klose", correct: true },
            { text: "Maradona", correct:false  },
            { text: "Messi", correct: false }
        ]
    },
    {
        question: "Quem vestiu a camisa 26 na Copa do Mundo pelo Brasil?  ",
        answers: [
            { text: "Bremmer", correct: false },
            { text: "Raphinha", correct: false },
            { text: "Gabriel Martinelli", correct: true },
            { text: "Everton Ribeiro", correct: false }
        ]
    },
    {
        question: " Qual jogador substituiu o Neymar contra a Alemanha na Copa de 2014?  ",
        answers: [
            { text: "Jô", correct: false },
            { text: "Richarlison", correct: false },
            { text: "Bernard", correct: true },
            { text: "Lucas Moura", correct: false }
        ]
    },
    {
        question: "Quem fez o gol do título do Chelsea no mundial de clubes 2021? ",
        answers: [
            { text: " Jorginho", correct: false },
            { text: "Kanté", correct: false },
            { text: "Lukaku", correct: false },
            { text: "Kai Havertz", correct: true }
        ]
    },
    {
        question: " Qual destes times não possuí o título da Copa do Brasil?  ",
        answers: [
            { text: "Botafogo RJ", correct: true },
            { text: "Sport PE", correct: false },
            { text: "Paulista SP", correct: false },
            { text: "Santo André SP", correct: false }
        ]
    },
    {
        question: " Quem foi o vencedor e o vice da sul-americana de 2009? ",
        answers: [
            { text: "São Paulo/Atlético GO", correct: false },
            { text: "LDU/Flu", correct: true },
            { text: "Dell Vale/Racing", correct:false  },
            { text: "Santos/Lanus", correct: false }
        ]
    },
    {
        question: "Qual time venceu a primeira Libertadores?  ",
        answers: [
            { text: "Santos", correct: false },
            { text: "Internacional", correct: false },
            { text: "Penarol", correct: true },
            { text: "Palmeiras", correct: false }
        ]
    },
    {
        question: " Qual jogador marcou o gol da vitória do PALMEIRAS pelo mundial de '1951'? ",
        answers: [
            { text: "Waldemar", correct: false },
            { text: "Juvenal", correct: false },
            { text: "51 é Pinga", correct: true },
            { text: "Fiúme", correct: false }
        ]
    },
    {
        question: "Quando foi realizada a primeira Copa do Mundo de futebol? ",
        answers: [
            { text: "08/02/1938 - BRASIL", correct: false },
            { text: "17/08/1940 - EUA", correct: false },
            { text: "21/08/1932 - ESPANHA", correct: false },
            { text: "13/06/1930 - URUGUAI", correct: true }
        ]
    },
    {
        question: "Qual é o estádio de futebol com maior capacidade do mundo? ",
        answers: [
            { text: "Rungrado", correct: true },
            { text: "Maracanã", correct: false },
            { text: "Wembley", correct: false },
            { text: "Camp Nou", correct: false }
        ]
    },
    {
        question: " Qual era o número da camisa de Raúl González quando jogava no Real Madrid? ",
        answers: [
            { text: "9", correct: false },
            { text: "7", correct: true },
            { text: "11", correct:false  },
            { text: "15", correct: false }
        ]
    },
    {
        question: "Qual time da Premier League tem mais campeonatos ganhos?  ",
        answers: [
            { text: "Man City", correct: false },
            { text: "Liverpool", correct: false },
            { text: "Man United", correct: true },
            { text: "Tottenham", correct: false }
        ]
    },
    {
        question: " Em que ano Pep Guardiola estreou como treinador do FC Barcelona?  ",
        answers: [
            { text: "2006", correct: false },
            { text: "2007", correct: false },
            { text: "2008", correct: true },
            { text: "2009", correct: false }
        ]
    },
    {
        question: "Qual país ganhou mais Eurocopas consecutivas? ",
        answers: [
            { text: " França", correct: false },
            { text: "Alemanha", correct: false },
            { text: "Inglaterra", correct: false },
            { text: "Espanha", correct: true }
        ]
    },
    {
        question: " Quantas Copas do Mundo a Itália ganhou? ",
        answers: [
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "1", correct: false }
        ]
    },
    {
        question: "Em que país a Alemanha ganhou sua primeira Copa do Mundo? ",
        answers: [
            { text: "Alemanha", correct: false },
            { text: "Espanha", correct: false },
            { text: "México", correct: false },
            { text: "Suíça", correct: true }
        ]
    },
    {
        question: "Qual foi o primeiro time a ganhar a Champions League ",
        answers: [
            { text: "Real Madrid", correct: true },
            { text: "Barcelona", correct: false },
            { text: "Ajax", correct: false },
            { text: "Man United", correct: false }
        ]
    },
    {
        question: " Quantos Titúlos Jonathan Calleri tem na carreira? ",
        answers: [
            { text: "9", correct: false },
            { text: "5", correct: true },
            { text: "6", correct:false  },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Quem é o maior artilheiro na Libertadores pelo Palmeiras? ",
        answers: [
            { text: "Gustavo Gomez", correct: false },
            { text: "Rphael Veiga", correct: false },
            { text: "Rony", correct: true },
            { text: "Tupãzinho", correct: false }
        ]
    },
    {
        question: " Quem é o maior artilheiro da histótia do São paulo? ",
        answers: [
            { text: "Rogério Ceni", correct: false },
            { text: "Luis Fabiano", correct: false },
            { text: "Chulapa", correct: true },
            { text: "Calleri", correct: false }
        ]
    },
    {
        question: "Quando foi o primeiro titulo da história do Corinthians? ",
        answers: [
            { text: " 1912", correct: false },
            { text: "1920", correct: false },
            { text: "1916", correct: false },
            { text: "1914", correct: true }
        ]
    },
    {
        question: "Quem é o maior artilheiro da Copa do Brasil? ",
        answers: [
            { text: "Romário", correct: false },
            { text: "Oséas", correct: false },
            { text: "Fred", correct: true },
            { text: "Viola", correct: false }
        ]
    },
    {
        question: " Quantas vezes São Paulo chegou a final da Copa do Brasil? ",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "2", correct: true },
            { text: "1", correct: false }
        ]
    },
    {
        question: "Quem é o artilheiro do Mundo em 2024? ",
        answers: [
            { text: " Halland", correct: false },
            { text: "Yuri Alberto", correct: false },
            { text: "Cristiano Ronaldo", correct: false },
            { text: "Pedro", correct: true }
        ]
    }

];

// Variáveis de controle
let currentQuestionIndex = 0;
let score = 0;

// Função para iniciar o quiz com a primeira pergunta
function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = 'none'; // Esconde o botão 'Próxima' inicialmente
    restartButton.style.display = 'none'; // Esconde o botão de reiniciar
}

// Função para exibir uma pergunta
function showQuestion(question) {
    // Exibe a pergunta
    questionContainer.querySelector('h2').innerText = question.question;

    // Remove respostas anteriores
    answersContainer.innerHTML = '';

    // Adiciona as opções de resposta dinamicamente
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer');
        button.addEventListener('click', () => selectAnswer(answer));
        answersContainer.appendChild(button);
    });
}

// Função para quando uma resposta é selecionada
function selectAnswer(answer) {
    // Verifica se a resposta está correta
    if (answer.correct) {
        score++;
        resultText.innerText = "Correto!";
        resultText.style.color = 'green';
    } else {
        resultText.innerText = "Errado!";
        resultText.style.color = 'red';
    }

    // Exibe o resultado da resposta
    resultContainer.style.display = 'block';

    // Desabilita as opções após a seleção de uma resposta
    Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text && answer.correct) {
            button.style.backgroundColor = '#2ecc71'; // Verde para resposta correta
        } else if (button.innerText === answer.text && !answer.correct) {
            button.style.backgroundColor = '#e74c3c'; // Vermelho para resposta errada
        }
    });

    // Exibe o botão de próxima pergunta
    nextButton.style.display = 'inline-block';
}

// Função para passar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;

    // Verifica se ainda há perguntas
    if (currentQuestionIndex < questions.length) {
        resultContainer.style.display = 'none'; // Esconde o resultado anterior
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none'; // Esconde o botão 'Próxima' até que uma resposta seja selecionada
    } else {
        // Exibe a pontuação final
        showFinalScore();
    }
}

// Função para exibir a pontuação final
function showFinalScore() {
    questionContainer.innerHTML = `<h2>Fim do quiz!</h2>`;
    answersContainer.innerHTML = `<p>Sua pontuação: ${score} de ${questions.length}</p>`;
    nextButton.style.display = 'none'; // Esconde o botão 'Próxima' ao finalizar
    resultContainer.style.display = 'none'; // Esconde o container de resultado
    restartButton.style.display = 'inline-block'; // Exibe o botão de reiniciar
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0; // Reseta o índice da pergunta
    score = 0; // Reseta a pontuação
    startQuiz(); // Reinicia o quiz
}

// Evento do botão 'Próxima'
nextButton.addEventListener('click', nextQuestion);

// Inicia o quiz ao carregar a página
startQuiz();
