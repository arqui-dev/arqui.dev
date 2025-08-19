import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
export const LanguageToggle = () => {
  const {
    language,
    setLanguage
  } = useLanguage();
  return <Button variant="outline" size="sm" onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} className="border-accent-foreground text-black bg-[#fff066]">
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>;
};