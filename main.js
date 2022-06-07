function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionAndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionAndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  let elem = document.getElementById('navigation')

  if (scrollY > 0) {
    elem.classList.add('scroll')
  } else {
    elem.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  let elem = document.getElementById('backToTopButton')

  if (scrollY > 550) {
    elem.classList.add('show')
  } else {
    elem.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
           #home img,
           #home .stats,
           #services,
           #services header,
           #services .card,
           #about,
           #about header,
           #about .content
         `)
