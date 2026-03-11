export interface SlideData {
  id: number;
  title: string;
  section: 'intro' | 'erp' | 'ai';
  accentColor: 'warm' | 'cool' | 'violet';
}

export const slides: SlideData[] = [
  // ERP část
  { id: 1, title: 'Hook', section: 'erp', accentColor: 'warm' },
  { id: 2, title: 'Účetní pohádka', section: 'erp', accentColor: 'warm' },
  { id: 3, title: 'Hodiny majitel vs zaměstnanec', section: 'erp', accentColor: 'warm' },
  { id: 4, title: 'Excel selhává', section: 'erp', accentColor: 'warm' },
  { id: 5, title: 'Cesta vývoje', section: 'erp', accentColor: 'warm' },
  { id: 6, title: 'Excel šablona', section: 'erp', accentColor: 'warm' },
  { id: 7, title: 'WhatsApp příběh', section: 'erp', accentColor: 'warm' },
  { id: 8, title: 'Kdy Excel nestačí', section: 'erp', accentColor: 'warm' },
  { id: 9, title: 'Co Sentria řeší', section: 'erp', accentColor: 'warm' },
  { id: 10, title: 'Účetní střediska', section: 'erp', accentColor: 'warm' },
  { id: 11, title: 'Přechod na AI', section: 'erp', accentColor: 'violet' },
  // AI část
  { id: 12, title: 'One More Thing', section: 'ai', accentColor: 'cool' },
  { id: 13, title: 'Ideální zaměstnanec', section: 'ai', accentColor: 'cool' },
  { id: 14, title: 'LACO a FERO', section: 'ai', accentColor: 'cool' },
  { id: 15, title: 'Jak LACO myslí', section: 'ai', accentColor: 'cool' },
  { id: 16, title: 'GPT vs LACO', section: 'ai', accentColor: 'cool' },
  { id: 17, title: 'Everyday uses', section: 'ai', accentColor: 'cool' },
  { id: 18, title: 'CTA', section: 'ai', accentColor: 'violet' },
];

export const TOTAL_SLIDES = slides.length;
