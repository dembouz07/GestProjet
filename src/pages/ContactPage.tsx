import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">Contactez-nous</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Prêt à transformer votre style ? Prenez rendez-vous pour une consultation personnalisée
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl border-2 border-amber-200">
            <h3 className="text-3xl font-bold text-amber-900 mb-8">Informations de Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-amber-100 p-4 rounded-xl">
                <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Téléphone</p>
                  <p className="text-amber-700">+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-amber-100 p-4 rounded-xl">
                <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Email</p>
                  <p className="text-amber-700">contact@atelierdulook.fr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-amber-100 p-4 rounded-xl">
                <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Adresse</p>
                  <p className="text-amber-700">123 Rue de la Mode<br />75001 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-amber-100 p-4 rounded-xl">
                <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Horaires</p>
                  <p className="text-amber-700">
                    Lun - Ven: 9h00 - 19h00<br />
                    Sam: 10h00 - 18h00<br />
                    Dim: Sur rendez-vous
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-amber-100 to-white rounded-xl border border-amber-300">
              <h4 className="text-xl font-bold text-amber-900 mb-4">Consultation Gratuite</h4>
              <p className="text-amber-700 mb-4">
                Bénéficiez d'une consultation gratuite de 30 minutes pour découvrir nos services 
                et définir vos besoins en matière de style.
              </p>
              <button className="bg-amber-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-900 transition-colors">
                Réserver maintenant
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-amber-200">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Prénom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-amber-900 font-medium mb-2">Nom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-amber-900 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label className="block text-amber-900 font-medium mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
              
              <div>
                <label className="block text-amber-900 font-medium mb-2">Service souhaité</label>
                <select className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50">
                  <option>Conseil en Image Complet</option>
                  <option>Personal Shopping</option>
                  <option>Relooking Complet</option>
                  <option>Coaching Style</option>
                  <option>Consultation Gratuite</option>
                </select>
              </div>
              
              <div>
                <label className="block text-amber-900 font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-800 bg-amber-50"
                  placeholder="Décrivez vos besoins et attentes..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-amber-800 text-white py-4 rounded-lg font-semibold text-lg hover:bg-amber-900 transition-colors shadow-lg hover:shadow-xl"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;