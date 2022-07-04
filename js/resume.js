const toggleElementVisibility = (element) => {
  if (element) {
    const elementStyle = getComputedStyle(element);

    if (elementStyle.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }
};

const setResumeDowloadBtn = (() => {
  const resumeLinks = document.querySelector('#resume-links');
  const resumeDowloadBtns = document.querySelectorAll('.resume-download');

  resumeDowloadBtns.forEach((resumeDowloadBtn) => {
    resumeDowloadBtn.addEventListener('focus', () => {
      toggleElementVisibility(resumeLinks);
    });
    /* TODO: 
    Ei toimi, koska linkkiä painettaessa nappi menettää focus-tilan ja linkit katoavat, eivätkä pysty ohjaamaan
    kohteeseen. Olisi hyvä, jos nappi ei menettäisi focus-tilaa kun cv-linkit ovat auki. 
    */ 
    // resumeDowloadBtn.addEventListener('focusout', () => {
    //   toggleElementVisibility(resumeLinks);
    // });
  });

  // resumeLinks.addEventListener('click', () =>
  //   toggleElementVisibility(resumeLinks)
  // );
})();

/* TODO: Mobiilielementtien käsittely
 * Kun html-sivun ulkoasu on valmis, tarkista elementtien käyttö perusSEO:n kannalta.
 * Luo mobiilielementit ja tee dokumenttimuutoksia, jos mahdollista, fragmenttien avulla.
 */
if (screen.width <= 600) {
  const setMobileElements = (() => {
    const moveSomeLinksIntoProfile = (() => {
      const someLinksContainer = document
        .querySelector('#profile-msg-holder')
        .removeChild(document.querySelector('.some-links-container'));
      const profile = document.querySelector('#profile');
      profile.appendChild(someLinksContainer);
    })();
  })();
}

const setUpInfoBoxToggleButtons = (() => {
  const infoBoxes = document.querySelectorAll('.info-box');

  infoBoxes.forEach((infoBox) => {
    const descrBtn = infoBox.querySelector('button');
    const description = infoBox.querySelector('.info-box-descr');

    if (descrBtn && description) {
      infoBox.addEventListener('click', () => {
        toggleElementVisibility(description);

        if (description.style.display === 'block') {
          descrBtn.style.transform = 'rotate(90deg)';
        } else {
          descrBtn.style.transform = 'none';
        }
      });
    }
  });

  const otherExpcBtn = document.getElementById('other-expc-btn');
  const otherExpcInfo = document.getElementById('other-expc-info');

  otherExpcBtn.addEventListener('click', () =>
    toggleElementVisibility(otherExpcInfo)
  );
})();
