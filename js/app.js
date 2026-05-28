const STORAGE_KEY = "sodiMaterialLibrary.v3.humanText"

const defaultMaterials = [
  {
    id: "paper-a2-white",
    name: "White cartridge paper",
    category: "Paper",
    available: 86,
    original: 86,
    unit: "sheets",
    condition: "Clean",
    location: "Paper drawer A",
    use: "sketching",
    weight: 0.02,
    description: "Large-format paper left from pin-ups. Useful for sketches, project planning, and early layout work.",
    tags: ["paper", "drawing", "presentation", "sheet", "white"]
  },
  {
    id: "scrap-paper-mixed",
    name: "Mixed scrap paper",
    category: "Paper",
    available: 134,
    original: 134,
    unit: "pieces",
    condition: "Mixed sizes",
    location: "Reuse trolley",
    use: "drafting",
    weight: 0.012,
    description: "Odd-sized paper offcuts from previous projects. Good for draft models and quick print checks.",
    tags: ["scrap", "paper", "offcut", "draft", "print"]
  },
  {
    id: "cardboard-flat",
    name: "Flat cardboard sheets",
    category: "Cardboard",
    available: 72,
    original: 72,
    unit: "sheets",
    condition: "Mostly flat",
    location: "Bay 1",
    use: "structure",
    weight: 0.18,
    description: "Reusable cardboard sheets for form studies, packaging work, and light structures.",
    tags: ["cardboard", "box", "packaging", "sheet", "model"]
  },
  {
    id: "cardboard-corrugated",
    name: "Corrugated cardboard offcuts",
    category: "Cardboard",
    available: 58,
    original: 58,
    unit: "pieces",
    condition: "Workshop sorted",
    location: "Bay 1",
    use: "model making",
    weight: 0.09,
    description: "Rigid corrugated scraps with visible grain. Strong enough for model bases and small project frames.",
    tags: ["corrugated", "cardboard", "offcut", "model", "project"]
  },
  {
    id: "plywood-3mm",
    name: "Plywood offcuts 3 mm",
    category: "Timber",
    available: 41,
    original: 41,
    unit: "pieces",
    condition: "Laser safe",
    location: "Timber crate B",
    use: "laser cutting",
    weight: 0.22,
    description: "Thin plywood pieces collected from laser-cut project work. Most pieces suit small forms and joint checks.",
    tags: ["plywood", "timber", "laser", "wood", "offcut"]
  },
  {
    id: "plywood-6mm",
    name: "Plywood offcuts 6 mm",
    category: "Timber",
    available: 25,
    original: 25,
    unit: "pieces",
    condition: "Some scorch marks",
    location: "Timber crate B",
    use: "frames",
    weight: 0.38,
    description: "Stronger plywood pieces for small shelves, temporary assemblies, and sturdy project parts.",
    tags: ["plywood", "timber", "wood", "frame", "joint"]
  },
  {
    id: "beechwood-blocks",
    name: "Beechwood blocks",
    category: "Timber",
    available: 19,
    original: 19,
    unit: "blocks",
    condition: "Clean cut",
    location: "Timber shelf C",
    use: "handle studies",
    weight: 0.46,
    description: "Dense beechwood blocks for grip studies, small turning work, and polished object details.",
    tags: ["beech", "beechwood", "wood", "block", "handle"]
  },
  {
    id: "pinewood-strips",
    name: "Pinewood strips",
    category: "Timber",
    available: 64,
    original: 64,
    unit: "strips",
    condition: "Straight lengths",
    location: "Timber shelf A",
    use: "frames",
    weight: 0.13,
    description: "Light pine strips for framework, spacing, edge details, and simple jigs.",
    tags: ["pine", "pinewood", "wood", "strip", "frame"]
  },
  {
    id: "balsa-sheets",
    name: "Balsa sheets",
    category: "Timber",
    available: 33,
    original: 33,
    unit: "sheets",
    condition: "Fragile",
    location: "Model shelf A",
    use: "lightweight forms",
    weight: 0.025,
    description: "Very light timber sheets for massing models, aircraft-style structures, and delicate product studies.",
    tags: ["balsa", "wood", "sheet", "light", "model"]
  },
  {
    id: "mdf-small",
    name: "MDF small panels",
    category: "Board",
    available: 37,
    original: 37,
    unit: "panels",
    condition: "Dry stored",
    location: "Board rack",
    use: "base plates",
    weight: 0.31,
    description: "Small MDF panels for bases, jigs, plinths, and rough CNC or laser trials where finish is not critical.",
    tags: ["mdf", "board", "panel", "base", "laser"]
  },
  {
    id: "foamcore-white",
    name: "White foamcore",
    category: "Board",
    available: 28,
    original: 28,
    unit: "sheets",
    condition: "Slight dents",
    location: "Model shelf B",
    use: "spatial models",
    weight: 0.08,
    description: "Foamcore sheets for spatial models, display boards, and presentation supports.",
    tags: ["foamcore", "foam", "board", "white", "model"]
  },
  {
    id: "mount-board-black",
    name: "Black mount board",
    category: "Board",
    available: 24,
    original: 24,
    unit: "sheets",
    condition: "Clean front face",
    location: "Paper drawer C",
    use: "presentation",
    weight: 0.11,
    description: "Black board for clean display backing, shadow boxes, refined model bases, and photography setups.",
    tags: ["mount", "board", "black", "presentation", "display"]
  },
  {
    id: "aluminium-sheet",
    name: "Aluminium sheet offcuts",
    category: "Metal",
    available: 18,
    original: 18,
    unit: "pieces",
    condition: "Workshop approval",
    location: "Metal tray",
    use: "surface work",
    weight: 0.2,
    description: "Small aluminium offcuts for bending, finish samples, and reflective project details.",
    tags: ["aluminium", "metal", "sheet", "reflective", "offcut"]
  },
  {
    id: "tin-foil-rolls",
    name: "Tin foil roll ends",
    category: "Metal",
    available: 12,
    original: 12,
    unit: "roll ends",
    condition: "Usable lengths",
    location: "Metal tray",
    use: "surface texture",
    weight: 0.06,
    description: "Short foil roll ends for texture work, light studies, and soft forming.",
    tags: ["tin", "foil", "metal", "reflective", "texture"]
  },
  {
    id: "copper-wire-thin",
    name: "Thin copper wire",
    category: "Metal",
    available: 47,
    original: 47,
    unit: "coils",
    condition: "Untangled",
    location: "Wire drawer",
    use: "circuits",
    weight: 0.035,
    description: "Flexible copper wire for low-voltage circuits, model details, tying parts, and conductive experiments.",
    tags: ["copper", "wire", "metal", "circuit", "coil"]
  },
  {
    id: "steel-wire",
    name: "Steel wire lengths",
    category: "Metal",
    available: 36,
    original: 36,
    unit: "lengths",
    condition: "Sharp ends",
    location: "Wire drawer",
    use: "armatures",
    weight: 0.052,
    description: "Stiffer wire lengths for armatures, hanging systems, and structural skeletons.",
    tags: ["steel", "wire", "armature", "metal", "structure"]
  },
  {
    id: "brass-tube",
    name: "Brass tube offcuts",
    category: "Metal",
    available: 14,
    original: 14,
    unit: "tubes",
    condition: "Short lengths",
    location: "Metal tray",
    use: "hinges",
    weight: 0.075,
    description: "Small brass tube pieces for hinge experiments, mechanical detailing, and scale model fittings.",
    tags: ["brass", "tube", "metal", "hinge", "mechanical"]
  },
  {
    id: "string-cotton",
    name: "Cotton string",
    category: "Textile",
    available: 29,
    original: 29,
    unit: "bundles",
    condition: "Clean",
    location: "Textile drawer",
    use: "binding",
    weight: 0.04,
    description: "Soft cotton string for binding, hanging elements, texture work, and temporary assembly.",
    tags: ["string", "cotton", "textile", "rope", "binding"]
  },
  {
    id: "jute-twine",
    name: "Jute twine",
    category: "Textile",
    available: 21,
    original: 21,
    unit: "bundles",
    condition: "Natural fibre",
    location: "Textile drawer",
    use: "craft joining",
    weight: 0.055,
    description: "Natural jute twine with a rougher finish. Useful for organic texture and hand-tied joins.",
    tags: ["jute", "twine", "string", "natural", "binding"]
  },
  {
    id: "fabric-cotton",
    name: "Cotton fabric offcuts",
    category: "Textile",
    available: 44,
    original: 44,
    unit: "pieces",
    condition: "Mixed colours",
    location: "Textile bin A",
    use: "soft goods",
    weight: 0.07,
    description: "Cotton fabric offcuts for soft project pieces, wearable samples, and tactile studies.",
    tags: ["fabric", "cotton", "textile", "soft", "offcut"]
  },
  {
    id: "felt-sheets",
    name: "Felt sheets",
    category: "Textile",
    available: 32,
    original: 32,
    unit: "sheets",
    condition: "Mixed colours",
    location: "Textile bin B",
    use: "padding",
    weight: 0.035,
    description: "Felt sheets for padding, acoustic samples, sewn details, and quick visual models.",
    tags: ["felt", "fabric", "textile", "padding", "colour"]
  },
  {
    id: "leather-scraps",
    name: "Leather scraps",
    category: "Textile",
    available: 17,
    original: 17,
    unit: "pieces",
    condition: "Small pieces",
    location: "Textile bin C",
    use: "finish samples",
    weight: 0.095,
    description: "Small leather scraps for handle wraps, finish comparisons, and detail work.",
    tags: ["leather", "scrap", "textile", "finish", "handle"]
  },
  {
    id: "marble-samples",
    name: "Marble sample tiles",
    category: "Stone",
    available: 9,
    original: 9,
    unit: "tiles",
    condition: "Heavy",
    location: "Stone crate",
    use: "material boards",
    weight: 0.62,
    description: "Small marble sample tiles for material boards, weight studies, and photography.",
    tags: ["marble", "stone", "tile", "sample", "heavy"]
  },
  {
    id: "ceramic-shards",
    name: "Ceramic test shards",
    category: "Stone",
    available: 23,
    original: 23,
    unit: "pieces",
    condition: "Sharp edges",
    location: "Stone crate",
    use: "texture samples",
    weight: 0.12,
    description: "Fired ceramic pieces from glaze work. Handle with care when using them for surface research.",
    tags: ["ceramic", "stone", "glaze", "texture", "shard"]
  },
  {
    id: "acrylic-clear",
    name: "Clear acrylic offcuts",
    category: "Plastic",
    available: 31,
    original: 31,
    unit: "pieces",
    condition: "Protective film mixed",
    location: "Plastic shelf A",
    use: "transparent parts",
    weight: 0.11,
    description: "Clear acrylic pieces for transparent layers, casings, and light-based projects.",
    tags: ["acrylic", "plastic", "clear", "transparent", "laser"]
  },
  {
    id: "acrylic-colour",
    name: "Coloured acrylic offcuts",
    category: "Plastic",
    available: 39,
    original: 39,
    unit: "pieces",
    condition: "Mixed colours",
    location: "Plastic shelf A",
    use: "colour studies",
    weight: 0.105,
    description: "Bright acrylic offcuts left from signage and interaction projects. Useful for colour-coded components.",
    tags: ["acrylic", "plastic", "colour", "signage", "laser"]
  },
  {
    id: "plastic-bottles",
    name: "Clean plastic bottles",
    category: "Plastic",
    available: 46,
    original: 46,
    unit: "bottles",
    condition: "Washed",
    location: "Plastic bin B",
    use: "reuse experiments",
    weight: 0.03,
    description: "Clean bottles for circular design projects, light diffusers, and modular forms.",
    tags: ["plastic", "bottle", "recycled", "container", "reuse"]
  },
  {
    id: "bioplastic-samples",
    name: "Bioplastic sample sheets",
    category: "Plastic",
    available: 16,
    original: 16,
    unit: "sheets",
    condition: "Experimental",
    location: "Material sample box",
    use: "research samples",
    weight: 0.045,
    description: "Student-made bioplastic sheets with varied thickness and surface results. Good for sustainable material comparison.",
    tags: ["bioplastic", "plastic", "sample", "sheet", "sustainable"]
  },
  {
    id: "rubber-bands",
    name: "Rubber bands",
    category: "Flexible",
    available: 96,
    original: 96,
    unit: "bands",
    condition: "Mixed sizes",
    location: "Fastener drawer",
    use: "tension work",
    weight: 0.004,
    description: "Rubber bands for tension, closures, temporary holding, and elastic mechanisms.",
    tags: ["rubber", "band", "elastic", "mechanism", "fastener"]
  },
  {
    id: "rubber-sheet",
    name: "Rubber sheet offcuts",
    category: "Flexible",
    available: 22,
    original: 22,
    unit: "pieces",
    condition: "Textured faces",
    location: "Flexible materials box",
    use: "grip surfaces",
    weight: 0.14,
    description: "Rubber offcuts for grip surfaces, gasket ideas, project feet, and non-slip texture samples.",
    tags: ["rubber", "sheet", "grip", "flexible", "texture"]
  },
  {
    id: "cork-sheets",
    name: "Cork sheets",
    category: "Natural",
    available: 26,
    original: 26,
    unit: "sheets",
    condition: "Clean",
    location: "Natural materials shelf",
    use: "soft surfaces",
    weight: 0.055,
    description: "Cork sheets for soft surfaces, insulation samples, pinboards, and tactile product details.",
    tags: ["cork", "natural", "sheet", "soft", "insulation"]
  },
  {
    id: "bamboo-skewers",
    name: "Bamboo skewers",
    category: "Natural",
    available: 112,
    original: 112,
    unit: "sticks",
    condition: "Bundled",
    location: "Natural materials shelf",
    use: "small structures",
    weight: 0.003,
    description: "Bamboo skewers for lightweight structures, trusses, model frames, and simple joints.",
    tags: ["bamboo", "stick", "natural", "structure", "model"]
  },
  {
    id: "rattan-pieces",
    name: "Rattan pieces",
    category: "Natural",
    available: 15,
    original: 15,
    unit: "lengths",
    condition: "Bends unevenly",
    location: "Natural materials shelf",
    use: "woven forms",
    weight: 0.065,
    description: "Short rattan lengths for woven forms, natural joinery, and hand-made details.",
    tags: ["rattan", "natural", "woven", "length", "craft"]
  },
  {
    id: "glass-jars",
    name: "Small glass jars",
    category: "Glass",
    available: 18,
    original: 18,
    unit: "jars",
    condition: "Lids included",
    location: "Glass crate",
    use: "containers",
    weight: 0.16,
    description: "Small jars for packaging projects, display objects, and storage ideas.",
    tags: ["glass", "jar", "container", "packaging", "clear"]
  },
  {
    id: "mirror-acrylic",
    name: "Mirror acrylic scraps",
    category: "Plastic",
    available: 13,
    original: 13,
    unit: "pieces",
    condition: "Surface scratches",
    location: "Plastic shelf B",
    use: "reflection work",
    weight: 0.09,
    description: "Mirror acrylic scraps for reflective details, optical work, and product accents.",
    tags: ["mirror", "acrylic", "plastic", "reflective", "scrap"]
  },
  {
    id: "led-strips",
    name: "Short LED strip sections",
    category: "Electronics",
    available: 11,
    original: 11,
    unit: "sections",
    condition: "Check before use",
    location: "Electronics drawer",
    use: "project lighting",
    weight: 0.025,
    description: "Short LED strip sections from interaction projects. Test before use and keep them to low-voltage work.",
    tags: ["led", "electronics", "light", "strip", "project"]
  },
  {
    id: "small-motors",
    name: "Small DC motors",
    category: "Electronics",
    available: 8,
    original: 8,
    unit: "motors",
    condition: "Check before use",
    location: "Electronics drawer",
    use: "movement work",
    weight: 0.055,
    description: "Small motors for kinetic projects and movement studies. Test them before using them in assessed work.",
    tags: ["motor", "electronics", "movement", "kinetic", "dc"]
  },
  {
    id: "switches-mixed",
    name: "Mixed switches",
    category: "Electronics",
    available: 27,
    original: 27,
    unit: "switches",
    condition: "Mixed types",
    location: "Electronics drawer",
    use: "interaction work",
    weight: 0.012,
    description: "Mixed small switches for interaction projects, circuit checks, and basic input studies.",
    tags: ["switch", "electronics", "input", "button", "circuit"]
  },
  {
    id: "screws-mixed",
    name: "Mixed screws",
    category: "Fasteners",
    available: 188,
    original: 188,
    unit: "screws",
    condition: "Sorted by size",
    location: "Fastener drawer",
    use: "assembly",
    weight: 0.006,
    description: "Assorted screws reclaimed from past projects and dismantled fixtures. Useful for temporary assemblies.",
    tags: ["screw", "fastener", "assembly", "metal", "hardware"]
  },
  {
    id: "bolts-nuts",
    name: "Bolts and nuts",
    category: "Fasteners",
    available: 76,
    original: 76,
    unit: "sets",
    condition: "Paired sets",
    location: "Fastener drawer",
    use: "mechanical joints",
    weight: 0.018,
    description: "Paired bolts and nuts for adjustable joints, removable assemblies, and mechanical project work.",
    tags: ["bolt", "nut", "fastener", "joint", "hardware"]
  },
  {
    id: "magnets-small",
    name: "Small magnets",
    category: "Fasteners",
    available: 34,
    original: 34,
    unit: "magnets",
    condition: "Strong pull",
    location: "Fastener drawer",
    use: "closures",
    weight: 0.01,
    description: "Small magnets for closures, hidden attachment points, display mounts, and interaction experiments.",
    tags: ["magnet", "fastener", "closure", "mount", "hardware"]
  },
  {
    id: "zip-ties",
    name: "Reusable zip ties",
    category: "Fasteners",
    available: 83,
    original: 83,
    unit: "ties",
    condition: "Reusable tab",
    location: "Fastener drawer",
    use: "temporary assembly",
    weight: 0.003,
    description: "Reusable zip ties for fast rigging, cable control, temporary frame assembly, and installation setup.",
    tags: ["zip", "tie", "fastener", "cable", "assembly"]
  },
  {
    id: "paint-sample-pots",
    name: "Paint sample pots",
    category: "Finish",
    available: 20,
    original: 20,
    unit: "pots",
    condition: "Check before use",
    location: "Finish shelf",
    use: "colour work",
    weight: 0.19,
    description: "Leftover paint sample pots for colour trials, small surfaces, and model finishing.",
    tags: ["paint", "finish", "colour", "sample", "surface"]
  },
  {
    id: "sandpaper-mixed",
    name: "Mixed sandpaper",
    category: "Finish",
    available: 49,
    original: 49,
    unit: "sheets",
    condition: "Mixed grit",
    location: "Finish shelf",
    use: "surface prep",
    weight: 0.018,
    description: "Mixed sandpaper sheets for surface preparation, edge finishing, paint checks, and timber work.",
    tags: ["sandpaper", "finish", "grit", "surface", "timber"]
  },
  {
    id: "vinyl-sticker",
    name: "Vinyl sticker offcuts",
    category: "Finish",
    available: 42,
    original: 42,
    unit: "pieces",
    condition: "Mixed colours",
    location: "Finish shelf",
    use: "graphics",
    weight: 0.015,
    description: "Adhesive vinyl offcuts for labels, small graphics, masking, and presentation details.",
    tags: ["vinyl", "sticker", "finish", "graphic", "adhesive"]
  },
  {
    id: "paper-tubes",
    name: "Paper tubes",
    category: "Paper",
    available: 38,
    original: 38,
    unit: "tubes",
    condition: "Firm",
    location: "Reuse trolley",
    use: "columns",
    weight: 0.045,
    description: "Paper tubes from roll cores. Useful for columns, handles, and modular forms.",
    tags: ["paper", "tube", "cardboard", "roll", "structure"]
  },
  {
    id: "mesh-fabric",
    name: "Mesh fabric offcuts",
    category: "Textile",
    available: 22,
    original: 22,
    unit: "pieces",
    condition: "Stretch varies",
    location: "Textile bin B",
    use: "ventilation work",
    weight: 0.032,
    description: "Mesh fabric pieces for ventilation studies, wearable samples, and light diffusion.",
    tags: ["mesh", "fabric", "textile", "ventilation", "soft"]
  },
  {
    id: "clay-dry",
    name: "Air-dry clay leftovers",
    category: "Clay",
    available: 10,
    original: 10,
    unit: "packs",
    condition: "Sealed packs",
    location: "Material sample box",
    use: "form studies",
    weight: 0.31,
    description: "Sealed air-dry clay leftovers for form studies, ergonomic shaping, and texture work.",
    tags: ["clay", "model", "form", "texture", "sample"]
  },
  {
    id: "plaster-bandage",
    name: "Plaster bandage strips",
    category: "Clay",
    available: 18,
    original: 18,
    unit: "rolls",
    condition: "Dry stored",
    location: "Material sample box",
    use: "mould work",
    weight: 0.14,
    description: "Plaster bandage rolls for shell work, quick casts, and rough moulds.",
    tags: ["plaster", "bandage", "mould", "cast", "shell"]
  }
]

let state = loadState()
let searchTerm = ""
let activeCategory = "All"
let sortMode = "relevance"
let toastTimer = null

const grid = document.querySelector("#materialGrid")
const template = document.querySelector("#materialCardTemplate")
const searchInput = document.querySelector("#searchInput")
const sortSelect = document.querySelector("#sortSelect")
const filters = document.querySelector("#categoryFilters")
const resultCount = document.querySelector("#resultCount")
const emptyState = document.querySelector("#emptyState")
const trayList = document.querySelector("#trayList")
const historyList = document.querySelector("#historyList")
const bookingForm = document.querySelector("#bookingForm")
const confirmationBox = document.querySelector("#confirmationBox")
const pickupDate = document.querySelector("#pickupDate")
const menuButton = document.querySelector("#menuButton")
const navLinks = document.querySelector("#navLinks")

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) {
    return createFreshState()
  }

  try {
    const parsed = JSON.parse(saved)
    const materialMap = new Map(parsed.materials?.map((material) => [material.id, material]))
    const mergedMaterials = defaultMaterials.map((material) => ({
      ...material,
      available: materialMap.get(material.id)?.available ?? material.available
    }))

    const customMaterials = (parsed.materials || []).filter((material) => material.custom)

    return {
      materials: [...mergedMaterials, ...customMaterials],
      tray: parsed.tray || [],
      bookings: parsed.bookings || []
    }
  } catch (error) {
    console.warn("Could not read the saved SODI library state. A fresh sample state has been created.", error)
    return createFreshState()
  }
}

function createFreshState() {
  return {
    materials: defaultMaterials.map((material) => ({ ...material })),
    tray: [],
    bookings: []
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-NZ").format(value)
}

function getMaterialById(id) {
  return state.materials.find((material) => material.id === id)
}

function init() {
  setPickupDateDefault()
  renderFilters()
  renderMaterials()
  renderTray()
  renderHistory()
  renderStats()
  bindEvents()
}

function setPickupDateDefault() {
  const today = new Date()
  const iso = today.toISOString().split("T")[0]
  pickupDate.min = iso
  pickupDate.value = iso
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase()
    renderMaterials()
  })

  sortSelect.addEventListener("change", (event) => {
    sortMode = event.target.value
    renderMaterials()
  })

  document.querySelector("#clearSearchButton").addEventListener("click", () => {
    searchInput.value = ""
    searchTerm = ""
    activeCategory = "All"
    renderFilters()
    renderMaterials()
  })

  document.querySelector("#clearTrayButton").addEventListener("click", () => {
    state.tray = []
    saveState()
    renderTray()
    showToast("Booking tray cleared.")
  })

  document.querySelector("#resetSampleButton").addEventListener("click", () => {
    const confirmed = window.confirm("Reset the sample inventory and remove local bookings?")
    if (!confirmed) return
    state = createFreshState()
    saveState()
    renderAll()
    showToast("Sample inventory has been reset.")
  })

  document.querySelector("#exportButton").addEventListener("click", exportBookings)

  bookingForm.addEventListener("submit", submitBooking)
  document.querySelector("#donationForm").addEventListener("submit", submitDonationPreview)

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open")
    menuButton.setAttribute("aria-expanded", String(isOpen))
  })

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open")
    menuButton.setAttribute("aria-expanded", "false")
  })
}

function renderAll() {
  renderFilters()
  renderMaterials()
  renderTray()
  renderHistory()
  renderStats()
}

function renderFilters() {
  const categories = ["All", ...new Set(state.materials.map((material) => material.category))]
  filters.innerHTML = ""

  categories.forEach((category) => {
    const button = document.createElement("button")
    button.className = `filter-button${category === activeCategory ? " active" : ""}`
    button.type = "button"
    button.textContent = category
    button.addEventListener("click", () => {
      activeCategory = category
      renderFilters()
      renderMaterials()
    })
    filters.appendChild(button)
  })
}

function renderMaterials() {
  const results = getFilteredMaterials()
  grid.innerHTML = ""

  results.forEach((material) => {
    const card = template.content.firstElementChild.cloneNode(true)
    const stockPercentage = Math.max(4, Math.min(100, Math.round((material.available / material.original) * 100)))

    card.querySelector(".category-pill").textContent = material.category
    card.querySelector(".condition-chip").textContent = material.condition
    card.querySelector("h3").textContent = material.name
    card.querySelector(".description").textContent = material.description
    card.querySelector(".stock-meter span").style.width = `${stockPercentage}%`
    card.querySelector(".available-count").textContent = `${formatNumber(material.available)} ${material.unit}`
    card.querySelector(".unit-label").textContent = material.unit
    card.querySelector(".location-label").textContent = material.location
    card.querySelector(".use-label").textContent = material.use

    const amountInput = card.querySelector(".amount-input")
    amountInput.max = Math.max(1, material.available)
    amountInput.disabled = material.available < 1

    const addButton = card.querySelector("button")
    addButton.disabled = material.available < 1
    addButton.textContent = material.available < 1 ? "Out of stock" : "Add to tray"
    addButton.addEventListener("click", () => {
      addToTray(material.id, Number(amountInput.value))
    })

    if (material.available < 1) {
      card.classList.add("is-empty")
    }

    grid.appendChild(card)
  })

  const countText = results.length === state.materials.length
    ? `Showing all ${formatNumber(results.length)} materials`
    : `Showing ${formatNumber(results.length)} of ${formatNumber(state.materials.length)} materials`

  resultCount.textContent = countText
  emptyState.hidden = results.length > 0
}

function getFilteredMaterials() {
  let results = [...state.materials]

  if (activeCategory !== "All") {
    results = results.filter((material) => material.category === activeCategory)
  }

  if (searchTerm) {
    results = results.filter((material) => {
      const searchable = [
        material.name,
        material.category,
        material.condition,
        material.location,
        material.use,
        material.description,
        ...(material.tags || [])
      ].join(" ").toLowerCase()
      return searchable.includes(searchTerm)
    })
  }

  const relevance = (material) => {
    if (!searchTerm) return 0
    const name = material.name.toLowerCase()
    const category = material.category.toLowerCase()
    if (name === searchTerm) return 5
    if (name.startsWith(searchTerm)) return 4
    if (name.includes(searchTerm)) return 3
    if (category.includes(searchTerm)) return 2
    return 1
  }

  results.sort((a, b) => {
    if (sortMode === "stock-high") return b.available - a.available
    if (sortMode === "stock-low") return a.available - b.available
    if (sortMode === "az") return a.name.localeCompare(b.name)
    return relevance(b) - relevance(a) || b.available - a.available
  })

  return results
}

function addToTray(materialId, requestedAmount) {
  const material = getMaterialById(materialId)
  if (!material) return

  const amount = Math.floor(requestedAmount)
  if (!amount || amount < 1) {
    showToast("Choose at least one part before adding it to the tray.")
    return
  }

  const existing = state.tray.find((item) => item.materialId === materialId)
  const alreadyRequested = existing ? existing.amount : 0
  const allowedAmount = Math.max(0, material.available - alreadyRequested)

  if (allowedAmount <= 0) {
    showToast(`${material.name} is already fully requested in your tray.`)
    return
  }

  const amountToAdd = Math.min(amount, allowedAmount)

  if (existing) {
    existing.amount += amountToAdd
  } else {
    state.tray.push({ materialId, amount: amountToAdd })
  }

  saveState()
  renderTray()
  renderStats()
  showToast(`${amountToAdd} ${material.unit} of ${material.name} added to the booking tray.`)
}

function renderTray() {
  trayList.innerHTML = ""

  if (state.tray.length === 0) {
    const empty = document.createElement("p")
    empty.className = "empty-tray"
    empty.textContent = "No materials selected yet. Add items from the catalogue to start a booking."
    trayList.appendChild(empty)
    return
  }

  state.tray.forEach((item) => {
    const material = getMaterialById(item.materialId)
    if (!material) return

    const row = document.createElement("article")
    row.className = "tray-item"
    row.innerHTML = `
      <h4>${escapeHtml(material.name)}</h4>
      <p>${formatNumber(item.amount)} ${escapeHtml(material.unit)} reserved from ${escapeHtml(material.location)}</p>
      <div class="tray-item-controls">
        <div class="quantity-stepper" aria-label="Adjust ${escapeHtml(material.name)} quantity">
          <button type="button" data-action="decrease" aria-label="Decrease quantity">−</button>
          <span>${formatNumber(item.amount)}</span>
          <button type="button" data-action="increase" aria-label="Increase quantity">+</button>
        </div>
        <button class="remove-button" type="button">Remove</button>
      </div>
    `

    row.querySelector("[data-action='decrease']").addEventListener("click", () => updateTrayAmount(item.materialId, item.amount - 1))
    row.querySelector("[data-action='increase']").addEventListener("click", () => updateTrayAmount(item.materialId, item.amount + 1))
    row.querySelector(".remove-button").addEventListener("click", () => removeFromTray(item.materialId))
    trayList.appendChild(row)
  })
}

function updateTrayAmount(materialId, newAmount) {
  const material = getMaterialById(materialId)
  if (!material) return

  if (newAmount < 1) {
    removeFromTray(materialId)
    return
  }

  const item = state.tray.find((entry) => entry.materialId === materialId)
  if (!item) return

  item.amount = Math.min(newAmount, material.available)
  saveState()
  renderTray()
  renderStats()
}

function removeFromTray(materialId) {
  state.tray = state.tray.filter((item) => item.materialId !== materialId)
  saveState()
  renderTray()
  renderStats()
}

function submitBooking(event) {
  event.preventDefault()

  if (state.tray.length === 0) {
    showToast("Add at least one material before submitting a booking.")
    return
  }

  const invalidItem = state.tray.find((item) => {
    const material = getMaterialById(item.materialId)
    return !material || item.amount > material.available
  })

  if (invalidItem) {
    showToast("One of the selected materials is no longer available in that amount.")
    renderTray()
    return
  }

  const booking = {
    reference: createReference(),
    createdAt: new Date().toISOString(),
    studentName: document.querySelector("#studentName").value.trim(),
    studentEmail: document.querySelector("#studentEmail").value.trim(),
    projectName: document.querySelector("#projectName").value.trim(),
    pickupDate: document.querySelector("#pickupDate").value,
    notes: document.querySelector("#bookingNotes").value.trim(),
    items: state.tray.map((item) => {
      const material = getMaterialById(item.materialId)
      return {
        materialId: item.materialId,
        name: material.name,
        amount: item.amount,
        unit: material.unit,
        location: material.location
      }
    })
  }

  booking.items.forEach((item) => {
    const material = getMaterialById(item.materialId)
    material.available = Math.max(0, material.available - item.amount)
  })

  state.bookings.unshift(booking)
  state.tray = []
  saveState()

  bookingForm.reset()
  setPickupDateDefault()
  confirmationBox.hidden = false
  confirmationBox.innerHTML = `
    <strong>Booking ${escapeHtml(booking.reference)} created.</strong><br>
    Your booking has been saved in this browser. Collect from the SODI material shelf on ${formatDate(booking.pickupDate)}.
  `

  renderAll()
  showToast(`Booking ${booking.reference} created.`)
}

function createReference() {
  const random = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `SODI-${new Date().getFullYear()}-${random}`
}

function renderHistory() {
  historyList.innerHTML = ""

  if (state.bookings.length === 0) {
    const empty = document.createElement("p")
    empty.className = "empty-tray"
    empty.textContent = "No bookings yet. Completed reservations will appear here."
    historyList.appendChild(empty)
    return
  }

  state.bookings.slice(0, 4).forEach((booking) => {
    const itemText = booking.items
      .map((item) => `${item.amount} ${item.unit} ${item.name}`)
      .join(" · ")

    const article = document.createElement("article")
    article.className = "history-item"
    article.innerHTML = `
      <h4>${escapeHtml(booking.reference)}</h4>
      <p>${escapeHtml(booking.studentName)} · ${formatDate(booking.pickupDate)}</p>
      <p>${escapeHtml(itemText)}</p>
    `
    historyList.appendChild(article)
  })
}

function renderStats() {
  const totalMaterials = state.materials.length
  const totalParts = state.materials.reduce((sum, material) => sum + material.available, 0)
  const reservedParts = state.tray.reduce((sum, item) => sum + item.amount, 0)
  const wasteDiverted = state.materials.reduce((sum, material) => {
    const used = Math.max(0, material.original - material.available)
    return sum + used * material.weight
  }, 0)

  document.querySelector("#totalMaterials").textContent = formatNumber(totalMaterials)
  document.querySelector("#totalParts").textContent = formatNumber(totalParts)
  document.querySelector("#reservedParts").textContent = formatNumber(reservedParts)
  document.querySelector("#reuseScore").textContent = `${wasteDiverted.toFixed(1)} kg`
}

function submitDonationPreview(event) {
  event.preventDefault()

  const name = document.querySelector("#donationName").value.trim()
  const quantity = Number(document.querySelector("#donationQuantity").value)
  const condition = document.querySelector("#donationCondition").value
  const location = document.querySelector("#donationLocation").value.trim() || "Intake shelf"

  if (!name || quantity < 1) return

  const material = {
    id: `custom-${Date.now()}`,
    name,
    category: "New intake",
    available: quantity,
    original: quantity,
    unit: quantity === 1 ? "part" : "parts",
    condition,
    location,
    use: "to be assessed",
    weight: 0.08,
    custom: true,
    description: "New donation entry added through the intake form. Confirm, photograph, and sort before adding it to the shelf.",
    tags: [name.toLowerCase(), "donation", "intake"]
  }

  state.materials.unshift(material)
  saveState()
  event.target.reset()
  activeCategory = "All"
  searchTerm = ""
  searchInput.value = ""
  renderAll()
  showToast(`${name} has been added as a local donation entry.`)
}

function exportBookings() {
  if (state.bookings.length === 0) {
    showToast("There are no bookings to export yet.")
    return
  }

  const header = ["Reference", "Created", "Student", "Email", "Project", "Pickup", "Material", "Amount", "Unit", "Location", "Notes"]
  const rows = state.bookings.flatMap((booking) => booking.items.map((item) => [
    booking.reference,
    booking.createdAt,
    booking.studentName,
    booking.studentEmail,
    booking.projectName,
    booking.pickupDate,
    item.name,
    item.amount,
    item.unit,
    item.location,
    booking.notes
  ]))

  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n")

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "sodi-material-library-bookings.csv"
  link.click()
  URL.revokeObjectURL(url)
  showToast("Booking CSV exported.")
}

function formatDate(value) {
  if (!value) return "the selected date"
  return new Intl.DateTimeFormat("en-NZ", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(`${value}T12:00:00`))
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function showToast(message) {
  let toast = document.querySelector(".toast")
  if (!toast) {
    toast = document.createElement("div")
    toast.className = "toast"
    toast.setAttribute("role", "status")
    toast.setAttribute("aria-live", "polite")
    document.body.appendChild(toast)
  }

  toast.textContent = message
  toast.classList.add("show")
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800)
}

init()
