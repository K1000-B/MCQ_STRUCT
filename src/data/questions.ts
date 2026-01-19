import type { Question } from '../types'

export const questions: Question[] = [
  {
    id: 1,
    prompt: 'Which HTTP status code indicates that a request was successful and returned data?',
    multiple: false,
    answers: [
      { key: 'a', text: '200 OK', correct: true },
      { key: 'b', text: '301 Moved Permanently', correct: false },
      { key: 'c', text: '404 Not Found', correct: false },
      { key: 'd', text: '500 Internal Server Error', correct: false },
    ],
  },
  {
    id: 2,
    prompt: 'Select the statements that describe semantic HTML benefits.',
    multiple: true,
    answers: [
      { key: 'a', text: 'Improves accessibility for assistive technologies', correct: true },
      { key: 'b', text: 'Provides better SEO signals to search engines', correct: true },
      { key: 'c', text: 'Guarantees faster JavaScript execution', correct: false },
      { key: 'd', text: 'Makes code easier to maintain', correct: true },
    ],
  },
  {
    id: 3,
    prompt: 'Which CSS property creates space inside an element between its content and border?',
    multiple: false,
    answers: [
      { key: 'a', text: 'margin', correct: false },
      { key: 'b', text: 'padding', correct: true },
      { key: 'c', text: 'gap', correct: false },
      { key: 'd', text: 'outline', correct: false },
    ],
  },
  {
    id: 4,
    prompt: 'Choose the data structures that offer O(1) average lookup by key.',
    multiple: true,
    answers: [
      { key: 'a', text: 'Hash map', correct: true },
      { key: 'b', text: 'Balanced binary search tree', correct: false },
      { key: 'c', text: 'Object/dictionary', correct: true },
      { key: 'd', text: 'Array', correct: false },
    ],
  },
  {
    id: 5,
    prompt: 'In React, what hook is best suited for memoizing a derived value?',
    multiple: false,
    answers: [
      { key: 'a', text: 'useEffect', correct: false },
      { key: 'b', text: 'useMemo', correct: true },
      { key: 'c', text: 'useRef', correct: false },
      { key: 'd', text: 'useReducer', correct: false },
    ],
  },
  {
    id: 6,
    prompt: 'Which statements about accessibility are true?',
    multiple: true,
    answers: [
      { key: 'a', text: 'Color alone should not convey critical information', correct: true },
      { key: 'b', text: 'All interactive elements must be keyboard reachable', correct: true },
      { key: 'c', text: 'ARIA should replace native semantics whenever possible', correct: false },
      { key: 'd', text: 'Visible focus states help users navigate', correct: true },
    ],
  },
  {
    id: 7,
    prompt: 'What is the primary purpose of a debounce function?',
    multiple: false,
    answers: [
      { key: 'a', text: 'To run a function repeatedly at fixed intervals', correct: false },
      { key: 'b', text: 'To delay execution until input stops for a period', correct: true },
      { key: 'c', text: 'To batch DOM updates into a single render', correct: false },
      { key: 'd', text: 'To cache computed results', correct: false },
    ],
  },
  {
    id: 8,
    prompt: 'Select the outcomes of using a CSS grid layout.',
    multiple: true,
    answers: [
      { key: 'a', text: 'Two-dimensional control over rows and columns', correct: true },
      { key: 'b', text: 'Ability to overlap items intentionally', correct: true },
      { key: 'c', text: 'Automatic server-side rendering', correct: false },
      { key: 'd', text: 'Alignment across both axes', correct: true },
    ],
  },
  {
    id: 9,
    prompt: 'Which JavaScript feature enables defining a new array with transformed items?',
    multiple: false,
    answers: [
      { key: 'a', text: 'Array.prototype.map', correct: true },
      { key: 'b', text: 'Array.prototype.filter', correct: false },
      { key: 'c', text: 'Array.prototype.find', correct: false },
      { key: 'd', text: 'Array.prototype.sort', correct: false },
    ],
  },
  {
    id: 10,
    prompt: 'Which techniques help reduce layout shift (CLS)?',
    multiple: true,
    answers: [
      { key: 'a', text: 'Reserving space for images with width and height', correct: true },
      { key: 'b', text: 'Loading critical CSS inline', correct: true },
      { key: 'c', text: 'Animating height changes without placeholders', correct: false },
      { key: 'd', text: 'Using font-display: swap with fallback fonts', correct: true },
    ],
  },
  {
    id: 11,
    prompt: 'What does the "same-origin policy" restrict?',
    multiple: false,
    answers: [
      { key: 'a', text: 'Scripts accessing data from different origins', correct: true },
      { key: 'b', text: 'Stylesheets loading from CDNs', correct: false },
      { key: 'c', text: 'Images displaying on multiple sites', correct: false },
      { key: 'd', text: 'DNS lookups across domains', correct: false },
    ],
  },
  {
    id: 12,
    prompt: 'Select the tasks that should happen during a performance budget review.',
    multiple: true,
    answers: [
      { key: 'a', text: 'Measure bundle size against target limits', correct: true },
      { key: 'b', text: 'Audit third-party scripts for impact', correct: true },
      { key: 'c', text: 'Remove all animations regardless of value', correct: false },
      { key: 'd', text: 'Identify the largest contentful paint contributors', correct: true },
    ],
  },
  {
    id: 13,
    prompt: 'Which HTML element is best for labeling a standalone figure with a caption?',
    multiple: false,
    answers: [
      { key: 'a', text: 'section', correct: false },
      { key: 'b', text: 'figure', correct: true },
      { key: 'c', text: 'div', correct: false },
      { key: 'd', text: 'article', correct: false },
    ],
  },
  {
    id: 14,
    prompt: 'Choose the statements that are true about TypeScript types.',
    multiple: true,
    answers: [
      { key: 'a', text: 'Types are erased at runtime', correct: true },
      { key: 'b', text: 'Interfaces can be augmented via declaration merging', correct: true },
      { key: 'c', text: 'Types automatically validate data at runtime', correct: false },
      { key: 'd', text: 'Union types allow multiple possible shapes', correct: true },
    ],
  },
  {
    id: 15,
    prompt: 'What does the "preload" resource hint primarily accomplish?',
    multiple: false,
    answers: [
      { key: 'a', text: 'Defers resources until user interaction', correct: false },
      { key: 'b', text: 'Tells the browser to fetch critical resources early', correct: true },
      { key: 'c', text: 'Blocks rendering until all scripts execute', correct: false },
      { key: 'd', text: 'Compresses assets during the build', correct: false },
    ],
  },
  {
    id: 16,
    prompt: 'Select the statements that describe effective error messaging.',
    multiple: true,
    answers: [
      { key: 'a', text: 'Explain the issue in plain language', correct: true },
      { key: 'b', text: 'Place blame on the user to drive action', correct: false },
      { key: 'c', text: 'Offer the next step to resolve the issue', correct: true },
      { key: 'd', text: 'Use consistent tone across the app', correct: true },
    ],
  },
  {
    id: 17,
    prompt: 'Which CSS unit is relative to the root font size?',
    multiple: false,
    answers: [
      { key: 'a', text: 'em', correct: false },
      { key: 'b', text: 'rem', correct: true },
      { key: 'c', text: 'vw', correct: false },
      { key: 'd', text: '%', correct: false },
    ],
  },
  {
    id: 18,
    prompt: 'Which practices support inclusive form design?',
    multiple: true,
    answers: [
      { key: 'a', text: 'Explicitly associate labels with inputs', correct: true },
      { key: 'b', text: 'Rely on placeholder text as the label', correct: false },
      { key: 'c', text: 'Provide clear error states and guidance', correct: true },
      { key: 'd', text: 'Allow sufficient touch target sizes', correct: true },
    ],
  },
  {
    id: 19,
    prompt: 'What is the main reason to use a content delivery network (CDN)?',
    multiple: false,
    answers: [
      { key: 'a', text: 'To store session data for users', correct: false },
      { key: 'b', text: 'To reduce latency by serving assets closer to users', correct: true },
      { key: 'c', text: 'To run server-side code on the client', correct: false },
      { key: 'd', text: 'To compile TypeScript in the browser', correct: false },
    ],
  },
  {
    id: 20,
    prompt: 'Select the benefits of component-driven UI development.',
    multiple: true,
    answers: [
      { key: 'a', text: 'Reusable building blocks across features', correct: true },
      { key: 'b', text: 'Improved collaboration between design and dev', correct: true },
      { key: 'c', text: 'Guarantees zero runtime bugs', correct: false },
      { key: 'd', text: 'Easier testing of isolated UI units', correct: true },
    ],
  },
]
