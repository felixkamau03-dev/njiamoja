"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageCircle, Package, Truck, ShoppingBag, FileText, MapPin } from "lucide-react"

interface ErrandType {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  message: string
}

export function WhatsAppFlow() {
  const [selectedErrand, setSelectedErrand] = useState<ErrandType | null>(null)

  const errandTypes: ErrandType[] = [
    {
      id: "delivery",
      title: "Package Delivery",
      icon: <Package className="h-6 w-6" />,
      description: "Send packages across Nairobi",
      message:
        "Hi! I need to send a package in Nairobi. Here are the details:\n\n📦 PICKUP LOCATION: \n📍 DELIVERY LOCATION: \n📱 RECIPIENT CONTACT: \n💰 PACKAGE VALUE: \n⏰ PREFERRED TIME: \n\nPlease confirm availability and pricing. Thank you!",
    },
    {
      id: "pickup",
      title: "Package Pickup",
      icon: <Truck className="h-6 w-6" />,
      description: "Collect items from any location",
      message:
        "Hello! I need a package picked up in Nairobi.\n\n📍 PICKUP LOCATION: \n🏠 DELIVERY TO ME AT: \n📱 SENDER CONTACT: \n📦 PACKAGE DESCRIPTION: \n⏰ PREFERRED PICKUP TIME: \n\nKindly confirm availability and cost. Thanks!",
    },
    {
      id: "shopping",
      title: "Shopping Errand",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Shop for groceries or items",
      message:
        "Hi! I need shopping assistance in Nairobi.\n\n🛒 SHOPPING LIST: \n🏪 PREFERRED STORE: \n📍 DELIVERY ADDRESS: \n💳 PAYMENT METHOD: M-Pesa/Cash\n⏰ WHEN NEEDED: \n\nPlease let me know the service fee. Thank you!",
    },
    {
      id: "documents",
      title: "Document Services",
      icon: <FileText className="h-6 w-6" />,
      description: "Document pickup/delivery",
      message:
        "Hello! I need help with documents in Nairobi.\n\n📄 SERVICE NEEDED: Pickup/Delivery/Both\n🏢 LOCATION 1: \n🏢 LOCATION 2: \n📋 DOCUMENT TYPE: \n⏰ URGENCY: Same day/Next day\n\nKindly confirm availability and pricing!",
    },
    {
      id: "custom",
      title: "Custom Errand",
      icon: <MapPin className="h-6 w-6" />,
      description: "Any other errand you need",
      message:
        "Hi! I have a custom errand request in Nairobi.\n\n📝 ERRAND DETAILS: \n📍 LOCATION(S): \n⏰ TIMELINE: \n💰 ESTIMATED BUDGET: \n📱 MY CONTACT: \n\nPlease let me know if you can assist and the cost involved. Thanks!",
    },
  ]

  const handleErrandSelect = (errand: ErrandType) => {
    const whatsappUrl = `https://wa.me/+254797396914?text=${encodeURIComponent(errand.message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <MessageCircle className="h-4 w-4 mr-2" />
          WhatsApp Us
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            Choose Your Errand Type
          </DialogTitle>
          <DialogDescription>
            Select the type of errand you need, and we'll open WhatsApp with a pre-filled message for you.
          </DialogDescription>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mt-4"
        >
          {errandTypes.map((errand) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              key={errand.id}
            >
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-green-200"
                onClick={() => handleErrandSelect(errand)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">{errand.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{errand.title}</CardTitle>
                      <CardDescription className="text-sm">{errand.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="mt-6 p-4 bg-green-50 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Pro Tip
            </Badge>
          </div>
          <p className="text-sm text-green-700">
            Each option opens WhatsApp with a pre-filled message template. Just add your specific details and send!
          </p>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
