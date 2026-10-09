const controls = document.querySelector('.filters');
const buttons = [...controls.querySelectorAll('button')];
const projects = [...document.querySelectorAll('.project')];
controls.hidden = false;
buttons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  projects.forEach(project => {
    const visible = category === 'Todos' || project.dataset.category === category;
    project.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById('result-count').textContent = `${count} ${count === 1 ? 'projeto' : 'projetos'}${category === 'Todos' ? '' : ' em ' + category}`;
}));
