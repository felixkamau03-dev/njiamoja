"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MessageCircle, Truck, Package, MapPin, Star, Clock, Shield, Phone, Mail, Instagram, Facebook } from 'lucide-react'
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

  const errandTypes = [
    {
      id: 1,
      name: "Fresh Groceries",
      category: "Shopping Errands",
      image: "/grocery-delivery.png",
      description: "We'll shop for your groceries from any supermarket or local market in Nairobi",
    },
    {
      id: 2,
      name: "Office Supplies",
      category: "Business Errands",
      image: "/placeholder.svg?height=200&width=200&text=Office+Supplies",
      description: "Pick up office supplies, documents, or business materials from any location",
    },
    {
      id: 3,
      name: "Pharmacy Items",
      category: "Health Errands",
      image: "/placeholder.svg?height=200&width=200&text=Pharmacy+Items",
      description: "Collect prescriptions, medicines, or health products from pharmacies",
    },
    {
      id: 4,
      name: "Restaurant Meals",
      category: "Food Delivery",
      image: "/placeholder.svg?height=200&width=200&text=Restaurant+Meals",
      description: "Order and deliver meals from your favorite restaurants across Nairobi",
    },
  ]

  const serviceAreas = [
    {
      area: "CBD & Downtown",
      landmarks: ["Times Tower", "KICC", "City Market", "Railway Station"],
      description: "Heart of Nairobi's business district"
    },
    {
      area: "Westlands & Parklands",
      landmarks: ["Sarit Centre", "Westgate Mall", "ABC Place", "Parklands Mosque"],
      description: "Shopping and commercial hub"
    },
    {
      area: "Kilimani & Kileleshwa",
      landmarks: ["Yaya Centre", "The Mall", "Kilimani Primary", "Kileleshwa Shopping Centre"],
      description: "Residential and shopping areas"
    },
    {
      area: "Karen & Lang'ata",
      landmarks: ["Karen Blixen Museum", "Giraffe Centre", "The Junction", "Bomas of Kenya"],
      description: "Upmarket residential area"
    },
    {
      area: "Eastlands & Kasarani",
      landmarks: ["Kasarani Stadium", "Thika Road Mall", "Garden City", "Roysambu"],
      description: "Growing residential areas"
    },
    {
      area: "Lavington & Kilimani",
      landmarks: ["Lavington Mall", "Scale Golf Club", "Brookside Drive", "Wood Avenue"],
      description: "Premium residential neighborhoods"
    }
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely fantastic service! Quick, reliable, and professional. Saved me so much time.",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Westlands"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Used this service multiple times for office deliveries. Always on time and great communication.",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "CBD"
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Very convenient for busy schedules. The WhatsApp ordering system is so easy to use!",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Karen"
    },
    {
      name: "James Mwangi",
      rating: 5,
      comment: "Helped me with grocery shopping when I was sick. Very caring and professional service.",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Kilimani"
    },
    {
      name: "Grace Wanjiku",
      rating: 5,
      comment: "Perfect for busy parents! They picked up my kids' school supplies and delivered them same day.",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Lavington"
    },
    {
      name: "David Ochieng",
      rating: 4,
      comment: "Great service for office errands. Very reliable and reasonably priced.",
      avatar: "/placeholder.svg?height=40&width=40",
      location: "Parklands"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
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
      <section id="services" className="py-16 bg-white">
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
      <section id="areas" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Areas We Serve in Nairobi</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our reliable errand services reach every corner of Nairobi, from busy commercial areas to quiet residential neighborhoods.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceAreas.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{location.area}</CardTitle>
                    </div>
                    <CardDescription className="text-sm text-gray-600">
                      {location.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Key Landmarks:</p>
                      <div className="flex flex-wrap gap-1">
                        {location.landmarks.map((landmark, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {landmark}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Errand Types Showcase Section */}
      <section id="errands" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Types of Errands We Handle</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From groceries to documents, we handle all kinds of errands across Nairobi. Here are some examples of what we can do for you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {errandTypes.map((errand, index) => (
              <motion.div
                key={errand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <Image
                        src={errand.image || "/placeholder.svg"}
                        alt={errand.name}
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-xs">
                        {errand.category}
                      </Badge>
                      <h4 className="font-semibold text-lg">{errand.name}</h4>
                      <p className="text-sm text-gray-600">{errand.description}</p>
                      <Button
                        className="w-full"
                        onClick={() =>
                          window.open(
                            `https://wa.me/254797396914?text=Hi! I need help with ${errand.name.toLowerCase()}. Please let me know how you can assist and the pricing for this errand in Nairobi.`,
                            "_blank",
                          )
                        }
                      >
                        Request This Errand
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Carousel Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across Nairobi.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardContent className="p-6 flex flex-col h-full">
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
                            <div className="flex-1">
                              <h4 className="font-semibold">{review.name}</h4>
                              <p className="text-sm text-gray-500">{review.location}</p>
                              <div className="flex mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 italic flex-1">{`"${review.comment}"`}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
