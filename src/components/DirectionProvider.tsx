"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DirectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();

  useEffect(() => {
    // Устанавливаем направление текста для всего документа
    // Принудительно используем LTR для предотвращения зеркального отображения
    document.documentElement.dir = "ltr";
    document.documentElement.lang = language === "ar" ? "ar" : "en";
  }, [language]);

  return <>{children}</>;
}
