/* =====================================================
   EDITE AS PERGUNTAS AQUI — troque pelas de vocês!
   "section": use "nos" pras 10 primeiras (sobre o casal)
              e "mim" pras 10 últimas (sobre você)
   "options": lista de alternativas
   "correct": índice (0,1,2...) da alternativa certa
   ===================================================== */
const questions = [
  // ---------- PARTE 1 · SOBRE NÓS ----------
  {
    section: "nos",
    question: "Em que mês a gente começou a namorar?",
    options: ["Janeiro", "Abril", "Setembro", "Março"],
    correct: 1
  },
  {
    section: "nos",
    question: "Quem se apaixonou primeiro?",
    options: ["Você", "Eu", "nós dois", "A Tiny"],
    correct: 1
  },
  {
    section: "nos",
    question: "Onde rolou o nosso primeiro beijo?",
    options: ["Na Quadra", "No Bosque", "No seu aniversario", "Em uma sala"],
    correct: 0
  },
  {
    section: "nos",
    question: "Qual musica eu pedi pra você tocar?",
    options: ["Merry go Round", "Moonlight Sonata", "Risk it All", "Sealed Vessel"],
    correct: 0
  },
  {
    section: "nos",
    question: "Qual musica eu quero MUITO tocar com você?",
    options: ["Winter Wind", "Final Duet", "Clair De Lune", "Sealed Vessel"],
    correct: 1
  },
  {
    section: "nos",
    question: "Qual é a nossa música do casal?",
    options: ["Risk it all", "Um Amor Puro", "Get You", "Disritmia"],
    correct: 0
  },
  {
    section: "nos",
    question: "Quem disse eu te amo primeiro?",
    options: ["Você", "Eu", "Nós dois ao mesmo tempo", "a Polly"],
    correct: 0
  },
  {
    section: "nos",
    question: "Qual foi a nossa primeira conversa?",
    options: ["Sobre queimado", "Sobre um story seu", "Sobre Bruno Mars", "sobre eu ver você tocando violino"],
    correct: 1
  },
  {
    section: "nos",
    question: "Qual foi a primeira coisa que eu comprei pra você?",
    options: ["Uma coca", "Uma paçoca", "Um Brownie", "Um chocolate"],
    correct: 0
  },
  {
    section: "nos",
    question: "Qual é a nossa cor?",
    options: ["Vermelho", "Rosa", "Amarelo", "Preto"],
    correct: 2
  },

  // ---------- PARTE 2 · SOBRE MIM ----------
  {
    section: "mim",
    question: "Qual é a minha comida favorita?",
    options: ["Torta de Frango", "Pizza", "Churrasco", "Macarronada"],
    correct: 0
  },
  {
    section: "mim",
    question: "Qual é o meu cantor favorito?",
    options: ["Tyler the Creator", "Alec", "Beethoven", "Link do Zap"],
    correct: 0
  },
  {
    section: "mim",
    question: "Qual é o meu maior sonho?",
    options: ["Viver uma vida com você", "Ter meu próprio negócio", "Viajar o mundo", "Comprar minha casa"],
    correct: 0
  },
  {
    section: "mim",
    question: "Do que eu tenho medo?",
    options: ["Altura", "Montanha Russa", "Aranha", "Ficar sem internet"],
    correct: 2
  },
  {
    section: "mim",
    question: "Qual é a minha série favorita?",
    options: ["Pokémon", "O Mentalista", "Kotaro foi morar sozinho", "Advogada Extraordinaria"],
    correct: 0
  },
  {
    section: "mim",
    question: "Oque eu mais gosto de fazer?",
    options: ["Jogar Volei", "ficar com você", "jogar jogos", "Todas as alternativas"],
    correct: 3
  },
  {
    section: "mim",
    question: "Qual é o meu jogo favorito?",
    options: ["Minecraft", "Roblox", "Hollow Knight", "Omori"],
    correct: 2
  },
  {
    section: "mim",
    question: "Oque eu faço quando eu fico estressado?",
    options: ["Não falo com ninguem o dia todo", "Jogo Volei", "Vou jogar", "Ouvir música"],
    correct: 1
  },
  {
    section: "mim",
    question: "Qual é o meu maior sonho pra gente, juntos?",
    options: ["Morar juntos", "Casar", "Viajar o mundo a dois", "Envelhecer ao seu lado"],
    correct: 3
  },
  {
    section: "mim",
    question: "O que eu mais amo em você?",
    options: ["Seu sorriso", "Seu jeito de cuidar de mim", "Sua risada", "Tudo isso junto"],
    correct: 3
  }
];

const transitionMessages = {
  mim: {
    title: "Parte 1 completa! 💛",
    text: "Agora a parte mais sobre mim... vamos ver o quanto você me conhece de verdade?"
  }
};

/* =====================================================
   EDITE O SEU POEMA AQUI — vai aparecer dentro da carta
   Use \n (quebra de linha) pra separar os versos
   ===================================================== */
const poem = `Eu me apaixonei pelos seus olhos,
pelo jeito que eles conseguem me prender,
como se, quando eu te olho,
o mundo inteiro parasse só pra eu te ver.

Me apaixonei pelo seu sorriso,
tão lindo que ilumina até os meus dias mais difíceis.
E toda vez que você sorri pra mim,
eu sinto que tive sorte por ter você na minha vida.

Mas existe algo em você
que faz meu coração bater ainda mais forte:
é quando vejo você tocando violino.

Eu fico te olhando em silêncio,
admirando cada movimento seu,
cada nota que você toca,
e me apaixonando mais uma vez.

Parece que o violino vira uma extensão da sua alma,
e a música que você faz
é a coisa mais bonita que meus olhos já tiveram o prazer de assistir.

E talvez eu nunca consiga explicar
o tamanho do meu amor por você,
mas se eu pudesse transformar tudo o que sinto em música,
eu escolheria cada nota para dizer:

eu amo seus olhos, amo seu sorriso,
amo ver você tocar,
mas, acima de tudo,
amo você.`;

/* =====================================================
   APRESENTAÇÃO FINAL (depois que ela fechar a carta)
   ===================================================== */

// frases que aparecem uma de cada vez, indo e voltando com fade
const slideshowTexts = [
  "Antes de mais nada, eu quero que você saiba de uma coisa.",
  "Desde que você entrou na minha vida, tudo ficou mais leve.",
  "Cada detalhe seu virou o meu favorito.",
  "Não é só sobre gostar de estar com você...",
  "é sobre não conseguir imaginar minha vida sem você."
];

// a "virada" antes do "Você."
const revealTexts = [
  "A pessoa que eu mais vou amar nesse mundo é...",
  "Você."
];

// coloque aqui os nomes dos arquivos das fotos de vocês
// (deixe as fotos na mesma pasta do index.html, dentro de uma pasta "fotos")
const slideshowPhotos = [
  "fotos/nss1.jpeg",
  "fotos/nss2.jpeg",
  "fotos/nss3.jpeg"
];

// mensagem final, depois das fotos
const finalMessage = `Mais um mês, amorrr! Olha só eu de novo aqui KSKSKSKSK. Meu bem, nosso dia chegou mais uma vez, e eu fico pensando em como é incrível tudo que a gente vem construindo juntos. Parece que estamos há anos e anos JUNTOS, de tanta intimidade, tantos aprendizados, discussões, risadas, brincadeiras, brincadeiras 😏 (KSKASKSAAKSA PAREI).
Amor, eu queria te dizer que todos esses momentos que vivemos juntos estão guardados no meu coração. Cada risada, cada conversa, cada abraço, cada momento bobo e até nossas discussões fazem parte da nossa história e tornam tudo ainda mais especial pra mim.
E dessa vez eu quis fazer uma coisinha diferente pra você. Fiz esse site como um presentinho, um cantinho só nosso, pra guardar um pouquinho daquilo que vivemos e, principalmente, pra te lembrar do quanto você é importante pra mim. Talvez não seja o presente mais caro ou mais elaborado do mundo, mas foi feito pensando em você, com todo o meu carinho e amor. ❤️
Eu queria que, sempre que você entrar aqui, lembrasse de nós, de tudo que já vivemos e de tudo que ainda vamos viver. Quero continuar criando memórias com você, colecionando momentos, risadas, histórias e, claro, algumas brincadeiras 😏 KSKSKSKSK.
Eu sou muito feliz por ter você comigo e por poder compartilhar mais um mês ao seu lado. Você se tornou uma pessoa muito importante na minha vida, alguém que eu quero cuidar, amar, aprender e crescer junto.
Obrigado por ser você, por estar comigo e por fazer meus dias muito mais especiais. Eu te amo muito, muito mesmo, mais do que às vezes consigo colocar em palavras.
Feliz mais um mês pra nós, meu amor. Que esse seja só mais um de muitos e muitos meses que ainda vamos comemorar juntinhos. Eu te amo, minha princesa.`;

function buildSlides(){
  const slides = [];
  slideshowTexts.forEach(t => slides.push({ type: 'text', content: t, duration: 3200 }));
  slides.push({ type: 'text', content: revealTexts[0], duration: 2600 });
  slides.push({ type: 'reveal', content: revealTexts[1], duration: 3000 });
  slideshowPhotos.forEach(src => slides.push({ type: 'photo', content: src, duration: 2800 }));
  slides.push({ type: 'final', content: finalMessage });
  return slides;
}

const endMessages = [
  "Você me conhece de verdade ❤️",
  "Cada resposta certa foi um motivo a mais pra eu te amar ainda mais."
];

let current = 0;
let locked = false;

const qCount = document.getElementById('qCount');
const sectionLabel = document.getElementById('sectionLabel');
const questionText = document.getElementById('questionText');
const optionsWrap = document.getElementById('optionsWrap');
const feedback = document.getElementById('feedback');
const trailDots = document.getElementById('trailDots');
const marker = document.getElementById('marker');
const quizCard = document.getElementById('quizCard');
const endCard = document.getElementById('endCard');
const transitionCard = document.getElementById('transitionCard');
const envelope = document.getElementById('envelope');
const letterOverlay = document.getElementById('letterOverlay');
const poemText = document.getElementById('poemText');
const slideshowOverlay = document.getElementById('slideshowOverlay');
const slideContent = document.getElementById('slideContent');
const slideshowCloseFinal = document.getElementById('slideshowCloseFinal');
const sideScrollLeft = document.getElementById('sideScrollLeft');
const sideScrollRight = document.getElementById('sideScrollRight');

let slides = [];
let slideIndex = 0;

const sectionNames = { nos: "sobre nós", mim: "sobre mim" };

function getSectionBounds(index){
  const sec = questions[index].section;
  let start = index;
  while(start > 0 && questions[start - 1].section === sec) start--;
  let end = index;
  while(end < questions.length - 1 && questions[end + 1].section === sec) end++;
  return { start, end, sec };
}

function buildTrail(){
  const { start, end } = getSectionBounds(current);
  trailDots.innerHTML = '';
  for(let i = start; i <= end; i++){
    const d = document.createElement('div');
    d.className = 'dot';
    d.id = 'dot-' + i;
    trailDots.appendChild(d);
  }
}

function positionMarker(index, animate = true){
  const dot = document.getElementById('dot-' + index);
  if(!dot) return;
  const wrapRect = trailDots.getBoundingClientRect();
  const dotRect = dot.getBoundingClientRect();
  const left = dotRect.left - wrapRect.left + dotRect.width/2;
  if(!animate) marker.style.transition = 'none';
  marker.style.left = left + 'px';
  if(!animate){
    requestAnimationFrame(()=>{ marker.style.transition = ''; });
  }
}

function updateDots(){
  const { start, end } = getSectionBounds(current);
  for(let i = start; i <= end; i++){
    const d = document.getElementById('dot-' + i);
    if(!d) continue;
    d.classList.remove('done','current');
    if(i < current) d.classList.add('done');
    if(i === current) d.classList.add('current');
  }
  positionMarker(current);
}

function renderQuestion(){
  locked = false;
  feedback.textContent = '';
  const q = questions[current];

  // reconstrói a trilha se mudou de seção (ex: reset pro começo)
  const firstDotOfSection = document.getElementById('dot-' + getSectionBounds(current).start);
  if(!firstDotOfSection){
    buildTrail();
  }

  qCount.textContent = `pergunta ${current + 1} de ${questions.length}`;
  if(sectionLabel) sectionLabel.textContent = sectionNames[q.section] || '';
  questionText.textContent = q.question;
  optionsWrap.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = opt;
    btn.onclick = () => selectOption(i, btn);
    optionsWrap.appendChild(btn);
  });
  updateDots();
}

function selectOption(i, btn){
  if(locked) return;
  locked = true;
  const q = questions[current];
  const allBtns = optionsWrap.querySelectorAll('.option');
  allBtns.forEach(b => b.disabled = true);

  if(i === q.correct){
    btn.classList.add('correct');
    feedback.textContent = pickPraise();
    setTimeout(advanceAfterCorrect, 900);
  } else {
    btn.classList.add('wrong');
    allBtns[q.correct].classList.add('correct');
    feedback.textContent = 'ops... voltando pro início dessa parte 💭';
    setTimeout(() => {
      current = getSectionBounds(current).start;
      buildTrail();
      updateDots();
      setTimeout(renderQuestion, 650);
    }, 1000);
  }
}

function advanceAfterCorrect(){
  const prevSection = questions[current].section;
  current++;
  if(current >= questions.length){
    showEnd();
    return;
  }
  const newSection = questions[current].section;
  if(newSection !== prevSection && transitionMessages[newSection]){
    showTransition(newSection);
  } else {
    renderQuestion();
  }
}

function pickPraise(){
  const p = ["isso mesmo! 💛","você me conhece 👀","acertou! 💗","perfeito!"];
  return p[Math.floor(Math.random()*p.length)];
}

function showTransition(sectionKey){
  const msg = transitionMessages[sectionKey];
  if(!msg || !transitionCard) { renderQuestion(); return; }
  quizCard.style.display = 'none';
  document.querySelector('.trail-wrap').style.display = 'none';
  transitionCard.style.display = 'block';
  transitionCard.querySelector('h2').textContent = msg.title;
  transitionCard.querySelector('p').textContent = msg.text;
}

function continueFromTransition(){
  transitionCard.style.display = 'none';
  quizCard.style.display = 'block';
  document.querySelector('.trail-wrap').style.display = 'block';
  buildTrail();
  renderQuestion();
}

function showEnd(){
  quizCard.style.display = 'none';
  document.querySelector('.trail-wrap').style.display = 'none';
  endCard.style.display = 'block';
  document.getElementById('endMessage').textContent = endMessages[1];
  if(poemText) poemText.textContent = poem;
  launchConfetti();
}

function openEnvelope(){
  if(!envelope) return;
  envelope.classList.add('open');
  setTimeout(() => {
    if(letterOverlay) letterOverlay.classList.add('show');
  }, 650);
}

function closeLetter(){
  if(letterOverlay) letterOverlay.classList.remove('show');
  setTimeout(openSlideshow, 350);
}

function buildSideColumn(container){
  if(!container || slideshowPhotos.length === 0) return;
  container.innerHTML = '';
  const track = document.createElement('div');
  track.className = 'side-scroll-track';
  // duplica a lista de fotos (2x) pra o loop rolar sem emenda visível
  for(let rep = 0; rep < 2; rep++){
    slideshowPhotos.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'foto nossa';
      track.appendChild(img);
    });
  }
  container.appendChild(track);
}

function openSlideshow(){
  if(!slideshowOverlay || !slideContent) return;
  slides = buildSlides();
  slideIndex = 0;
  if(slideshowCloseFinal) slideshowCloseFinal.classList.remove('show');
  buildSideColumn(sideScrollLeft);
  buildSideColumn(sideScrollRight);
  slideshowOverlay.classList.add('show');
  playSlide();
}

function playSlide(){
  const s = slides[slideIndex];
  if(!s) return;
  slideContent.classList.remove('show');
  slideContent.innerHTML = '';

  const el = document.createElement('div');
  if(s.type === 'photo'){
    el.className = 'slide-photo-wrap';
    const img = document.createElement('img');
    img.src = s.content;
    img.alt = 'foto nossa';
    img.className = 'slide-photo';
    el.appendChild(img);
  } else if(s.type === 'reveal'){
    el.className = 'slide-text slide-reveal';
    el.textContent = s.content;
  } else if(s.type === 'final'){
    el.className = 'slide-text slide-final';
    el.textContent = s.content;
  } else {
    el.className = 'slide-text';
    el.textContent = s.content;
  }
  slideContent.appendChild(el);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => slideContent.classList.add('show'));
  });

  if(s.type === 'final'){
    setTimeout(() => {
      if(slideshowCloseFinal) slideshowCloseFinal.classList.add('show');
    }, 1200);
    return;
  }

  setTimeout(() => {
    slideContent.classList.remove('show');
    setTimeout(() => {
      slideIndex++;
      playSlide();
    }, 700);
  }, s.duration);
}

function closeSlideshow(){
  if(slideshowOverlay) slideshowOverlay.classList.remove('show');
}

function restartQuiz(){
  current = 0;
  endCard.style.display = 'none';
  if(envelope) envelope.classList.remove('open');
  if(letterOverlay) letterOverlay.classList.remove('show');
  if(slideshowOverlay) slideshowOverlay.classList.remove('show');
  quizCard.style.display = 'block';
  document.querySelector('.trail-wrap').style.display = 'block';
  buildTrail();
  renderQuestion();
}

function launchConfetti(){
  const sky = document.getElementById('sky');
  for(let i=0;i<24;i++){
    const s = document.createElement('span');
    s.textContent = ['💖','💗','✨','💛'][Math.floor(Math.random()*4)];
    s.style.left = Math.random()*100 + '%';
    s.style.fontSize = (14 + Math.random()*14) + 'px';
    s.style.animationDuration = (4 + Math.random()*4) + 's';
    s.style.animationDelay = (Math.random()*1.5) + 's';
    sky.appendChild(s);
  }
}

function seedAmbientHearts(){
  const sky = document.getElementById('sky');
  for(let i=0;i<10;i++){
    const s = document.createElement('span');
    s.textContent = '♡';
    s.style.left = Math.random()*100 + '%';
    s.style.fontSize = (12 + Math.random()*10) + 'px';
    s.style.animationDuration = (10 + Math.random()*10) + 's';
    s.style.animationDelay = (Math.random()*10) + 's';
    sky.appendChild(s);
  }
}

window.addEventListener('resize', () => positionMarker(current, false));
window.addEventListener('load', () => {
  buildTrail();
  renderQuestion();
  positionMarker(current, false);
  seedAmbientHearts();
});