const REVIEW_WEB_APP = 'https://script.google.com/macros/s/AKfycbzxaDXaQkBJl-Y_MlTivdF6U3CECG3YAeKTNWCU5AKXVBYK8bXoSlMqWQZLsIgVX3wK/exec';

const escapeHtml = value => String(value || '').replace(/[&<>'"]/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[char]));

const reviewForm = document.getElementById('reviewForm');
if (reviewForm) reviewForm.addEventListener('submit', event => {
  event.preventDefault();
  const rating = document.querySelector('input[name=rating]:checked').value;
  const name = document.getElementById('customer').value.trim() || 'Customer';
  const review = document.getElementById('words').value.trim();
  if (!review) { alert('Please write a short review before sending it.'); return; }
  fetch(REVIEW_WEB_APP, { method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify({type:'review', name, rating, review}) }).catch(() => {});
  reviewForm.innerHTML = '<div class="full thanks"><div class="eyebrow">Thank you</div><h2>Your review was sent! 🎉</h2><p>Alex will review it shortly. Genuine customer reviews appear on the public reviews page after approval.</p><a class="btn" href="reviews.html">See customer reviews ↗</a></div>';
});

const reviewList = document.getElementById('reviewList');
if (reviewList) {
  fetch(REVIEW_WEB_APP + '?action=reviews').then(response => response.json()).then(reviews => {
    const list = Array.isArray(reviews) ? reviews : [];
    const average = list.length ? (list.reduce((sum, item) => sum + Number(item.rating || 0), 0) / list.length).toFixed(1) : '0.0';
    document.getElementById('reviewAverage').textContent = average + ' ★';
    document.getElementById('reviewCount').textContent = list.length + (list.length === 1 ? ' customer review' : ' customer reviews');
    if (!list.length) return;
    reviewList.innerHTML = list.map(item => '<article class="review-card"><div class="stars">' + '★'.repeat(Number(item.rating || 0)) + '</div><p>“' + escapeHtml(item.review) + '”</p><b>— ' + escapeHtml(item.name || 'Customer') + '</b></article>').join('');
  }).catch(() => {});
}
