(() => {
  const avatarHome = 'https://www.yourba.top/'

  const linkAvatars = () => {
    document
      .querySelectorAll('.card-info .avatar-img, #sidebar-menus .avatar-img')
      .forEach(box => {
        if (box.dataset.avatarLinked === 'true') return

        const img = box.querySelector('img')
        if (!img) return

        const link = document.createElement('a')
        link.href = avatarHome
        link.target = '_blank'
        link.rel = 'noopener'
        link.title = '访问 Yourba 的主页'
        link.className = 'avatar-home-link'

        img.parentNode.insertBefore(link, img)
        link.appendChild(img)
        box.dataset.avatarLinked = 'true'
      })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', linkAvatars)
  } else {
    linkAvatars()
  }

  document.addEventListener('pjax:complete', linkAvatars)
})()
