import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContentRow from '@/components/ContentRow';
import { contentData, genres } from '@/lib/data';

export default function BrowsePage() {
  const heroContent = contentData.find(c => c.id === '1');

  if (!heroContent) {
    return null; // or a loading/error state
  }

  const getContentForGenre = (genre: string) => {
    if (genre === 'Trending Now') {
      return contentData.filter(c => ['1', '2', '9'].includes(c.id));
    }
    return contentData.filter(c => c.genre === genre && !['1', '2', '9'].includes(c.id));
  };

  return (
    <div className="bg-background">
      <Header />
      <main className="pt-16 md:pt-0">
        <Hero content={heroContent} />
        <div className="relative z-10 -mt-16 md:-mt-24 lg:-mt-32">
          <div className="container mx-auto px-4">
            {genres.map((genre) => (
              <ContentRow
                key={genre}
                title={genre}
                content={getContentForGenre(genre)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
