import React from 'react';
import { Palette, Scissors, Users, Star } from 'lucide-react';

interface ServicesPageProps {
  navigateTo: (page: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">Nos Services</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Des prestations sur-mesure pour révéler votre style et transformer votre image
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
            <div className="flex items-center mb-6">
              <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Palette size={24} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Conseil en Image Complet</h3>
            </div>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Analyse morphologique, colorimétrie personnalisée et définition de votre style unique. 
              Séance de 3h incluant un dossier personnalisé avec vos couleurs et recommandations.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-amber-800">À partir de 150€</span>
              <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
            <div className="flex items-center mb-6">
              <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Scissors size={24} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Personal Shopping</h3>
            </div>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Accompagnement personnalisé pour renouveler votre garde-robe. Shopping guidé avec 
              sélection de pièces adaptées à votre morphologie et budget.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-amber-800">À partir de 120€</span>
              <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
            <div className="flex items-center mb-6">
              <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Relooking Complet</h3>
            </div>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Transformation complète incluant conseil en image, personal shopping, coiffure et maquillage. 
              L'expérience ultime pour une métamorphose totale.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-amber-800">À partir de 350€</span>
              <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-200">
            <div className="flex items-center mb-6">
              <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Star size={24} />
              </div>
              <h3 className="text-2xl font-bold text-amber-900">Coaching Style</h3>
            </div>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Accompagnement sur plusieurs séances pour développer votre autonomie stylistique. 
              Apprenez à créer vos looks et à faire les bons choix mode.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-amber-800">À partir de 200€</span>
              <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-800 to-amber-900 p-8 rounded-2xl text-center text-white shadow-xl border-2 border-amber-700">
          <h3 className="text-3xl font-bold mb-4">Consultation Gratuite</h3>
          <p className="text-xl mb-6 text-amber-100">
            Découvrez quel service correspond le mieux à vos besoins lors d'un entretien de 30 minutes
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-white text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-stone-50 transition-colors"
          >
            Réserver ma consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;