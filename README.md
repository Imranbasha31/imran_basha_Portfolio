# Imran Basha - Portfolio

A modern, responsive portfolio website showcasing Java development and AWS cloud expertise. Built with React, TypeScript, and Tailwind CSS, featuring a sleek UI powered by shadcn/ui components.

## 🚀 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations** - Elegant transitions and scroll effects
- **Dark Mode Ready** - Theme support with next-themes
- **Performance Optimized** - Fast loading with Vite and React 18
- **Type Safe** - Full TypeScript implementation
- **Docker Ready** - Multi-stage Dockerfile for production deployment

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching

### UI Components
- Lucide React - Beautiful icons
- Recharts - Data visualization
- React Hook Form - Form management with Zod validation
- Sonner - Toast notifications
- Embla Carousel - Touch-friendly carousels

### Backend Integration
- **Supabase** - Backend as a Service (configured)
- **React Query** - Server state management

### Development Tools
- ESLint - Code linting
- PostCSS - CSS processing
- Autoprefixer - CSS vendor prefixing
- SWC - Fast TypeScript/JavaScript compiler

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd vite_react_shadcn_ts
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Create a `.env` file (if using Supabase):
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## 🏗️ Build

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🐳 Docker Deployment

### Installing Docker on EC2

#### Amazon Linux 2023

```bash
# Update system packages
sudo yum update -y

# Install Docker
sudo yum install docker -y

# Start Docker service
sudo systemctl start docker

# Enable Docker to start on boot
sudo systemctl enable docker

# Add ec2-user to docker group (to run docker without sudo)
sudo usermod -a -G docker ec2-user

# Log out and log back in for group changes to take effect
# Or run: newgrp docker

# Verify Docker installation
docker --version
```

#### Ubuntu

```bash
# Update system packages
sudo apt update

# Install prerequisites
sudo apt install -y ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up the repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Start Docker service
sudo systemctl start docker

# Enable Docker to start on boot
sudo systemctl enable docker

# Add ubuntu user to docker group (to run docker without sudo)
sudo usermod -aG docker ubuntu

# Log out and log back in for group changes to take effect
# Or run: newgrp docker

# Verify Docker installation
docker --version
```

### Build and Run with Docker

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 80:80 portfolio
```

The multi-stage Dockerfile:
- Uses Node 18 Alpine for building
- Compiles the app with Vite
- Serves with Nginx Alpine for minimal image size
- Includes health checks for production monitoring

## 📁 Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Hero.tsx    # Landing section
│   │   ├── About.tsx   # About section
│   │   ├── Skills.tsx  # Technical skills
│   │   ├── Projects.tsx # Project showcase
│   │   ├── Education.tsx # Education details
│   │   └── Contact.tsx  # Contact form
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # Third-party integrations
│   │   └── supabase/   # Supabase client
│   ├── lib/            # Utility functions
│   ├── pages/          # Route pages
│   │   ├── Index.tsx   # Home page
│   │   └── NotFound.tsx # 404 page
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── Dockerfile          # Docker configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Adding New Components
```bash
npx shadcn@latest add <component-name>
```

### Modifying Theme
Edit `src/index.css` to customize CSS variables for colors, spacing, and more.

### Path Aliases
The project uses `@/` as an alias for the `src/` directory:
```typescript
import { Button } from "@/components/ui/button";
```

## 🧪 Linting

```bash
npm run lint
```

## 🧹 Cleanup

Remove node_modules and build artifacts:

```bash
# Remove dependencies
rm -rf node_modules

# Remove build output
rm -rf dist

# Remove lock files (optional)
rm -f package-lock.json
rm -f bun.lockb

# Reinstall fresh dependencies
npm install
```

Or use a single command to clean and reinstall:
```bash
rm -rf node_modules dist && npm install
```

### Docker Cleanup

Remove Docker containers and images:

```bash
# Stop and remove all containers for this project
docker ps -a | grep portfolio | awk '{print $1}' | xargs docker stop
docker ps -a | grep portfolio | awk '{print $1}' | xargs docker rm

# Remove the portfolio image
docker rmi portfolio

# Or remove all stopped containers and unused images
docker container prune -f
docker image prune -a -f

# Complete Docker cleanup (removes all unused data)
docker system prune -a --volumes -f
```

Quick cleanup for this project:
```bash
# Stop container, remove container and image
docker stop $(docker ps -q --filter ancestor=portfolio) && \
docker rm $(docker ps -aq --filter ancestor=portfolio) && \
docker rmi portfolio
```

## 📝 Portfolio Sections

- **Hero** - Introduction with social links (GitHub, LinkedIn, Email)
- **About** - Professional background and career goals
- **Skills** - Technical skills organized by category:
  - Programming Languages (Java, Python, JavaScript, SQL)
  - Frameworks (Spring Boot, Hibernate, Maven)
  - AWS Services (EC2, S3, Lambda, RDS, CloudWatch, IAM, VPC, ECS)
  - Databases (MySQL, MongoDB, Redis)
  - Tools (Git, Docker, Jenkins, REST APIs, Microservices)
- **Projects** - Showcase of development work
- **Education** - Academic background
- **Contact** - Get in touch form

## 🔗 Links

- **GitHub**: [Imranbasha31](https://github.com/Imranbasha31/)
- **LinkedIn**: [imranbasha021](https://www.linkedin.com/in/imranbasha021/)
- **Email**: bashaimran021@gmail.com

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ by Imran Basha
