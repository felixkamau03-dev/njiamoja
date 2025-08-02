"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  MessageCircle,
  Truck,
  Package,
  MapPin,
  Star,
  Clock,
  Shield,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { WhatsAppFlow } from "@/components/whatsapp-flow"
import { AnimatedHeader } from "@/components/animated-header"

export default function HomePage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254797396914?text=Hi! I'd like you to run an errand for me in Nairobi.", "_blank")
  }

  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Nairobi Delivery Services",
      description:
        "Fast delivery across Nairobi - from CBD to Westlands, Kilimani to Karen, and everywhere in between.",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Package Pickup & Drop-off",
      description: "Secure package handling across all Nairobi estates. Pay conveniently via M-Pesa.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local Errands",
      description: "Shopping at Sarit Centre, document pickup at Times Tower, or any errand across the city.",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Fresh Groceries",
      shop: "Local Market",
      price: "KSH 2,599",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Office Supplies",
      shop: "Business Store",
      price: "KSH 1,550",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Pharmacy Items",
      shop: "Health Plus",
      price: "KSH 1,275",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Restaurant Meals",
      shop: "Tasty Bites",
      price: "KSH 1,899",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
    },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely fantastic service! Quick, reliable, and professional. Saved me so much time.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Used this service multiple times for office deliveries. Always on time and great communication.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Very convenient for busy schedules. The WhatsApp ordering system is so easy to use!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Animated Header */}
      <AnimatedHeader />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Tell us your errand, we'll handle the rest
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Unlike big courier companies, Run Errands For You is personalized and flexible. It's not just about package
            delivery—it's about handling the small but important errands people don't have time for.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg font-medium text-primary mb-6"
          >
            From delivering packages to dropping documents at offices, picking up items from stores - we make it
            hassle-free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <WhatsAppFlow />
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500"
          >
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Same Day Delivery
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              M-Pesa Accepted
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2" />
              Trusted in Nairobi
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We handle a wide range of errands to make your life easier and more convenient.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">We Cover All Nairobi</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our reliable errand services reach every corner of Nairobi
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              "CBD & Downtown",
              "Westlands & Parklands",
              "Kilimani & Kileleshwa",
              "Karen & Lang'ata",
              "Eastlands & Kasarani",
              "Lavington & Kilimani",
              "Runda & Muthaiga",
              "South B & South C",
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-sm text-center"
              >
                <MapPin className="h-5 w-5 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">{area}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Shop Local Products</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse products from various local shops and have them delivered to your doorstep.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.shop}
                      </Badge>
                      <h4 className="font-semibold text-lg">{product.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() =>
                          window.open(
                            `https://wa.me/254797396914?text=Hi! I want to order ${product.name} from ${product.shop} for ${product.price}. Please confirm availability and delivery details for Nairobi.`,
                            "_blank",
                          )
                        }
                      >
                        Order via WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                        <AvatarFallback>
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{review.comment}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-primary text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Get Your Errand Done?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 opacity-90"
          >
            WhatsApp us now - we're always ready to move for you across Nairobi!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="secondary"
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-gray-100"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Message Us on WhatsApp
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-6 w-6" />
                <span className="text-xl font-bold">Run Errands for You</span>
              </div>
              <p className="text-gray-400">Your trusted partner for all personal errand services.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Delivery Services</li>
                <li>Package Pickup</li>
                <li>Shopping Assistance</li>
                <li>Custom Errands</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+254 797 396 914</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@runerrandsnairobi.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Serving All Nairobi</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Run Errands for You. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  )
}
