export type Category = 'A' | 'B' | 'C' | 'D' | 'E';

export interface QuizOption {
  category: Category;
  label: string;
}

export interface Quiz {
  id: number;
  question: string;
  text: string;
  options: QuizOption[];
}

export interface QuizProps {
  quiz: Quiz;
}

export interface Result {
  path: string;
  code: string;
  title: string;
  detail: string;
  notes: string[];
}

export interface RecItem {
  brand: string;
  name: string;
  notes: string[];
  description: string;
  image: string;
}

export type Recommend = RecItem[];
