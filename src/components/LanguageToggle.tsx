import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
      className="text-accent-foreground border-accent-foreground hover:bg-accent hover:text-accent-foreground"
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </Button>
  );
};