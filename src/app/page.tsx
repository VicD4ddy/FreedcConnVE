'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { OfficialBannersSlider } from '@/components/OfficialBannersSlider';
import { CorporateIntro } from '@/components/CorporateIntro';
import { ReferenceProductShowcase } from '@/components/ReferenceProductShowcase';
import { CommitmentsSection } from '@/components/CommitmentsSection';
import { WholesaleSection } from '@/components/WholesaleSection';
import { DistributorsSection } from '@/components/DistributorsSection';
import { ProductCatalog } from '@/components/ProductCatalog';
import { QuizRecommender } from '@/components/QuizRecommender';
import { ComparisonTable } from '@/components/ComparisonTable';
import { SupportSection } from '@/components/SupportSection';
import { CartDrawer } from '@/components/CartDrawer';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { Toast } from '@/components/Toast';
import { Product, CartItem } from '@/types';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showFullCatalog, setShowFullCatalog] = useState<boolean>(false);

  // Cart total items count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Add to cart handler
  const handleAddToCart = (
    product: Product,
    micType?: 'Varilla (Abatible/Jet)' | 'Cable/Velcro (Integral)'
  ) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedMicType === micType
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prevItems,
          {
            product,
            quantity: 1,
            selectedMicType: micType || 'Varilla (Abatible/Jet)',
          },
        ];
      }
    });

    showToast(`¡${product.name} agregado al pedido!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToQuiz = () => {
    const quizElem = document.getElementById('quiz');
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCatalog = () => {
    setShowFullCatalog(true);
    setTimeout(() => {
      const catalogElem = document.getElementById('catalogo');
      if (catalogElem) {
        catalogElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div id="inicio" className="min-h-screen bg-white text-zinc-900 flex flex-col relative pb-24 lg:pb-0 overflow-x-hidden">
      {/* Toast Notification */}
      <Toast message={toastMessage} onOpenCart={() => setIsCartOpen(true)} />

      {/* 1. Header Sticky & Topbar matching Reference (.top) */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={handleScrollToQuiz}
      />

      {/* Main Content Sections: Exact Sequential Order of Reference Website */}
      <main className="flex-1">
        {/* 2. Banner Hero Slider matching Reference (.banner) */}
        <OfficialBannersSlider onOpenQuiz={handleScrollToQuiz} />

        {/* 3. Corporate Intro matching Reference (.content) */}
        <CorporateIntro />

        {/* 4. Product Showcase matching Reference (.block_1: 6 Models on bg-block1.png) */}
        <ReferenceProductShowcase
          onAddToCart={handleAddToCart}
          onViewAll={handleScrollToCatalog}
        />

        {/* 5. Nuestros Compromisos matching Reference (.block_4: .fc-tech-wrapper 01-05 cards) */}
        <CommitmentsSection />

        {/* 6. & 7. Quiero ser Distribuidor (.block_2) & Formulario Asesor (.block_3) */}
        <WholesaleSection />

        {/* 8. Distribuidores autorizados en: (.block_5: Store Locator & Map) */}
        <DistributorsSection />

        {/* 10. Catálogo Completo de Intercomunicadores & Repuestos Oficiales */}
        <ProductCatalog onAddToCart={handleAddToCart} />

        {/* 11. Quiz Recomendador Interactivo (3 Pasos) */}
        <QuizRecommender onAddToCart={handleAddToCart} />

        {/* 12. Tabla Comparativa Técnica */}
        <ComparisonTable onAddToCart={handleAddToCart} />

        {/* 13. Centro de Soporte, Garantía Oficial & FAQ */}
        <SupportSection />
      </main>

      {/* 14. Reference Footer (.bottom + .copyright) */}
      <Footer />

      {/* Floating JoinChat WhatsApp Button for Desktop (on mobile, MobileBottomNav has dedicated WhatsApp tab) */}
      <a
        href="https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Tengo%20una%20consulta%20sobre%20los%20intercomunicadores%20para%20moto."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all group items-center gap-2"
        title="Contacto de WhatsApp"
        aria-label="Contacto de WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
        <span className="text-xs font-black tracking-wide pr-1 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Contacto WhatsApp
        </span>
      </a>

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={handleScrollToQuiz}
      />

      {/* Slide-over Cart Drawer with WhatsApp Order Link Generator */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
