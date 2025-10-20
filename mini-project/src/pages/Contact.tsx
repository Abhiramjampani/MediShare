import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = {
    email: "abhiramjampani7@gmail.com",
    phone: "+91 7569986225",
    address: "IIIT Lucknow, Uttar Pradesh, India",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/abhiram-jampani-323b37259/",
      github: "https://github.com/Abhiramjampani",
      twitter: "https://twitter.com", // Add your Twitter if you have one
      facebook: "https://facebook.com", // Add your Facebook if you have one
      instagram: "https://www.instagram.com/abhiramjampani/",
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-medishare-dark mb-4">Get In Touch</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions about MediShare? We'd love to hear from you. 
              Reach out to us through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Email Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medishare-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center break-words">{contactInfo.email}</p>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medishare-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{contactInfo.phone}</p>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medishare-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-center">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{contactInfo.address}</p>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Connect With Us</CardTitle>
              <CardDescription className="text-center">
                Follow us on social media to stay updated with our latest news and initiatives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-blue-600 hover:text-white transition-colors"
                  onClick={() => window.open(contactInfo.socialMedia.linkedin, '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gray-800 hover:text-white transition-colors"
                  onClick={() => window.open(contactInfo.socialMedia.github, '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-sky-500 hover:text-white transition-colors"
                  onClick={() => window.open(contactInfo.socialMedia.twitter, '_blank')}
                >
                  <Twitter className="w-5 h-5 mr-2" />
                  Twitter
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-blue-700 hover:text-white transition-colors"
                  onClick={() => window.open(contactInfo.socialMedia.facebook, '_blank')}
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-pink-600 hover:text-white transition-colors"
                  onClick={() => window.open(contactInfo.socialMedia.instagram, '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-medishare-dark mb-4">About MediShare</h3>
            <p className="text-gray-600 leading-relaxed">
              MediShare is committed to reducing medical waste and improving healthcare access 
              through smart medicine redistribution. Join us in our mission to turn waste into 
              life-saving support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
