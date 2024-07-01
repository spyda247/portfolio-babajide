/* Mobile Menu */
export function displayMobileMenu() {
  const nav = document.querySelector('.mobile nav');
  const hamburger = document.querySelector('.hamburger');
  const closeBtn = document.querySelector('.close-btn');

  hamburger.addEventListener('click', () => {
    nav.classList.add('slide-in');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('slide-in');
  });
}

/* Bio Heading */
export function displayBioHeading(heading) {
  const bioHeading = document.querySelector('.left h1');
  bioHeading.textContent = heading;
}

/* Skills */
export function displaySkils() {
  const btn = document.querySelector('#btn-skills');
  const skillsWrapper = document.querySelector('.skills-wrapper');
  const handleClick = () => {
    skillsWrapper.classList.toggle('show')
      ? (btn.textContent = 'Hide Skills')
      : (btn.textContent = 'Show Skills');
  };

  btn.addEventListener('click', handleClick);
}

/* Education */

export function listEducation(data) {
  const eduList = document.querySelector('.education ul');
  data.forEach((item) => {
    const eduListItem = document.createElement('li');

    eduListItem.innerHTML = `
                  <h3>${item.institution}</h3>
                  <span>${item.yearOfGrad}</span>
                `;
    eduList.append(eduListItem);
  });
}

/* Experience */
export function listExperience(data) {
  const tbody = document.querySelector('tbody');
  if (tbody) {
    data.forEach((item) => {
      const row = document.createElement('tr');

      const html = `
      <td>${item.date.from} - ${item.date.to}</td>
      <td>${item.company}</td>
      <td>${item.roles}</td>
      <td>${item.responsibilities}</td>
      `;
      row.innerHTML = html;

      tbody.appendChild(row);
    });
  }
}

export function listExperienceMobile(data) {
  const details = document.querySelector('.details');
  let html = '';

  data.forEach((item) => {
    html += `<div class="mobile">
              <p>${item.date.from} - ${item.date.to} <span>${item.company}</span></p>
              <h2>${item.roles}</h2>
              <p>
               ${item.responsibilities}
              </p>
            </div>`;
  });

  details.innerHTML = html;
}

export function listProjects(data) {
  const projects = document.querySelector('.projects > div');
  const projectData = data.projects;
  let html = '';

  projectData.forEach((item) => {
    html += `<div class="project">
              <img src=${item.imageUrl} />
              <div class="description">
                <h3>${item.description.heading}</h3>
                <p>${item.description.text}</p>
              </div>
            </div>`;

    projects.innerHTML = html;
  });
}

export function getFormData(data) {
  if (!data) return;
  const visitorName = document.querySelector('.visitor-name');
  const firstName = data.split('=')[1].split('+')[0];
  const visitorEmail = document.querySelector('.visitor-email');
  const emailAddress = data.split('=')[2].split('&')[0].replace('%40', '@');

  visitorName.innerHTML = firstName;
  visitorEmail.innerHTML = emailAddress;
}
