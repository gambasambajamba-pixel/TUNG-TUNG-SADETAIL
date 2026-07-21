(() => {
  const googleWebAppUrl = 'https://script.google.com/macros/s/AKfycbyFNfk06FSS8ZHvi2Hi0g7rXtaldavjlGph1RYhFcLu1SVzGwpQHJ5m_cNUhJOVye9aOQ/exec';
  const saveToSheets = data => fetch(googleWebAppUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data)
  }).catch(() => {});
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
    .tt-note{font-size:10px;color:#55728e;padding:8px 14px 12px;background:#fff}.tt-go{display:block;background:#071429;color:#fff;padding:10px 12px;text-decoration:none;font:800 11px Manrope;margin:4px 0 10px}.tt-confetti{position:fixed;z-index:50;width:15px;height:25px;pointer-events:none;top:36%;animation:tt-fall 2.2s ease-out forwards}.tt-distance{margin-top:10px;padding:13px;background:#eff8ff;font-size:12px;line-height:1.55}.tt-distance strong{color:#071429}.tt-range-btn{margin-top:5px;padding:12px;border:0;background:#1477ff;color:#fff;font:800 11px Manrope;cursor:pointer}.tt-range-dot{display:inline-grid;place-items:center;vertical-align:middle;width:42px;height:42px;border-radius:50%;background:#dff5d5;color:#164b18;font:800 10px Manrope;margin-right:9px}.tt-distance.outside{background:#fff0e4}.tt-distance.outside .tt-range-dot{background:#ffbd83;color:#6a2800}.tt-range-banner{background:#dceeff;color:#071429;padding:20px 0}.tt-range-banner .tt-range-wrap{max-width:1200px;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:22px}.tt-range-banner b{font-size:14px}.tt-range-banner p{font-size:12px;line-height:1.55;margin:4px 0 0;max-width:700px}.tt-range-banner a{background:#1477ff;color:#fff;padding:12px 16px;white-space:nowrap;text-decoration:none;font:800 11px Manrope}.tt-insta-hero{display:inline-flex;margin-top:16px;padding:10px 13px;border:1px solid rgba(255,255,255,.6);color:#fff;text-decoration:none;font:800 11px Manrope;letter-spacing:.04em}.hero-contact{gap:52px!important}.tt-spin{background:#071429;color:#fff;padding:66px 20px}.tt-spin-inner{max-width:1000px;margin:auto;display:grid;grid-template-columns:1fr 280px;gap:50px;align-items:center}.tt-spin h2{font:700 clamp(34px,5vw,56px)/1 'Playfair Display',serif;letter-spacing:-.05em;margin:10px 0}.tt-spin p{color:#c9e2ff;line-height:1.7;max-width:520px}.tt-spin-form{display:flex;gap:8px;max-width:520px;margin-top:20px}.tt-spin-form input{min-width:0;flex:1;border:0;padding:14px;font:13px Manrope}.tt-spin-form button{border:0;background:#ff9d42;color:#071429;padding:14px 16px;font:800 11px Manrope;cursor:pointer}.tt-spin-note{font-size:11px;color:#a7c9ee;margin:10px 0 0}.tt-wheel{width:245px;height:245px;border-radius:50%;background:conic-gradient(#ff9d42 0 60deg,#1477ff 60deg 120deg,#dceeff 120deg 180deg,#406ca9 180deg 240deg,#fff 240deg 300deg,#8fc2ff 300deg);border:8px solid #fff;box-shadow:0 15px 38px rgba(0,0,0,.32);display:grid;place-items:center;position:relative;transition:transform 3.8s cubic-bezier(.17,.67,.11,.99)}.tt-wheel:before{content:'▲';position:absolute;top:-41px;color:#ff9d42;font-size:36px}.tt-wheel span{width:92px;height:92px;border-radius:50%;display:grid;place-items:center;text-align:center;background:#071429;color:#fff;font:800 12px Manrope;letter-spacing:.08em}.tt-wheel i{position:absolute;font:800 8px Manrope;letter-spacing:.02em;color:#071429;font-style:normal;text-align:center;width:62px;line-height:1.05;z-index:2}.tt-wheel i:nth-of-type(1){top:14px;left:50%;transform:translateX(-50%)}.tt-wheel i:nth-of-type(2){top:61px;right:2px}.tt-wheel i:nth-of-type(3){bottom:52px;right:2px}.tt-wheel i:nth-of-type(4){bottom:14px;left:50%;transform:translateX(-50%)}.tt-wheel i:nth-of-type(5){bottom:52px;left:2px}.tt-wheel i:nth-of-type(6){top:61px;left:2px}.tt-wheel.spinning{transform:rotate(1440deg)}@keyframes tt-fall{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:0;transform:translate(var(--drift),62vh) rotate(900deg)}}@media(max-width:600px){#tt-chat{right:12px;bottom:12px}.tt-range-banner .tt-range-wrap{display:block;padding:0 20px}.tt-range-banner a{display:inline-block;margin-top:12px}.tt-spin-inner{grid-template-columns:1fr;gap:38px}.tt-spin-form{display:block}.tt-spin-form input,.tt-spin-form button{width:100%;margin-top:8px}.tt-wheel{margin:auto}}
  `;
  document.head.insertAdjacentHTML('beforeend', `<style>${style}</style>`);
  document.head.insertAdjacentHTML('beforeend', `<style>
    .tt-insta-hero{background:linear-gradient(135deg,#ffb347,#f52b71 48%,#714bd9)!important;border:0!important;box-shadow:0 12px 25px rgba(245,43,113,.28);font-size:12px!important;padding:13px 16px!important}
  </style>`);
  document.head.insertAdjacentHTML('beforeend', `<style>
    /* Premium visual refresh */
    :root{--ink:#081526;--navy:#0b1d35;--blue:#247cff;--sky:#eaf4ff;--ice:#f7f9fc;--line:#d9e3f0;--orange:#ffb14b}
    body{background:var(--ice);letter-spacing:-.01em}.wrap{max-width:1260px}.referral-bar{background:#081526;color:#fff;padding:12px 20px;font-size:11px}.referral-bar strong{color:#ffcf82}.referral-bar span{opacity:.82;font-weight:600}
    .hero{min-height:760px;background:linear-gradient(90deg,rgba(4,14,29,.87) 0%,rgba(4,14,29,.61) 45%,rgba(4,14,29,.12) 79%),url('assets/white-bmw-enhanced.png') center/cover}.nav{height:88px;border-bottom:1px solid rgba(255,255,255,.16)}.logo{font-size:14px;letter-spacing:.04em}.logo img{width:42px;height:42px;border:1px solid rgba(255,255,255,.55)}.links{font-size:10px;letter-spacing:.09em;gap:24px}.links a{opacity:.8;transition:opacity .2s ease}.links a:hover{opacity:1}.btn{border-radius:999px;padding:15px 22px;box-shadow:0 8px 20px rgba(18,92,202,.19);transition:transform .22s ease,box-shadow .22s ease,background .22s ease}.btn:hover{box-shadow:0 14px 30px rgba(18,92,202,.28)}.nav>.btn{border:1px solid rgba(255,255,255,.72);box-shadow:none}.hero-copy{padding-top:145px;max-width:690px}.hero-copy h1{font-size:clamp(56px,7vw,92px);letter-spacing:-.065em}.hero-copy p{font-size:16px;max-width:490px}.hero-contact{gap:30px;color:#d5e9ff}
    section{padding:110px 0}.head{margin-bottom:48px}.head h2,.pricing h2{letter-spacing:-.065em}.services{background:#fff}.cards{gap:18px}.card{min-height:286px;padding:30px;border:1px solid #e7edf5;border-top:0;border-radius:18px;background:#fbfcfe;box-shadow:0 14px 32px rgba(12,37,76,.06);transition:transform .25s ease,box-shadow .25s ease}.card:nth-child(2){background:linear-gradient(145deg,#0b1d35,#132f55);border-color:#132f55}.card:hover{transform:translateY(-6px);box-shadow:0 23px 45px rgba(12,37,76,.13)}.card h3{font-size:34px}.card > strong:first-child{display:none}.coming{margin-top:22px;border:1px solid #cddff3;border-radius:14px;background:#f1f7ff}
    .gallery{background:#081526}.gallery-grid{gap:18px}.shot{border-radius:15px;box-shadow:0 18px 35px rgba(0,0,0,.18);transition:transform .3s ease,filter .3s ease}.shot:hover{transform:translateY(-4px);filter:brightness(1.07)}.label{left:16px;bottom:16px;border-radius:999px;background:#fff;color:#081526;padding:8px 12px;font-weight:800}.label.before{background:#247cff;color:#fff}
    .pricing{background:linear-gradient(145deg,#eaf5ff,#d5eaff)}.price-layout{gap:80px}.price{padding:24px 0}.price h3{font-size:17px}.price strong{font-size:21px}.box{border-radius:20px;padding:40px;background:linear-gradient(145deg,#102a4c,#071526);box-shadow:0 20px 40px rgba(7,21,38,.2)}.box .btn{background:#ffb14b;color:#081526;box-shadow:none}
    .about{background:#fff}.about-note{border-radius:20px;background:linear-gradient(145deg,#eff7ff,#d8ecff);border:1px solid #c7e0fb}.review-band{background:#f7f9fc}.review-card{border-radius:20px;background:linear-gradient(130deg,#eaf5ff,#d6eaff);padding:48px;box-shadow:0 15px 33px rgba(13,48,92,.07)}.quote{letter-spacing:-.04em}.review-link{font-size:12px}.booking{background:linear-gradient(145deg,#1d7cf4,#115cca)}.form{border-radius:20px;padding:32px;box-shadow:0 22px 50px rgba(4,44,105,.24)}.field input,.field select{border-radius:10px;border-color:#d7e1ee;padding:14px;transition:border-color .2s ease,box-shadow .2s ease}.field input:focus,.field select:focus{outline:0;border-color:#247cff;box-shadow:0 0 0 4px rgba(36,124,255,.12)}.form .btn{margin-top:4px}.insta{background:radial-gradient(circle at 50% 0,#1b3e6b,#081526 62%);padding:96px 0}.contact-strip{background:#06101f}
    .side-menu summary,#tt-chat-toggle{border-radius:999px!important}.side-menu summary{box-shadow:0 14px 30px rgba(6,28,67,.26)}.quick-reviews{background:#fff;border-bottom:1px solid #e5edf7}.tt-range-banner{background:#eaf5ff}.tt-spin{background:linear-gradient(145deg,#071526,#102d50)}.tt-spin-form input{border-radius:10px}.tt-spin-form button{border-radius:10px}.tt-season-feature{background:#fff}.tt-season-point{box-shadow:0 12px 26px rgba(13,48,92,.05)}
    @media (prefers-reduced-motion:no-preference){.tt-reveal{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.tt-reveal.is-visible{opacity:1;transform:none}.tt-reveal:nth-child(2){transition-delay:.08s}.tt-reveal:nth-child(3){transition-delay:.16s}}
    @media(max-width:760px){.referral-bar span{display:block;margin:4px 0 0}.hero{min-height:690px}.hero-copy{padding-top:122px}.hero-copy h1{font-size:54px}.cards{gap:14px}.card{min-height:215px}.gallery-grid{gap:10px}.review-card{padding:30px}.form{padding:22px}.box{padding:30px}}
  </style>`);
  document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 64 64%27%3E%3Cdefs%3E%3ClinearGradient id=%27g%27 x1=%270%27 y1=%271%27 x2=%271%27 y2=%270%27%3E%3Cstop stop-color=%27%23ffb347%27/%3E%3Cstop offset=%27.5%27 stop-color=%27%23f52b71%27/%3E%3Cstop offset=%271%27 stop-color=%27%23714bd9%27/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%2764%27 height=%2764%27 rx=%2716%27 fill=%27url(%23g)%27/%3E%3Crect x=%2715%27 y=%2715%27 width=%2734%27 height=%2734%27 rx=%2710%27 fill=%27none%27 stroke=%27white%27 stroke-width=%274%27/%3E%3Ccircle cx=%2732%27 cy=%2732%27 r=%278%27 fill=%27none%27 stroke=%27white%27 stroke-width=%274%27/%3E%3Ccircle cx=%2743%27 cy=%2721%27 r=%273%27 fill=%27white%27/%3E%3C/svg%3E">');
  document.head.insertAdjacentHTML('beforeend', `<style>
    .tt-wheel{transition:transform 7.2s cubic-bezier(.12,.72,.08,1)!important}
    .tt-wheel.spinning{transform:rotate(2160deg)!important}
    .tt-wheel i{left:50%!important;top:50%!important;bottom:auto!important;right:auto!important;width:64px!important;transform:translate(-50%,-50%) rotate(var(--wheel-angle)) translateY(-76px)!important;transform-origin:center;}
    .tt-wheel{background:conic-gradient(#ff9d42 0 20deg,#8fc2ff 20deg 100deg,#1477ff 100deg 150deg,#406ca9 150deg 200deg,#dceeff 200deg 280deg,#fff 280deg 360deg)!important}
    .tt-wheel i:nth-of-type(1){--wheel-angle:10deg;width:42px!important;font-size:6.5px!important;font-weight:900!important;letter-spacing:-.04em!important;line-height:.9!important;transform:translate(-50%,-50%) rotate(var(--wheel-angle)) translateY(-93px)!important}.tt-wheel i:nth-of-type(2){--wheel-angle:60deg}.tt-wheel i:nth-of-type(3){--wheel-angle:125deg}.tt-wheel i:nth-of-type(4){--wheel-angle:175deg}.tt-wheel i:nth-of-type(5){--wheel-angle:240deg}.tt-wheel i:nth-of-type(6){--wheel-angle:320deg}
  </style>`);
  document.head.insertAdjacentHTML('beforeend', `<style>
    #tt-season{background:linear-gradient(105deg,var(--season-1),var(--season-2));color:#fff;padding:13px 0;position:relative;overflow:hidden}
    #tt-season:after{content:'✦  ✦  ✦  ✦  ✦  ✦';position:absolute;right:-8px;top:8px;opacity:.22;letter-spacing:18px;font-size:20px;white-space:nowrap}
    .tt-season-wrap{max-width:1200px;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:20px;position:relative;z-index:1}
    .tt-season-copy{display:flex;align-items:center;gap:11px;font-size:12px}.tt-season-copy strong{font:900 12px Manrope;letter-spacing:.08em}.tt-season-copy span{opacity:.92}
    .tt-season-wrap a{display:inline-flex;align-items:center;justify-content:center;padding:9px 13px;background:#fff;color:#071429;font:800 10px Manrope;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}
    .tt-season-art{position:absolute;right:28px;bottom:-5px;z-index:0;font-size:34px;letter-spacing:7px;filter:drop-shadow(0 4px 0 rgba(0,0,0,.08));pointer-events:none}.tt-season-art span{display:inline-block}.tt-season-art .tt-sun{font-size:43px;transform:translateY(-5px)}
    .tt-season-feature{padding:0;background:#fff}.tt-season-feature-inner{max-width:1200px;margin:0 auto;padding:50px 28px;display:grid;grid-template-columns:1fr 1.25fr;gap:35px;align-items:center}.tt-season-feature h2{font:700 clamp(31px,4vw,49px)/1 'Playfair Display',serif;letter-spacing:-.05em;margin:9px 0 13px}.tt-season-feature p{font-size:13px;line-height:1.7;max-width:460px;margin:0}.tt-season-points{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.tt-season-point{min-height:137px;padding:22px 18px;background:var(--season-soft);border:1px solid var(--season-line);border-radius:18px;display:flex;align-items:end}.tt-season-point strong{font-size:14px;line-height:1.25;display:block}.tt-season-feature a{display:inline-flex;margin-top:20px;background:#071429;color:#fff;padding:12px 15px;font:800 10px Manrope;letter-spacing:.07em;text-transform:uppercase}
    body[data-season='spring']{--season-1:#147f70;--season-2:#63b84c;--season-soft:#e9f8e5;--season-line:#b7e2ad}body[data-season='summer']{--season-1:#12b5e8;--season-2:#2867eb;--season-soft:#e7faff;--season-line:#9bdff3}body[data-season='summer'] #tt-season{min-height:208px;display:flex;align-items:center;background:linear-gradient(90deg,rgba(4,27,72,.84) 0%,rgba(4,27,72,.58) 43%,rgba(4,27,72,.08) 76%),url('assets/summer-beach-banner.png') center 58%/cover}body[data-season='summer'] #tt-season:after{display:none}body[data-season='summer'] .tt-season-wrap{width:100%}body[data-season='summer'] .tt-season-copy{max-width:610px;padding:15px 17px;background:rgba(4,19,49,.3);backdrop-filter:blur(3px)}body[data-season='summer'] .tt-season-copy strong{font-size:15px}body[data-season='summer'] .tt-season-copy span{font-size:13px}body[data-season='summer'] .tt-season-wrap a{background:#fff;color:#071429;box-shadow:0 8px 25px rgba(0,0,0,.2)}body[data-season='summer'] .tt-season-art{display:none}body[data-season='fall']{--season-1:#a94d19;--season-2:#e49b27;--season-soft:#fff3df;--season-line:#f1c87d}body[data-season='winter']{--season-1:#24538d;--season-2:#8355c7;--season-soft:#edf5ff;--season-line:#bdd7f3}
    @media(max-width:760px){.tt-season-wrap{padding:0 20px;display:block}.tt-season-copy{margin-bottom:9px;align-items:flex-start}.tt-season-copy span{display:block}.tt-season-wrap a{margin-left:31px}.tt-season-art{right:14px;bottom:-5px;font-size:25px;letter-spacing:2px}.tt-season-art .tt-sun{font-size:30px}body[data-season='summer'] #tt-season{min-height:240px;background-position:62% center}body[data-season='summer'] .tt-season-copy{margin-bottom:16px;padding:13px}body[data-season='summer'] .tt-season-wrap a{margin-left:0}.tt-season-copy strong{min-width:80px}.tt-season-feature-inner{padding:40px 20px;display:block}.tt-season-points{margin-top:23px;grid-template-columns:1fr}.tt-season-point{min-height:0}}
  </style>`);
  const rangeBanner = '<section class="tt-range-banner"><div class="tt-range-wrap"><div><b>15-mile service range</b><p>Use “Check my distance” when booking. Within 15 miles, you can choose any service. At 15 miles or farther, exterior-only and interior-only appointments require the Wet Vac + Full Detail package. Your address is never shown publicly.</p></div><a href="#booking">Check my distance</a></div></section>';
  const hero = document.querySelector('.hero');
  const footer = document.querySelector('footer');
  const heroCopy = document.querySelector('.hero-copy');
  const seasonalCampaigns = [
    { season: 'winter', icon: '❄️', title: 'Fresh Start Detail Month', copy: 'Start the year with a clean, comfortable car.', cta: 'Book your refresh' },
    { season: 'winter', icon: '💙', title: 'Love Your Car Month', copy: 'Show your ride some extra care this month.', cta: 'Book a detail' },
    { season: 'spring', icon: '🌿', title: 'Spring Reset Month', copy: 'Shake off the dust and bring back the shine.', cta: 'Refresh my car' },
    { season: 'spring', icon: '✨', title: 'Spring Shine Month', copy: 'A clean car feels better every drive.', cta: 'Book now' },
    { season: 'spring', icon: '🚗', title: 'Road Trip Ready Month', copy: 'Get your interior and exterior ready for every mile.', cta: 'Get road-trip ready' },
    { season: 'summer', icon: 'Summer', title: 'Summer Shine Month', copy: 'Beach days, road trips, and a fresh clean ride.', cta: 'Get summer ready' },
    { season: 'summer', icon: 'Summer', title: 'Summer Clean-Up Month', copy: 'Sand, crumbs, and dust out. Fresh-car feeling in.', cta: 'Book a detail' },
    { season: 'summer', icon: 'Summer', title: 'Heat & Dust Reset Month', copy: 'A cool, clean interior makes summer drives better.', cta: 'Refresh my car' },
    { season: 'fall', icon: '🍂', title: 'Fall Reset Month', copy: 'Clear out the summer mess before the new season.', cta: 'Book my reset' },
    { season: 'fall', icon: '🎃', title: 'October Glow-Up Month', copy: 'Give your car a clean that is scary good.', cta: 'Book a glow-up' },
    { season: 'fall', icon: '🍁', title: 'Holiday Drive Ready', copy: 'Clean up your car before holiday plans begin.', cta: 'Reserve a spot' },
    { season: 'winter', icon: '🎁', title: 'Holiday Shine Month', copy: 'Arrive clean, fresh, and ready for every celebration.', cta: 'Book before the holidays' }
  ];
  const campaign = seasonalCampaigns[new Date().getMonth()];
  document.body.dataset.season = campaign.season;
  const topOffer = document.querySelector('.monthly-detail-deal');
  if (topOffer) topOffer.insertAdjacentHTML('afterend', `<section id="tt-season" aria-label="This month's TungTungSADetail theme"><div class="tt-season-art">${campaign.art || ''}</div><div class="tt-season-wrap"><div class="tt-season-copy"><b>${campaign.icon}</b><strong>${campaign.title}</strong><span>${campaign.copy}</span></div><a href="#booking">${campaign.cta} ↗</a></div></section>`);
  if (hero) hero.insertAdjacentHTML('afterend', rangeBanner);
  if (footer) footer.insertAdjacentHTML('beforebegin', rangeBanner);
  if (heroCopy) heroCopy.insertAdjacentHTML('beforeend', '<a class="tt-insta-hero" target="_blank" rel="noreferrer" href="https://www.instagram.com/tungtungsadetail/">◎ &nbsp; Follow @tungtungsadetail ↗</a>');
  const services = document.getElementById('services');
  if (services) services.insertAdjacentHTML('beforebegin', '<section class="tt-spin" id="spin"><div class="tt-spin-inner"><div><div class="eyebrow" style="color:#8fc2ff">TungTungSADetail rewards</div><h2>Spin for a detail reward. 🎉</h2><p>The wheel keeps the same prize layout, with a boosted chance to win a <b>Free Wet Vac Service</b> or <b>5% off</b>. <b>15% off</b> is the bonus reward. Sign up once with your email or number.</p><form class="tt-spin-form" id="tt-spin-form"><input id="tt-spin-contact" required autocomplete="email" placeholder="Email or mobile number"><button type="submit">Unlock one spin 🎡</button></form><p class="tt-spin-note">Your entry goes to TungTungSADetail. One spin per browser.</p></div><div class="tt-wheel" id="tt-wheel" aria-label="Reward wheel"><i>FREE<br>WET VAC<br>SERVICE</i><i>5% OFF</i><i>15% OFF</i><i>15% OFF</i><i>5% OFF</i><i>5% OFF</i><span>SPIN<br>TO WIN</span></div></div></section>');
  if (services) services.insertAdjacentHTML('afterend', `<section class="tt-season-feature"><div class="tt-season-feature-inner"><div><div class="eyebrow">${campaign.icon} · ${campaign.title}</div><h2>${campaign.season === 'summer' ? 'Beach days are better with a fresh ride.' : 'A seasonal refresh for your ride.'}</h2><p>${campaign.season === 'summer' ? 'From sandy floors to road-trip crumbs and summer dust, book the detail that makes every drive feel better.' : campaign.copy}</p><a href="#booking">${campaign.cta} ↗</a></div><div class="tt-season-points"><article class="tt-season-point"><strong>${campaign.season === 'summer' ? 'Beach-day cleanup' : 'Seasonal refresh'}</strong></article><article class="tt-season-point"><strong>${campaign.season === 'summer' ? 'Road-trip ready' : 'Ready for every drive'}</strong></article><article class="tt-season-point"><strong>${campaign.season === 'summer' ? 'Cool, clean interior' : 'Clean inside and out'}</strong></article></div></div></section>`);
  const footerLocation = document.querySelector('.contact-strip span');
  if (footerLocation) footerLocation.textContent = '© 2026 TungTungSADetail · 626 area';
  document.body.insertAdjacentHTML('beforeend', `<aside id="tt-chat" aria-label="Tung AI"><div id="tt-chat-box"><div class="tt-head"><b>Tung AI</b><span>Friendly answers about services and booking</span></div><div class="tt-messages" id="tt-messages"><div class="tt-msg">Hi! I am here to make booking easy and help your car look its best. Ask me anything about our services!</div></div><form class="tt-form" id="tt-form"><input id="tt-input" aria-label="Ask Tung AI a question" placeholder="Ask Tung AI anything"><button type="submit">Send</button></form><div class="tt-note">For a quote, text a car photo to 626-561-7482.</div></div><button id="tt-chat-toggle" type="button">Chat with Tung AI</button></aside>`);
  const box = document.getElementById('tt-chat');
  const toggle = document.getElementById('tt-chat-toggle');
  const form = document.getElementById('tt-form');
  const input = document.getElementById('tt-input');
  const messages = document.getElementById('tt-messages');
  const spinForm = document.getElementById('tt-spin-form');
  const spinWheel = document.getElementById('tt-wheel');
  if (spinForm) spinForm.addEventListener('submit', event => {
    event.preventDefault();
    const contact = document.getElementById('tt-spin-contact').value.trim();
    if (localStorage.getItem('ttSpinUsed')) { alert('This browser has already used its one spin. Thanks for joining TungTungSADetail rewards!'); return; }
    localStorage.setItem('ttSpinUsed', 'true');
    // 60% Free Wet Vac Service, 30% 5% Off, and 10% 15% Off.
    // The wheel artwork stays unchanged while these are the disclosed prize odds.
    const rewards = [
      'FREE WET VAC SERVICE', 'FREE WET VAC SERVICE', 'FREE WET VAC SERVICE',
      'FREE WET VAC SERVICE', 'FREE WET VAC SERVICE', 'FREE WET VAC SERVICE',
      '5% OFF', '5% OFF', '5% OFF',
      '15% OFF'
    ];
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    saveToSheets({ type: 'wheel', contact, reward });
    spinWheel.classList.add('spinning');
    const message = encodeURIComponent('TungTungSADetail rewards sign-up\nContact: ' + contact + '\nReward: ' + reward + '\n\nPlease add me to the one-time spin list.');
    setTimeout(() => { window.location.href = 'sms:+16265617482?body=' + message; }, 7200);
    setTimeout(() => { spinWheel.querySelector('span').innerHTML = 'YOU WON<br>' + reward; spinForm.innerHTML = '<strong style="color:#fff;font-size:14px">You won ' + reward + '! 🎉 Your reward was saved. Send the text to finish signing up.</strong>'; }, 7500);
  });
  const cheerfulGreetings = [
    'Hi! I am here to make booking easy and help your car look its best. Ask me anything about our services!',
    'Welcome! Why did the car go to the spa? It needed a little auto-motivation. How can I help today?',
    'Hi there! A clean car is a happy car. Let’s find the best detail for yours!',
    'What did one car say to another after a detail? “You are looking wheel good!” How can I help?',
    'Welcome! Why was the car so relaxed? It was finally in a clean lane. What can I help with today?',
    'Hi! Your car deserves a glow-up. I can help with prices, booking, or service questions.'
  ];
  messages.firstElementChild.textContent = '🤖 ' + cheerfulGreetings[Math.floor(Math.random() * cheerfulGreetings.length)] + ' I’m Tung AI, Alex’s friendly detailing assistant! ✨';
  const bookingForm = document.getElementById('bookingForm');
  const monthlyForm = document.getElementById('monthlyForm');
  const estimateCopy = document.querySelector('#estimate p');
  if (estimateCopy) estimateCopy.textContent = 'At 15 miles or farther, exterior-only and interior-only bookings are upgraded to the complete interior, exterior, and wet-vac package. Text a photo and location for a quote.';
  const aboutCopy = document.querySelector('#about p');
  if (aboutCopy) aboutCopy.textContent = 'We can detail at your driveway or at our location. At 15 miles or farther, exterior-only and interior-only bookings are upgraded to the complete interior, exterior, and wet-vac package. Please provide access to water at the service location. Most appointments take around 2–3+ hours, depending on vehicle size and condition.';
  if (bookingForm) {
    const bookingButton = bookingForm.querySelector('button[type="submit"]');
    if (bookingButton) bookingButton.insertAdjacentHTML('beforebegin', '<div class="field"><label>Find your city</label><input id="travelZone" type="hidden"><button class="tt-range-btn" id="locationCheck" type="button">Use my phone location to find city</button></div><div class="field"><label for="serviceArea">City</label><input id="serviceArea" required autocomplete="address-level2" placeholder="Autofills from your location"></div><div class="field full"><label for="serviceAddress">Exact service address</label><input id="serviceAddress" required autocomplete="street-address" placeholder="Type the exact driveway or service address"><button class="tt-range-btn" id="addressCheck" type="button">Check this exact address</button></div><div class="field full"><div class="tt-distance" id="distanceNotice"><span class="tt-range-dot">15<br>mi</span><strong>Check your service range</strong><br>Use your phone location to find your city, then type the exact driveway or service address yourself. Your address is never shown publicly.</div></div>');
  }
  if (monthlyForm) monthlyForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('monthlyName').value.trim();
    const contact = document.getElementById('monthlyContact').value.trim();
    const method = document.getElementById('monthlyMethod').value;
    const lastDetail = document.getElementById('monthlyLastDetail').value;
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = contact.replace(/\D/g, '').length >= 10;
    if ((method === 'email' && !isEmail) || (method === 'text' && !isPhone)) {
      alert(method === 'email' ? 'Please enter a valid email address for email reminders.' : 'Please enter a valid 10-digit mobile number for text reminders.');
      return;
    }
    const reminderDate = new Date(lastDetail + 'T12:00:00');
    reminderDate.setDate(reminderDate.getDate() + 30);
    const dueDate = reminderDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    saveToSheets({
      type: 'booking',
      service: 'Monthly Maintenance Reminder — $80 detail',
      date: dueDate,
      time: 'Monthly reminder',
      name,
      contact,
      city: '',
      address: '',
      distance: '',
      travelRule: `Reminder preference: ${method}; opted in: yes; last detail: ${lastDetail}`
    });
    monthlyForm.innerHTML = `<div class="full" style="text-align:center;padding:20px 8px"><div class="eyebrow">You are on the list</div><h3 style="font:700 30px Playfair Display,serif;letter-spacing:-.04em;margin:12px 0;color:#071429">Monthly maintenance request saved.</h3><p style="font-size:13px;line-height:1.65;max-width:430px;margin:0 auto;color:#314766">Your ${method} preference and the 30-day target of ${dueDate} were sent to TungTungSADetail. Alex will confirm your $80 monthly-maintenance appointment.</p></div>`;
  });
  const locationCheck = document.getElementById('locationCheck');
  if (locationCheck) locationCheck.addEventListener('click', () => {
    const notice = document.getElementById('distanceNotice');
    if (!navigator.geolocation) { notice.innerHTML = '<strong>Location is not available in this browser.</strong><br>Please open the live HTTPS website or enter your city and address manually.'; return; }
    notice.innerHTML = '<strong>Finding your city and checking distance…</strong><br>Please allow location access when asked. You will type the exact service address yourself.';
    navigator.geolocation.getCurrentPosition(position => {
      // Public service-area center. A private exact origin requires a secure backend.
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
          if (city) document.getElementById('serviceArea').value = city;
        } catch (_) {
          document.getElementById('serviceArea').placeholder = 'Enter your city manually';
        }
      };
      fillAddress();
      const accuracy = Math.round(position.coords.accuracy);
      if (miles >= 15) { const over = (miles - 15).toFixed(1); zone.value = 'outside'; service.value = 'Wet Vac + Full Detail — $130+'; notice.classList.add('outside'); notice.innerHTML = '<span class="tt-range-dot">+' + over + '<br>mi</span><strong>You are ' + over + ' miles beyond the 15-mile limit.</strong><br>Your city was found. Now type the exact driveway or service address and check it below.'; }
      else { const inside = (15 - miles).toFixed(1); zone.value = 'within'; notice.classList.remove('outside'); notice.innerHTML = '<span class="tt-range-dot">' + inside + '<br>mi</span><strong>You are ' + inside + ' miles inside the 15-mile limit.</strong><br>Your city was found. Now type the exact driveway or service address and check it below.'; }
    }, error => {
      const message = error.code === 1 ? 'Location permission was blocked. Allow location in your browser settings and try again.' : error.code === 3 ? 'Location check timed out. Please try again where you have a stronger signal.' : 'We could not read your location. Please try again.';
      notice.innerHTML = '<strong>Location check did not finish.</strong><br>' + message + '<br><br>Note: browser location works on a live HTTPS website. Local file previews can block it.';
    }, { enableHighAccuracy: true, timeout: 30000, maximumAge: 0 });
  });
  const addressCheck = document.getElementById('addressCheck');
  if (addressCheck) addressCheck.addEventListener('click', async () => {
    const addressInput = document.getElementById('serviceAddress');
    const cityInput = document.getElementById('serviceArea');
    const notice = document.getElementById('distanceNotice');
    const zone = document.getElementById('travelZone');
    const service = document.getElementById('service');
    if (!addressInput.value.trim()) { notice.innerHTML = '<strong>Enter your driveway or service address first.</strong><br>Then tap “Check this exact address.”'; addressInput.focus(); return; }
    notice.innerHTML = '<strong>Checking your exact address…</strong><br>Your address is used only for this booking distance check.';
    try {
      const query = addressInput.value + ', ' + (cityInput.value || '626 area') + ', California';
      const response = await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=' + encodeURIComponent(query));
      const result = await response.json();
      if (!result.length) throw new Error('not found');
      const base = { lat: 34.094636, lng: -118.098469 };
      const lat = Number(result[0].lat), lng = Number(result[0].lon), radians = value => value * Math.PI / 180;
      const dLat = radians(base.lat - lat), dLng = radians(base.lng - lng);
      const a = Math.sin(dLat / 2) ** 2 + Math.cos(radians(lat)) * Math.cos(radians(base.lat)) * Math.sin(dLng / 2) ** 2;
      const miles = 3958.8 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      notice.dataset.miles = miles.toFixed(1);
      if (miles >= 15) { const over = (miles - 15).toFixed(1); zone.value = 'outside'; service.value = 'Wet Vac + Full Detail — $130+'; notice.classList.add('outside'); notice.innerHTML = '<span class="tt-range-dot">+' + over + '<br>mi</span><strong>Your exact address is ' + over + ' miles beyond the 15-mile limit.</strong><br>It is ' + miles.toFixed(1) + ' miles from our service center, so the complete package has been selected.'; }
      else { const inside = (15 - miles).toFixed(1); zone.value = 'within'; notice.classList.remove('outside'); notice.innerHTML = '<span class="tt-range-dot">' + inside + '<br>mi</span><strong>Your exact address is ' + inside + ' miles inside the 15-mile limit.</strong><br>It is ' + miles.toFixed(1) + ' miles from our service center. Your selected package is available.'; }
    } catch (_) { notice.innerHTML = '<strong>We could not verify that address.</strong><br>Check the street number, city, and ZIP code, or use your precise phone location instead.'; }
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
    saveToSheets({ type: 'booking', service, date, time, name, contact, city: serviceArea, address: serviceAddress, distance, travelRule: travelZone });
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
    if (/^(hi|hello|hey|what'?s up|good morning|good afternoon)/.test(q)) return 'Hi! I am the TungTungSADetail helper. I can help you choose a service, explain pricing, or get your booking started.';
    if (/creator|manager|owner|who runs|who made|alex/.test(q)) return 'Alex is the creator and manager of TungTungSADetail! 🎉 I’m Tung AI, Alex’s friendly assistant, here to help you book and find what you need.';
    if (/who are you|are you (an )?ai|what can you do/.test(q)) return 'I’m Tung AI, Alex’s friendly TungTungSADetail assistant! I can help with services, pricing, travel, timing, booking, and guiding you around the site.';
    if (/thank|thanks/.test(q)) return 'You are welcome! When you are ready, use Book Now or text a photo of your car to 626-561-7482 for a quote.';
    if (/price|cost|how much|\$/.test(q)) return 'Exterior Wash starts at $40. Interior Detail starts at $70. Full Detail starts at $100. Wet Vac plus Full Detail starts at $130. Final quotes depend on vehicle size and condition.';
    if (/book|appointment|schedule|date|time/.test(q)) return 'Use the Book Now section to choose a service, date, and time. It opens a pre-filled text to 626-561-7482 so we can confirm your appointment.';
    if (/water|driveway|location|come to me|mobile/.test(q)) return 'We can detail at your driveway or at our location. Please provide water access when we come to your home.';
    if (/far|distance|travel|fee/.test(q)) return 'At 15 miles or farther, exterior-only and interior-only bookings are upgraded to the complete interior, exterior, and wet-vac package. Text a photo and your location to 626-561-7482 for a quote.';
    if (/hour|long|time take|duration/.test(q)) return 'Most details take around 2 to 3 or more hours, depending on vehicle size and condition.';
    if (/service|clay|headlight|interior|exterior/.test(q)) return 'We offer Exterior Wash, Interior Detail, Full Detail, Wet Vac plus Full Detail, and Clay Bar as an add-on. Headlight restoration is coming soon.';
    if (/instagram|insta/.test(q)) return 'You can follow us on Instagram at @tungtungsadetail.';
    if (/joke|funny|random/.test(q)) { const jokes = ['Why did the car go to school? To improve its driving knowledge!', 'What do you call a shiny car? A clean machine!', 'Why did the car get a detail? It wanted to look exhaust-ingly good!']; return jokes[Math.floor(Math.random() * jokes.length)]; }
    if (/weather|news|school|game|movie/.test(q)) return 'That is a fun question! I am best at helping with TungTungSADetail, but I can also help with simple math and car jokes. For your car, text a photo and your question to 626-561-7482 and we will be happy to help.';
    return 'I’m excited to help! I can answer questions about TungTungSADetail, simple everyday questions, and fun car stuff. For a quote tailored to your car, text a photo to 626-561-7482.';
  };
  const navigationFor = question => {
    const q = question.toLowerCase();
    if (/book|appointment|schedule|date|time/.test(q)) return { href: '#booking', label: 'Yes — take me to booking! 📅' };
    if (/price|cost|how much|\$/.test(q)) return { href: '#pricing', label: 'Yes — show me prices! 💸' };
    if (/review|rating/.test(q)) return { href: 'reviews.html', label: 'Yes — show me reviews! ⭐' };
    if (/photo|gallery|work|before|after/.test(q)) return { href: '#gallery', label: 'Yes — show me the work! ✨' };
    if (/estimate|quote/.test(q)) return { href: '#estimate', label: 'Yes — help me get a quote! 📸' };
    if (/instagram|insta/.test(q)) return { href: 'https://www.instagram.com/tungtungsadetail/', label: 'Yes — open Instagram! 📲', external: true };
    return null;
  };
  toggle.onclick = () => { box.classList.toggle('open'); if (box.classList.contains('open')) input.focus(); };
  form.onsubmit = event => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    messages.insertAdjacentHTML('beforeend', '<div class="tt-msg user"></div>');
    messages.lastElementChild.textContent = question;
    messages.insertAdjacentHTML('beforeend', '<div class="tt-msg"></div>');
    messages.lastElementChild.textContent = answer(question) + ' 🚗✨';
    const navigation = navigationFor(question);
    if (navigation) {
      messages.insertAdjacentHTML('beforeend', '<div class="tt-msg">Want me to take you there? 😄</div><a class="tt-go" href="' + navigation.href + '"' + (navigation.external ? ' target="_blank" rel="noreferrer"' : '') + '>' + navigation.label + '</a>');
    }
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  };
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealItems = document.querySelectorAll('main > section, .tt-spin, .tt-season-feature, .quick-reviews');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: .12 });
    revealItems.forEach(item => { item.classList.add('tt-reveal'); revealObserver.observe(item); });
  }
})();
