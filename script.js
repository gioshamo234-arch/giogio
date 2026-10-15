(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  const areaInput = document.getElementById('areaInput');
  const areaRange = document.getElementById('areaRange');
  const estimateTotal = document.getElementById('estimateTotal');
  const formArea = document.getElementById('formArea');
  const formService = document.getElementById('formService');
  const quoteForm = document.getElementById('quoteForm');
  const formFeedback = document.getElementById('formFeedback');

  // Publicly advertised historical rates; these are NOT binding/current quotes.
  // Confirm with the business before advertising them as active prices.
  const INDICATIVE_RATES_USD = Object.freeze({ black: 250, white: 400 });

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'მენიუს დახურვა' : 'მენიუს გახსნა');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  }
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', evt => { if (evt.key === 'Escape') setMenu(false); });
  document.addEventListener('click', evt => { if (!header.contains(evt.target)) setMenu(false); });

  function updateCalculator() {
    let value = Number(areaInput.value);
    if (!Number.isFinite(value) || value < 20) value = 20;
    if (value > 1000) value = 1000;
    areaRange.value = String(Math.min(300, Math.max(20, value)));
    const choice = document.querySelector('input[name="buildType"]:checked').value;
    const price = Math.round(value * INDICATIVE_RATES_USD[choice]);
    estimateTotal.textContent = '$' + price.toLocaleString('en-US');
  }
  areaInput.addEventListener('input', updateCalculator);
  areaInput.addEventListener('blur', () => {
    areaInput.value = String(Math.min(1000, Math.max(20, Math.round(Number(areaInput.value) || 100))));
    updateCalculator();
  });
  areaRange.addEventListener('input', () => { areaInput.value = areaRange.value; updateCalculator(); });
  document.querySelectorAll('input[name="buildType"]').forEach(radio => radio.addEventListener('change', updateCalculator));
  document.getElementById('estimateCta').addEventListener('click', () => {
    formArea.value = areaInput.value;
    formService.value = document.querySelector('input[name="buildType"]:checked').value === 'white' ? 'თეთრი კარკასი' : 'შავი კარკასი';
  });
  updateCalculator();

  document.querySelectorAll('.service-select').forEach(button => button.addEventListener('click', () => {
    formService.value = button.dataset.service;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => document.querySelector('input[name="name"]').focus({ preventScroll: true }), 500);
  }));

  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!quoteForm.reportValidity()) return;
    const data = new FormData(quoteForm);
    const clean = (name) => String(data.get(name) || '').trim();
    const customerName = clean('name');
    const phone = clean('phone');
    const lines = [
      'გამარჯობა, Nouvelle Vie!', '',
      'მსურს მშენებლობის/რემონტის შესახებ კონსულტაცია.', '',
      'სახელი: ' + customerName,
      'ტელეფონი: ' + phone,
      'სამუშაოს ტიპი: ' + clean('service'),
      'მშენებლობის ადგილი: ' + (clean('location') || 'დასაზუსტებელია'),
      'ფართობი: ' + (clean('area') ? clean('area') + ' მ²' : 'დასაზუსტებელია'),
      'დამატებითი ინფორმაცია: ' + (clean('message') || 'არ არის მითითებული'),
      '', 'გთხოვთ, შემეხმიანოთ შეთავაზების განხილვისთვის.'
    ];
    const subject = 'შეთავაზების მოთხოვნა — ' + customerName;
    const mailto = 'mailto:nuvelve0101@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    formFeedback.textContent = 'იხსნება ელფოსტის აპი. წერილის გაგზავნას თავად უნდა დააჭირო. თუ აპი არ გაიხსნა, გამოიყენე Facebook ან ტელეფონი.';
    window.location.href = mailto;
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    items.forEach(item => observer.observe(item));
  } else {
    document.querySelectorAll('.reveal').forEach(item => item.classList.add('visible'));
  }
})();