# Amusement Hub 🎢 - Full Stack Application

A modern full-stack web application for discovering and exploring amusement parks, water parks, and entertainment centers. Built with Next.js frontend and Node.js/Express backend.

## 🏗️ Project Structure

```
amusement-hub/
├── frontend/          # Next.js React Application
├── backend/           # Node.js Express API
├── ERD_Amusement_Hub.md  # Database Schema Documentation
└── package.json       # Root package.json for monorepo
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL (for backend database)
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd amusement-hub
   npm run install:all
   ```

2. **Set up environment variables:**
   ```bash
   # Copy environment files
   cp frontend/.env.example frontend/.env.local
   cp backend/.env.example backend/.env
   ```

3. **Start development servers:**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start individually
   npm run dev:frontend  # Frontend on http://localhost:3000
   npm run dev:backend   # Backend on http://localhost:5000
   ```

## 📁 Frontend (Next.js)

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS
- **Features**: SSR, responsive design, modern UI

### Frontend Commands
```bash
cd frontend
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
```

## 🔧 Backend (Node.js/Express)

- **Framework**: Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT
- **File Upload**: Multer + Cloudinary

### Backend Commands
```bash
cd backend
npm run dev      # Development server with nodemon
npm run start    # Production server
npm test         # Run tests
```

## 🗄️ Database

See `ERD_Amusement_Hub.md` for complete database schema documentation.

## 🛠️ Development

### Monorepo Scripts
- `npm run dev` - Start both frontend and backend
- `npm run build` - Build both applications
- `npm run install:all` - Install dependencies for all workspaces

### Git Workflow
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes in frontend/ or backend/
3. Test your changes
4. Commit: `git commit -m "feat: your feature description"`
5. Push: `git push origin feature/your-feature`
6. Create Pull Request

## 📦 Deployment

### Frontend (Vercel)
- Connected to `frontend/` directory
- Automatic deployments on push to main

### Backend (Railway/Render)
- Connected to `backend/` directory
- Environment variables configured
- Database migrations run automatically

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Add tests if applicable
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgements

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Express.js community for the robust backend framework
