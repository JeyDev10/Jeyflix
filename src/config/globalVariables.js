const isLocal = window.location.href.includes('localhost');
const URL_BACKEND = isLocal ? 'http://localhost:3004' : '';

export default URL_BACKEND;
