const quiz = [
  {
    question: '野獣先輩の本名と言われているものといえば？',
    answers: [ '田所浩一', '田所浩二', '田所浩三', '田所浩四郎'],
    correct: '田所浩二'
  }, {
    question: '多田野数人が出演したことにより、有名になったビデオのタイトルは？',
    answers: [ '真夏の夜の夢', '真夏の昼の正夢', '真夏の夜の淫夢', '真冬の夜の淫夢'],
    correct: '真夏の夜の淫夢'
  }, {
    question: '野獣先輩の有名な台詞といえば？',
    answers: [ 'やるんだ', 'そうだよ', 'あくしろよ', 'やりますねぇ'],
    correct: 'やりますねぇ'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
