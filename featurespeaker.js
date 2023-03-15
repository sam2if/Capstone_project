const speakers = [
  {
    name: '<h2>Yochai Bancklers</h2>',
    image: '<img src="images/Jinko-Gotoh.jpg">',
    profession: '<i>Director of Art Centre Nabi and a board member of CC Korea</i>',
    description: '<p>Bencklers studies commons based peer-production and puplished his seminal book The Wealth Of Networks in 2006</p>',
  },
];

const featureSpeaker = document.querySelector('.featured-speakers');
featureSpeaker.innerHTML = `<div class="contain">
  <div class="feature-title">
      <p>Featured Speakers</p>
      <div class="hls"></div>
  </div> 
  <div id="spc">
      <div class="speakers">
          <div class="divide">
              <div class="speakers-img">
              ${speakers[0].image}
              </div>
              <div class="speakers-name">
                  ${speakers[0].name}
                  <div class="speakers-profession">
                  ${speakers[0].profession}
                  </div>
                  <div class="speakers-details">
                  ${speakers[0].description}
                  </div>
              </div>
          </div>
          <div class="divide">
              <div class="speakers-img">
              ${speakers[0].image}
              </div>
              <div class="speakers-name">
                  ${speakers[0].name}
                  <div class="speakers-profession">
                  ${speakers[0].profession}
                  </div>
                  <div class="speakers-details">
                  ${speakers[0].description}
                  </div>
              </div>
          </div>
      </div>
      <div class="speakers">
          <div class="divide">
              <div class="speakers-img">
              ${speakers[0].image}
              </div>
              <div class="speakers-name">
                  ${speakers[0].name}
                  <div class="speakers-profession">
                  ${speakers[0].profession}
                  </div>
                  <div class="speakers-details">
                  ${speakers[0].description}
                  </div>
              </div>
          </div>
          <div class="divide">
              <div class="speakers-img">
              ${speakers[0].image}
              </div>
              <div class="speakers-name">
                  ${speakers[0].name}
                  <div class="speakers-profession">
                  ${speakers[0].profession}
                  </div>
                  <div class="speakers-details">
                  ${speakers[0].description}
                  </div>
              </div>
          </div>
      </div>
      <div class="speakers">
          <div class="divide">
              <div class="speakers-img">
              ${speakers[0].image}
              </div>
              <div class="speakers-name">
                  ${speakers[0].name}
                  <div class="speakers-profession">
                  ${speakers[0].profession}
                  </div>
                  <div class="speakers-details">
                  ${speakers[0].description}
                  </div>
              </div>
          </div>
          <div class="divide">
              <div class="speakers-img">
              ${speakers[0].image}
              </div>
              <div class="speakers-name">
                  ${speakers[0].name}
                  <div class="speakers-profession">
                  ${speakers[0].profession}
                  </div>
                  <div class="speakers-details">
                  ${speakers[0].description}
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
  </div>`;