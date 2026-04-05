# frontend-assessment-caleb-fagbenro

## 1. Overview & Setup
This project is a high-performance Content Explorer web application built with Next.js 15 (App Router). It fulfills the Checkit frontend assessment requirements by prioritizing clean design, solid engineering architecture, and Core Web Vital optimizations.

To get the project running locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fikay323/frontend-assessment-caleb-fagbenro
   cd frontend-assessment-caleb-fagbenro
   ```

2. **Install Dependencies:**
   This project uses `pnpm` for fast, efficient dependency management.
   ```bash
   pnpm install
   ```

3. **Run the Development Server:**
   ```bash
   pnpm dev
   ```
   Open `http://localhost:3000` to view the application.

---

## 2. Architecture Decisions
The project strictly adopts **CLEAN Architecture** alongside **SOLID** principles to ensure the codebase remains maintainable, testable, and independently scalable. Instead of packing all logic tightly into the Next.js App Router (`app/`), logic has been methodically separated:

- **`lib/api/`**: Contains the API client abstraction. React components are kept completely unaware that they are communicating specifically with `DummyJSON`. This decouples the UI from network complexities and raw payloads.
- **`features/products/`**: Encapsulates feature-scoped domain logic. Business hooks like `useUrlFilters` and complex functional components specific to products live here cleanly.
- **`components/ui/`**: A library of generic, reusable UI atoms (like bare buttons, inputs, and cards) that are entirely detached from distinct business models.

Keeping the `app/` directory solely focused on routing conventions and layout aggregation guarantees a highly extensible pattern.

---

## 3. Data Fetching & Workarounds
This application mocks a backend by executing requests to the **DummyJSON API**. All endpoints flow seamlessly through our abstracted wrapper located in `lib/api/products.ts`.

**Server-Side Filtering Workaround:**  
A rigid limitation of DummyJSON is that it **does not natively support intersecting 'search' and 'category' query parameters** via a single endpoint. To maintain absolute fluidity in the user interface (and without shifting heavy workloads to the client side), we designed a server-side bridging workaround in `lib/api/products.ts`. When both parameters are active, the API prioritizes the `search` endpoint, and our Next.js Server Components intercept the response—manually mapping and filtering out the overlapping category selections—before responding to the UI block.

---

## 4. Performance Optimizations
Aggressive optimization strategies were targeted to exceed **Core Web Vitals**:

- **Largest Contentful Paint (LCP):** We secured immediate visual load rendering for LCP elements by employing `next/image` equipped with absolutely explicit dimensions and `priority` tags for above-the-fold product card images. 
- **URL-Driven State:** Searching and Category configuration mutate server-side state instantly through shareable URL search parameters.
- **Resource Debouncing:** We safeguard network payloads using a custom debounced hook (≥300ms) over the URL-driven search input, halting repetitive unneeded API waterfalls.

---

## 5. Bonus Tasks Completed

### B-1: Cloudflare Edge Caching
To align tightly with ultra-low latency requirements and ensure optimal edge deployment scenarios, the implementation utilizes **OpenNext**. 
- OpenNext precisely maps native Next.js fetch semantics (like `next: { revalidate: 3600 }`) straight out to the Cloudflare Workers runtime utilizing the specific configuration object `cf: { cacheTtl: 3600, cacheEverything: true }`.
- Deep proxy transparency was facilitated via a specialized `middleware.ts` which uniquely attaches the `x-cache-status` header onto the Listing Page, allowing cache validation directly inside DevTools.

### B-2: React 18 Suspense
We adopted React Server Components to drastically reduce payload sizing. 
- Deeply nested and heavily-latent data fetch operations inside the Product Detail route (`app/product/[id]/page.tsx`) were effectively refactored to isolate inside an asynchronous `<Suspense>` boundary.
- Users initially receive the navigation wrapper and a tailwind CSS skeleton fallback structure simultaneously via UI Streaming, while the actual data streams sequentially shortly after.

---

## 6. Trade-offs / Next Steps
If granted additional development time, the following enhancements remain priority considerations:

1. **Component Testing:** Integrating `Vitest` to enforce strict coverage metrics across pure logic implementations such as sorting and complex hook utilities like `useUrlFilters`.
2. **End-to-End Test Coverage:** Orchestrating complete critical path workflows (listing searches, pagination traversals, detail views) using `Playwright`.
3. **Accessibility (a11y) Refinement:** Running a comprehensive `axe-core` accessibility audit to map strict compliance of semantic HTML layers, complex focus traps (e.g. modals/drawers), and rigorous WCAG AA/AAA color contrast checks across our bespoke UI.

---

## 7. Author
**Caleb Fagbenro**
