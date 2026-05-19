import { CARS, CAR_SEGMENTS, CATEGORIES, MODS } from "./data.js";

const STORAGE_KEY = "modtrack-build";

const state = {
  selectedCarId: null,
  installedModIds: [],
  carSegmentFilter: "all",
  searchQuery: "",
  activeCatalogId: null,
};

const $ = (sel) => document.querySelector(sel);

const els = {
  carSegments: $("#car-segments"),
  carGroups: $("#car-groups"),
  selectedCar: $("#selected-car"),
  stats: $("#stats"),
  buildList: $("#build-list"),
  emptyBuild: $("#empty-build"),
  catalogNav: $("#catalog-nav"),
  catalogSections: $("#catalog-sections"),
  modSearch: $("#mod-search"),
  totalCost: $("#total-cost"),
  modCount: $("#mod-count"),
  hpDelta: $("#hp-delta"),
  clearBuild: $("#clear-build"),
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.selectedCarId) state.selectedCarId = saved.selectedCarId;
    if (Array.isArray(saved.installedModIds)) state.installedModIds = saved.installedModIds;
  } catch {
    /* ignore corrupt storage */
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      selectedCarId: state.selectedCarId,
      installedModIds: state.installedModIds,
    })
  );
}

function getSelectedCar() {
  return CARS.find((c) => c.id === state.selectedCarId) ?? null;
}

function getInstalledMods() {
  return state.installedModIds
    .map((id) => MODS.find((m) => m.id === id))
    .filter(Boolean);
}

function computePerformance() {
  const car = getSelectedCar();
  if (!car) return null;

  const mods = getInstalledMods();
  const totals = mods.reduce(
    (acc, m) => {
      acc.hp += m.hp ?? 0;
      acc.torque += m.torque ?? 0;
      acc.zeroToSixty += m.zeroToSixty ?? 0;
      acc.cost += m.cost ?? 0;
      acc.weight += m.weight ?? 0;
      acc.downforce += m.downforce ?? 0;
      return acc;
    },
    { hp: 0, torque: 0, zeroToSixty: 0, cost: 0, weight: 0, downforce: 0 }
  );

  const projectedHp = car.stockHp + totals.hp;
  const projectedTorque = car.stockTorque + totals.torque;
  const projectedZero = Math.max(1.5, car.stockZeroToSixty + totals.zeroToSixty);

  return {
    ...totals,
    stockHp: car.stockHp,
    stockTorque: car.stockTorque,
    stockZeroToSixty: car.stockZeroToSixty,
    projectedHp,
    projectedTorque,
    projectedZero,
  };
}

function formatMoney(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function getCategoryLabel(id) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}

function getCategoryIcon(id) {
  return CATEGORIES.find((c) => c.id === id)?.icon ?? "🔧";
}

function getSegmentLabel(id) {
  return CAR_SEGMENTS.find((s) => s.id === id)?.label ?? id;
}

function getSegmentIcon(id) {
  return CAR_SEGMENTS.find((s) => s.id === id)?.icon ?? "🚗";
}

function filteredCars() {
  if (state.carSegmentFilter === "all") return CARS;
  return CARS.filter((c) => c.segment === state.carSegmentFilter);
}

function modsForCategory(categoryId) {
  const q = state.searchQuery.trim().toLowerCase();
  return MODS.filter((m) => {
    if (m.category !== categoryId) return false;
    if (!q) return true;
    return (
      m.name.toLowerCase().includes(q) ||
      m.brand.toLowerCase().includes(q) ||
      getCategoryLabel(m.category).toLowerCase().includes(q)
    );
  });
}

function modMatchesSearch(m) {
  const q = state.searchQuery.trim().toLowerCase();
  if (!q) return true;
  return (
    m.name.toLowerCase().includes(q) ||
    m.brand.toLowerCase().includes(q) ||
    getCategoryLabel(m.category).toLowerCase().includes(q)
  );
}

function buildModCardHtml(m, hasCar) {
  const inBuild = state.installedModIds.includes(m.id);
  const badges = [];
  if (m.hp) badges.push(`+${m.hp} HP`);
  if (m.torque) badges.push(`+${m.torque} TQ`);
  if (m.zeroToSixty && m.zeroToSixty < 0) badges.push(`${m.zeroToSixty.toFixed(2)}s 0-60`);
  if (m.weight) badges.push(`${m.weight} lbs`);
  if (m.downforce) badges.push(`+${m.downforce} DF`);

  const perfHtml =
    badges.length > 0
      ? badges.map((b) => `<span class="perf-badge">${b}</span>`).join("")
      : `<span class="perf-badge neutral">cosmetic / support</span>`;

  return `
    <article class="mod-card ${inBuild ? "in-build" : ""}" data-mod-id="${m.id}">
      <div class="mod-card__top">
        <span class="mod-card__brand-tag">${m.brand}</span>
        <span class="mod-card__cost">${formatMoney(m.cost)}</span>
      </div>
      <h3 class="mod-card__name">${m.name}</h3>
      <div class="mod-card__perf">${perfHtml}</div>
      <button
        type="button"
        class="btn btn--primary mod-add-btn"
        data-add="${m.id}"
        ${!hasCar || inBuild ? "disabled" : ""}
      >
        ${!hasCar ? "Select a car first" : inBuild ? "Added" : "Add to build"}
      </button>
    </article>
  `;
}

function bindModButtons(container) {
  container.querySelectorAll(".mod-add-btn").forEach((btn) => {
    btn.addEventListener("click", () => addMod(btn.dataset.add));
  });
}

function renderCarSegments() {
  els.carSegments.innerHTML = CAR_SEGMENTS.map(
    (seg) => `
    <button
      type="button"
      class="segment-chip ${state.carSegmentFilter === seg.id ? "active" : ""}"
      data-segment="${seg.id}"
      role="tab"
      aria-selected="${state.carSegmentFilter === seg.id}"
    >
      ${seg.icon} ${seg.label}
    </button>
  `
  ).join("");

  els.carSegments.querySelectorAll(".segment-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.carSegmentFilter = btn.dataset.segment;
      renderCarSegments();
      renderCars();
    });
  });
}

function renderCars() {
  const cars = filteredCars();
  const showGrouped = state.carSegmentFilter === "all";

  if (cars.length === 0) {
    els.carGroups.innerHTML = `<p class="empty-state">No cars in this category.</p>`;
    return;
  }

  const renderCard = (car) => `
    <button
      type="button"
      class="car-card ${state.selectedCarId === car.id ? "selected" : ""}"
      data-car-id="${car.id}"
      role="option"
      aria-selected="${state.selectedCarId === car.id}"
    >
      <span class="car-card__emoji">${car.image}</span>
      <span class="car-card__name">${car.name}</span>
      <span class="car-card__meta">${car.year} · ${car.engine}</span>
      <span class="car-card__hp">${car.stockHp} HP stock</span>
    </button>
  `;

  if (showGrouped) {
    const segmentsWithCars = CAR_SEGMENTS.filter((s) => s.id !== "all").filter((seg) =>
      CARS.some((c) => c.segment === seg.id)
    );

    els.carGroups.innerHTML = segmentsWithCars
      .map((seg) => {
        const segmentCars = CARS.filter((c) => c.segment === seg.id);
        return `
        <div class="car-group" data-segment="${seg.id}">
          <h3 class="car-group__title">
            <span class="car-group__icon">${seg.icon}</span>
            ${seg.label}
            <span class="car-group__count">${segmentCars.length}</span>
          </h3>
          <div class="car-grid" role="listbox" aria-label="${seg.label}">
            ${segmentCars.map(renderCard).join("")}
          </div>
        </div>
      `;
      })
      .join("");
  } else {
    els.carGroups.innerHTML = `
      <div class="car-grid" role="listbox" aria-label="${getSegmentLabel(state.carSegmentFilter)}">
        ${cars.map(renderCard).join("")}
      </div>
    `;
  }

  els.carGroups.querySelectorAll(".car-card").forEach((btn) => {
    btn.addEventListener("click", () => selectCar(btn.dataset.carId));
  });
}

function selectCar(carId) {
  state.selectedCarId = carId;
  saveState();
  render();
}

function renderSelectedCar() {
  const car = getSelectedCar();
  if (!car) {
    els.selectedCar.className = "selected-car empty-state";
    els.selectedCar.innerHTML = "<p>Pick a car to start your build</p>";
    els.stats.classList.add("hidden");
    return;
  }

  els.selectedCar.className = "selected-car";
  els.selectedCar.innerHTML = `
    <div class="selected-car__header">
      <span class="selected-car__emoji">${car.image}</span>
      <div>
        <div class="selected-car__name">${car.name}</div>
        <div class="selected-car__engine">${car.year} · ${car.engine}</div>
        <span class="selected-car__segment">${getSegmentIcon(car.segment)} ${getSegmentLabel(car.segment)}</span>
      </div>
    </div>
  `;

  const perf = computePerformance();
  if (!perf) return;

  els.stats.classList.remove("hidden");
  const zeroDelta = perf.projectedZero - perf.stockZeroToSixty;
  const zeroImproved = zeroDelta < 0;

  els.stats.innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Horsepower</div>
      <div class="stat-value">${perf.projectedHp}</div>
      <div class="stat-delta">${perf.hp > 0 ? `+${perf.hp} from mods` : "stock"}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Torque (lb-ft)</div>
      <div class="stat-value">${perf.projectedTorque}</div>
      <div class="stat-delta">${perf.torque > 0 ? `+${perf.torque} from mods` : "stock"}</div>
    </div>
    <div class="stat-card stat-card--wide">
      <div class="stat-label">0–60 mph (est.)</div>
      <div class="stat-value ${zeroImproved ? "positive" : ""}">${perf.projectedZero.toFixed(2)}s</div>
      <div class="stat-delta">${zeroImproved ? `${zeroDelta.toFixed(2)}s faster` : zeroDelta > 0 ? `+${zeroDelta.toFixed(2)}s` : "unchanged"}</div>
    </div>
    ${
      perf.weight !== 0
        ? `<div class="stat-card"><div class="stat-label">Weight</div><div class="stat-value positive">${perf.weight} lbs</div></div>`
        : ""
    }
    ${
      perf.downforce > 0
        ? `<div class="stat-card"><div class="stat-label">Downforce</div><div class="stat-value">+${perf.downforce} lbs</div></div>`
        : ""
    }
  `;
}

function renderBuildList() {
  const mods = getInstalledMods();
  const hasCar = !!getSelectedCar();

  els.emptyBuild.classList.toggle("hidden", mods.length > 0 || !hasCar);
  els.clearBuild.disabled = !hasCar && mods.length === 0;

  if (mods.length === 0) {
    els.buildList.innerHTML = "";
    return;
  }

  els.clearBuild.disabled = false;

  els.buildList.innerHTML = mods
    .map(
      (m) => `
    <li class="build-item">
      <span class="build-item__icon">${getCategoryIcon(m.category)}</span>
      <div class="build-item__info">
        <div class="build-item__name">${m.name}</div>
        <div class="build-item__brand">${m.brand} · ${getCategoryLabel(m.category)}</div>
      </div>
      <span class="build-item__cost">${formatMoney(m.cost)}</span>
      <button type="button" class="build-item__remove" data-remove="${m.id}" aria-label="Remove ${m.name}">×</button>
    </li>
  `
    )
    .join("");

  els.buildList.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => removeMod(btn.dataset.remove));
  });
}

function renderCostBar() {
  const perf = computePerformance();
  const count = state.installedModIds.length;
  const cost = perf?.cost ?? 0;
  const hp = perf?.hp ?? 0;

  els.totalCost.textContent = formatMoney(cost);
  els.modCount.textContent = `${count} mod${count === 1 ? "" : "s"}`;
  els.hpDelta.textContent = hp > 0 ? `+${hp} HP` : "+0 HP";
}

function renderCatalogNav(visibleCategories) {
  els.catalogNav.innerHTML = visibleCategories
    .map((cat) => {
      const count = modsForCategory(cat.id).length;
      const installed = state.installedModIds.filter((id) => {
        const m = MODS.find((x) => x.id === id);
        return m?.category === cat.id;
      }).length;
      return `
      <a
        href="#catalog-${cat.id}"
        class="catalog-nav__link ${state.activeCatalogId === cat.id ? "active" : ""}"
        data-catalog="${cat.id}"
      >
        <span class="catalog-nav__icon">${cat.icon}</span>
        <span class="catalog-nav__label">${cat.label}</span>
        <span class="catalog-nav__meta">${count}${installed > 0 ? ` · ${installed} added` : ""}</span>
      </a>
    `;
    })
    .join("");

  els.catalogNav.querySelectorAll(".catalog-nav__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      state.activeCatalogId = link.dataset.catalog;
      els.catalogNav.querySelectorAll(".catalog-nav__link").forEach((l) => {
        l.classList.toggle("active", l.dataset.catalog === state.activeCatalogId);
      });
    });
  });
}

function renderCatalogSections() {
  const hasCar = !!getSelectedCar();
  const q = state.searchQuery.trim();

  const visibleCategories = CATEGORIES.filter((cat) => {
    if (!q) return true;
    return MODS.some((m) => m.category === cat.id && modMatchesSearch(m));
  });

  renderCatalogNav(visibleCategories);

  if (visibleCategories.length === 0) {
    els.catalogSections.innerHTML = `<p class="no-results">No mods match "${q}".</p>`;
    return;
  }

  els.catalogSections.innerHTML = visibleCategories
    .map((cat) => {
      const mods = modsForCategory(cat.id);
      const installedInCat = state.installedModIds.filter((id) => {
        const m = MODS.find((x) => x.id === id);
        return m?.category === cat.id;
      }).length;

      const modsHtml =
        mods.length > 0
          ? `<div class="mod-grid">${mods.map((m) => buildModCardHtml(m, hasCar)).join("")}</div>`
          : `<p class="catalog-section__empty">No items match your search in this catalog.</p>`;

      return `
      <section
        class="catalog-section"
        id="catalog-${cat.id}"
        aria-labelledby="catalog-title-${cat.id}"
      >
        <header class="catalog-section__header">
          <div class="catalog-section__title-wrap">
            <span class="catalog-section__icon">${cat.icon}</span>
            <div>
              <h3 class="catalog-section__title" id="catalog-title-${cat.id}">${cat.label} Catalog</h3>
              <p class="catalog-section__desc">${mods.length} part${mods.length === 1 ? "" : "s"} available${installedInCat > 0 ? ` · ${installedInCat} in your build` : ""}</p>
            </div>
          </div>
        </header>
        ${modsHtml}
      </section>
    `;
    })
    .join("");

  bindModButtons(els.catalogSections);
}

function addMod(modId) {
  if (!getSelectedCar()) return;
  if (state.installedModIds.includes(modId)) return;
  state.installedModIds.push(modId);
  saveState();
  render();
}

function removeMod(modId) {
  state.installedModIds = state.installedModIds.filter((id) => id !== modId);
  saveState();
  render();
}

function clearBuild() {
  state.installedModIds = [];
  saveState();
  render();
}

let catalogObserver = null;

function setupCatalogObserver() {
  if (!("IntersectionObserver" in window)) return;

  catalogObserver?.disconnect();

  catalogObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length === 0) return;
      const id = visible[0].target.id.replace("catalog-", "");
      if (state.activeCatalogId !== id) {
        state.activeCatalogId = id;
        els.catalogNav?.querySelectorAll(".catalog-nav__link").forEach((l) => {
          l.classList.toggle("active", l.dataset.catalog === id);
        });
      }
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
  );

  els.catalogSections.querySelectorAll(".catalog-section").forEach((section) => {
    catalogObserver.observe(section);
  });
}

function render() {
  renderCars();
  renderSelectedCar();
  renderBuildList();
  renderCostBar();
  renderCatalogSections();
  setupCatalogObserver();
}

function init() {
  loadState();
  renderCarSegments();

  els.modSearch.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderCatalogSections();
  });

  els.clearBuild.addEventListener("click", clearBuild);

  render();
}

init();
