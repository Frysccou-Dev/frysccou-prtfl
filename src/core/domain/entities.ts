export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  coverImage?: string;
  category: string;
  chapters: BlogChapter[];
}

export interface BlogChapter {
  id: string;
  slug: string;
  title: string;
  order: number;
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
}
