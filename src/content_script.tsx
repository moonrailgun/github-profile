import { renderProfilePage } from './render/renderProfilePage';
import { parseGithubUrl } from './utils/url-helper';

function tryApplyGithubProfileTab() {
  const { username, repoName, searchQuery = '' } = parseGithubUrl(
    window.location.href
  );

  if (typeof username === 'string' && typeof repoName === 'undefined') {
    // In Main User Profile Page
    // Add Profile Tab after Overview
    const isProfileTabSelected = searchQuery.includes('tab=profile');

    const nav = document.querySelector('nav.UnderlineNav-body');
    if (!nav) {
      return;
    }

    if (isProfileTabSelected === true) {
      // Remove selected Node
      const currentSelectedNode = nav.querySelector('.selected');

      currentSelectedNode?.classList.remove('selected');
      currentSelectedNode?.removeAttribute('aria-current');

      console.log('Start to render Profile Page');
      renderProfilePage(username);
    }

    // Render ProfileTab
    const profileTab = document.createElement('a');
    profileTab.className =
      'UnderlineNav-item' + (isProfileTabSelected === true ? ' selected' : '');
    profileTab.setAttribute('href', `/${username}?tab=profile`);

    const iconStr = `<svg class="UnderlineNav-octicon hide-sm octicon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2.5a.25.25 0 00-.25.25v1.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25H1.75zM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v1.5A1.75 1.75 0 0114.25 6H1.75A1.75 1.75 0 010 4.25v-1.5zM1.75 7a.75.75 0 01.75.75v5.5c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25v-5.5a.75.75 0 111.5 0v5.5A1.75 1.75 0 0113.25 15H2.75A1.75 1.75 0 011 13.25v-5.5A.75.75 0 011.75 7zm4.5 1a.75.75 0 000 1.5h3.5a.75.75 0 100-1.5h-3.5z"></path></svg>`;
    profileTab.innerHTML = `${iconStr} Profile`;

    nav.append(profileTab);
  }
}

function setup() {
  const host = window.location.host;
  if (host === 'github.com') {
    tryApplyGithubProfileTab();
  }
}
setup();

document.addEventListener('pjax:complete', () => {
  setup();
});
