import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of FranceL’origine de la viande doit être indiquée dans un plat préparé acheté en grande surface si il contient?',
			answerOptions: [
				{ answerText: 'Au moins 8% de viande', isCorrect: true },
				{ answerText: 'Deux types de viande', isCorrect: false },
				{ answerText: 'De la viande française et d"un autre pays de L"UE', isCorrect: false },
			],
		},
		{
			questionText: 'Pour placer des aliments que je viens de cuisiner au réfrigérateur je ne dois pas attendre...?',
			answerOptions: [
				{ answerText: 'Plus de 5 heures', isCorrect: false },
				{ answerText: 'Plus de 2 heures', isCorrect: true },
				{ answerText: 'Plus de 30 minutes', isCorrect: false },
			],
		},
		{
			questionText: 'Nous gaspillons par an et par habitant...?',
			answerOptions: [
				{ answerText: '20 kg de nourriture', isCorrect: false },
				{ answerText: '30 kg de nourriture', isCorrect: false },
				{ answerText: '50 kg de nourriture', isCorrect: true },
			],
		},
		{
			questionText: 'Lorsque l"on place une conserve entamée au réfrigérateur sa date limite de consommation est...?',
			answerOptions: [
				{ answerText: 'Réduite', isCorrect: false },
				{ answerText: 'Il n"y a pas de DLC sur les conserves', isCorrect: false },
				{ answerText: 'Aucune incidence', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
	if (isCorrect) {
		setScore(score + 1);
	}
	
	const nextQuestion = currentQuestion + 1;
	if (nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	} else {
		setShowScore(true);
	}
	};

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions, index) =>
						<button onClick={() => handleAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
				)}
					</div>
				</>
			)}
		</div>
	);
}
