const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

document.querySelector('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

const productDetails = {
  original: {name:'Es Kopi Susu Original', description:'Espresso, susu creamy, dan gula aren berpadu menghasilkan rasa kopi susu yang seimbang. Cocok untuk teman aktivitas sehari-hari.', price:'Rp15.000'},
  caramel: {name:'Es Kopi Susu Caramel', description:'Kopi susu dengan sentuhan saus karamel yang lembut dan manis. Pilihan pas untuk pencinta rasa manis.', price:'Rp17.000'},
  vanilla: {name:'Es Kopi Susu Vanilla', description:'Perpaduan kopi dan aroma vanilla yang lembut, menghasilkan rasa creamy yang nyaman dinikmati.', price:'Rp17.000'},
  hazelnut: {name:'Es Kopi Susu Hazelnut', description:'Kopi susu dengan aroma kacang hazelnut yang khas dan rasa manis yang seimbang.', price:'Rp18.000'},
  aren: {name:'Es Kopi Susu Gula Aren', description:'Kopi susu dengan manis legit gula aren yang akrab di lidah dan nikmat diminum dingin.', price:'Rp18.000'}
};
const modal = document.querySelector('#productModal');
document.querySelectorAll('.detail-btn').forEach(button => button.addEventListener('click', () => {
  const product = productDetails[button.dataset.product];
  document.querySelector('#modalTitle').textContent = product.name;
  document.querySelector('#modalDescription').textContent = product.description;
  document.querySelector('#modalPrice').textContent = product.price;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}));
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
document.querySelector('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if(event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeModal(); });

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const output = document.querySelector('#formMessage');
  if(!name || !email || !message){ output.textContent = 'Semua kolom wajib diisi.'; output.style.color = '#b34d3c'; return; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ output.textContent = 'Format email belum benar.'; output.style.color = '#b34d3c'; return; }
  output.textContent = `Terima kasih, ${name}! Pesan berhasil divalidasi (demo).`;
  output.style.color = '';
  form.reset();
});