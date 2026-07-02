const tabs = Array.from(document.querySelectorAll('.tab-btn'));
const panels = Array.from(document.querySelectorAll('[data-panel]'));

function showPanel(name) {
  panels.forEach(panel => {
    panel.classList.toggle('active', panel.dataset.panel === name);
  });
  tabs.forEach(tab => {
    const selected = tab.dataset.target === name;
    tab.setAttribute('aria-selected', String(selected));
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => showPanel(tab.dataset.target));
});

showPanel('quienes');
