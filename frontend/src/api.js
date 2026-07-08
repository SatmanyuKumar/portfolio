import { fallbackProfile, fallbackProjects } from './data.js';

const BASE_URL = 'http://localhost:8080/api';

async function safeFetch(path, fallback) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, { signal: AbortSignal.timeout(2500) });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    // Backend not running (or CORS/offline) — fall back to static data so the site still works.
    console.warn(`Falling back to static data for ${path}:`, err.message);
    return fallback;
  }
}

export function getProfile() {
  return safeFetch('/profile', fallbackProfile);
}

export function getProjects() {
  return safeFetch('/projects', fallbackProjects);
}

export async function sendContactMessage(payload) {
  try {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();

    if (res.status === 422 && data.status === 'flagged') {
      return { ok: false, flagged: true, message: data.message };
    }
    if (!res.ok) throw new Error(data.message || 'Something went wrong');

    return { ok: true, message: data.message };
  } catch (err) {
    return { ok: false, message: 'Backend not reachable right now — please email me directly instead.' };
  }
}
