import { Hero } from "@/components/Hero";
import { AboutEducation } from "@/components/AboutEducation";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BackToTop } from "@/components/BackToTop";
import { ContactSection } from "@/components/ContactSection";
import {
  profileData,
  personalInfo,
  education,
  skills,
  workExperiences,
  projects,
} from "@/data/profileData";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen name={profileData.name} title={profileData.title} />
      <Navbar firstName={profileData.firstName} title={profileData.title} />
      <main className="flex-1">
        <Hero
          name={profileData.name}
          title={profileData.title}
          description={profileData.description}
          avatarUrl={profileData.avatarUrl}
          location={profileData.location}
          email={profileData.email}
          github={profileData.github}
          linkedin={profileData.linkedin}
        />
        
        <AboutEducation
          personalInfo={personalInfo}
        />

        <WorkExperience experiences={workExperiences} />
        
        <Projects projects={projects} />
        
        <Skills skills={skills} />
        
        <Education education={education} />

        <ContactSection
          email={personalInfo.email}
          phone={personalInfo.phone}
          location={personalInfo.location}
          github={profileData.github}
          linkedin={profileData.linkedin}
        />
      </main>
      
      <Footer
        name={profileData.name}
        email={profileData.email}
        github={profileData.github}
        linkedin={profileData.linkedin}
      />
      <BackToTop />
    </div>
  );
}
