import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AccueilPage from './pages/AccueilPage';
import AProposPage from './pages/AProposPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('accueil');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const Header = () => (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/logoprojet.png"
              alt="Atelier du Look" 
              className="h-12 w-12 rounded-full object-cover shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Atelier du Look</h1>
              <p className="text-sm text-amber-700">Style & Élégance</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['accueil', 'apropos', 'services', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => navigateTo(page)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  currentPage === page
                    ? 'bg-amber-800 text-white shadow-lg'
                    : 'text-amber-900 hover:bg-amber-700 hover:text-white'
                }`}
              >
                {page === 'accueil' ? 'Accueil' : 
                 page === 'apropos' ? 'À propos' : 
                 page === 'services' ? 'Services' : 'Contact'}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {['accueil', 'apropos', 'services', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigateTo(page)}
                  className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-amber-800 text-white'
                      : 'text-amber-900 hover:bg-amber-700 hover:text-white'
                  }`}
                >
                  {page === 'accueil' ? 'Accueil' : 
                   page === 'apropos' ? 'À propos' : 
                   page === 'services' ? 'Services' : 'Contact'}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  const Footer = () => (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-amber-800/30 p-6 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logofooter.png"
                alt="Atelier du Look" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-bold">Atelier du Look</h3>
            </div>
            <p className="text-amber-100 leading-relaxed">
              Votre partenaire de confiance pour révéler votre style authentique 
              et sublimer votre image depuis 2014.
            </p>
          </div>
          
          <div className="bg-amber-800/30 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('accueil')} className="text-amber-100 hover:text-amber-300 transition-colors">Accueil</button></li>
              <li><button onClick={() => navigateTo('apropos')} className="text-amber-100 hover:text-amber-300 transition-colors">À propos</button></li>
              <li><button onClick={() => navigateTo('services')} className="text-amber-100 hover:text-amber-300 transition-colors">Services</button></li>
              <li><button onClick={() => navigateTo('contact')} className="text-amber-100 hover:text-amber-300 transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div className="bg-amber-800/30 p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-amber-100">
              <p>+33 1 23 45 67 89</p>
              <p>contact@atelierdulook.fr</p>
              <p>123 Rue de la Mode<br />75001 Paris, France</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-100">
          <p>&copy; 2024 Atelier du Look. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <AccueilPage navigateTo={navigateTo} />;
      case 'apropos':
        return <AProposPage />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AccueilPage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default App;