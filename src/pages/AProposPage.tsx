import React from 'react';
import { Star, Users, Palette } from 'lucide-react';

const AProposPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-amber-200">
          <h2 className="text-5xl font-bold text-amber-900 mb-6">À Propos d'Atelier du Look</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour révéler votre style authentique et sublimer votre image
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl shadow-xl border-2 border-amber-200">
            <h3 className="text-3xl font-bold text-amber-900 mb-6">Notre Histoire</h3>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Fondé en 2014, Atelier du Look est né de la passion de créer des expériences de style uniques.
              Notre équipe de stylistes experts combine créativité, expertise technique et approche personnalisée
              pour révéler le meilleur de chaque personnalité.
            </p>
            <p className="text-amber-700 mb-6 leading-relaxed">
              Nous croyons que le style n'est pas une question de tendances, mais d'authenticité.
              Chaque client est unique, et notre mission est de créer un look qui reflète parfaitement
              sa personnalité et son mode de vie.
            </p>
            <div className="flex items-center space-x-4 bg-amber-100 p-4 rounded-xl">
              <div className="bg-amber-800 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <Star size={24} />
              </div>
              <div>
                <p className="font-semibold text-amber-900">Plus de 1000 clients satisfaits</p>
                <p className="text-amber-700">depuis notre création</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-white p-8 rounded-2xl shadow-xl border-2 border-amber-200">
            <img
              src="/logoprojet.png"
              alt="Atelier du Look"
              className="w-32 h-32 mx-auto mb-6 object-contain rounded-full shadow-lg"
            />
            <div className="text-center">
              <h4 className="text-2xl font-bold text-amber-900 mb-4">Notre Vision</h4>
              <p className="text-amber-700 leading-relaxed">
                Démocratiser l'accès au conseil en image et permettre à chacun de révéler
                sa beauté naturelle à travers un style qui lui ressemble.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-xl border-2 border-amber-200">
            <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-2">Équipe Experte</h4>
            <p className="text-amber-700">Stylistes certifiés avec plus de 10 ans d'expérience</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-xl border-2 border-amber-200">
            <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette size={32} />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-2">Approche Personnalisée</h4>
            <p className="text-amber-700">Chaque conseil adapté à votre morphologie et style de vie</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-xl border-2 border-amber-200">
            <div className="bg-amber-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={32} />
            </div>
            <h4 className="text-xl font-bold text-amber-900 mb-2">Excellence</h4>
            <p className="text-amber-700">Engagement qualité avec 98% de satisfaction client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AProposPage;
