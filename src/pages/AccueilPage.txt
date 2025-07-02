import React from 'react';
import { Star, Users, Palette } from 'lucide-react';

interface AccueilPageProps {
  navigateTo: (page: string) => void;
}

const AccueilPage: React.FC<AccueilPageProps> = ({ navigateTo }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200">
              <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
                Révélez Votre
                <span className="text-amber-700 block">Style Unique</span>
              </h2>
              <p className="text-xl text-amber-800 mb-8 leading-relaxed">
                Découvrez l'art du style personnalisé avec nos experts en mode. 
                Transformez votre garde-robe et exprimez votre personnalité avec élégance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateTo('services')}
                  className="bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Découvrir nos Services
                </button>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-800 hover:text-white transition-all duration-300"
                >
                  Prendre Rendez-vous
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white p-4 rounded-2xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Styliste professionnelle" 
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-0">
                <div className="w-32 h-32 bg-amber-300 rounded-full opacity-30"></div>
              </div>
              <div className="absolute -top-6 -left-6 z-0">
                <div className="w-24 h-24 bg-stone-300 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200">
            <h3 className="text-4xl font-bold text-amber-900 mb-4">Nos Transformations</h3>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Découvrez quelques-unes de nos plus belles réussites en matière de style et d'élégance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-amber-200">
              <img 
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Transformation style professionnel" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Style Professionnel</h4>
                  <p className="text-sm">Élégance et confiance au bureau</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-amber-200">
              <img 
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Style décontracté chic" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Décontracté Chic</h4>
                  <p className="text-sm">Confort et style au quotidien</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-amber-200">
              <img 
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Style soirée élégant" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Soirée Élégante</h4>
                  <p className="text-sm">Glamour pour vos événements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200">
            <h3 className="text-4xl font-bold text-amber-900 mb-4">Pourquoi Choisir Atelier du Look ?</h3>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Une approche personnalisée pour révéler votre style authentique
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200 shadow-lg">
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Palette size={32} />
              </div>
              <h4 className="text-2xl font-bold text-amber-900 mb-4">Style Personnalisé</h4>
              <p className="text-amber-700 leading-relaxed">
                Analyse de votre morphologie, colorimétrie et style de vie pour créer un look qui vous ressemble.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200 shadow-lg">
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h4 className="text-2xl font-bold text-amber-900 mb-4">Expertise Reconnue</h4>
              <p className="text-amber-700 leading-relaxed">
                Plus de 10 ans d'expérience dans le conseil en image et la mode avec des stylistes certifiés.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-amber-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-amber-200 shadow-lg">
              <div className="bg-amber-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star size={32} />
              </div>
              <h4 className="text-2xl font-bold text-amber-900 mb-4">Satisfaction Garantie</h4>
              <p className="text-amber-700 leading-relaxed">
                98% de clients satisfaits qui ont transformé leur image et gagné en confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg border border-amber-200">
            <h3 className="text-4xl font-bold text-amber-900 mb-4">Témoignages Clients</h3>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de leur expérience avec Atelier du Look
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-xl border-2 border-amber-200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Cliente satisfaite" 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-300"
                />
                <div>
                  <h4 className="font-bold text-amber-900">Marie Dubois</h4>
                  <p className="text-amber-700">Cadre supérieure</p>
                </div>
              </div>
              <p className="text-amber-800 italic leading-relaxed">
                "Une expérience transformatrice ! L'équipe d'Atelier du Look a su comprendre mes besoins 
                et m'a aidée à développer un style professionnel qui me correspond parfaitement."
              </p>
              <div className="flex text-amber-600 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-xl border-2 border-amber-200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Cliente satisfaite" 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-300"
                />
                <div>
                  <h4 className="font-bold text-amber-900">Sophie Martin</h4>
                  <p className="text-amber-700">Entrepreneure</p>
                </div>
              </div>
              <p className="text-amber-800 italic leading-relaxed">
                "Le relooking complet a dépassé toutes mes attentes. Je me sens plus confiante et 
                mon style reflète enfin ma personnalité. Merci à toute l'équipe !"
              </p>
              <div className="flex text-amber-600 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-4xl font-bold text-white mb-6">
              Prêt à Transformer Votre Style ?
            </h3>
            <p className="text-xl text-amber-100 mb-8">
              Réservez votre consultation gratuite et découvrez votre potentiel mode
            </p>
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-white text-amber-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Consultation Gratuite
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccueilPage;