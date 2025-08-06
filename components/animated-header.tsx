"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Truck, Menu, X } from 'lucide-react'
import { motion } from "framer-motion"
import { useState } from "react"

export function AnimatedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254797396914?text=Hi! I'd like you to run an errand for me in Nairobi.", "_blank")
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm border-b sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Truck className="h-8 w-8 text-primary" />
            </motion.div>
            <span className="text-xl font-bold text-gray-900">Run Errands for You</span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#areas" className="text-gray-600 hover:text-primary transition-colors">
              Areas
            </a>
            <a href="#errands" className="text-gray-600 hover:text-primary transition-colors">
              Errands
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">
              Reviews
            </a>
          </motion.nav>

          {/* WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden md:block"
          >
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t py-4"
          >
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#areas" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Areas
              </a>
              <a 
                href="#errands" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Errands
              </a>
              <a 
                href="#reviews" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <Button 
                onClick={() => {
                  handleWhatsAppClick()
                  setIsMenuOpen(false)
                }} 
                className="bg-green-600 hover:bg-green-700 w-full"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
