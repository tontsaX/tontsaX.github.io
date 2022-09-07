if (screen.width <= 600) {
  const setMobileElements = (() => {
    const createMobileTitleBanner = (() => {
      const createElement = (tag, id, content = '') => {
        const element = document.createElement(tag);
        element.id = id;
        element.innerHTML = content;
        return element;
      }
      
      // construct mobile title bar
      const mobileTitleBar = createElement('div', 'mobile-top');

      const titleBarFragment = document.createDocumentFragment();

      const hamburger = createElement('button', 'hamburger', '&#9776;');

      const title = createElement('h1', 'mobile-title', 'Toni Kainulainen');

      const resumeDownload = createElement('a', 'mobile-resume-download-btn', 'Download Resume');
      resumeDownload.href = 'pdf/Resume-Toni-Kainulainen.pdf';
      resumeDownload.target = '_blank';

      titleBarFragment.append(hamburger, title, resumeDownload);

      mobileTitleBar.appendChild(titleBarFragment);

      // add title bar to the document
      const navigation = document.querySelector('nav');
      document.body.insertBefore(mobileTitleBar, navigation)
    })();

    const moveSomeLinksIntoProfile = (() => {
      const someLinksContainer = document
        .querySelector('#profile-msg-holder')
        .removeChild(document.querySelector('.some-links-container'));
      const profile = document.querySelector('#profile');
      profile.appendChild(someLinksContainer);
    })();
  })();
}

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
  const resumeDowloadBtns = document.querySelectorAll('.resume-download-btn');
  const resumeLinksContainers = document.querySelectorAll(
    '.resume-links-container'
  );

  resumeDowloadBtns.forEach((resumeDowloadBtn, downloadBtnIndex) => {
    const resumeLinksContainer = resumeLinksContainers[downloadBtnIndex];

    resumeDowloadBtn.addEventListener('click', () => {
      toggleElementVisibility(resumeLinksContainer);
      if(document.activeElement === resumeDowloadBtn) {
        resumeDowloadBtn.blur();
      }
    });

    resumeLinksContainer.addEventListener('mouseout', () => {
      toggleElementVisibility(resumeLinksContainer);
      resumeDowloadBtn.blur();
    });

    
  });

  document.addEventListener('click', (event) => {
    resumeDowloadBtns.forEach((resumeDowloadBtn, downloadBtnIndex) => {
      if(!resumeDowloadBtn.contains(event.target)) {
        resumeLinksContainers[downloadBtnIndex].style.display = 'none';
        resumeDowloadBtn.blur();
      }
    });
  });
})();

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
