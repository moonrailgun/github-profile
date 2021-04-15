export function parseGithubUrl(fullUrl: string) {
  const [url, searchQuery] = fullUrl.split('?');
  const [protocol, other] = url.split('//');
  const [_, username, repoName] = other.split('/');

  return { username, repoName, searchQuery };
}
