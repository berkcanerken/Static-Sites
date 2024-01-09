import { AccordionItemType } from "@/components/Accordion/Accordion";

const panelAccordionContent = [
    {
        question: `Jak mogę dodać nowego zawodnika do systemu?`,
        answear: `Aby dodać nowego zawodnika, zaloguj się do panelu administracyjnego, przejdź do sekcji "Zawodnicy" i wybierz opcję "Dodaj nowego zawodnika". Wypełnij wszystkie wymagane informacje dotyczące danych osobowych oraz informacji dotyczących uczestnictwa w konkurencjach. Po zapisaniu zmian, nowy zawodnik zostanie dodany do systemu.`,
    },
    
    {
        question: `Jak mogę zarejestrować swoją drużynę na nadchodzący turniej?`,
        answear: `Aby zarejestrować drużynę na turniej, przejdź do sekcji "Eventy" w panelu administracyjnym. Znajdź odpowiednią nazwę turnieju i wybierz opcję "Zarejestruj drużynę". Następnie postępuj zgodnie z instrukcjami, podając wszystkie wymagane informacje dotyczące składu drużyny i innych szczegółów, które są potrzebne do rejestracji na turniej.`,
    },

    {
        question: `Jak mogę zarządzać danymi treningowymi moich zawodników?`,
        answear: `Aby zarządzać danymi treningowymi zawodników, przejdź do sekcji "Trening" w panelu administracyjnym. Tam znajdziesz narzędzia do dodawania, edycji i usuwania planów treningowych. Możesz przypisywać poszczególne plany do konkretnych zawodników, śledzić postępy treningowe i dostosowywać harmonogramy według potrzeb.`,
    },
    
    {
        question: `Jak mogę zaktualizować informacje dotyczące klubu tanecznego?`,
        answear: `Aby zaktualizować informacje dotyczące klubu tanecznego, przejdź do sekcji "Kluby" w panelu administracyjnym. Znajdź nazwę klubu, którego dane chcesz zmodyfikować, a następnie wybierz opcję "Edytuj". Możesz teraz zmieniać dane kontaktowe, opisy klubu, godziny działania i inne istotne informacje. Upewnij się, że po dokonaniu zmian zapiszesz je, aby aktualizacja została zastosowana.`,
    },
] as AccordionItemType[];

export { panelAccordionContent }