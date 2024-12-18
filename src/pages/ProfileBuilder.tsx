import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ScrollProgressBar } from '../components/profile/ScrollProgressBar';
import { ProfileSection } from '../components/profile/ProfileSection';
import { BasicDetails } from '../components/profile/BasicDetails';
import { SpendingHabits } from '../components/profile/SpendingHabits';
import { Goals } from '../components/profile/Goals';
import { useProfileStore } from '../store/useProfileStore';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sections = [
  { id: 'basic', title: 'Basic Details', Component: BasicDetails },
  { id: 'spending', title: 'Spending Habits', Component: SpendingHabits },
  { id: 'goals', title: 'Financial Goals', Component: Goals }
];

export function ProfileBuilder() {
  const navigate = useNavigate();
  const { basicDetails, spendingHabits, goals } = useProfileStore();
  const activeSection = useScrollSpy(sections.map(s => s.id));

  const isSectionComplete = (section: string) => {
    switch (section) {
      case 'basic':
        return !!basicDetails;
      case 'spending':
        return !!spendingHabits;
      case 'goals':
        return goals.length > 0;
      default:
        return false;
    }
  };

  const handleSectionComplete = (section: string) => {
    const nextSection = sections[sections.findIndex(s => s.id === section) + 1];
    if (nextSection) {
      document.getElementById(nextSection.id)?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center' // Center align the scroll
      });
    } else {
      navigate('/summary');
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <ScrollProgressBar />
      
      <div className="max-w-2xl mx-auto px-4 py-6"> {/* Reduced from py-8 */}
        <ProfileHeader />

        <div className="space-y-1"> {/* Reduced from space-y-2 */}
          {sections.map(({ id, title, Component }) => (
            <ProfileSection
              key={id}
              id={id}
              title={title}
              isActive={activeSection === id || isSectionComplete(id)}
            >
              <Component onNext={() => handleSectionComplete(id)} />
            </ProfileSection>
          ))}
        </div>
      </div>
    </div>
  );
}