// Data
const professionals = [
  {
    id: 1,
    name: "Dra. Maria Silva",
    specialty: "Dermatologista",
    experience: 15,
    rating: 4.8,
    reviews: 127,
    price: "R$ 250",
    hours: "08:00 - 18:00",
    photo: "👩‍⚕️",
  },
  {
    id: 2,
    name: "Dr. João Santos",
    specialty: "Dermatologista Pediátrico",
    experience: 12,
    rating: 4.9,
    reviews: 89,
    price: "R$ 280",
    hours: "09:00 - 17:00",
    photo: "👨‍⚕️",
  },
  {
    id: 3,
    name: "Dra. Ana Costa",
    specialty: "Dermatologia Estética",
    experience: 8,
    rating: 4.7,
    reviews: 156,
    price: "R$ 300",
    hours: "10:00 - 19:00",
    photo: "👩‍⚕️",
  },
  {
    id: 4,
    name: "Dr. Carlos Oliveira",
    specialty: "Dermatologista Clínico",
    experience: 20,
    rating: 4.9,
    reviews: 203,
    price: "R$ 320",
    hours: "07:00 - 16:00",
    photo: "👨‍⚕️",
  },
  {
    id: 5,
    name: "Dra. Fernanda Lima",
    specialty: "Tricologia",
    experience: 10,
    rating: 4.6,
    reviews: 94,
    price: "R$ 270",
    hours: "08:30 - 17:30",
    photo: "👩‍⚕️",
  },
  {
    id: 6,
    name: "Dr. Roberto Mendes",
    specialty: "Dermatopatologia",
    experience: 18,
    rating: 4.8,
    reviews: 167,
    price: "R$ 350",
    hours: "09:00 - 18:00",
    photo: "👨‍⚕️",
  },
]

const medications = [
  {
    id: 1,
    name: "Protetor Solar FPS 60",
    brand: "SkinCare Plus",
    price: 45.9,
    stock: 25,
    image: "🧴",
  },
  {
    id: 2,
    name: "Hidratante Facial",
    brand: "DermaLux",
    price: 32.5,
    stock: 18,
    image: "🧴",
  },
  {
    id: 3,
    name: "Sabonete Antiacne",
    brand: "CleanSkin",
    price: 28.9,
    stock: 42,
    image: "🧼",
  },
  {
    id: 4,
    name: "Creme Anti-idade",
    brand: "YouthGlow",
    price: 89.9,
    stock: 12,
    image: "🧴",
  },
  {
    id: 5,
    name: "Sérum Vitamina C",
    brand: "VitaSkin",
    price: 67.5,
    stock: 8,
    image: "💧",
  },
  {
    id: 6,
    name: "Loção Hidratante Corporal",
    brand: "BodyCare",
    price: 24.9,
    stock: 35,
    image: "🧴",
  },
  {
    id: 7,
    name: "Shampoo Anticaspa",
    brand: "ScalpHealth",
    price: 31.9,
    stock: 22,
    image: "🧴",
  },
  {
    id: 8,
    name: "Gel de Limpeza Facial",
    brand: "PureSkin",
    price: 29.9,
    stock: 19,
    image: "🧴",
  },
]

// State
let cart = []
let filteredMedications = [...medications]

// DOM Elements
const navButtons = document.querySelectorAll(".nav-btn, .nav-btn-mobile")
const sections = document.querySelectorAll(".section")
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const navMobile = document.querySelector(".nav-mobile")
const cartIcon = document.querySelector(".cart-icon")
const cartCount = document.querySelector(".cart-count")
const cartModal = document.getElementById("cart-modal")
const closeModal = document.querySelector(".close-modal")
const medicationSearch = document.getElementById("medication-search")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadProfessionals()
  loadMedications()
  updateCartCount()

  // Navigation
  navButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const section = this.dataset.section
      if (section) {
        showSection(section)
      }
    })
  })

  // Mobile menu
  mobileMenuBtn.addEventListener("click", function () {
    navMobile.classList.toggle("active")
    const icon = this.querySelector("i")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-times")
  })

  // Cart modal
  cartIcon.addEventListener("click", () => {
    showCartModal()
  })

  closeModal.addEventListener("click", () => {
    cartModal.style.display = "none"
  })

  // Search
  if (medicationSearch) {
    medicationSearch.addEventListener("input", function () {
      filterMedications(this.value)
    })
  }

  // Contact form
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
      this.reset()
    })
  }

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none"
    }
  })
})

// Functions
function showSection(sectionId) {
  // Hide all sections
  sections.forEach((section) => {
    section.classList.remove("active")
  })

  // Show target section
  const targetSection = document.getElementById(sectionId)
  if (targetSection) {
    targetSection.classList.add("active")
  }

  // Update navigation
  navButtons.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.section === sectionId) {
      btn.classList.add("active")
    }
  })

  // Close mobile menu
  navMobile.classList.remove("active")
  const menuIcon = mobileMenuBtn.querySelector("i")
  menuIcon.classList.remove("fa-times")
  menuIcon.classList.add("fa-bars")
}

function loadProfessionals() {
  const grid = document.getElementById("professionals-grid")
  if (!grid) return

  grid.innerHTML = professionals
    .map(
      (professional) => `
        <div class="professional-card">
            <div class="professional-photo">${professional.photo}</div>
            <div class="professional-name">${professional.name}</div>
            <div class="professional-specialty">${professional.specialty}</div>
            <div class="professional-info">
                <div class="info-row">
                    <span>Experiência:</span>
                    <span>${professional.experience} anos</span>
                </div>
                <div class="info-row">
                    <span>Avaliação:</span>
                    <div>
                        ${renderStars(professional.rating)}
                        <span class="rating-text">${professional.rating} (${professional.reviews})</span>
                    </div>
                </div>
                <div class="info-row">
                    <span>Consulta:</span>
                    <span class="price">${professional.price}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-clock"></i>
                    <span>${professional.hours}</span>
                </div>
            </div>
            <button class="schedule-btn" onclick="scheduleAppointment(${professional.id})">
                Agendar Consulta
            </button>
        </div>
    `,
    )
    .join("")
}

function loadMedications() {
  const grid = document.getElementById("medications-grid")
  if (!grid) return

  grid.innerHTML = filteredMedications
    .map(
      (medication) => `
        <div class="medication-card">
            <div class="medication-image">${medication.image}</div>
            <div class="medication-name">${medication.name}</div>
            <div class="medication-brand">${medication.brand}</div>
            <div class="medication-footer">
                <div class="medication-price">R$ ${medication.price.toFixed(2).replace(".", ",")}</div>
                <div class="stock-badge ${getStockClass(medication.stock)}">
                    ${medication.stock} em estoque
                </div>
            </div>
            <button class="add-to-cart" onclick="addToCart(${medication.id})">
                <i class="fas fa-shopping-cart"></i>
                Adicionar ao Carrinho
            </button>
        </div>
    `,
    )
    .join("")
}

function renderStars(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fas fa-star star"></i>'
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fas fa-star-half-alt star"></i>'
    } else {
      stars += '<i class="far fa-star star empty"></i>'
    }
  }
  return `<div class="stars">${stars}</div>`
}

function getStockClass(stock) {
  if (stock > 20) return "stock-high"
  if (stock > 10) return "stock-medium"
  return "stock-low"
}

function scheduleAppointment(professionalId) {
  const professional = professionals.find((p) => p.id === professionalId)
  if (professional) {
    alert(`Agendamento solicitado para ${professional.name}. Entraremos em contato para confirmar horário.`)
  }
}

function addToCart(medicationId) {
  const medication = medications.find((m) => m.id === medicationId)
  if (medication && medication.stock > 0) {
    cart.push({ ...medication })
    medication.stock--
    updateCartCount()
    loadMedications() // Reload to update stock display

    // Show success message
    const btn = event.target
    const originalText = btn.innerHTML
    btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!'
    btn.style.background = "#4caf50"
    setTimeout(() => {
      btn.innerHTML = originalText
      btn.style.background = "#2196f3"
    }, 1500)
  } else {
    alert("Produto fora de estoque!")
  }
}

function updateCartCount() {
  cartCount.textContent = cart.length
  cartCount.style.display = cart.length > 0 ? "flex" : "none"
}

function showCartModal() {
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Seu carrinho está vazio</p>'
    cartTotal.textContent = "Total: R$ 0,00"
  } else {
    cartItems.innerHTML = cart
      .map(
        (item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.brand}</p>
                </div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2).replace(".", ",")}</div>
            </div>
        `,
      )
      .join("")

    const total = cart.reduce((sum, item) => sum + item.price, 0)
    cartTotal.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`
  }

  cartModal.style.display = "block"
}

function filterMedications(searchTerm) {
  filteredMedications = medications.filter(
    (medication) =>
      medication.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medication.brand.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  loadMedications()
}

// Checkout function
document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("checkout-btn")
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Seu carrinho está vazio!")
        return
      }

      const total = cart.reduce((sum, item) => sum + item.price, 0)
      alert(`Pedido finalizado! Total: R$ ${total.toFixed(2).replace(".", ",")}\n\nObrigado pela preferência!`)
      cart = []
      updateCartCount()
      cartModal.style.display = "none"
    })
  }
})

// Smooth scrolling for hero buttons
document.addEventListener("DOMContentLoaded", () => {
  const heroButtons = document.querySelectorAll(".hero-buttons .btn")
  heroButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const section = this.dataset.section
      if (section) {
        showSection(section)
      }
    })
  })
})
