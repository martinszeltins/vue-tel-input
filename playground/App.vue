<template>
  <div class="playground">
    <header class="playground-header">
      <h1>vue-tel-input <span class="accent">format</span> prop playground</h1>
      <p class="subtitle">Compare how the <code>format</code> prop decouples display value from v-model value</p>
    </header>

    <div class="examples-grid">
      <!-- Example 1: format="e.164" with empty initial value -->
      <section class="example-card">
        <div class="card-header">
          <span class="card-number">01</span>
          <div>
            <h2>E.164 format — empty start</h2>
            <p class="card-description">Type a number. Display is formatted, v-model is E.164.</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone1" format="e.164" /&gt;</code>
        <VueTelInput
          v-model="phone1"
          format="e.164"
          :default-country="'none'"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone1 || '(empty)' }}</span>
          </div>
        </div>
      </section>

      <!-- Example 2: format="e.164" with pre-filled formatted value -->
      <section class="example-card">
        <div class="card-header">
          <span class="card-number">02</span>
          <div>
            <h2>E.164 — pre-filled formatted</h2>
            <p class="card-description">Initial value: <code>+1 (213) 373-4253</code> — a formatted string from a DB.</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone2" format="e.164" /&gt;</code>
        <VueTelInput
          v-model="phone2"
          format="e.164"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone2 || '(empty)' }}</span>
          </div>
          <div class="value-row muted">
            <span class="label">initial</span>
            <span class="value mono">+1 (213) 373-4253</span>
          </div>
        </div>
      </section>

      <!-- Example 3: format="e.164" with pre-filled E.164 value -->
      <section class="example-card">
        <div class="card-header">
          <span class="card-number">03</span>
          <div>
            <h2>E.164 — pre-filled normalized</h2>
            <p class="card-description">Initial value: <code>+78005553535</code> — already in E.164.</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone3" format="e.164" /&gt;</code>
        <VueTelInput
          v-model="phone3"
          format="e.164"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone3 || '(empty)' }}</span>
          </div>
          <div class="value-row muted">
            <span class="label">initial</span>
            <span class="value mono">+78005553535</span>
          </div>
        </div>
      </section>

      <!-- Example 4: format="international" -->
      <section class="example-card">
        <div class="card-header">
          <span class="card-number">04</span>
          <div>
            <h2>International format</h2>
            <p class="card-description">v-model gets international format like <code>+49 30 123456</code>.</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone4" format="international" /&gt;</code>
        <VueTelInput
          v-model="phone4"
          format="international"
          :defaultCountry="'DE'"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone4 || '(empty)' }}</span>
          </div>
        </div>
      </section>

      <!-- Example 5: format="national" -->
      <section class="example-card">
        <div class="card-header">
          <span class="card-number">05</span>
          <div>
            <h2>National format</h2>
            <p class="card-description">v-model gets national format like <code>(555) 254-0458</code>.</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone5" format="national" /&gt;</code>
        <VueTelInput
          v-model="phone5"
          format="national"
          :defaultCountry="'US'"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone5 || '(empty)' }}</span>
          </div>
        </div>
      </section>

      <!-- Example 6: No format (original behavior) -->
      <section class="example-card example-card--baseline">
        <div class="card-header">
          <span class="card-number">06</span>
          <div>
            <h2>No format — original behavior</h2>
            <p class="card-description">v-model = display value. This is the old/default behavior.</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone6" /&gt;</code>
        <VueTelInput
          v-model="phone6"
          :defaultCountry="'US'"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone6 || '(empty)' }}</span>
          </div>
        </div>
      </section>

      <!-- Example 7: format="e.164" with UK number -->
      <section class="example-card">
        <div class="card-header">
          <span class="card-number">07</span>
          <div>
            <h2>E.164 — UK pre-filled</h2>
            <p class="card-description">Initial: <code>+44 20 7946 0958</code> — UK formatted number.</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone7" format="e.164" /&gt;</code>
        <VueTelInput
          v-model="phone7"
          format="e.164"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone7 || '(empty)' }}</span>
          </div>
          <div class="value-row muted">
            <span class="label">initial</span>
            <span class="value mono">+44 20 7946 0958</span>
          </div>
        </div>
      </section>

      <!-- Example 8: Programmatic set test -->
      <section class="example-card">
        <div class="card-header">
          <span class="card-number">08</span>
          <div>
            <h2>E.164 — programmatic set</h2>
            <p class="card-description">Click buttons to set v-model from code (simulates API/DB load).</p>
          </div>
        </div>
        <code class="usage">&lt;vue-tel-input v-model="phone8" format="e.164" /&gt;</code>
        <VueTelInput
          v-model="phone8"
          format="e.164"
          :autoDefaultCountry="false"
        />
        <div class="value-display">
          <div class="value-row">
            <span class="label">v-model</span>
            <span class="value mono">{{ phone8 || '(empty)' }}</span>
          </div>
        </div>
        <div class="button-row">
          <button @click="phone8 = '+14155552671'">Set US: +14155552671</button>
          <button @click="phone8 = '+33 1 42 68 53 00'">Set FR: +33 1 42 68 53 00</button>
          <button @click="phone8 = '+81 3-3580-3311'">Set JP: +81 3-3580-3311</button>
          <button @click="phone8 = ''">Clear</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { VueTelInput } from '@martinszeltins/vue-tel-input';
import '../src/assets/component.css';
import '../src/assets/sprite.css';

export default {
  components: { VueTelInput },
  data() {
    return {
      phone1: '',
      phone2: '+1 (213) 373-4253',
      phone3: '+78005553535',
      phone4: '',
      phone5: '',
      phone6: '',
      phone7: '+44 20 7946 0958',
      phone8: '',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;1,9..40,300&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

:root {
  --bg: #0e0f11;
  --surface: #16181c;
  --surface-raised: #1c1f25;
  --border: #2a2d35;
  --border-accent: #3d4350;
  --text: #e2e4e9;
  --text-muted: #7a7f8d;
  --accent: #6ee7b7;
  --accent-dim: #2d6b55;
  --code-bg: #1a1d23;
  --radius: 10px;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

.playground {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

.playground-header {
  margin-bottom: 48px;
}

.playground-header h1 {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 6px;
}

.playground-header .accent {
  color: var(--accent);
}

.playground-header .subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.5;
}

.playground-header .subtitle code {
  background: var(--code-bg);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.85em;
  border: 1px solid var(--border);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 20px;
}

.example-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s;
}

.example-card:hover {
  border-color: var(--border-accent);
}

.example-card--baseline {
  border-color: var(--accent-dim);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.card-number {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-dim);
  border-radius: 6px;
  padding: 3px 8px;
  flex-shrink: 0;
  margin-top: 2px;
}

.card-header h2 {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.card-description {
  font-size: 0.83rem;
  color: var(--text-muted);
  margin-top: 2px;
  line-height: 1.4;
}

.card-description code {
  background: var(--code-bg);
  padding: 1px 5px;
  border-radius: 3px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9em;
  border: 1px solid var(--border);
}

code.usage {
  display: block;
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 8px 12px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  color: var(--text-muted);
  overflow-x: auto;
  white-space: nowrap;
}

/* Override vue-tel-input styles for dark theme */
.vue-tel-input {
  border: 1px solid var(--border) !important;
  border-radius: 8px !important;
  background: var(--surface-raised) !important;
}

.vue-tel-input:focus-within {
  border-color: var(--accent) !important;
  box-shadow: 0 0 0 2px rgba(110, 231, 183, 0.15) !important;
}

.vue-tel-input .vti__input {
  background: transparent !important;
  color: var(--text) !important;
  font-family: 'IBM Plex Mono', monospace !important;
  font-size: 0.95rem !important;
}

.vue-tel-input .vti__dropdown {
  background: transparent !important;
}

.vue-tel-input .vti__dropdown.open {
  background: var(--surface-raised) !important;
}

.vue-tel-input .vti__dropdown-list {
  background: var(--surface) !important;
  border: 1px solid var(--border) !important;
  border-radius: 8px !important;
  z-index: 10;
}

.vue-tel-input .vti__dropdown-item {
  color: var(--text) !important;
}

.vue-tel-input .vti__dropdown-item.highlighted {
  background: var(--surface-raised) !important;
}

.vue-tel-input .vti__dropdown-arrow {
  color: var(--text-muted) !important;
}

.vue-tel-input .vti__country-code {
  color: var(--text-muted) !important;
}

.vue-tel-input .vti__search_box {
  background: var(--surface-raised) !important;
  color: var(--text) !important;
  border-color: var(--border) !important;
}

.value-display {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.value-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.value-row .label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  font-weight: 500;
  min-width: 55px;
}

.value-row .value {
  font-size: 0.88rem;
  color: var(--text);
  word-break: break-all;
}

.value-row.muted .label {
  color: var(--text-muted);
}

.value-row.muted .value {
  color: var(--text-muted);
}

.mono {
  font-family: 'IBM Plex Mono', monospace;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.button-row button {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface-raised);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s;
}

.button-row button:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
}
</style>
