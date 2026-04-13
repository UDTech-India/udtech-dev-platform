# UDTech Dev Platform - Frontend

A modern, responsive web application built with React for the UDTech development community platform.

## 📋 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with responsive menu
│   │   ├── Navbar.css
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── Hero.css
│   │   ├── Tools.jsx           # Tools showcase component
│   │   ├── Tools.css
│   │   ├── Community.jsx       # Community section
│   │   ├── Community.css
│   │   ├── ResourceCard.jsx    # Reusable resource card component
│   │   ├── ResourceCard.css
│   │   ├── ContactForm.jsx     # Contact form with validation
│   │   └── ContactForm.css
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Home.css
│   │   ├── Resources.jsx       # Resources page with filters
│   │   ├── Resources.css
│   │   ├── ToolsPage.jsx       # Tools page
│   │   ├── ToolsPage.css
│   │   ├── CommunityPage.jsx   # Community page
│   │   ├── CommunityPage.css
│   │   ├── Contact.jsx         # Contact page
│   │   └── Contact.css
│   ├── assets/                 # Images and static files
│   ├── App.js                  # Main app component with routing
│   ├── App.css
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── public/
├── package.json
└── README.md
```

## ✨ Features

### 1. **Responsive Navigation Bar**
- Sticky navigation with gradient background
- Responsive hamburger menu for mobile devices
- Active page indicator
- Smooth animations and transitions

### 2. **Hero Section**
- Eye-catching title and description
- Call-to-action button
- Animated background elements
- Fully responsive design

### 3. **Resources Page**
- Grid layout of learning resources
- Category filtering system
- 12+ curated resources
- Resource cards with icons and external links
- Categories: Frontend, Backend, Database, DevOps, Tools, Learning

### 4. **Tools Page**
- Organized by category
- 12+ developer tools
- Tool cards with descriptions
- External links to official websites
- Hover animations and effects

### 5. **Community Page**
- Mission statement section
- 6 feature cards highlighting community benefits
- Developer collaboration section
- Call-to-action section
- Social media links
- Animated background graphics

### 6. **Contact Page**
- Contact information cards
- Embedded Google Map
- Contact form with validation
- Success message on submission
- Responsive layout

### 7. **Contact Form Component**
- Form validation (name, email, message)
- Error messages
- Success notification
- Accessible form fields
- Responsive design

## 🎨 Design Features

- **Modern Color Scheme**: Blue (#3b82f6), Green (#10b981), and Dark Navy (#0f172a)
- **Gradient Backgrounds**: Professional gradient effects throughout
- **Smooth Animations**: Hover effects, transitions, and floating animations
- **Responsive Design**: Mobile-first approach with breakpoints at 768px
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **Shadow Effects**: Consistent shadow system for depth
- **Typography**: Clear hierarchy with varied font sizes and weights

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Pages and Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, tools, and community sections |
| Resources | `/resources` | Curated learning resources with category filters |
| Tools | `/tools` | Developer tools organized by category |
| Community | `/community` | Community information and collaboration details |
| Contact | `/contact` | Contact form and information |

## 🎯 Task Completion Checklist

- ✅ **Task 1**: Project folder structure created
- ✅ **Task 2**: React project initialized and running locally
- ✅ **Task 3**: Responsive navigation bar with all menu items
- ✅ **Task 4**: Hero section with title, description, and CTA button
- ✅ **Task 5**: Reusable ResourceCard component
- ✅ **Task 6**: Resources page with grid layout and category filters
- ✅ **Task 7**: Tools page with card layout
- ✅ **Task 8**: Community page with mission and collaboration info
- ✅ **Task 9**: Contact form with name, email, and message fields

## 🎨 Color Palette

```
Primary Blue:     #3b82f6
Secondary Green:  #10b981
Dark Navy:        #0f172a
Light Gray:       #f8fafc
Text Dark:        #1e293b
Text Light:       #64748b
```

## 📦 Dependencies

- **react**: ^19.2.4 - UI library
- **react-dom**: ^19.2.4 - React DOM rendering
- **react-icons**: ^5.6.0 - Icon library
- **react-scripts**: 5.0.1 - Build scripts

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## 📝 Component Documentation

### Navbar Component
- Props: `currentPage`, `setCurrentPage`
- Features: Sticky positioning, mobile menu, active state indicator

### ResourceCard Component
- Props: `title`, `description`, `category`, `link`, `icon`
- Features: Category badges, icon display, external links

### ContactForm Component
- Features: Form validation, error messages, success notification
- Fields: Name, Email, Message

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the UDTech internship program.

## 👥 Contributing

This is an internship project. For contributions or questions, please contact the UDTech team.

## 📞 Contact

- Email: hello@udtech.com
- Website: www.udtech.com

---

**Built with ❤️ for the UDTech Community**
