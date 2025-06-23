"use client"

import { useState } from "react"
import { Star, MapPin, Clock, GraduationCap, ShoppingCart, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function DermatologyPharmacySite() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])

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
      photo: "/placeholder.svg?height=200&width=200",
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
      photo: "/placeholder.svg?height=200&width=200",
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
      photo: "/placeholder.svg?height=200&width=200",
    },
  ]

  const medications = [
    {
      id: 1,
      name: "Protetor Solar FPS 60",
      brand: "SkinCare Plus",
      price: "R$ 45,90",
      stock: 25,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 2,
      name: "Hidratante Facial",
      brand: "DermaLux",
      price: "R$ 32,50",
      stock: 18,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 3,
      name: "Sabonete Antiacne",
      brand: "CleanSkin",
      price: "R$ 28,90",
      stock: 42,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: 4,
      name: "Creme Anti-idade",
      brand: "YouthGlow",
      price: "R$ 89,90",
      stock: 12,
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const addToCart = (medication: any) => {
    setCart([...cart, medication])
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const navigation = [
    { id: "home", label: "Início" },
    { id: "professionals", label: "Profissionais" },
    { id: "medications", label: "Medicamentos" },
    { id: "contact", label: "Contato" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">DermaCare</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">{cart.length}</Badge>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === "home" && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-16">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Cuidados Dermatológicos
                <span className="block text-green-600">de Excelência</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Encontre os melhores dermatologistas e produtos para cuidar da sua pele com segurança e qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setActiveSection("professionals")}
                >
                  Ver Profissionais
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection("medications")}>
                  Explorar Produtos
                </Button>
              </div>
            </section>

            {/* Features */}
            <section className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 bg-white/70 backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Profissionais Qualificados</h3>
                <p className="text-gray-600">Dermatologistas experientes com anos de formação e especialização.</p>
              </Card>

              <Card className="text-center p-6 bg-white/70 backdrop-blur-sm">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Avaliações Reais</h3>
                <p className="text-gray-600">
                  Sistema de avaliação com estrelas baseado em experiências reais dos pacientes.
                </p>
              </Card>

              <Card className="text-center p-6 bg-white/70 backdrop-blur-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Localização Fácil</h3>
                <p className="text-gray-600">Encontre profissionais e farmácias próximas a você com geolocalização.</p>
              </Card>
            </section>
          </div>
        )}

        {/* Professionals Section */}
        {activeSection === "professionals" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Profissionais</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Conheça nossa equipe de dermatologistas especializados, com anos de experiência e excelentes avaliações.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.map((professional) => (
                <Card key={professional.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Image
                      src={professional.photo || "/placeholder.svg"}
                      alt={professional.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4"
                    />
                    <CardTitle className="text-xl">{professional.name}</CardTitle>
                    <p className="text-green-600 font-medium">{professional.specialty}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Experiência:</span>
                      <span className="font-medium">{professional.experience} anos</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Avaliação:</span>
                      <div className="flex items-center space-x-1">
                        {renderStars(professional.rating)}
                        <span className="text-sm text-gray-600 ml-2">
                          {professional.rating} ({professional.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Consulta:</span>
                      <span className="font-bold text-green-600">{professional.price}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{professional.hours}</span>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Agendar Consulta</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Medications Section */}
        {activeSection === "medications" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Medicamentos e Produtos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Encontre os melhores produtos dermatológicos com preços competitivos e entrega rápida.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Buscar medicamentos..." className="pl-10 bg-white/80 backdrop-blur-sm" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {medications.map((medication) => (
                <Card key={medication.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Image
                      src={medication.image || "/placeholder.svg"}
                      alt={medication.name}
                      width={120}
                      height={120}
                      className="mx-auto mb-4 rounded-lg"
                    />
                    <CardTitle className="text-lg">{medication.name}</CardTitle>
                    <p className="text-sm text-gray-600">{medication.brand}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">{medication.price}</span>
                      <Badge
                        variant={
                          medication.stock > 20 ? "default" : medication.stock > 10 ? "secondary" : "destructive"
                        }
                      >
                        {medication.stock} em estoque
                      </Badge>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => addToCart(medication)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tem dúvidas? Entre em contato conosco. Estamos aqui para ajudar com seus cuidados dermatológicos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white/80 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <span>Rua das Flores, 123 - Centro, São Paulo - SP</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>Segunda a Sexta: 8h às 18h</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Envie uma Mensagem</h3>
                <div className="space-y-4">
                  <Input placeholder="Seu nome" className="bg-white/50" />
                  <Input placeholder="Seu email" type="email" className="bg-white/50" />
                  <textarea
                    placeholder="Sua mensagem"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700">Enviar Mensagem</Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <h3 className="text-xl font-bold">DermaCare</h3>
          </div>
          <p className="text-gray-400 mb-4">Cuidando da sua pele com excelência e dedicação.</p>
          <p className="text-sm text-gray-500">© 2024 DermaCare. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
