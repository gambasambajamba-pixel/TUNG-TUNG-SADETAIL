const REVIEW_WEB_APP = 'https://script.google.com/macros/s/AKfycbyFNfk06FSS8ZHvi2Hi0g7rXtaldavjlGph1RYhFcLu1SVzGwpQHJ5m_cNUhJOVye9aOQ/exec';

const escapeHtml = value => String(value || '').replace(/[&<>'"]/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[char]));

const compressPhoto = file => new Promise((resolve, reject) => {
  if (!file) return resolve(null);
  if (!file.type.startsWith('image/')) return reject(new Error('Please choose an image file.'));
  const reader = new FileReader();
  reader.onerror = () => reject(new Error('We could not read that photo.'));
  reader.onload = () => {
    const image = new Image();
    image.onerror = () => reject(new Error('We could not prepare that photo.'));
    image.onload = () => {
      const scale = Math.min(1, 1600 / Math.max(image.width, image.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(image.width * scale); canvas.height = Math.round(image.height * scale);
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', .8);
      if (dataUrl.length > 1500000) return reject(new Error('Please choose a smaller photo.'));
      resolve({name:(file.name || 'car-photo').replace(/\.[^.]+$/, '') + '.jpg', base64:dataUrl.split(',')[1], mime:'image/jpeg'});
    };
    image.src = reader.result;
  };
  reader.readAsDataURL(file);
});

const reviewForm = document.getElementById('reviewForm');
if (reviewForm) reviewForm.addEventListener('submit', async event => {
  event.preventDefault();
  const rating = document.querySelector('input[name=rating]:checked').value;
  const name = document.getElementById('customer').value.trim() || 'Customer';
  const review = document.getElementById('words').value.trim();
  if (!review) { alert('Please write a short review before sending it.'); return; }
  const button = reviewForm.querySelector('button');
  button.disabled = true; button.textContent = 'Sending review…';
  try {
    const photo = await compressPhoto(document.getElementById('photo').files[0]);
    fetch(REVIEW_WEB_APP, { method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain;charset=utf-8'}, body:JSON.stringify({type:'review', name, rating, review, photoName:photo && photo.name, photoBase64:photo && photo.base64, photoMime:photo && photo.mime}) }).catch(() => {});
  } catch (error) { alert(error.message); button.disabled = false; button.textContent = 'Send your review ↗'; return; }
  reviewForm.innerHTML = '<div class="full thanks"><div class="eyebrow">Thank you</div><h2>Your review was sent! 🎉</h2><p>Alex will review it shortly. Genuine customer reviews appear on the public reviews page after approval.</p><a class="btn" href="reviews.html">See customer reviews ↗</a></div>';
});

const reviewList = document.getElementById('reviewList');
if (reviewList) {
  window.tungReviews = reviews => {
    const list = Array.isArray(reviews) ? reviews : [];
    const average = list.length ? (list.reduce((sum, item) => sum + Number(item.rating || 0), 0) / list.length).toFixed(1) : '0.0';
    document.getElementById('reviewAverage').textContent = average + ' ★';
    document.getElementById('reviewCount').textContent = list.length + (list.length === 1 ? ' customer review · 626 area' : ' customer reviews · 626 area');
    if (!list.length) return;
    reviewList.innerHTML = list.map(item => '<article class="review-card"><div class="stars">' + '★'.repeat(Number(item.rating || 0)) + '</div><p>“' + escapeHtml(item.review) + '”</p>' + (item.photoUrl ? '<img class="review-photo" loading="lazy" src="' + encodeURI(item.photoUrl) + '" alt="Customer car after its detail">' : '') + '<b>— ' + escapeHtml(item.name || 'Customer') + '</b></article>').join('');
  };
  const script = document.createElement('script');
  script.src = REVIEW_WEB_APP + '?action=reviews&callback=tungReviews';
  document.head.appendChild(script);
}
