import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
      <Button
        variant={selectedCategory === null ? 'gradient' : 'glass'}
        size="sm"
        onClick={() => onSelectCategory(null)}
        className="transition-all duration-300"
      >
        Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'gradient' : 'glass'}
          size="sm"
          onClick={() => onSelectCategory(category)}
          className="transition-all duration-300"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
