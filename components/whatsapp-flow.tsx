"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Package, Truck, ShoppingCart, FileText, Heart, Utensils } from 'lucide-react'
import { motion } from "framer-motion"

export function WhatsAppFlow() {
  const [isOpen, setIsOpen] = useState(false)

  const errandTypes = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Shopping & Groceries",
      message: "Hi! I need help with shopping/groceries. Here are the details:\n\n📍 Pickup Location: [Store/Market name and location]\n📍 Delivery Location: [Your address]\n📝 Items needed: [List of items]\n⏰ Preferred time: [When you need it]\n\nPlease let me know the cost and estimated time. Thank you!"
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Package Pickup & Delivery",
      message: "Hi! I need a package pickup and delivery service. Details:\n\n📍 Pickup Location: [Full address]\n📍 Delivery Location: [Full address]\n📦 Package details: [Size, weight, contents]\n⏰ Preferred pickup time: [When]\n💰 Declared value: [If valuable]\n\nPlease confirm availability and pricing. Thanks!"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document & Office Errands",
      message: "Hi! I need help with document/office errands. Details:\n\n📍 Location: [Office/institution address]\n📄 Task: [What needs to be done - pickup, delivery, submission]\n⏰ Deadline: [When it needs to be completed]\n📝 Special instructions: [Any specific requirements]\n\nPlease let me know if you can assist and the cost. Thank you!"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Pharmacy & Health",
      message: "Hi! I need help with pharmacy/health errands. Details:\n\n🏥 Pharmacy/Hospital: [Name and location]\n💊 Items needed: [Medicines, prescriptions, health products]\n📍 Delivery to: [Your address]\n⏰ Urgency: [How urgent is this]\n📝 Prescription: [If you have a prescription]\n\nPlease confirm you can help and the charges. Thanks!"
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Food & Restaurant Orders",
      message: "Hi! I'd like to order food delivery. Details:\n\n🍽️ Restaurant: [Restaurant name and location]\n📍 Delivery address: [Your full address]\n🍕 Order: [What you want to order]\n⏰ Preferred delivery time: [When you want it]\n💳 Payment: [How you'll pay - M-Pesa, cash, etc.]\n\nPlease confirm availability and total cost including delivery. Thank you!"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Custom Errand",
      message: "Hi! I have a custom errand request. Details:\n\n📝 Task description: [Explain what you need done]\n📍 Location(s): [Where the errand needs to be done]\n⏰ Timeline: [When you need it completed]\n💰 Budget: [If you have a budget in mind]\n📞 Contact: [Your phone number for coordination]\n\nPlease let me know if you can help and the cost. Thanks!"
    }
  ]

  const handleErrandClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/254797396914?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="h-5 w-5 mr-2" />
            Start Your Errand
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            Choose Your Errand Type
          </DialogTitle>
          <DialogDescription>
            Select the type of errand you need help with, and we'll send a pre-filled WhatsApp message.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-3 py-4">
          {errandTypes.map((errand, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleErrandClick(errand.message)}
              className="flex items-center gap-3 p-3 text-left border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-primary">{errand.icon}</div>
              <span className="font-medium text-sm">{errand.title}</span>
            </motion.button>
          ))}
        </div>
        <div className="text-center text-xs text-gray-500 mt-2">
          This will open WhatsApp with a pre-filled message
        </div>
      </DialogContent>
    </Dialog>
  )
}
