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
      {
        question: '¿Para qué fueron diseñados principalmente los SO de una sola tarea?',
        options: [
          'Para entornos simples.',
          'Para entornos complejos.',
          'Las dos son correctas.'
        ],
        correctAnswer: 'Para entornos simples.'
      },
      {
        question: '¿Qué le permite al usuario realizar?',
        options: [
          'Realizar muchas tareas a la vez.',
          'Realizar una tarea a la vez.',
          'No le permite realizar ninguna tarea.'
        ],
        correctAnswer: 'Realizar una tarea a la vez.'
      },
      {
        question: 'Para este tipo de sistemas, una tarea es:',
        options: [
          'Un proceso, y su pequeñez y sencillez solo le permite controlar una sola a la vez.',
          'Un proceso, y su complejidad no le permite realizar ninguna tarea.',
          'Un proceso que debe cumplirse para que cumpla con las condiciones del usuario.'
        ],
        correctAnswer: 'Un proceso, y su pequeñez y sencillez solo le permite controlar una sola a la vez.'
      },
      {
        question: '¿Qué son los SO de un solo usuario/multitareas?',
        options: [
          'Son un tipo de sistema diseñado para servir a una única persona.',
          'Es un sistema diseñado para muchos usuarios a la vez.',
          'Es un tipo de sistema diseñado para servir a otro sistema.'
        ],
        correctAnswer: 'Son un tipo de sistema diseñado para servir a una única persona.'
      },
      {
        question: '¿Qué le permite a estos sistemas al usuario?',
        options: [
          'Le permite ejecutar todas las aplicaciones que desee.',
          'Ejecutar aplicaciones de a uno, pero no tareas.',
          'Ejecutar múltiples aplicaciones y tareas al mismo tiempo.'
        ],
        correctAnswer: 'Ejecutar múltiples aplicaciones y tareas al mismo tiempo.'
      },
      {
        question: '¿Qué ofrecen estos sistemas?',
        options: [
          'Interfaces de usuario eficiente y eficaz.',
          'Interfaces de usuario intuitivas y gráficas.',
          'Las dos son correctas.'
        ],
        correctAnswer: 'Las dos son correctas.'
      },
      {
        question: '¿Para qué fueron diseñados los SO multiusuarios/multitareas?',
        options: [
          'Para admitir simultáneamente a varios usuarios.',
          'Ejecutar múltiples tareas.',
          'Todas son correctas'
        ],
        correctAnswer: 'Todas son correctas'
      },
      {
        question: '¿Dónde son esenciales?',
        options: [
          'En entornos donde se requiere el acceso concurrente a recursos compartidos como servidores y mainframes.',
          'En entornos donde se requiere acceso concurrente a recursos privados como datos personales.',
          'En entornos donde no se requiere acceso a ningún recurso.'
        ],
        correctAnswer: 'En entornos donde se requiere el acceso concurrente a recursos compartidos como servidores y mainframes.'
      },
      {
        question: '¿Con qué suelen contar?',
        options: [
          'Suele contar con sistemas de hackeo para poder ingresar a datos privados.',
          'Sistemas de autenticación y control de acceso robustos para proteger la privacidad y la seguridad de los datos.',
          'Solamente cuenta con un sistema para proteger contra un posible antivirus.'
        ],
        correctAnswer: 'Sistemas de autenticación y control de acceso robustos para proteger la privacidad y la seguridad de los datos.'
      }
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
