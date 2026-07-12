(() => {
  const style = `
    #tt-chat{position:fixed;right:18px;bottom:18px;z-index:30;font-family:Manrope,Arial,sans-serif}
    #tt-chat button{border:0;cursor:pointer;font:800 12px Manrope}
    #tt-chat-toggle{background:#1477ff;color:#fff;padding:15px 18px;box-shadow:0 10px 30px rgba(4,31,75,.3)}
    #tt-chat-box{display:none;width:min(340px,calc(100vw - 36px));margin-bottom:10px;background:#fff;box-shadow:0 18px 55px rgba(4,31,75,.24)}
    #tt-chat.open #tt-chat-box{display:block}.tt-head{background:#071429;color:#fff;padding:18px}
    .tt-head b{font-size:14px}.tt-head span{display:block;color:#9dcbff;font-size:11px;margin-top:4px}
    .tt-messages{height:260px;overflow:auto;padding:15px;background:#f1f8ff}.tt-msg{font-size:12px;line-height:1.55;padding:10px 12px;margin:0 0 9px;max-width:88%;background:#fff}
    .tt-msg.user{background:#1477ff;color:#fff;margin-left:auto}.tt-form{display:flex;border-top:1px solid #dceeff}
    .tt-form input{border:0;min-width:0;flex:1;padding:14px;font:12px Manrope}.tt-form button{background:#1477ff;color:#fff;padding:0 15px}
    .tt-note{font-size:10px;color:#55728e;padding:8px 14px 12px;background:#fff}.tt-confetti{position:fixed;z-index:50;width:15px;height:25px;pointer-events:none;top:36%;animation:tt-fall 2.2s ease-out forwards}.tt-distance{margin-top:10px;padding:13px;background:#eff8ff;font-size:12px;line-height:1.55}.tt-distance strong{color:#071429}.tt-range-btn{margin-top:5px;padding:12px;border:0;background:#1477ff;color:#fff;font:800 11px Manrope;cursor:pointer}.tt-range-dot{display:inline-grid;place-items:center;vertical-align:middle;width:42px;height:42px;border-radius:50%;background:#dff5d5;color:#164b18;font:800 10px Manrope;margin-right:9px}.tt-distance.outside{background:#fff0e4}.tt-distance.outside .tt-range-dot{background:#ffbd83;color:#6a2800}.tt-range-banner{background:#dceeff;color:#071429;padding:20px 0}.tt-range-banner .tt-range-wrap{max-width:1200px;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:22px}.tt-range-banner b{font-size:14px}.tt-range-banner p{font-size:12px;line-height:1.55;margin:4px 0 0;max-width:700px}.tt-range-banner a{background:#1477ff;color:#fff;padding:12px 16px;white-space:nowrap;text-decoration:none;font:800 11px Manrope}.tt-insta-hero{display:inline-flex;margin-top:16px;padding:10px 13px;border:1px solid rgba(255,255,255,.6);color:#fff;text-decoration:none;font:800 11px Manrope;letter-spacing:.04em}@keyframes tt-fall{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:0;transform:translate(var(--drift),62vh) rotate(900deg)}}@media(max-width:600px){#tt-chat{right:12px;bottom:12px}.tt-range-banner .tt-range-wrap{display:block;padding:0 20px}.tt-range-banner a{display:inline-block;margin-top:12px}}
  `;
  document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);
  const rangeBanner = '<section class="tt-range-banner"><div class="tt-range-wrap"><div><b>15-mile service range</b><p>Tap “Check my distance” when booking. Under 15 miles, you can choose any service. At 15 miles or farther, one-service bookings such as exterior-only or interior-only are upgraded to the complete interior, exterior, and wet-vac package. Your address is never shown.</p></div><a href="#booking">Check my distance</a></div></section>';
  const hero = document.querySelector('.hero');
  const footer = document.querySelector('footer');
  const heroCopy = document.querySelector('.hero-copy');
  if (hero) hero.insertAdjacentHTML('afterend', rangeBanner);
  if (footer) footer.insertAdjacentHTML('beforebegin', rangeBanner);
  if (heroCopy) heroCopy.insertAdjacentHTML('beforeend', '<a class="tt-insta-hero" target="_blank" rel="noreferrer" href="https://www.instagram.com/tungtungsadetail/">Follow @tungtungsadetail ↗</a>');
  const footerLocation = document.querySelector('.contact-strip span');
  if (footerLocation) footerLocation.textContent = '© 2026 Tung Tung SA Detail · 626 area';
  document.body.insertAdjacentHTML('beforeend', `<aside id="tt-chat" aria-label="Booking helper"><div id="tt-chat-box"><div class="tt-head"><b>Tung Tung booking helper</b><span>Quick answers about services and booking</span></div><div class="tt-messages" id="tt-messages"><div class="tt-msg">Hi! I am here to make booking easy and help your car look its best. Ask me anything about our services!</div></div><form class="tt-form" id="tt-form"><input id="tt-input" aria-label="Ask a question" placeholder="Ask a question"><button type="submit">Send</button></form><div class="tt-note">For a quote, text a car photo to 626-561-7482.</div></div><button id="tt-chat-toggle" type="button">Chat with us</button></aside>`);
  const box = document.getElementById('tt-chat');
  const toggle = document.getElementById('tt-chat-toggle');
  const form = document.getElementById('tt-form');
  const input = document.getElementById('tt-input');
  const messages = document.getElementById('tt-messages');
  const cheerfulGreetings = [
    'Hi! I am here to make booking easy and help your car look its best. Ask me anything about our services!',
    'Welcome! Why did the car go to the spa? It needed a little auto-motivation. How can I help today?',
    'Hi there! A clean car is a happy car. Let’s find the best detail for yours!',
    'What did one car say to another after a detail? “You are looking wheel good!” How can I help?',
    'Welcome! Why was the car so relaxed? It was finally in a clean lane. What can I help with today?',
    'Hi! Your car deserves a glow-up. I can help with prices, booking, or service questions.'
  ];
  messages.firstElementChild.textContent = cheerfulGreetings[Math.floor(Math.random() * cheerfulGreetings.length)];
  const bookingForm = document.getElementById('bookingForm');
  const estimateCopy = document.querySelector('#estimate p');
  if (estimateCopy) estimateCopy.textContent = 'At 15 miles or farther, exterior-only and interior-only bookings are upgraded to the complete interior, exterior, and wet-vac package. Text a photo and location for a quote.';
  const aboutCopy = document.querySelector('#about p');
  if (aboutCopy) aboutCopy.textContent = 'We can detail at your driveway or at our location. At 15 miles or farther, exterior-only and interior-only bookings are upgraded to the complete interior, exterior, and wet-vac package. Please provide access to water at the service location. Most appointments take around 2–3+ hours, depending on vehicle size and condition.';
  if (bookingForm) {
    const bookingButton = bookingForm.querySelector('button[type="submit"]');
    if (bookingButton) bookingButton.insertAdjacentHTML('beforebegin', '<div class="field"><label>Service distance</label><input id="travelZone" type="hidden"><button class="tt-range-btn" id="locationCheck" type="button">Use my location to check</button></div><div class="field"><label for="serviceArea">City</label><input id="serviceArea" required placeholder="Autofills after location check"></div><div class="field full"><label for="serviceAddress">Service address</label><input id="serviceAddress" required placeholder="Autofills after location check, then you can edit it"></div><div class="field full"><div class="tt-distance" id="distanceNotice"><span class="tt-range-dot">15<br>mi</span><strong>15-mile service range</strong><br>Tap “Use my location” and we will automatically check your distance from our service center. Your address is never shown publicly.</div></div>');
  }
  const locationCheck = document.getElementById('locationCheck');
  if (locationCheck) locationCheck.addEventListener('click', () => {
    const notice = document.getElementById('distanceNotice');
    if (!navigator.geolocation) { notice.innerHTML = '<strong>Location is not available in this browser.</strong><br>Please open the live HTTPS website or enter your city and address manually.'; return; }
    notice.innerHTML = '<strong>Checking your distance…</strong><br>Please allow location access when asked. We use it only to check your booking distance.';
    navigator.geolocation.getCurrentPosition(position => {
      const base = { lat: 34.094636, lng: -118.098469 };
      const radians = value => value * Math.PI / 180;
      const lat1 = radians(position.coords.latitude), lat2 = radians(base.lat);
      const dLat = radians(base.lat - position.coords.latitude), dLng = radians(base.lng - position.coords.longitude);
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
      const miles = 3958.8 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const zone = document.getElementById('travelZone');
      const service = document.getElementById('service');
      notice.dataset.miles = miles.toFixed(1);
      const fillAddress = async () => {
        try {
          const endpoint = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + encodeURIComponent(position.coords.latitude) + '&lon=' + encodeURIComponent(position.coords.longitude);
          const response = await fetch(endpoint);
          if (!response.ok) throw new Error('reverse geocode unavailable');
          const place = await response.json();
          const address = place.address || {};
          const city = address.city || address.town || address.village || address.hamlet || address.county || '';
          const street = [address.house_number, address.road].filter(Boolean).join(' ');
          if (city) document.getElementById('serviceArea').value = city;
          if (street) document.getElementById('serviceAddress').value = street;
        } catch (_) {
          document.getElementById('serviceAddress').placeholder = 'Enter your address manually';
          document.getElementById('serviceArea').placeholder = 'Enter your city manually';
        }
      };
      fillAddress();
      if (miles >= 15) { const over = (miles - 15).toFixed(1); zone.value = 'outside'; service.value = 'Wet Vac + Full Detail — $130+'; notice.classList.add('outside'); notice.innerHTML = '<span class="tt-range-dot">+' + over + '<br>mi</span><strong>You are ' + over + ' miles beyond the 15-mile limit.</strong><br>Your location is ' + miles.toFixed(1) + ' miles away. The complete interior, exterior, and wet-vac package has been selected.'; }
      else { const inside = (15 - miles).toFixed(1); zone.value = 'within'; notice.classList.remove('outside'); notice.innerHTML = '<span class="tt-range-dot">' + inside + '<br>mi</span><strong>You are ' + inside + ' miles inside the 15-mile limit.</strong><br>Your location is ' + miles.toFixed(1) + ' miles away. Your selected package is available.'; }
    }, error => {
      const message = error.code === 1 ? 'Location permission was blocked. Allow location in your browser settings and try again.' : error.code === 3 ? 'Location check timed out. Please try again where you have a stronger signal.' : 'We could not read your location. Please try again.';
      notice.innerHTML = '<strong>Location check did not finish.</strong><br>' + message + '<br><br>Note: browser location works on a live HTTPS website. Local file previews can block it.';
    }, { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 });
  });
  if (bookingForm) bookingForm.addEventListener('submit', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const serviceArea = document.getElementById('serviceArea').value;
    const serviceAddress = document.getElementById('serviceAddress').value;
    const travelZone = document.getElementById('travelZone').value;
    const distance = document.getElementById('distanceNotice').dataset.miles;
    if (!travelZone) {
      alert('Please tap “Use my location to check” before submitting your booking. This lets us confirm the correct service package.');
      return;
    }
    if (travelZone === 'outside' && service !== 'Wet Vac + Full Detail — $130+') {
      document.getElementById('service').value = 'Wet Vac + Full Detail — $130+';
      alert('For locations 15 miles or farther away, exterior-only and interior-only bookings are upgraded to the complete interior, exterior, and wet-vac package. Your service was changed. Please submit your booking again.');
      return;
    }
    const text = encodeURIComponent('Thank you for booking with TUNGTUNGSADETAIL!\n\nNew booking request\nService: ' + service + '\nPreferred date: ' + date + '\nPreferred time: ' + time + '\nCustomer: ' + name + '\nContact: ' + contact + '\nDistance: ' + distance + ' miles (' + travelZone + ')\nCity: ' + serviceArea + '\nService address: ' + serviceAddress + '\n\nTravel note: Locations 15 miles or farther require the Wet Vac + Full Detail package.');
    const smsLink = 'sms:+16265617482?body=' + text;
    window.location.href = smsLink;
    bookingForm.innerHTML = '<div class="full" style="text-align:center;padding:42px 8px;background:#eff8ff"><div class="eyebrow">Booking request ready</div><h3 style="font:700 35px Playfair Display,serif;letter-spacing:-.04em;margin:15px 0;color:#071429">THANK YOU FOR CHOOSING<br>TUNGTUNGSADETAIL</h3><p style="font-size:14px;line-height:1.7;max-width:420px;margin:0 auto 18px">Your text message is ready to send. Open Messages and tap Send to deliver the booking request.</p><a class="btn" style="display:inline-flex" href="' + smsLink + '">Send booking text</a></div>';
    const colors = ['#1477ff','#ff9d42','#dceeff','#ffffff','#87c3ff'];
    for (let i = 0; i < 78; i++) {
      const piece = document.createElement('i');
      piece.className = 'tt-confetti';
      piece.style.left = (i % 2 ? Math.random() * 16 : 84 + Math.random() * 16) + 'vw';
      piece.style.background = colors[i % colors.length];
      piece.style.width = (10 + Math.random() * 13) + 'px';
      piece.style.height = (18 + Math.random() * 18) + 'px';
      piece.style.setProperty('--drift', ((i % 2 ? 1 : -1) * (40 + Math.random() * 170)) + 'px');
      piece.style.animationDelay = (Math.random() * .35) + 's';
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 2400);
    }
  }, true);
  const answer = question => {
    const q = question.toLowerCase();
    const math = q.replace(/what is|what's|calculate|solve|\?/g, '').trim();
    if (/^[0-9+*/().\-\s]+$/.test(math) && /[0-9]/.test(math)) {
      try { return `That is ${Function(`"use strict"; return (${math})`)()}. Happy to help!`; } catch (_) { return 'I can help with simple math, pricing, booking, and detailing questions.'; }
    }
    if (/^(hi|hello|hey|what'?s up|good morning|good afternoon)/.test(q)) return 'Hi! I am the Tung Tung SA Detail helper. I can help you choose a service, explain pricing, or get your booking started.';
    if (/who are you|are you (an )?ai|what can you do/.test(q)) return 'I am the Tung Tung SA Detail website helper. I use the business information on this site to help with services, pricing, travel, timing, and booking questions.';
    if (/thank|thanks/.test(q)) return 'You are welcome! When you are ready, use Book Now or text a photo of your car to 626-561-7482 for a quote.';
    if (/price|cost|how much|\$/.test(q)) return 'Exterior Wash starts at $40. Interior Detail starts at $70. Full Detail starts at $100. Wet Vac plus Full Detail starts at $130. Final quotes depend on vehicle size and condition.';
    if (/book|appointment|schedule|date|time/.test(q)) return 'Use the Book Now section to choose a service, date, and time. It opens a pre-filled text to 626-561-7482 so we can confirm your appointment.';
    if (/water|driveway|location|come to me|mobile/.test(q)) return 'We can detail at your driveway or at our location. Please provide water access when we come to your home.';
    if (/far|distance|travel|fee/.test(q)) return 'At 15 miles or farther, exterior-only and interior-only bookings are upgraded to the complete interior, exterior, and wet-vac package. Text a photo and your location to 626-561-7482 for a quote.';
    if (/hour|long|time take|duration/.test(q)) return 'Most details take around 2 to 3 or more hours, depending on vehicle size and condition.';
    if (/service|clay|headlight|interior|exterior/.test(q)) return 'We offer Exterior Wash, Interior Detail, Full Detail, Wet Vac plus Full Detail, and Clay Bar as an add-on. Headlight restoration is coming soon.';
    if (/instagram|insta/.test(q)) return 'You can follow us on Instagram at @tungtungsadetail.';
    if (/joke|funny|random/.test(q)) { const jokes = ['Why did the car go to school? To improve its driving knowledge!', 'What do you call a shiny car? A clean machine!', 'Why did the car get a detail? It wanted to look exhaust-ingly good!']; return jokes[Math.floor(Math.random() * jokes.length)]; }
    if (/weather|news|school|game|movie/.test(q)) return 'That is a fun question! I am best at helping with Tung Tung SA Detail, but I can also help with simple math and car jokes. For your car, text a photo and your question to 626-561-7482 and we will be happy to help.';
    return 'I would be happy to help. I know the Tung Tung SA Detail services, prices, booking, timing, water access, travel fees, reviews, and Instagram. For a quote tailored to your car, text a photo to 626-561-7482.';
  };
  toggle.onclick = () => { box.classList.toggle('open'); if (box.classList.contains('open')) input.focus(); };
  form.onsubmit = event => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    messages.insertAdjacentHTML('beforeend', '<div class="tt-msg user"></div>');
    messages.lastElementChild.textContent = question;
    messages.insertAdjacentHTML('beforeend', '<div class="tt-msg"></div>');
    messages.lastElementChild.textContent = answer(question);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  };
})();
