# Portfolio - Next.js

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase development projects and skills.

![Portfolio Screenshot](https://github.com/user-attachments/assets/c099d880-b931-4404-94fd-0b23587d5c7b)

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal background and statistics
- **Projects**: Showcase of development projects with technology tags
- **Skills**: Visual representation of technical skills and expertise
- **Contact**: Contact form and social media links
- **Footer**: Additional navigation and information

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://reactjs.org/) - UI library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dumanbruh/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization

To customize the portfolio for your own use:

1. **Personal Information**: Update the content in the component files:
   - `src/components/Hero.tsx` - Update name and description
   - `src/components/About.tsx` - Update about section and statistics
   - `src/components/Contact.tsx` - Update contact information

2. **Projects**: Modify the projects array in `src/components/Projects.tsx`

3. **Skills**: Update the skills data in `src/components/Skills.tsx`

4. **Styling**: Customize colors and styling in `src/app/globals.css` and Tailwind classes

5. **Metadata**: Update SEO information in `src/app/layout.tsx`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).
