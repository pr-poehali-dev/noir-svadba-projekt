import { useState, useCallback } from 'react';
import LoadingScreen from '@/components/wedding/LoadingScreen';
import CaseFileCover from '@/components/wedding/CaseFileCover';
import SuspectFiles from '@/components/wedding/SuspectFiles';
import CrimeScene from '@/components/wedding/CrimeScene';
import Timeline from '@/components/wedding/Timeline';
import AdultsOnly from '@/components/wedding/AdultsOnly';
import InterrogationForm from '@/components/wedding/InterrogationForm';
import Footer from '@/components/wedding/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="film-grain">
      <CaseFileCover />
      <hr className="case-divider" />
      <SuspectFiles />
      <hr className="case-divider" />
      <CrimeScene />
      <hr className="case-divider" />
      <Timeline />
      <hr className="case-divider" />
      <AdultsOnly />
      <hr className="case-divider" />
      <InterrogationForm />
      <Footer />
    </div>
  );
};

export default Index;