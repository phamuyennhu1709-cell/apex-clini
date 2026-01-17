import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/Layout';
import { Document, Page, pdfjs } from 'react-pdf';
import Seo from '../components/Seo';


import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl as unknown as string;

// Desktop readable PDF width (DO NOT use container width directly)
const PDF_MAX_WIDTH = 820;

const Pricing: React.FC = () => {
  const [showPDF, setShowPDF] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [showAllPages, setShowAllPages] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPdfError(null);
  }

  // Recalculate width ONLY when modal is open
  useEffect(() => {
    if (!showPDF) return;

    setContainerWidth(0); // reset stale width

    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      setContainerWidth(el.clientWidth);
    };

    updateWidth();

    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);

    return () => {
      ro.disconnect();
    };
  }, [showPDF]);

  // Prefetch PDF to warm the browser cache for faster first paint
  useEffect(() => {
    if (!showPDF) return;
    let cancelled = false;
    // quick, fire-and-forget fetch to warm browser cache
    fetch('/images/pricelist.pdf', { method: 'GET', mode: 'cors' }).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [showPDF]);

  const pdfWidth =
    containerWidth > 0
      ? Math.min(containerWidth, PDF_MAX_WIDTH)
      : undefined;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scriptStyle = "text-[#D9A13B] leading-none";
  const mainTitleClass = "text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-8";
  const bodyTextClass = "text-stone-600 font-light text-lg leading-relaxed mb-8";

  return (
    <div className="pt-32 md:pt-48 pb-20 bg-white min-h-screen">
      <Seo
        title="Apex Clinic Pricing | Treatment Price List"
        description="Transparent pricing for dermal fillers, anti-wrinkle, skincare, fat dissolving, and training at Apex Clinic in Retford."
        path="/pricing"
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8">
              Pricing
            </h1>

            <p className="text-stone-600 font-light text-lg leading-relaxed mb-8">
              Our pricing is reflective of skill, knowledge, experience and high quality products.
              Apex Clinic is an experience and client care is at the heart of what we do.
              Welcoming new clients and cherishing our loyal ones.
            </p>

            <span className="font-script text-4xl md:text-5xl text-[#D9A13B] block mb-12">
              Your Nurse Injector, Liv x
            </span>

            <Button
              variant="primary"
              className="px-16 shadow-sm"
              onClick={() => setShowPDF(true)}
            >
              View pricing
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-[10px] overflow-hidden shadow-2xl">
              <img
                src="/pricing/Pricing.webp"
                alt="Clinic Pricing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* PDF MODAL */}
      {showPDF && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowPDF(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-[5px] overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <div ref={containerRef} className="w-full">

              <Document
                key="pdf-open" // FORCE REMOUNT (CRITICAL)
                file="/images/pricelist.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(e) => setPdfError((e && (e as any).message) || String(e))}
                loading={<div className="p-8 text-center">Loading Pricing…</div>}
                error={<div className="p-8 text-red-600">Error loading pricing: {pdfError}</div>}
              >
                {numPages && pdfWidth && (
                  <>
                    {/* Render first page immediately for a fast first paint */}
                    <div className="w-full flex justify-center py-6" style={{ touchAction: 'pan-y' }}>
                      <Page
                        pageNumber={1}
                        width={pdfWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        onRenderSuccess={() => {
                          // after first page finishes rendering, reveal the rest
                          // small delay helps avoid layout jank
                          setTimeout(() => setShowAllPages(true), 120);
                        }}
                      />
                    </div>

                    {/* Render remaining pages only after first page has painted */}
                    {showAllPages && numPages > 1 && (
                      Array.from({ length: numPages - 1 }, (_, idx) => (
                        <div key={idx + 1} className="w-full flex justify-center py-6" style={{ touchAction: 'pan-y' }}>
                          <Page
                            pageNumber={idx + 2}
                            width={pdfWidth}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                          />
                        </div>
                      ))
                    )}
                  </>
                )}
              </Document>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
