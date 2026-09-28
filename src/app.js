import QRCode from 'qrcode';

const tools = [
  { id: 'word-counter', name: 'Word counter', group: 'Writing', icon: 'type', summary: 'Measure words, characters, sentences and reading time.' },
  { id: 'case-converter', name: 'Case converter', group: 'Writing', icon: 'case', summary: 'Convert copy between common capitalization styles.' },
  { id: 'whitespace-cleaner', name: 'Whitespace cleaner', group: 'Writing', icon: 'align', summary: 'Tidy spacing and line breaks without losing your original.' },
  { id: 'headline-ideas', name: 'Headline ideas', group: 'Writing', icon: 'sparkles', summary: 'Draft headline variations from a topic and direction.' },
  { id: 'serp-preview', name: 'Search snippet preview', group: 'SEO', icon: 'search', summary: 'Preview a title and description in a search result.' },
  { id: 'heading-outline', name: 'Heading outline', group: 'SEO', icon: 'list', summary: 'Inspect heading structure and skipped levels.' },
  { id: 'keyword-checker', name: 'Phrase finder', group: 'SEO', icon: 'scan-search', summary: 'Count a phrase and inspect surrounding context.' },
  { id: 'content-checklist', name: 'Content checklist', group: 'SEO', icon: 'checklist', summary: 'Review on-page essentials before publishing.' },
  { id: 'utm-builder', name: 'UTM builder', group: 'Campaigns', icon: 'link', summary: 'Build tagged campaign links and export a CSV.' },
  { id: 'url-cleaner', name: 'URL cleaner', group: 'Campaigns', icon: 'filter', summary: 'Remove selected tracking parameters from a URL.' },
  { id: 'qr-generator', name: 'QR code', group: 'Campaigns', icon: 'qr', summary: 'Create a downloadable QR code in your browser.' },
  { id: 'caption-composer', name: 'Caption composer', group: 'Social', icon: 'message', summary: 'Draft a caption and keep an eye on its character count.' },
  { id: 'hashtag-sets', name: 'Hashtag sets', group: 'Social', icon: 'hash', summary: 'Save, sort and reuse collections of hashtags.' },
  { id: 'image-preview', name: 'Image preview', group: 'Social', icon: 'image', summary: 'Preview a local image in common social formats.' },
  { id: 'budget-allocator', name: 'Budget allocator', group: 'Planning', icon: 'wallet', summary: 'Split a budget using fixed amounts and percentages.' },
  { id: 'campaign-metrics', name: 'Campaign metrics', group: 'Planning', icon: 'chart', summary: 'Calculate CTR, CPC, conversion rate, CPA and ROAS.' },
  { id: 'template-library', name: 'Template library', group: 'Planning', icon: 'files', summary: 'Browse, edit and export reusable campaign templates.' },
];

const iconPaths = {
  type: '<path d="M4 7V5h16v2M12 5v14M8 19h8"/>',
  case: '<path d="M4 18 9 6l5 12M6 14h6M14 18l3.5-8 3.5 8M15.2 15h4.6"/>',
  align: '<path d="M4 6h16M4 10h11M4 14h16M4 18h11"/>',
  sparkles: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14ZM5 3l.7 1.3L7 5l-1.3.7L5 7l-.7-1.3L3 5l1.3-.7L5 3Z"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>',
  'scan-search': '<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5M4 4v3M4 4h3M20 4h-3M20 4v3M4 20h3M4 20v-3"/>',
  checklist: '<path d="m4 6 1.5 1.5L8 5M11 6h9M4 12l1.5 1.5L8 11M11 12h9M4 18l1.5 1.5L8 17M11 18h9"/>',
  link: '<path d="M10 13.5a4.5 4.5 0 0 0 6.4 0l3-3A4.5 4.5 0 0 0 13 4.1l-1.7 1.7"/><path d="M14 10.5a4.5 4.5 0 0 0-6.4 0l-3 3A4.5 4.5 0 0 0 11 19.9l1.7-1.7"/>',
  filter: '<path d="M4 5h16l-6.5 7.5V18l-3 1v-6.5L4 5Z"/>',
  qr: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z"/>',
  message: '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-3A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11h8M8 14h5"/>',
  hash: '<path d="m9 4-2 16M17 4l-2 16M4 9h16M3 15h16"/>',
  image: '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="9" r="1.5"/><path d="m4 16 5-5 3.5 3 2.5-2 5 5"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 9h18M16 14h2M6 6l1-3h12l1 3"/>',
  chart: '<path d="M4 19.5h16M6 17V11M11 17V6M16 17v-4M21 17V4"/>',
  files: '<path d="M8 7V4h12v13h-3M5 8h12v12H5z"/><path d="M8 12h6M8 15h6"/>',
  home: '<path d="m3 10 9-7 9 7v10h-6v-6H9v6H3V10Z"/>',
  settings: '<path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.5.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.7-1.4-2.4 1.4-1.1a8 8 0 0 1 0-1.8l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.5-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.5.9l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1 0 1.7Z" transform="translate(-1 -2) scale(.92)"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  'arrow-up': '<path d="m6 14 6-6 6 6"/>',
  'arrow-down': '<path d="m6 10 6 6 6-6"/>',
  'window-minimize': '<path d="M5 17h14"/>',
  'window-maximize': '<rect x="5" y="5" width="14" height="14" rx="1"/>',
  'window-restore': '<rect x="8" y="8" width="11" height="11" rx="1"/><path d="M16 8V5H5v11h3"/>',
};

function svgIcon(name, className = '') {
  return `<svg class="line-icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${iconPaths[name] || iconPaths.sparkles}</svg>`;
}

const starterTemplates = [
  { name: 'Product launch', category: 'Launch', subject: 'Meet [product name]', body: 'Introducing [product name], a simpler way to [customer outcome]. Available [date]. Learn more: [link]' },
  { name: 'Event invitation', category: 'Events', subject: 'You are invited: [event name]', body: 'Join us [date] for [event name]. Hear from [speaker] and leave with practical ideas for [topic]. Save your place: [link]' },
  { name: 'Newsletter intro', category: 'Email', subject: 'This month: [main story]', body: 'Hello [name],\n\nThis month we are looking at [topic]. Here are a few ideas and resources to help you [reader outcome].' },
  { name: 'Social announcement', category: 'Social', subject: '[Short announcement]', body: 'We are excited to share [news]. It means [benefit] for [audience]. See what is new: [link]' },
  { name: 'Customer follow-up', category: 'Email', subject: 'A few next steps', body: 'Thanks for taking the time to [action]. Based on what you shared, these may be useful next steps: [steps].' },
];

const storageKey = 'marketing-toolbox-v1';
const freshState = () => ({ favorites: [], recent: [], theme: 'light', presets: [], hashtagSets: [], drafts: [], headlineSets: [], templates: starterTemplates });
let saved = {};
try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch { saved = {}; }
const data = { ...freshState(), ...saved };
if (!Array.isArray(data.templates) || !data.templates.length) data.templates = starterTemplates;
const form = {};
const formStore = {};
let activeFileUrl = '';
let searchText = '';
const desktop = { minimized: false, maximized: false, launcherOpen: false, showDesktop: false, x: 0, y: 0 };
let clockTimer;

function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify(data)); } catch { /* Storage may be unavailable in private browsing. */ }
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function routeToolId() {
  const match = location.pathname.match(/^\/tools\/([^/]+)/);
  return match ? decodeURIComponent(match[1]) : '';
}
function currentTool() { return tools.find((tool) => tool.id === routeToolId()); }
function value(name, fallback = '') { return form[name] ?? fallback; }
function field(label, name, placeholder = '', options = {}) {
  const attrs = `${options.type ? `type="${options.type}"` : ''} ${options.min !== undefined ? `min="${options.min}"` : ''} ${options.step ? `step="${options.step}"` : ''}`;
  return `<label class="field"><span>${escapeHtml(label)}</span><input name="${name}" ${attrs} value="${escapeHtml(value(name, options.default ?? ''))}" placeholder="${escapeHtml(placeholder)}" ${options.required ? 'required' : ''}></label>`;
}
function area(label, name, placeholder = '', rows = 7) {
  return `<label class="field"><span>${escapeHtml(label)}</span><textarea name="${name}" rows="${rows}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value(name))}</textarea></label>`;
}
function selectField(label, name, options) {
  return `<label class="field"><span>${escapeHtml(label)}</span><select name="${name}">${options.map(([v, text]) => `<option value="${escapeHtml(v)}" ${value(name, options[0][0]) === v ? 'selected' : ''}>${escapeHtml(text)}</option>`).join('')}</select></label>`;
}
function button(label, action, style = '') { return `<button class="button ${style}" type="button" data-action="${action}">${label}</button>`; }
function copyButton() { return button(`${svgIcon('copy')} Copy`, 'copy', 'button-secondary'); }
function card(title, contents) { return `<section class="panel"><h2>${title}</h2>${contents}</section>`; }
function setFormDefaults(defaults) { for (const [key, val] of Object.entries(defaults)) if (form[key] === undefined) form[key] = val; }
function navTo(path) {
  const previousToolId = routeToolId();
  if (previousToolId) formStore[previousToolId] = { ...form };
  desktop.minimized = false;
  desktop.launcherOpen = false;
  desktop.showDesktop = false;
  history.pushState({}, '', path);
  if (path.startsWith('/tools/')) {
    const id = path.split('/').pop();
    data.recent = [id, ...data.recent.filter((item) => item !== id)].slice(0, 5);
    persist();
  }
  render();
}

function sidebar() {
  const groups = [...new Set(tools.map((tool) => tool.group))];
  const active = routeToolId();
  return `<aside class="sidebar"><a class="brand" href="/" data-route="/"><span class="brand-mark">M</span><span>market<span class="brand-light">kit</span></span></a>
    <div class="sidebar-label">WORKSPACE</div>
    <a class="side-link ${!active && location.pathname !== '/settings' ? 'is-active' : ''}" href="/" data-route="/"><span class="side-icon">⌂</span> Overview</a>
    ${groups.map((group) => `<div class="nav-group"><div class="sidebar-label">${escapeHtml(group.toUpperCase())}</div>${tools.filter((tool) => tool.group === group).map((tool) => `<a class="side-link ${active === tool.id ? 'is-active' : ''}" href="/tools/${tool.id}" data-route="/tools/${tool.id}"><span class="side-icon">${svgIcon(tool.icon)}</span>${escapeHtml(tool.name)}</a>`).join('')}</div>`).join('')}
    <div class="sidebar-bottom"><a class="side-link ${location.pathname === '/settings' ? 'is-active' : ''}" href="/settings" data-route="/settings"><span class="side-icon">${svgIcon('settings')}</span> Settings</a><p>Private by design.<br>Work stays in this browser.</p></div>
  </aside>`;
}

function topbar() {
  return `<header class="topbar"><button class="mobile-brand" data-route="/" aria-label="Go to overview"><span class="brand-mark">M</span></button><label class="global-search"><span aria-hidden="true">${svgIcon('search')}</span><input id="global-search" value="${escapeHtml(searchText)}" placeholder="Search 17 tools..." aria-label="Search tools"><kbd>⌘ K</kbd></label><div class="top-actions"><span class="local-badge"><i></i> Local workspace</span><button class="icon-button" data-action="theme" title="Toggle color theme" aria-label="Toggle color theme">${svgIcon(data.theme === 'dark' ? 'sun' : 'moon')}</button></div></header>`;
}

function toolCard(tool, compact = false) {
  return `<a class="tool-card ${compact ? 'tool-card-compact' : ''}" href="/tools/${tool.id}" data-route="/tools/${tool.id}"><span class="tool-icon">${svgIcon(tool.icon)}</span><span class="tool-card-copy"><span class="tool-name">${escapeHtml(tool.name)}</span><span class="tool-description">${escapeHtml(tool.summary)}</span></span><span class="tool-arrow" aria-hidden="true">↗</span></a>`;
}

function homePage() {
  const query = searchText.trim().toLowerCase();
  const matches = tools.filter((tool) => !query || `${tool.name} ${tool.group} ${tool.summary}`.toLowerCase().includes(query));
  const recentTools = data.recent.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);
  const favoriteTools = data.favorites.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);
  if (query) return `<div class="page-heading"><div><p class="eyebrow">TOOL DIRECTORY</p><h1>Find a tool</h1><p class="subhead">${matches.length} result${matches.length === 1 ? '' : 's'} for “${escapeHtml(searchText)}”</p></div></div><div class="tool-grid">${matches.map((tool) => toolCard(tool)).join('') || '<p class="empty-state">No matching tools. Try another search.</p>'}</div>`;
  return `<section class="welcome-band"><div class="welcome-copy"><p class="eyebrow">YOUR MARKETING WORKSPACE</p><h1>Good work starts<br>with a clear next step.</h1><p>Small, practical tools for the details behind your next campaign.</p><button class="button button-dark" data-action="focus-search">Find a tool ${svgIcon('search')}</button></div><div class="welcome-art" aria-hidden="true"><div class="art-sheet sheet-back"></div><div class="art-sheet sheet-front"><span class="art-line"></span><span class="art-line short"></span><span class="art-chart"><i></i><i></i><i></i><i></i><i></i><i></i></span></div><span class="art-stamp">MK<br>01</span></div></section>
  ${favoriteTools.length ? `<section class="home-section"><div class="section-heading"><div><p class="eyebrow">YOUR SHORTLIST</p><h2>Favorites</h2></div></div><div class="tool-grid tool-grid-small">${favoriteTools.map((tool) => toolCard(tool, true)).join('')}</div></section>` : ''}
  ${recentTools.length ? `<section class="home-section"><div class="section-heading"><div><p class="eyebrow">PICK UP WHERE YOU LEFT OFF</p><h2>Recently used</h2></div></div><div class="tool-grid tool-grid-small">${recentTools.map((tool) => toolCard(tool, true)).join('')}</div></section>` : ''}
  <section class="home-section"><div class="section-heading"><div><p class="eyebrow">17 TOOLS, FIVE WORKFLOWS</p><h2>Explore the toolbox</h2></div></div>${[...new Set(tools.map((tool) => tool.group))].map((group) => `<div class="tool-group"><div class="tool-group-title">${escapeHtml(group)}</div><div class="tool-grid tool-grid-small">${tools.filter((tool) => tool.group === group).map((tool) => toolCard(tool, true)).join('')}</div></div>`).join('')}</section>`;
}

function outputMarkup(id) {
  const text = String(value('text'));
  if (id === 'word-counter') {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim() ? (text.match(/[.!?]+(?=\s|$)/g) || []).length : 0;
    const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).length : 0;
    const target = Number(value('target', 500)) || 500;
    return `<div class="metric-row"><div class="metric"><strong>${words}</strong><span>Words</span></div><div class="metric"><strong>${text.length}</strong><span>Characters</span></div><div class="metric"><strong>${sentences}</strong><span>Sentences</span></div><div class="metric"><strong>${paragraphs}</strong><span>Paragraphs</span></div><div class="metric"><strong>${Math.ceil(words / 225)} min</strong><span>Read time</span></div></div><div class="progress-wrap"><div class="progress-label"><span>Word target</span><span>${words} / ${target}</span></div><div class="progress"><i style="width:${Math.min(100, words / target * 100)}%"></i></div></div>`;
  }
  if (id === 'case-converter') {
    const mode = value('mode', 'upper');
    const converted = mode === 'lower' ? text.toLowerCase() : mode === 'title' ? text.toLowerCase().replace(/\b[\p{L}\p{N}]/gu, (char) => char.toUpperCase()) : mode === 'sentence' ? text.toLowerCase().replace(/(^\s*[\p{L}]|[.!?]\s+[\p{L}])/gu, (char) => char.toUpperCase()) : mode === 'camel' ? text.toLowerCase().replace(/[^\p{L}\p{N}]+(.)/gu, (_, char) => char.toUpperCase()).replace(/^./, (char) => char.toLowerCase()) : text.toUpperCase();
    form.converted = converted;
    return `<div class="result-text" id="copy-result">${escapeHtml(converted || 'Your converted text will appear here.')}</div><div class="result-actions">${copyButton()} ${button('Use result', 'apply-case', 'button-quiet')} ${form.undoText !== undefined ? button('Undo', 'undo-case', 'button-quiet') : ''}</div>`;
  }
  if (id === 'whitespace-cleaner') {
    if (value('undoClean') === 'yes') return `<div class="result-text result-pre" id="copy-result">${escapeHtml(text || 'Original text restored.')}</div><div class="result-actions">${copyButton()} ${button('Apply cleanup', 'apply-cleanup', 'button-quiet')}</div>`;
    let cleaned = text.replace(/\r\n?/g, '\n');
    if (value('collapse', 'yes') === 'yes') cleaned = cleaned.replace(/[\t ]+/g, ' ');
    if (value('blank', 'yes') === 'yes') cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
    if (value('trim', 'yes') === 'yes') cleaned = cleaned.split('\n').map((line) => line.trim()).join('\n').trim();
    form.cleaned = cleaned;
    return `<div class="result-text result-pre" id="copy-result">${escapeHtml(cleaned || 'Cleaned text will appear here.')}</div><p class="quiet">${Math.max(0, text.length - cleaned.length)} extra character${text.length - cleaned.length === 1 ? '' : 's'} removed</p><div class="result-actions">${copyButton()} ${button('Undo', 'undo-clean', 'button-quiet')}</div>`;
  }
  if (id === 'headline-ideas') {
    const topic = value('topic', '').trim();
    const direction = value('direction', 'helpful');
    const ideas = topic ? (direction === 'curious'
      ? [`What if ${topic} could be simpler?`, `The question to ask before choosing ${topic}`, `Could this change how you approach ${topic}?`, `A fresh perspective on ${topic}`, `What most people miss about ${topic}`]
      : direction === 'direct'
        ? [`Improve ${topic} with these practical steps`, `A practical plan for better ${topic}`, `Get more from ${topic}, starting today`, `The essentials of ${topic}`, `Build a stronger ${topic} strategy`]
        : [`${topic}: a clearer way to get started`, `What to know before you choose ${topic}`, `Make more of ${topic}, without the extra work`, `A practical guide to better ${topic}`, `The next step for your ${topic} strategy`]) : [];
    return ideas.length ? `<ol class="idea-list">${ideas.map((idea, index) => `<li><input name="idea-${index}" aria-label="Headline idea ${index + 1}" value="${escapeHtml(value(`idea-${index}`, idea))}"><button class="icon-button" data-copy="idea-${index}" title="Copy headline" aria-label="Copy headline">${svgIcon('copy')}</button></li>`).join('')}</ol><div class="result-actions">${button('Save ideas', 'save-ideas', 'button-secondary')}</div>${data.headlineSets.length ? `<ul class="saved-list">${data.headlineSets.map((set, index) => `<li><span><strong>${escapeHtml(set.topic)}</strong><small>${set.ideas.length} headline ideas</small></span><button class="icon-button" data-copy-headline="${index}" aria-label="Copy saved headlines" title="Copy saved headlines">${svgIcon('copy')}</button><button class="icon-button" data-delete-headline="${index}" aria-label="Delete saved headlines" title="Delete saved headlines">${svgIcon('close')}</button></li>`).join('')}</ul>` : ''}` : '<p class="quiet">Add a topic to draft headline ideas.</p>';
  }
  if (id === 'serp-preview') {
    const title = value('title', 'Your page title');
    const description = value('description', 'Add a concise description of this page to preview how it may appear in search results.');
    const url = value('url', 'https://example.com/page');
    return `<div class="serp-card"><div class="serp-url">${escapeHtml(url)} <span>›</span></div><div class="serp-title">${escapeHtml(title || 'Your page title')}</div><div class="serp-description">${escapeHtml(description || 'Your description will appear here.')}</div></div><div class="length-notes"><span class="${title.length > 60 ? 'is-warning' : ''}">Title ${title.length}/60</span><span class="${description.length > 160 ? 'is-warning' : ''}">Description ${description.length}/160</span></div>`;
  }
  if (id === 'heading-outline') {
    const headings = [];
    for (const match of text.matchAll(/^\s{0,3}(#{1,6})\s+(.+)$/gm)) headings.push({ level: match[1].length, title: match[2].replace(/\s+#+\s*$/, '') });
    for (const match of text.matchAll(/<h([1-6])\b[^>]*>(.*?)<\/h\1>/gis)) headings.push({ level: Number(match[1]), title: match[2].replace(/<[^>]+>/g, '').trim() });
    headings.sort((a, b) => text.indexOf(a.title) - text.indexOf(b.title));
    const skipped = headings.some((heading, index) => index > 0 && heading.level > headings[index - 1].level + 1);
    return headings.length ? `${skipped ? '<p class="notice notice-warn">A heading level is skipped in this outline.</p>' : '<p class="notice notice-good">Heading levels progress without skips.</p>'}<ol class="outline-list">${headings.map((heading) => `<li class="level-${heading.level}"><span>H${heading.level}</span>${escapeHtml(heading.title)}</li>`).join('')}</ol>` : '<p class="quiet">Paste Markdown or HTML with headings to build an outline.</p>';
  }
  if (id === 'keyword-checker') {
    const phrase = value('phrase', '').trim();
    if (!phrase) return '<p class="quiet">Enter a phrase to find its occurrences and context.</p>';
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(^|[^\\p{L}\\p{N}_])(${escaped})(?=$|[^\\p{L}\\p{N}_])`, 'giu');
    const matches = [...text.matchAll(regex)];
    const contexts = matches.slice(0, 8).map((match) => {
      const start = Math.max(0, match.index - 42);
      const end = Math.min(text.length, match.index + match[0].length + 60);
      return `<li>…${escapeHtml(text.slice(start, end).replace(/\s+/g, ' '))}…</li>`;
    }).join('');
    return `<div class="inline-stat"><strong>${matches.length}</strong><span>whole-phrase matches</span></div>${contexts ? `<ol class="context-list">${contexts}</ol>` : '<p class="quiet">No matches found in this text.</p>'}`;
  }
  if (id === 'content-checklist') {
    const checks = [
      ['Page title is present', value('title', '').trim().length > 0, value('title', '').length ? `${value('title').length} characters` : 'Add a descriptive title'],
      ['Description is present', value('description', '').trim().length > 0, value('description', '').length ? `${value('description').length} characters` : 'Add a concise summary'],
      ['Primary phrase is included', value('phrase', '').trim() && text.toLowerCase().includes(value('phrase').toLowerCase()), 'Check that the phrase reads naturally'],
      ['Content has a clear heading', /(^#{1,6}\s|<h[1-6]\b)/im.test(text), 'Use a clear, descriptive heading'],
      ['Content has useful length', text.trim().split(/\s+/).filter(Boolean).length >= 100, 'Aim for enough detail to help the reader'],
      ['Link is provided', /https?:\/\//i.test(text), 'Add a relevant link if it helps readers'],
    ];
    return `<ul class="check-list">${checks.map(([label, passed, hint]) => `<li><span class="check-dot ${passed ? 'passed' : ''}">${passed ? '✓' : '·'}</span><span>${escapeHtml(label)}<small>${escapeHtml(String(hint))}</small></span></li>`).join('')}</ul><p class="quiet">A local checklist, not a ranking score.</p>`;
  }
  if (id === 'utm-builder') {
    try {
      const url = new URL(value('url', ''));
      for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
        const input = value(key.replace('utm_', ''), '');
        if (input) url.searchParams.set(key, input); else url.searchParams.delete(key);
      }
      form.generatedUrl = url.toString();
      return `<div class="result-text result-pre" id="copy-result">${escapeHtml(url.toString())}</div><div class="result-actions">${copyButton()} ${button('Save preset', 'save-preset', 'button-quiet')} ${button('Download CSV', 'download-csv', 'button-quiet')}</div>${data.presets.length ? `<ul class="saved-list preset-list">${data.presets.map((preset, index) => `<li><span><strong>${escapeHtml(preset.name)}</strong><small>${escapeHtml(preset.source)} / ${escapeHtml(preset.medium)}</small></span><button class="button button-quiet" data-use-preset="${index}">Use</button></li>`).join('')}</ul>` : ''}`;
    } catch { form.generatedUrl = ''; return '<p class="notice notice-warn">Enter a complete URL, including https://.</p>'; }
  }
  if (id === 'url-cleaner') {
    try {
      const url = new URL(value('url', ''));
      const selected = ['utm_', 'fbclid', 'gclid', 'mc_'].filter((key) => value(`remove-${key}`, key === 'utm_' ? 'yes' : 'no') === 'yes');
      const removed = [];
      for (const key of [...url.searchParams.keys()]) if (selected.some((prefix) => key.toLowerCase().startsWith(prefix))) { removed.push(key); url.searchParams.delete(key); }
      form.cleanedUrl = url.toString();
      return `<div class="result-text result-pre" id="copy-result">${escapeHtml(url.toString())}</div><p class="quiet">Removed ${removed.length ? removed.map(escapeHtml).join(', ') : 'no selected parameters'}.</p><div class="result-actions">${copyButton()}</div>`;
    } catch { return '<p class="notice notice-warn">Enter a complete URL, including https://.</p>'; }
  }
  if (id === 'qr-generator') return `<div class="qr-result">${form.qrData ? `<img src="${escapeHtml(form.qrData)}" alt="Generated QR code"><a class="button button-secondary" href="${escapeHtml(form.qrData)}" download="marketing-qr.png">Download PNG</a>` : `<div class="qr-placeholder">${svgIcon('qr')}</div><p class="quiet">Your QR code will appear here.</p>`}</div>`;
  if (id === 'caption-composer') {
    const caption = value('caption', '');
    const limit = Number(value('platform', '2200'));
    const drafts = data.drafts.slice(0, 5);
    return `<div class="caption-counter ${caption.length > limit ? 'is-warning' : ''}"><strong>${caption.length}</strong> / ${limit} characters</div><div class="result-actions">${button('Save draft', 'save-draft', 'button-secondary')} ${copyButton()}</div>${drafts.length ? `<ul class="saved-list">${drafts.map((draft, index) => `<li><span><strong>${escapeHtml(draft.caption.slice(0, 54) || 'Untitled draft')}</strong><small>${escapeHtml(draft.platform)} characters · ${escapeHtml(draft.tags)}</small></span><button class="button button-quiet" data-use-draft="${index}">Open</button><button class="icon-button" data-delete-draft="${index}" aria-label="Delete draft" title="Delete draft">${svgIcon('close')}</button></li>`).join('')}</ul>` : ''}`;
  }
  if (id === 'hashtag-sets') {
    const sets = data.hashtagSets;
    return `<div class="result-actions hashtag-actions">${field('Set name', 'set-name', 'e.g. Product launch')}${field('Hashtags', 'set-tags', '#marketing #smallbusiness #launch')} ${button('Save set', 'save-hashtags', 'button-secondary')}</div>${sets.length ? `<ul class="saved-list">${sets.map((set, index) => `<li><span><strong>${escapeHtml(set.name)}</strong><small>${escapeHtml(set.tags)}</small></span><button class="icon-button" data-move-set="${index}" data-direction="up" aria-label="Move ${escapeHtml(set.name)} up" title="Move up" ${index === 0 ? 'disabled' : ''}>${svgIcon('arrow-up')}</button><button class="icon-button" data-move-set="${index}" data-direction="down" aria-label="Move ${escapeHtml(set.name)} down" title="Move down" ${index === sets.length - 1 ? 'disabled' : ''}>${svgIcon('arrow-down')}</button><button class="icon-button" data-copy-set="${index}" aria-label="Copy ${escapeHtml(set.name)} hashtags" title="Copy hashtags">${svgIcon('copy')}</button><button class="icon-button" data-delete-set="${index}" aria-label="Delete ${escapeHtml(set.name)}" title="Delete set">${svgIcon('close')}</button></li>`).join('')}</ul>` : '<p class="quiet">Saved hashtag sets will appear here.</p>'}`;
  }
  if (id === 'image-preview') {
    const ratio = value('ratio', '1 / 1');
    return `<div class="image-preview-frame" style="aspect-ratio:${escapeHtml(ratio)}">${form.imageUrl ? `<img src="${escapeHtml(form.imageUrl)}" alt="Selected social image preview">` : '<div class="image-placeholder">Choose an image to preview</div>'}</div>${form.imageName ? `<p class="quiet">${escapeHtml(form.imageName)}</p>` : ''}`;
  }
  if (id === 'budget-allocator') {
    const total = Math.max(0, Number(value('budget', 10000)) || 0);
    const rows = value('allocations', 'Paid search, %, 40\nSocial, %, 25\nCreative, amount, 2000\nEmail, %, 20').split('\n').map((line) => line.split(',').map((cell) => cell.trim())).filter((line) => line[0]);
    const fixed = rows.filter((row) => row[1]?.toLowerCase() === 'amount').reduce((sum, row) => sum + (Number(row[2]) || 0), 0);
    const percentRows = rows.filter((row) => row[1]?.toLowerCase() !== 'amount');
    const remaining = total - fixed;
    const percentTotal = percentRows.reduce((sum, row) => sum + (Number(row[2]) || 0), 0);
    return `${fixed > total ? '<p class="notice notice-warn">Fixed allocations are larger than the total budget.</p>' : percentTotal > 100 ? '<p class="notice notice-warn">Percentage allocations exceed 100%.</p>' : ''}<div class="allocation-list">${rows.map((row) => {
      const amount = row[1]?.toLowerCase() === 'amount' ? Number(row[2]) || 0 : remaining * (Number(row[2]) || 0) / 100;
      return `<div class="allocation-row"><span>${escapeHtml(row[0])}<small>${escapeHtml(row[2] || '0')}${row[1]?.toLowerCase() === 'amount' ? ' fixed' : '%'}</small></span><strong>${new Intl.NumberFormat(undefined, { style: 'currency', currency: value('currency', 'USD') }).format(amount)}</strong></div>`;
    }).join('')}</div><div class="progress-wrap"><div class="progress-label"><span>Percentage assigned</span><span>${percentTotal}%</span></div><div class="progress"><i class="${percentTotal > 100 ? 'over' : ''}" style="width:${Math.min(100, percentTotal)}%"></i></div></div><p class="quiet">Percentages apply to the budget remaining after fixed amounts.</p><div class="result-actions">${button('Download CSV', 'download-budget-csv', 'button-quiet')}</div>`;
  }
  if (id === 'campaign-metrics') {
    const impressions = Number(value('impressions', 0)) || 0;
    const clicks = Number(value('clicks', 0)) || 0;
    const spend = Number(value('spend', 0)) || 0;
    const conversions = Number(value('conversions', 0)) || 0;
    const revenue = Number(value('revenue', 0)) || 0;
    const currency = value('currency', 'USD');
    const money = (amount) => new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(amount);
    const rows = [['CTR', `${impressions ? (clicks / impressions * 100).toFixed(2) : '0.00'}%`, 'Clicks ÷ impressions'], ['CPC', money(clicks ? spend / clicks : 0), 'Spend ÷ clicks'], ['Conversion rate', `${clicks ? (conversions / clicks * 100).toFixed(2) : '0.00'}%`, 'Conversions ÷ clicks'], ['CPL / CPA', money(conversions ? spend / conversions : 0), 'Spend ÷ conversions'], ['ROAS', `${spend ? (revenue / spend).toFixed(2) : '0.00'}×`, 'Revenue ÷ spend']];
    return `<div class="metric-table">${rows.map(([name, result, formula]) => `<div><span><strong>${name}</strong><small>${formula}</small></span><b>${result}</b></div>`).join('')}</div>`;
  }
  if (id === 'template-library') {
    const query = value('template-search', '').toLowerCase();
    const filtered = data.templates.filter((template) => `${template.name} ${template.category} ${template.subject} ${template.body}`.toLowerCase().includes(query));
    return `<div class="template-actions">${button('Add template', 'add-template', 'button-secondary')} ${button('Export JSON', 'export-templates', 'button-quiet')} <label class="button button-quiet file-button">Import JSON<input type="file" id="template-import" accept="application/json,.json"></label></div>${filtered.length ? filtered.map((template, index) => `<details class="template-item"><summary><span><small>${escapeHtml(template.category)}</small><strong>${escapeHtml(template.name)}</strong></span><span class="template-chevron">＋</span></summary><div class="template-edit"><label class="field"><span>Subject</span><input data-template="${index}" data-key="subject" value="${escapeHtml(template.subject)}"></label><label class="field"><span>Body</span><textarea data-template="${index}" data-key="body" rows="4">${escapeHtml(template.body)}</textarea></label><div class="result-actions">${button('Copy body', `copy-template-${index}`, 'button-quiet')} ${button('Delete', `delete-template-${index}`, 'button-quiet')}</div></div></details>`).join('') : '<p class="quiet">No templates match that search.</p>'}`;
  }
  return '';
}

function toolForm(id) {
  if (id === 'word-counter') { setFormDefaults({ target: '500' }); return area('Your text', 'text', 'Paste or write your copy here...', 12) + field('Word target', 'target', '500', { type: 'number', min: 1 }); }
  if (id === 'case-converter') return area('Text to convert', 'text', 'Paste your text here...', 12) + selectField('Convert to', 'mode', [['upper', 'UPPERCASE'], ['lower', 'lowercase'], ['title', 'Title Case'], ['sentence', 'Sentence case'], ['camel', 'camelCase']]);
  if (id === 'whitespace-cleaner') return area('Original text', 'text', 'Paste text with spacing to clean...', 10) + `<div class="toggle-list"><label><input type="checkbox" name="collapse" ${value('collapse', 'yes') === 'yes' ? 'checked' : ''}> Collapse repeated spaces</label><label><input type="checkbox" name="blank" ${value('blank', 'yes') === 'yes' ? 'checked' : ''}> Reduce excess blank lines</label><label><input type="checkbox" name="trim" ${value('trim', 'yes') === 'yes' ? 'checked' : ''}> Trim line edges</label></div>`;
  if (id === 'headline-ideas') return field('Topic or product', 'topic', 'e.g. a new project planning app') + selectField('Direction', 'direction', [['helpful', 'Helpful and clear'], ['curious', 'Curiosity-led'], ['direct', 'Direct and practical']]);
  if (id === 'serp-preview') return field('Page title', 'title', 'A clear, specific page title') + field('Page URL', 'url', 'https://example.com/page') + area('Meta description', 'description', 'Summarize the page in a useful sentence...', 4);
  if (id === 'heading-outline') return area('Page content or HTML', 'text', '# Main heading\n\n## Section heading\n\nPaste Markdown or HTML here...', 12);
  if (id === 'keyword-checker') return field('Phrase to find', 'phrase', 'Enter a word or phrase') + area('Content to check', 'text', 'Paste the content to inspect...', 10);
  if (id === 'content-checklist') return field('Page title', 'title', 'Page title') + field('Meta description', 'description', 'Meta description') + field('Primary phrase', 'phrase', 'Target phrase') + area('Page content', 'text', 'Paste content or headings to review...', 9);
  if (id === 'utm-builder') { setFormDefaults({ url: 'https://example.com/page' }); return field('Destination URL', 'url', 'https://example.com/page') + field('Campaign source', 'source', 'newsletter') + field('Campaign medium', 'medium', 'email') + field('Campaign name', 'campaign', 'spring-launch') + field('Campaign term (optional)', 'term', 'keyword') + field('Campaign content (optional)', 'content', 'button-a'); }
  if (id === 'url-cleaner') { setFormDefaults({ url: 'https://example.com/?utm_source=newsletter' }); return field('URL to clean', 'url', 'https://example.com/?utm_source=...') + `<div class="toggle-list"><p class="field-caption">Remove parameters with these prefixes</p>${[['utm_', 'UTM tags'], ['fbclid', 'Facebook click ID'], ['gclid', 'Google click ID'], ['mc_', 'Mailchimp tags']].map(([key, label]) => `<label><input type="checkbox" name="remove-${key}" ${value(`remove-${key}`, key === 'utm_' ? 'yes' : 'no') === 'yes' ? 'checked' : ''}> ${label}</label>`).join('')}</div>`; }
  if (id === 'qr-generator') return field('Text or URL', 'qr-text', 'https://example.com') + selectField('Error correction', 'qr-level', [['M', 'Standard'], ['Q', 'High']]) + `<div class="result-actions">${button('Generate QR code', 'generate-qr', 'button-secondary')}</div>`;
  if (id === 'caption-composer') return selectField('Platform', 'platform', [['2200', 'Instagram · 2,200'], ['3000', 'LinkedIn · 3,000'], ['280', 'X · 280'], ['500', 'Facebook · 500']]) + area('Caption', 'caption', 'Write your caption...', 11) + area('Hashtags', 'caption-tags', '#yourbrand #topic', 2);
  if (id === 'hashtag-sets') return '<p class="quiet">Build a reusable group of hashtags. Use spaces to separate tags.</p>';
  if (id === 'image-preview') return `<label class="field"><span>Choose an image</span><input type="file" id="image-upload" accept="image/*"></label>${selectField('Preview format', 'ratio', [['1 / 1', 'Square · 1:1'], ['4 / 5', 'Portrait · 4:5'], ['1.91 / 1', 'Landscape · 1.91:1'], ['9 / 16', 'Story · 9:16']])}`;
  if (id === 'budget-allocator') { setFormDefaults({ budget: '10000', currency: 'USD', allocations: 'Paid search, %, 40\nSocial, %, 25\nCreative, amount, 2000\nEmail, %, 20' }); return field('Total budget', 'budget', '10000', { type: 'number', min: 0, step: '0.01' }) + selectField('Currency', 'currency', [['USD', 'USD · $'], ['EUR', 'EUR · €'], ['GBP', 'GBP · £'], ['CAD', 'CAD · $'], ['AUD', 'AUD · $']]) + area('Allocations', 'allocations', 'Channel, %, value\nPaid search, %, 40\nCreative, amount, 2000', 8) + '<p class="field-help">One item per line: name, %, percent OR name, amount, fixed amount.</p>'; }
  if (id === 'campaign-metrics') { setFormDefaults({ currency: 'USD' }); return field('Impressions', 'impressions', '0', { type: 'number', min: 0 }) + field('Clicks', 'clicks', '0', { type: 'number', min: 0 }) + field('Spend', 'spend', '0', { type: 'number', min: 0, step: '0.01' }) + field('Conversions', 'conversions', '0', { type: 'number', min: 0 }) + field('Revenue', 'revenue', '0', { type: 'number', min: 0, step: '0.01' }) + selectField('Currency', 'currency', [['USD', 'USD · $'], ['EUR', 'EUR · €'], ['GBP', 'GBP · £'], ['CAD', 'CAD · $'], ['AUD', 'AUD · $']]); }
  if (id === 'template-library') return field('Search templates', 'template-search', 'Search by name or category...');
  return '';
}

function toolPage(tool) {
  return `<div class="page-heading tool-heading"><div><a class="back-link" href="/" data-route="/">← All tools</a><p class="eyebrow">${escapeHtml(tool.group.toUpperCase())}</p><h1>${escapeHtml(tool.name)}</h1><p class="subhead">${escapeHtml(tool.summary)}</p></div><button class="favorite-button ${data.favorites.includes(tool.id) ? 'is-favorite' : ''}" data-action="favorite" aria-label="${data.favorites.includes(tool.id) ? 'Remove from' : 'Add to'} favorites" title="${data.favorites.includes(tool.id) ? 'Remove from' : 'Add to'} favorites">${data.favorites.includes(tool.id) ? '★' : '☆'}</button></div><div class="tool-layout"><div class="tool-input-panel">${card('Inputs', toolForm(tool.id))}</div><div class="tool-output-panel">${card(tool.id === 'template-library' ? 'Your templates' : 'Preview', `<div class="tool-output" id="tool-output">${outputMarkup(tool.id)}</div>`)}</div></div>`;
}

function settingsPage() {
  return `<div class="page-heading"><div><p class="eyebrow">PREFERENCES</p><h1>Settings</h1><p class="subhead">Manage your local workspace and saved data.</p></div></div><div class="settings-layout">${card('Appearance', `<p>Choose the look that works for you.</p><div class="setting-row"><span><strong>Dark theme</strong><small>Apply a darker workspace palette.</small></span><label class="switch"><input type="checkbox" data-setting="theme" ${data.theme === 'dark' ? 'checked' : ''}><i></i></label></div>`)}${card('Your data', `<p>Favorites, recent tools, presets, drafts, hashtag sets and templates are stored in this browser.</p><div class="result-actions">${button('Export backup', 'export-backup', 'button-secondary')} <label class="button button-quiet file-button">Import backup<input type="file" id="backup-import" accept="application/json,.json"></label></div><p class="field-help">Import replaces the saved workspace data in this browser.</p>`)}</div><p class="privacy-note"><strong>Privacy note</strong> Text and files stay on your device. The QR tool uses a bundled library and does not send your input to a server. This app has no account or cloud sync.</p>`;
}

function desktopIcons() {
  const groups = [...new Set(tools.map((tool) => tool.group))];
  return `<div class="desktop-shortcuts" aria-label="Desktop shortcuts"><a class="desktop-icon" href="/" data-route="/"><span class="desktop-icon-art icon-home">${svgIcon('home')}</span><span>Workspace</span></a>${groups.map((group) => {
    const tool = tools.find((item) => item.group === group);
    return `<a class="desktop-icon" href="/tools/${tool.id}" data-route="/tools/${tool.id}"><span class="desktop-icon-art">${svgIcon(tool.icon)}</span><span>${escapeHtml(group)}</span></a>`;
  }).join('')}<a class="desktop-icon" href="/settings" data-route="/settings"><span class="desktop-icon-art icon-settings">${svgIcon('settings')}</span><span>Settings</span></a></div>`;
}

function launcherMenu() {
  if (!desktop.launcherOpen) return '';
  return `<section class="launcher-menu" aria-label="App launcher"><div class="launcher-heading"><span>Applications</span><button class="icon-button" data-action="launcher" aria-label="Close app launcher">${svgIcon('close')}</button></div><div class="launcher-grid">${tools.map((tool) => `<a href="/tools/${tool.id}" data-route="/tools/${tool.id}"><span class="tool-icon">${svgIcon(tool.icon)}</span><span>${escapeHtml(tool.name)}</span></a>`).join('')}</div><a class="launcher-settings" href="/settings">${svgIcon('settings')} Workspace settings</a></section>`;
}

function desktopDock() {
  const current = routeToolId();
  const pinned = [...new Set([current, ...(data.favorites.length ? data.favorites : ['word-counter', 'utm-builder', 'campaign-metrics'])].filter(Boolean))].slice(0, 5);
  return `<nav class="desktop-dock" aria-label="Taskbar"><button class="dock-start ${desktop.launcherOpen ? 'is-active' : ''}" data-action="launcher" title="Applications" aria-label="Open applications">M</button><span class="dock-divider"></span>${pinned.map((id) => {
    const tool = tools.find((item) => item.id === id);
    return tool ? `<a class="dock-app ${current === id ? 'is-active' : ''}" href="/tools/${id}" data-route="/tools/${id}" title="${escapeHtml(tool.name)}"><span>${svgIcon(tool.icon)}</span><i></i></a>` : '';
  }).join('')}<button class="dock-app dock-theme" data-action="theme" title="Toggle theme" aria-label="Toggle theme">${svgIcon(data.theme === 'dark' ? 'sun' : 'moon')}<i></i></button><button class="dock-clock" data-action="show-desktop" title="Show desktop"><span id="taskbar-clock"></span><small>LOCAL</small></button></nav>`;
}

function stackedCards() {
  const ids = [...new Set([...data.recent, ...data.favorites, 'headline-ideas', 'qr-generator'])].slice(0, 3);
  const featured = ids.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);
  return `<aside class="stacked-widget"><p class="stacked-label"><span></span> QUICK OPEN</p><div class="stacked-deck">${featured.map((tool, index) => `<a class="stacked-card" style="--card-index:${index}" href="/tools/${tool.id}" data-route="/tools/${tool.id}"><span class="stacked-card-head"><i>${svgIcon(tool.icon)}</i><b>${escapeHtml(tool.group)}</b><em>0${index + 1}</em></span><strong>${escapeHtml(tool.name)}</strong><small>${escapeHtml(tool.summary)}</small><span class="stacked-card-foot">OPEN TOOL <i>↗</i></span></a>`).join('')}</div></aside>`;
}

function windowTitle(tool) {
  if (location.pathname === '/settings') return 'Workspace settings';
  return tool ? tool.name : 'Marketing Toolbox';
}

function desktopWindow(tool, content) {
  if (desktop.minimized || desktop.showDesktop) return '';
  const classes = `desktop-window ${desktop.maximized ? 'is-maximized' : ''}`;
  return `<section class="${classes}" style="--window-x:${desktop.x}px;--window-y:${desktop.y}px"><header class="window-titlebar"><div class="window-identity"><span class="window-app-icon">M</span><span>${escapeHtml(windowTitle(tool))}</span></div><div class="window-controls"><button class="window-control minimize" data-action="window-minimize" aria-label="Minimize window" title="Minimize">${svgIcon('window-minimize')}</button><button class="window-control maximize" data-action="window-maximize" aria-label="${desktop.maximized ? 'Restore window' : 'Maximize window'}" title="${desktop.maximized ? 'Restore' : 'Maximize'}">${svgIcon(desktop.maximized ? 'window-restore' : 'window-maximize')}</button><button class="window-control close" data-action="window-close" aria-label="Close window" title="Close">${svgIcon('close')}</button></div></header><div class="window-menubar"><span>File</span><span>Edit</span><span>View</span><span>Window</span><span class="window-location">${tool ? `${escapeHtml(tool.group)} / ${escapeHtml(tool.name)}` : location.pathname === '/settings' ? 'Preferences' : 'Home'}</span></div><div class="window-scroll"><div class="window-toolbar">${topbar()}</div><main class="main-content">${content}</main><footer class="page-footer">Marketing Toolbox <span>·</span> Your work stays on this device</footer></div></section>`;
}

function render() {
  const toolId = routeToolId();
  if (toolId) {
    for (const key of Object.keys(form)) delete form[key];
    Object.assign(form, formStore[toolId] || {});
    formStore[toolId] ||= {};
  }
  document.documentElement.dataset.theme = data.theme;
  const tool = currentTool();
  const content = location.pathname === '/settings' ? settingsPage() : tool ? toolPage(tool) : homePage();
  document.getElementById('app').innerHTML = `<div class="desktop-shell"><header class="system-bar"><div class="system-brand"><span class="system-mark">M</span><strong>MARKETKIT</strong><span class="system-divider">/</span><span class="system-caption">CREATIVE WORKSPACE</span></div><div class="system-menu"><button data-action="launcher">Applications</button><button data-action="show-desktop">Desktop</button></div><div class="system-status"><span class="status-dot"></span><span>All systems local</span><span class="system-clock" id="system-clock"></span></div></header><div class="desktop-workspace ${desktop.showDesktop || desktop.minimized ? 'is-exposed' : ''}">${desktopIcons()}${desktopWindow(tool, content)}${stackedCards()}${launcherMenu()}<div class="desktop-watermark" aria-hidden="true">MK<span>·</span>STUDIO</div></div>${desktopDock()}<div class="toast" role="status" aria-live="polite"></div></div>`;
  updateClocks();
  initializeWindowDrag();
}

function updateClocks() {
  const now = new Date();
  const time = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit' }).format(now);
  const date = new Intl.DateTimeFormat(undefined, { weekday: 'short', month: 'short', day: 'numeric' }).format(now);
  const systemClock = document.getElementById('system-clock');
  const taskbarClock = document.getElementById('taskbar-clock');
  if (systemClock) systemClock.textContent = `${date} · ${time}`;
  if (taskbarClock) taskbarClock.textContent = time;
  if (!clockTimer) clockTimer = setInterval(updateClocks, 30000);
}

function initializeWindowDrag() {
  const titlebar = document.querySelector('.window-titlebar');
  const appWindow = document.querySelector('.desktop-window');
  if (!titlebar || !appWindow) return;
  titlebar.addEventListener('pointerdown', (event) => {
    if (event.target.closest('button') || desktop.maximized || event.button !== 0) return;
    const startX = event.clientX;
    const startY = event.clientY;
    const originX = desktop.x;
    const originY = desktop.y;
    titlebar.setPointerCapture(event.pointerId);
    const move = (moveEvent) => {
      desktop.x = Math.max(-100, Math.min(100, originX + moveEvent.clientX - startX));
      desktop.y = Math.max(-45, Math.min(45, originY + moveEvent.clientY - startY));
      appWindow.style.setProperty('--window-x', `${desktop.x}px`);
      appWindow.style.setProperty('--window-y', `${desktop.y}px`);
    };
    const stop = () => {
      titlebar.removeEventListener('pointermove', move);
      titlebar.removeEventListener('pointerup', stop);
      titlebar.removeEventListener('pointercancel', stop);
    };
    titlebar.addEventListener('pointermove', move);
    titlebar.addEventListener('pointerup', stop);
    titlebar.addEventListener('pointercancel', stop);
  });
}

function updateOutput() {
  const toolId = routeToolId();
  if (toolId) formStore[toolId] = { ...form };
  const output = document.getElementById('tool-output');
  const tool = currentTool();
  if (output && tool) output.innerHTML = outputMarkup(tool.id);
}

function notify(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

async function copyText(text) {
  if (!text) return notify('Nothing to copy yet.');
  try { await navigator.clipboard.writeText(text); notify('Copied to clipboard.'); }
  catch { const input = document.createElement('textarea'); input.value = text; document.body.append(input); input.select(); document.execCommand('copy'); input.remove(); notify('Copied to clipboard.'); }
}

function download(name, content, type = 'text/plain') {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([content], { type }));
  link.download = name;
  link.click();
  URL.revokeObjectURL(link.href);
}

function backupData() { return { ...data, exportedAt: new Date().toISOString(), format: 'marketing-toolbox-backup-v1' }; }

async function handleAction(action, element) {
  if (action === 'theme') { data.theme = data.theme === 'dark' ? 'light' : 'dark'; persist(); render(); }
  if (action === 'launcher') { desktop.launcherOpen = !desktop.launcherOpen; desktop.showDesktop = false; render(); }
  if (action === 'show-desktop') { desktop.showDesktop = !desktop.showDesktop; desktop.minimized = false; desktop.launcherOpen = false; render(); }
  if (action === 'window-minimize' || action === 'window-close') { desktop.minimized = true; desktop.launcherOpen = false; render(); }
  if (action === 'window-maximize') { desktop.maximized = !desktop.maximized; render(); }
  if (action === 'focus-search') document.getElementById('global-search')?.focus();
  if (action === 'favorite') {
    const id = routeToolId();
    data.favorites = data.favorites.includes(id) ? data.favorites.filter((item) => item !== id) : [id, ...data.favorites];
    persist(); render();
  }
  if (action === 'copy') {
    const tool = currentTool();
    if (tool?.id === 'caption-composer') await copyText([value('caption'), value('caption-tags')].filter(Boolean).join('\n\n'));
    else await copyText(document.getElementById('copy-result')?.innerText || '');
  }
  if (action === 'undo-clean') { form.undoClean = 'yes'; updateOutput(); }
  if (action === 'apply-cleanup') { form.undoClean = 'no'; updateOutput(); }
  if (action === 'apply-case') { form.undoText = value('text'); form.text = value('converted'); formStore[routeToolId()] = { ...form }; render(); }
  if (action === 'undo-case') { form.text = value('undoText'); delete form.undoText; formStore[routeToolId()] = { ...form }; render(); }
  if (action === 'save-ideas') {
    const ideas = [...document.querySelectorAll('.idea-list input')].map((input) => input.value).filter(Boolean);
    if (ideas.length) { data.headlineSets.unshift({ topic: value('topic'), ideas }); persist(); updateOutput(); notify('Headline ideas saved.'); }
  }
  if (action === 'save-preset') {
    const preset = { name: value('campaign') || 'Campaign preset', url: value('url'), source: value('source'), medium: value('medium'), campaign: value('campaign'), term: value('term'), content: value('content') };
    data.presets.push(preset); persist(); updateOutput(); notify('Campaign preset saved.');
  }
  if (action === 'download-csv') {
    const headers = ['url', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const row = [form.generatedUrl, value('source'), value('medium'), value('campaign'), value('term'), value('content')];
    download('campaign-link.csv', `${headers.join(',')}\n${row.map((cell) => `"${String(cell || '').replaceAll('"', '""')}"`).join(',')}\n`, 'text/csv');
  }
  if (action === 'download-budget-csv') {
    const total = Math.max(0, Number(value('budget', 0)) || 0);
    const rows = value('allocations', '').split('\n').map((line) => line.split(',').map((cell) => cell.trim())).filter((row) => row[0]);
    const fixed = rows.filter((row) => row[1]?.toLowerCase() === 'amount').reduce((sum, row) => sum + (Number(row[2]) || 0), 0);
    const csvRows = rows.map(([name, mode, amount]) => [name, mode?.toLowerCase() === 'amount' ? 'amount' : 'percent', Number(amount) || 0, mode?.toLowerCase() === 'amount' ? Number(amount) || 0 : (total - fixed) * (Number(amount) || 0) / 100]);
    const csv = [['Channel', 'Allocation type', 'Input', 'Allocated amount'], ...csvRows].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n');
    download('marketing-budget.csv', `${csv}\n`, 'text/csv');
  }
  if (action === 'generate-qr') {
    const input = value('qr-text').trim();
    if (!input) return notify('Enter text or a URL first.');
    try { form.qrData = await QRCode.toDataURL(input, { errorCorrectionLevel: value('qr-level', 'M'), margin: 2, width: 320, color: { dark: '#17241f', light: '#ffffff' } }); updateOutput(); }
    catch { notify('Could not generate a QR code for that input.'); }
  }
  if (action === 'save-draft') { data.drafts.unshift({ caption: value('caption'), tags: value('caption-tags'), platform: value('platform', '2200'), savedAt: new Date().toISOString() }); persist(); updateOutput(); notify('Draft saved in this browser.'); }
  if (action === 'save-hashtags') {
    const tags = value('set-tags').trim().split(/\s+/).filter(Boolean).map((tag) => tag.startsWith('#') ? tag : `#${tag}`).join(' ');
    if (!value('set-name').trim() || !tags) return notify('Add a set name and at least one hashtag.');
    data.hashtagSets.unshift({ name: value('set-name').trim(), tags }); persist(); updateOutput(); notify('Hashtag set saved.');
  }
  if (action === 'export-backup') download('marketing-toolbox-backup.json', JSON.stringify(backupData(), null, 2), 'application/json');
  if (action === 'export-templates') download('marketing-templates.json', JSON.stringify(data.templates, null, 2), 'application/json');
  if (action === 'add-template') { data.templates.unshift({ name: 'New template', category: 'Custom', subject: '', body: '' }); persist(); render(); document.querySelector('.template-item')?.setAttribute('open', ''); }
  if (action.startsWith('delete-template-')) { data.templates.splice(Number(action.split('-').pop()), 1); persist(); updateOutput(); }
  if (action.startsWith('copy-template-')) { const template = data.templates[Number(action.split('-').pop())]; if (template) await copyText(`${template.subject}\n\n${template.body}`); }
  if (element?.dataset.copySet !== undefined) { const set = data.hashtagSets[Number(element.dataset.copySet)]; if (set) await copyText(set.tags); }
  if (element?.dataset.deleteSet !== undefined) { data.hashtagSets.splice(Number(element.dataset.deleteSet), 1); persist(); updateOutput(); }
  if (element?.dataset.moveSet !== undefined) {
    const index = Number(element.dataset.moveSet);
    const nextIndex = index + (element.dataset.direction === 'up' ? -1 : 1);
    if (nextIndex >= 0 && nextIndex < data.hashtagSets.length) {
      [data.hashtagSets[index], data.hashtagSets[nextIndex]] = [data.hashtagSets[nextIndex], data.hashtagSets[index]];
      persist(); updateOutput();
    }
  }
  if (element?.dataset.copyHeadline !== undefined) { const set = data.headlineSets[Number(element.dataset.copyHeadline)]; if (set) await copyText(set.ideas.join('\n')); }
  if (element?.dataset.deleteHeadline !== undefined) { data.headlineSets.splice(Number(element.dataset.deleteHeadline), 1); persist(); updateOutput(); }
  if (element?.dataset.usePreset !== undefined) {
    const preset = data.presets[Number(element.dataset.usePreset)];
    if (preset) { Object.assign(form, { url: preset.url, source: preset.source, medium: preset.medium, campaign: preset.campaign, term: preset.term, content: preset.content }); formStore[routeToolId()] = { ...form }; render(); }
  }
  if (element?.dataset.useDraft !== undefined) {
    const draft = data.drafts[Number(element.dataset.useDraft)];
    if (draft) { Object.assign(form, { caption: draft.caption, 'caption-tags': draft.tags, platform: draft.platform }); formStore[routeToolId()] = { ...form }; render(); }
  }
  if (element?.dataset.deleteDraft !== undefined) { data.drafts.splice(Number(element.dataset.deleteDraft), 1); persist(); updateOutput(); }
  if (element?.dataset.copy !== undefined) await copyText(value(element.dataset.copy));
}

document.addEventListener('click', (event) => {
  const route = event.target.closest('[data-route]');
  if (route) { event.preventDefault(); navTo(route.dataset.route); return; }
  const actionElement = event.target.closest('[data-action], [data-copy-set], [data-delete-set], [data-move-set], [data-copy], [data-use-preset], [data-use-draft], [data-delete-draft], [data-copy-headline], [data-delete-headline]');
  if (actionElement) handleAction(actionElement.dataset.action, actionElement);
});

document.addEventListener('input', (event) => {
  const target = event.target;
  if (target.id === 'global-search') { searchText = target.value; if (location.pathname !== '/') history.replaceState({}, '', '/'); render(); const input = document.getElementById('global-search'); input?.focus(); input?.setSelectionRange(searchText.length, searchText.length); return; }
  if (target.name) {
    if (target.type === 'checkbox') form[target.name] = target.checked ? 'yes' : 'no';
    else form[target.name] = target.value;
    const toolId = routeToolId();
    if (toolId) formStore[toolId] = { ...form };
  }
  if (target.dataset.template !== undefined) {
    const template = data.templates[Number(target.dataset.template)];
    if (template) { template[target.dataset.key] = target.value; persist(); }
  }
  if (target.name && target.dataset.idea === undefined) updateOutput();
});

document.addEventListener('change', (event) => {
  const target = event.target;
  if (target.id === 'image-upload' && target.files?.[0]) {
    if (activeFileUrl) URL.revokeObjectURL(activeFileUrl);
    activeFileUrl = URL.createObjectURL(target.files[0]);
    form.imageUrl = activeFileUrl;
    form.imageName = target.files[0].name;
    updateOutput();
  }
  if (target.id === 'template-import' && target.files?.[0]) readJsonFile(target.files[0], (parsed) => {
    if (!Array.isArray(parsed) || parsed.some((item) => !item || typeof item.name !== 'string' || typeof item.body !== 'string')) return notify('That template file is not valid.');
    data.templates = parsed; persist(); updateOutput(); notify('Templates imported.');
  });
  if (target.id === 'backup-import' && target.files?.[0]) readJsonFile(target.files[0], (parsed) => {
    if (!parsed || parsed.format !== 'marketing-toolbox-backup-v1') return notify('That backup file is not valid.');
    for (const key of Object.keys(freshState())) if (parsed[key] !== undefined) data[key] = parsed[key];
    persist(); render(); notify('Workspace backup imported.');
  });
  if (target.dataset.setting === 'theme') { data.theme = target.checked ? 'dark' : 'light'; persist(); render(); }
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); document.getElementById('global-search')?.focus(); }
  if (event.key === 'Escape' && document.activeElement?.id === 'global-search') { searchText = ''; document.getElementById('global-search').value = ''; render(); }
});

function readJsonFile(file, callback) {
  const reader = new FileReader();
  reader.onload = () => { try { callback(JSON.parse(String(reader.result))); } catch { notify('Could not read that JSON file.'); } };
  reader.onerror = () => notify('Could not read that file.');
  reader.readAsText(file);
}

window.addEventListener('popstate', () => { desktop.minimized = false; desktop.showDesktop = false; desktop.launcherOpen = false; render(); });
render();