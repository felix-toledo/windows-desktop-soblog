/* eslint-disable react/prop-types */
import '../styles/Game.css'
import { useState } from 'react';

export default function Game({isHidden, setGameHidden}){

     const gameClassName = isHidden ? "game gameHidden" : "game";

     const questions = [
          {
            question: 'Sistemas operativos en tiempo real gestionan:',
            options: [
              'Las críticas en tiempo real de manera predecible y confiable.',
              'Las opiniones en tiempo real de manera predecible y confiable.',
              'Las críticas en tiempo real de manera impredecible e insegura.'
            ],
            correctAnswer: 'Las críticas en tiempo real de manera predecible y confiable.'
          },
          {
            question: '¿A qué tipos de entradas responden los sistemas operativos en tiempo real?',
            options: [
              'De forma lenta, en horas o días.',
              'De forma extremadamente rápida, milésimas o millonésimas de segundos.',
              'Ninguna de las anteriores.'
            ],
            correctAnswer: 'De forma extremadamente rápida, milésimas o millonésimas de segundos.'
          },
          {
            question: '¿Para qué son necesarios los SO en tiempo real?',
            options: [
              'Ejecutar cualquier tipo de aplicación.',
              'Ejecutar videojuegos o lenguajes de programación.',
              'Ejecutar equipos de diagnóstico médico, maquinarias, instrumentos científicos, etc.'
            ],
            correctAnswer: 'Ejecutar equipos de diagnóstico médico, maquinarias, instrumentos científicos, etc.'
          },
          // Agrega más preguntas aquí
        ];
      
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
      
        const handleAnswerClick = (selectedOption) => {
          if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
          }
      
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            // El usuario ha completado el quiz, puedes mostrar un mensaje final o redirigir a otra página.
            alert(`¡Has terminado! Puntaje: ${score}/${questions.length}`);
            setGameHidden(true)
          }
        };
      
        return (
          <div className={gameClassName}>
            <h1>Quiz sobre Sistemas Operativos</h1>
            <div className="question-container">
              <h2>Pregunta {currentQuestion + 1}:</h2>
              <p>{questions[currentQuestion].question}</p>
            </div>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        );
      }
