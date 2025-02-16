import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import questionsData from '../../../questions.json';
import answersData from '../../../answers.json';

import styles from './tests.module.scss';

interface Question {
  id: number;
  themeId: number;
  picture: string | null;
  name: {
    uk: string;
    en: string | null;
  };
  explanation: {
    uk: string;
    en: string | null;
  };
  countWrongAnswer: number;
}

interface Answer {
  id: number;
  name: {
    uk: string;
    en: string | null;
  };
  order: number;
  questionId: number;
  isCorrect: boolean;
}

interface QuestionWithAnswers extends Question {
  answers: Answer[];
}

const images = import.meta.glob('../../../questions/*', { eager: true, as: 'url' });

export const Tests: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<QuestionWithAnswers[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  useEffect(() => {
    const questionsCopy: Question[] = [...questionsData];

    const shuffleArray = (array: Question[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    shuffleArray(questionsCopy);

    const selected = questionsCopy.slice(0, 20);

    const selectedWithAnswers: QuestionWithAnswers[] = selected.map((question) => {
      const answers: Answer[] = answersData.filter((ans: Answer) => ans.questionId === question.id);
      answers.sort((a, b) => a.order - b.order);
      return { ...question, answers };
    });

    setSelectedQuestions(selectedWithAnswers);
  }, []);

  if (selectedQuestions.length === 0) {
    return <div>Завантаження...</div>;
  }

  const activeQuestion = selectedQuestions[activeQuestionIndex];

  let imageUrl: string | undefined;
  if (activeQuestion.picture) {
    const fileName = activeQuestion.picture.replace('questions/', '');
    const imageKey = `../../../questions/${fileName}`;
    imageUrl = images[imageKey] as string;
  }

  return (
    <div className={styles.tests}>
      <div className={styles.testsHeader}>
        <div className={styles.testHeader__container}>
          <div className={styles.testHeader__text}>Іспит, як в СЦ</div>
          <div className={styles.testHeader__wrap}>
            <div className={styles.testHeader__timer}>11:83</div>
            <div className={styles.testHeader__complaint}>Поскаржатись</div>
            <div className={styles.testHeader__save}>Зберегти</div>
          </div>
        </div>

        <div className={styles.testHeader__container}>
          <nav className={styles.testHeader__questions}>
            {selectedQuestions.map((_, idx) => (
              <a
                key={idx}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveQuestionIndex(idx);
                }}
                className={cn(styles.testHeader__question, {
                  [styles.active]: activeQuestionIndex === idx
                })}
              >
                {idx + 1}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div id={`question-${activeQuestionIndex + 1}`} className={styles.tests__wrap}>
        <div className={styles.tests__question}>{activeQuestion.name.uk}</div>

        {activeQuestion.picture && (
          <div className={styles.questionImage}>
            <img src={imageUrl} alt="Question img" />
          </div>
        )}

        <div className={styles.test__questionWrap}>
          <div className={styles.testWrap__buttons}>
            {activeQuestion.answers.map((answer) => (
              <button key={answer.id} type="button" className={styles.testWrap__button}>
                {answer.name.uk}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
